"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact, type ContactState } from "@/app/[locale]/contact/actions";

const initialState: ContactState = { status: "idle" };

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-white/85 backdrop-blur-md border border-mist p-8 text-center"
      >
        <h3 className="font-display text-2xl font-medium text-ink">
          {t("successTitle")}
        </h3>
        <p className="mt-3 text-base text-steel">{t("successBody")}</p>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors || {} : {};

  function FieldError({ name }: { name: string }) {
    const key = fieldErrors[name];
    if (!key) return null;
    return (
      <p className="mt-1 text-xs text-red-600" id={`${name}-error`}>
        {t(key as Parameters<typeof t>[0])}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl bg-white/85 backdrop-blur-md border border-mist p-6 sm:p-8 space-y-4"
      noValidate
    >
      {state.status === "error" && state.errorKey === "errorRateLimit" && (
        <div
          role="alert"
          className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {t("errorRateLimit")}
        </div>
      )}
      {state.status === "error" &&
        state.errorKey === "errorGeneric" &&
        Object.keys(fieldErrors).length === 0 && (
          <div
            role="alert"
            className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {t("errorGeneric")}
          </div>
        )}

      <div>
        <label
          htmlFor="name"
          className="block text-xs uppercase tracking-[0.18em] text-steel mb-1.5"
        >
          {t("labelName")} <span className="text-red-500">{t("required")}</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-invalid={!!fieldErrors.name}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
          placeholder={t("placeholderName")}
          className="w-full rounded-md border border-mist bg-white px-3 py-2 text-sm text-ink placeholder:text-steel/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1"
        />
        <FieldError name="name" />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-[0.18em] text-steel mb-1.5"
        >
          {t("labelEmail")} <span className="text-red-500">{t("required")}</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          placeholder={t("placeholderEmail")}
          className="w-full rounded-md border border-mist bg-white px-3 py-2 text-sm text-ink placeholder:text-steel/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1"
        />
        <FieldError name="email" />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-xs uppercase tracking-[0.18em] text-steel mb-1.5"
        >
          {t("labelCompany")}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          aria-invalid={!!fieldErrors.company}
          aria-describedby={fieldErrors.company ? "company-error" : undefined}
          placeholder={t("placeholderCompany")}
          className="w-full rounded-md border border-mist bg-white px-3 py-2 text-sm text-ink placeholder:text-steel/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1"
        />
        <FieldError name="company" />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs uppercase tracking-[0.18em] text-steel mb-1.5"
        >
          {t("labelSubject")} <span className="text-red-500">{t("required")}</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue="general"
          aria-invalid={!!fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
          className="w-full rounded-md border border-mist bg-white px-3 py-2 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1"
        >
          <option value="general">{t("subjectGeneral")}</option>
          <option value="norm">{t("subjectNorm")}</option>
          <option value="decontamination">{t("subjectDecontamination")}</option>
          <option value="radiation-impact">{t("subjectRadiationImpact")}</option>
          <option value="other">{t("subjectOther")}</option>
        </select>
        <FieldError name="subject" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.18em] text-steel mb-1.5"
        >
          {t("labelMessage")} <span className="text-red-500">{t("required")}</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
          placeholder={t("placeholderMessage")}
          className="w-full rounded-md border border-mist bg-white px-3 py-2 text-sm text-ink placeholder:text-steel/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1 resize-y"
        />
        <FieldError name="message" />
      </div>

      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[10000px]"
      />

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? t("submitting") : t("submit")}
      </button>

      <p className="text-xs leading-5 text-steel">{t("consent")}</p>
    </form>
  );
}
