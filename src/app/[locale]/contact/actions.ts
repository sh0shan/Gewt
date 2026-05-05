"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import {
  contactSchema,
  SUBJECT_LABELS_EN,
  type SubjectKey,
} from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; errorKey: string; fieldErrors?: Record<string, string> };

function buildHtml(input: {
  name: string;
  email: string;
  company?: string;
  subject: SubjectKey;
  message: string;
}): string {
  const subjectLabel = SUBJECT_LABELS_EN[input.subject];
  const escape = (v: string) =>
    v
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  return `
    <table style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; line-height: 1.6; color: #1c2330; max-width: 600px;">
      <tr><td style="padding: 6px 0; color: #5b6573; width: 110px;">Name</td><td style="padding: 6px 0;"><strong>${escape(input.name)}</strong></td></tr>
      <tr><td style="padding: 6px 0; color: #5b6573;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escape(input.email)}" style="color: #3a4a63;">${escape(input.email)}</a></td></tr>
      ${input.company ? `<tr><td style="padding: 6px 0; color: #5b6573;">Company</td><td style="padding: 6px 0;">${escape(input.company)}</td></tr>` : ""}
      <tr><td style="padding: 6px 0; color: #5b6573;">Subject</td><td style="padding: 6px 0;">${escape(subjectLabel)}</td></tr>
      <tr><td colspan="2" style="padding: 12px 0 6px; color: #5b6573;">Message</td></tr>
      <tr><td colspan="2" style="padding: 6px 0; white-space: pre-wrap;">${escape(input.message)}</td></tr>
    </table>
  `.trim();
}

function buildText(input: {
  name: string;
  email: string;
  company?: string;
  subject: SubjectKey;
  message: string;
}): string {
  const lines = [
    `Name:    ${input.name}`,
    `Email:   ${input.email}`,
    input.company ? `Company: ${input.company}` : "",
    `Subject: ${SUBJECT_LABELS_EN[input.subject]}`,
    "",
    "Message:",
    input.message,
  ].filter(Boolean);
  return lines.join("\n");
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  if (raw.website) {
    return { status: "success" };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0]);
      const map: Record<string, string> = {
        name: "errorInvalidName",
        email: "errorInvalidEmail",
        company: "errorInvalidCompany",
        subject: "errorInvalidSubject",
        message: "errorInvalidMessage",
      };
      if (field in map && !fieldErrors[field]) {
        fieldErrors[field] = map[field];
      }
    }
    return {
      status: "error",
      errorKey: "errorGeneric",
      fieldErrors,
    };
  }

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.ok) {
    return { status: "error", errorKey: "errorRateLimit" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "contact@alphanorm.qa";
  const from = process.env.CONTACT_FROM_EMAIL || "noreply@alphanorm.qa";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY not set");
    return { status: "error", errorKey: "errorGeneric" };
  }

  try {
    const resend = new Resend(apiKey);
    const subjectLabel = SUBJECT_LABELS_EN[parsed.data.subject];
    const result = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `New inquiry from ${parsed.data.name} — ${subjectLabel}`,
      html: buildHtml({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company || undefined,
        subject: parsed.data.subject,
        message: parsed.data.message,
      }),
      text: buildText({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company || undefined,
        subject: parsed.data.subject,
        message: parsed.data.message,
      }),
    });
    if ("error" in result && result.error) {
      console.error("[contact] resend error", result.error);
      return { status: "error", errorKey: "errorGeneric" };
    }
    return { status: "success" };
  } catch (err) {
    console.error("[contact] send threw", err);
    return { status: "error", errorKey: "errorGeneric" };
  }
}
