import type { Bilingual } from "./services";

export type InsightSection = {
  heading?: Bilingual;
  paragraphs: { en: string[]; ar: string[] };
  blockquote?: Bilingual;
};

export type Insight = {
  slug: string;
  date: string;
  readMinutes: number;
  title: Bilingual;
  dek: Bilingual;
  photo: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "local-membranes",
    date: "2026-04-22",
    readMinutes: 4,
    title: {
      en: "Why local RO membrane manufacturing matters",
      ar: "لماذا يهمّ تصنيع أغشية التناضح العكسي محلياً",
    },
    dek: {
      en: "Lead time, not list price, is what bites operators when a vessel fails. Local supply changes that calculation.",
      ar: "ما يُؤذي المشغّل عند فشل الأوعية هو زمن التوريد لا سعر القائمة. والإمداد المحلي يُغيّر هذه المعادلة.",
    },
    photo: "/images/services/norm-measurement.jpg",
    sections: [
      {
        paragraphs: {
          en: [
            "Reverse osmosis membranes are usually thought of as a commodity line item: vessels go in, vessels come out, every two to seven years. The accounting story is simple. The operational story isn't.",
            "When a vessel fails outside its scheduled window — fouling event, mechanical damage, a salinity transient that pushed the membrane past its envelope — what matters is how fast a replacement is on site. With imports alone, that's typically four to twelve weeks depending on the route. With a local manufacturing source as a second supplier, it's days.",
          ],
          ar: [
            "تُعدّ أغشية التناضح العكسي عادةً بنداً سلعياً: تدخل الأوعية وتخرج كلّ عامَين إلى سبعة أعوام. والحكاية المحاسبية بسيطة. أمّا الحكاية التشغيلية فليست كذلك.",
            "حين يفشل الوعاء خارج نافذته المجدولة — حدث انسداد، تلف ميكانيكي، تذبذب ملوحة دفع الغشاء خارج نطاقه — يكون المهمّ هو سرعة وصول البديل إلى الموقع. وبالاستيراد وحده، يكون ذلك عادةً من أربعة إلى اثني عشر أسبوعاً وفق المسار. ومع مصدر تصنيع محلي مورّداً ثانياً، يصبح أيّاماً.",
          ],
        },
      },
    ],
  },
  {
    slug: "feed-water-profiling",
    date: "2026-03-08",
    readMinutes: 5,
    title: {
      en: "Why feed-water profiling beats catalogue sizing",
      ar: "لماذا يتفوّق توصيف مياه التغذية على التحديد الكتالوجي",
    },
    dek: {
      en: "An RO sized to a published seawater profile rather than the actual source water is a system that runs near its limits.",
      ar: "منظومة تناضح عكسي مُحدَّدة وفق ملف منشور لمياه البحر بدلاً من مياه المصدر الفعلية هي منظومة تعمل قرب حدودها.",
    },
    photo: "/images/home/expertise.jpg",
    sections: [
      {
        paragraphs: {
          en: [
            "Two coastlines a few kilometres apart can produce noticeably different feed water — different salinity, different boron, different organic load, different microbial story. Designing to a textbook seawater profile is convenient, and it's also a recipe for either over-spending on margin or running closer to the failure envelope than anyone wants.",
            "Profiling means measuring, not assuming: a sampling campaign across the operating year, modelled against the duty cycle the plant will actually run. The output is a system that lives in its sweet spot rather than at the edge.",
          ],
          ar: [
            "قد ينتج ساحلان لا يبعد أحدهما عن الآخر سوى كيلومترات قليلة مياهَ تغذية مختلفة بشكل ملحوظ — ملوحة مختلفة، بورون مختلف، عبء عضوي مختلف، قصّة ميكروبية مختلفة. والتصميم وفق ملف نموذجي لمياه البحر سهل، لكنّه وصفة إمّا للإسراف في هامش الأمان أو للعمل قرب حدّ الفشل أكثر ممّا يرغب أحد.",
            "التوصيف يعني القياس لا الافتراض: حملة أخذ عيّنات عبر السنة التشغيلية، تُنمذَج مقابل دورة التشغيل التي ستعمل فيها المحطّة فعلاً. والمُخرَج منظومةٌ تعيش في نقطتها المثلى لا على الحافّة.",
          ],
        },
      },
    ],
  },
  {
    slug: "operations-discipline",
    date: "2026-01-15",
    readMinutes: 6,
    title: {
      en: "Operations discipline: where water plants quietly fail",
      ar: "انضباط التشغيل: حيث تفشل محطّات المياه بصمت",
    },
    dek: {
      en: "Most underperformance traces to drift in chemicals, calibration, and reporting — not to design.",
      ar: "يعود معظم تراجع الأداء إلى انحراف في الكيماويات والمعايرة والتقارير — لا إلى التصميم.",
    },
    photo: "/images/home/why.jpg",
    sections: [
      {
        paragraphs: {
          en: [
            "Audit a water plant that's underperforming and the cause is rarely the original design. It's drift: dose ratios that crept off-spec, instruments that haven't been calibrated against a standard in a year, a maintenance plan that exists in a binder that nobody reads.",
            "The fix is unglamorous and durable: a written maintenance plan tied to a measurable baseline, monthly performance reporting in the same format every month, and a calibration discipline that doesn't depend on operator memory. None of it shows up in a brochure. All of it shows up in the recovery curve.",
          ],
          ar: [
            "إن دقّقتَ في محطّة مياه ذات أداء متراجع، نادراً ما يكون السبب التصميمَ الأصلي. السبب هو الانحراف: نسب جرعات انجرفت عن المواصفات، وأجهزة لم تُعايَر مقابل معيار منذ عام، وخطّة صيانة موجودة في ملفّ لا يقرؤه أحد.",
            "العلاج غير برّاق لكنّه مستدام: خطّة صيانة مكتوبة مرتبطة بخطّ أساس قابل للقياس، وتقارير أداء شهرية بصيغة موحّدة كلّ شهر، وانضباط معايرة لا يعتمد على ذاكرة المشغّل. لا شيء من ذلك يظهر في كتيّب تعريفي. وكلّه يظهر في منحنى الاسترداد.",
          ],
        },
      },
    ],
  },
];
