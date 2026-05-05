import { z } from "zod";

export const SUBJECT_KEYS = [
  "general",
  "norm",
  "decontamination",
  "radiation-impact",
  "other",
] as const;

export type SubjectKey = (typeof SUBJECT_KEYS)[number];

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  company: z.string().trim().max(80).optional().or(z.literal("")),
  subject: z.enum(SUBJECT_KEYS),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const SUBJECT_LABELS_EN: Record<SubjectKey, string> = {
  general: "General inquiry",
  norm: "NORM consultancy",
  decontamination: "Decontamination",
  "radiation-impact": "Radiation impact",
  other: "Other",
};
