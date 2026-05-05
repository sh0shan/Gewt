import type { Bilingual } from "./services";

export type TeamMember = {
  key: string;
  name: Bilingual;
  role: Bilingual;
  bio: Bilingual;
  photo: string;
};

export const team: TeamMember[] = [
  {
    key: "abdulaziz-al-naimi",
    name: {
      en: "Abdulaziz Al-Naimi",
      ar: "عبدالعزيز النعيمي",
    },
    role: {
      en: "Chief Technology Officer",
      ar: "الرئيس التنفيذي للتقنية",
    },
    bio: {
      en: "Leads technical operations and field execution. Decades of experience in NORM measurement, QA, and IAEA-aligned methodology in Qatar.",
      ar: "يقود العمليات التقنية والتنفيذ الميداني. خبرة عقود في قياس المواد المشعّة الطبيعية، وضمان الجودة، والمنهجية المتوافقة مع IAEA في قطر.",
    },
    photo: "/abdulaziz.webp",
  },
  {
    key: "david-bradley",
    name: {
      en: "Dr. David Bradley",
      ar: "د. ديفيد برادلي",
    },
    role: {
      en: "Board · Scientific Advisor",
      ar: "مجلس الإدارة · مستشار علمي",
    },
    bio: {
      en: "Internationally recognised authority in radiation physics. Brings academic rigour to AlphaNorm's protocols and QA framework.",
      ar: "مرجع دولي في فيزياء الإشعاع. يُضفي صرامةً أكاديمية على بروتوكولات ألفانورم وإطار ضمان الجودة لديها.",
    },
    photo: "/david-bradley.webp",
  },
  {
    key: "huda-al-sulaiti",
    name: {
      en: "Dr. Huda Al-Sulaiti",
      ar: "د. هدى السليطي",
    },
    role: {
      en: "Board · Strategic Advisor",
      ar: "مجلس الإدارة · مستشارة استراتيجية",
    },
    bio: {
      en: "Senior researcher in environmental radioactivity. Bridges regional regulatory frameworks with international best practice.",
      ar: "باحثة في النشاط الإشعاعي البيئي. تَجسر بين الأطر التنظيمية الإقليمية وأفضل الممارسات الدولية.",
    },
    photo: "/huda.webp",
  },
];
