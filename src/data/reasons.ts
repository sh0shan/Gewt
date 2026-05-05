import type { Bilingual } from "./services";

export type Reason = {
  title: Bilingual;
  body: Bilingual;
  icon: string;
};

export const reasons: Reason[] = [
  {
    title: { en: "Qatari Engineering Team", ar: "فريق هندسي قطري" },
    body: {
      en: "Process design, fabrication, and operations under one roof — a single accountable partner from feasibility to running plant.",
      ar: "هندسة العمليات والتصنيع والتشغيل تحت سقف واحد — شريك واحد مسؤول من دراسة الجدوى حتى تشغيل المحطّة.",
    },
    icon: "/icon-licensed.png",
  },
  {
    title: { en: "Locally Manufactured Membranes", ar: "أغشية مُصنّعة محلياً" },
    body: {
      en: "Reverse osmosis membranes produced in Qatar, giving clients a credible second supply source alongside the imported alternatives.",
      ar: "أغشية تناضح عكسي مُصنّعة في قطر، تمنح العملاء مصدر إمداد ثانياً موثوقاً إلى جانب البدائل المستوردة.",
    },
    icon: "/icon-experience.png",
  },
  {
    title: { en: "Full-Cycle Capability", ar: "قدرة على الدورة الكاملة" },
    body: {
      en: "Engineering, procurement, construction, supply, and long-term operations — without handing the client off between vendors.",
      ar: "هندسة وتوريد وإنشاء وإمداد وتشغيل طويل الأمد — دون تسليم العميل من مورّد إلى آخر.",
    },
    icon: "/icon-iaea.png",
  },
  {
    title: { en: "Regional Service Footprint", ar: "حضور خدمي إقليمي" },
    body: {
      en: "Service capability extending beyond Qatar so clients with cross-border operations get one consistent standard of work.",
      ar: "قدرة خدمية تمتدّ خارج قطر، بحيث يحصل العملاء العاملون عبر الحدود على معيار عمل واحد متّسق.",
    },
    icon: "/icon-partnerships.png",
  },
  {
    title: { en: "Audit-Ready Reporting", ar: "تقارير جاهزة للتدقيق" },
    body: {
      en: "Monthly performance reports in a fixed format — availability, recovery, specific energy — so trends are visible, not surprises.",
      ar: "تقارير أداء شهرية بصيغة ثابتة — التوفّر والاسترداد والطاقة النوعية — بحيث تكون الاتّجاهات ظاهرة لا مفاجآت.",
    },
    icon: "/icon-accredited.png",
  },
  {
    title: { en: "Designed for the Site", ar: "مصمَّم للموقع" },
    body: {
      en: "Each system sized to actual feed-water profiling and duty cycle — not to a generic catalogue specification.",
      ar: "كلّ منظومة مُحدَّدة الأحجام وفق توصيف فعلي لمياه التغذية ودورة التشغيل — لا وفق مواصفات كتالوج عامّة.",
    },
    icon: "/icon-modeling.png",
  },
];
