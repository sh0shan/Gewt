import type { Bilingual } from "./services";

export type Reason = {
  title: Bilingual;
  body: Bilingual;
  icon: string;
};

export const reasons: Reason[] = [
  {
    title: { en: "Licensed in Qatar", ar: "مرخّصون في قطر" },
    body: {
      en: "Authorized by MECC and the Ministry of Commerce to deliver NORM consultancy services.",
      ar: "مُفوَّضون من قِبَل MECC ووزارة التجارة لتقديم خدمات استشارات NORM.",
    },
    icon: "/icon-licensed.png",
  },
  {
    title: { en: "30+ Years of Experience", ar: "أكثر من 30 عاماً من الخبرة" },
    body: {
      en: "Led by an IAEA-trained senior consultant with decades of regional and international practice.",
      ar: "بقيادة مستشار رئيسي مدرَّب لدى IAEA يمتلك عقوداً من الممارسة الإقليمية والدولية.",
    },
    icon: "/icon-experience.png",
  },
  {
    title: { en: "Aligned with IAEA Standards", ar: "متوافقون مع معايير IAEA" },
    body: {
      en: "Methodologies, reporting, and protective measures benchmarked against IAEA safety standards.",
      ar: "منهجيات وتقارير وتدابير حماية مُقاسة وفق معايير سلامة IAEA.",
    },
    icon: "/icon-iaea.png",
  },
  {
    title: { en: "Global TSA Partnerships", ar: "شراكات دعم فني دولية" },
    body: {
      en: "Technical Support Agreements with leading international NORM firms extend our capability and reach.",
      ar: "اتفاقيات دعم فني مع شركات NORM الدولية الرائدة تُوسّع قدراتنا ونطاقنا.",
    },
    icon: "/icon-partnerships.png",
  },
  {
    title: { en: "Accredited Advisory", ar: "خدمات استشارية معتمدة" },
    body: {
      en: "Accredited radiation protection advisory services for industrial, governmental, and research clients.",
      ar: "خدمات استشارية معتمدة في الحماية الإشعاعية للعملاء الصناعيين والحكوميين والبحثيين.",
    },
    icon: "/icon-accredited.png",
  },
  {
    title: { en: "Custom Modeling", ar: "نمذجة مُخصَّصة" },
    body: {
      en: "Bespoke consultancy and radiological modeling to address site-specific exposure and risk scenarios.",
      ar: "استشارات ونمذجة إشعاعية مُخصَّصة لمعالجة سيناريوهات التعرّض والمخاطر الخاصة بكلّ موقع.",
    },
    icon: "/icon-modeling.png",
  },
];
