import type { Bilingual } from "./services";

export type TeamMember = {
  key: string;
  name: Bilingual;
  role: Bilingual;
  bio: Bilingual;
  photo: string;
};

// Placeholder roster — replace names, roles, bios, and photos before launch.
export const team: TeamMember[] = [
  {
    key: "chair",
    name: { en: "Board Chair", ar: "رئيس مجلس الإدارة" },
    role: { en: "Board · Chair", ar: "مجلس الإدارة · الرئيس" },
    bio: {
      en: "Strategic leadership for GEWT's water engineering and manufacturing programmes.",
      ar: "قيادة استراتيجية لبرامج هندسة المياه والتصنيع في غرين إنرجي.",
    },
    photo: "/abdulaziz.webp",
  },
  {
    key: "ceo",
    name: { en: "Chief Executive", ar: "الرئيس التنفيذي" },
    role: { en: "Executive · CEO", ar: "تنفيذي · الرئيس التنفيذي" },
    bio: {
      en: "Operational lead across project delivery, supply, and long-term plant operations.",
      ar: "قيادة تشغيلية تشمل تسليم المشاريع والتوريد وتشغيل المحطّات طويل الأمد.",
    },
    photo: "/david-bradley.webp",
  },
  {
    key: "cto",
    name: { en: "Chief Technology Officer", ar: "الرئيس التنفيذي للتقنية" },
    role: { en: "Executive · CTO", ar: "تنفيذي · الرئيس التنفيذي للتقنية" },
    bio: {
      en: "Technical lead for membrane manufacturing, process design, and the QA framework.",
      ar: "قيادة تقنية لتصنيع الأغشية وتصميم العمليات وإطار ضمان الجودة.",
    },
    photo: "/huda.webp",
  },
];
