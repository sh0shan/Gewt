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
    slug: "norm-qatar-energy",
    date: "2026-04-18",
    readMinutes: 4,
    title: {
      en: "What NORM means for Qatar's energy sector",
      ar: "ماذا تعني المواد المشعّة الطبيعية لقطاع الطاقة في قطر",
    },
    dek: {
      en: "Why operators are paying closer attention to naturally occurring radioactive material — and what compliance actually requires.",
      ar: "لماذا يولي المشغّلون اهتماماً أكبر للمواد المشعّة الطبيعية — وما الذي يستلزمه الامتثال فعلياً.",
    },
    photo: "/images/services/norm-measurement.jpg",
    sections: [
      {
        paragraphs: {
          en: [
            "Naturally occurring radioactive material — NORM — has always been there. Uranium, thorium, and their decay products are present in the rock formations producing oil and gas across the GCC. What has changed is regulatory expectation: operators are now expected to know where the elevated activity is, document it, and manage exposures to workers and the public.",
            "For Qatar's energy sector, that means baseline characterization, ongoing monitoring, and a defensible programme for occupational dose. None of this is optional anymore — it's the cost of operating in a regulated energy market.",
          ],
          ar: [
            "كانت المواد المشعّة الطبيعية، NORM، موجودةً دائماً. اليورانيوم والثوريوم ومنتجات اضمحلالهما موجودة في التكوينات الصخرية المنتجة للنفط والغاز في دول مجلس التعاون الخليجي. ما تغيّر هو التوقّعات التنظيمية: بات على المشغّلين أن يعرفوا أين يوجد النشاط المرتفع، وأن يُوثّقوه، وأن يُديروا حالات التعرّض للعاملين والعموم.",
            "بالنسبة لقطاع الطاقة في قطر، يعني ذلك توصيف خط الأساس، والرصد المستمرّ، وبرنامجاً قابلاً للدفاع عنه للجرعة المهنية. ولم يعد أيٌّ من ذلك اختيارياً — بل صار جزءاً من تكلفة العمل في سوق طاقة منظَّم.",
          ],
        },
      },
      {
        heading: {
          en: "What's actually required",
          ar: "ما المطلوب فعلياً",
        },
        paragraphs: {
          en: [
            "Three things, in roughly this order: (1) a baseline radiological survey that establishes what's normal for the site; (2) a monitoring programme that tracks change over time and across operational events; (3) a dose programme that manages worker exposures with a clear ALARA posture.",
            "The deliverable that matters most to a regulator is documentation. Not the survey, not the data — the documentation that connects them, with traceability and uncertainty. A well-instrumented site with no QA paper trail is, regulator-side, indistinguishable from a site with no measurements at all.",
          ],
          ar: [
            "ثلاثة أمور، بهذا الترتيب تقريباً: (1) مسح إشعاعي لخط الأساس يُحدّد ما هو طبيعي للموقع؛ (2) برنامج رصد يتتبّع التغيّر عبر الزمن وعبر الأحداث التشغيلية؛ (3) برنامج جرعات يُدير تعرّضات العاملين بموقف واضح لمبدأ ALARA.",
            "المخرَج الأهمّ للجهة التنظيمية هو التوثيق. ليس المسح، وليست البيانات — بل التوثيق الذي يربطهما، مع قابلية التتبّع وتقدير عدم اليقين. الموقع الذي يمتلك أجهزة جيّدة دون سجلّ ضمان جودة هو، من وجهة نظر الجهة التنظيمية، لا يُميَّز عن موقع لا يجري فيه أيّ قياس.",
          ],
        },
      },
      {
        heading: { en: "Where this lands", ar: "خلاصة الأمر" },
        paragraphs: {
          en: [
            "The operators that are ahead of this don't view NORM management as a cost centre. They view it as an operational discipline that reduces variance — fewer surprises in the regulator's office, fewer disputes with insurers, fewer interruptions to production. The companies treating it as paperwork are the ones still surprised by it. The companies treating it as engineering are the ones moving past it.",
          ],
          ar: [
            "لا ينظر المشغّلون المتقدّمون في هذا المجال إلى إدارة NORM بوصفها مركز تكلفة. ينظرون إليها بوصفها انضباطاً تشغيلياً يُقلّل من التباين — مفاجآت أقلّ في مكتب الجهة التنظيمية، ونزاعات أقلّ مع شركات التأمين، وانقطاعات أقلّ في الإنتاج. الشركات التي تتعامل معها كأعمال ورقية هي التي لا تزال تُفاجَأ بها. أمّا الشركات التي تتعامل معها كهندسة فهي التي تتجاوزها.",
          ],
        },
      },
    ],
  },
  {
    slug: "qa-radiation-surveys",
    date: "2026-03-02",
    readMinutes: 5,
    title: {
      en: "QA in radiation surveys: why <10% deviation matters",
      ar: "ضمان الجودة في المسوحات الإشعاعية: لماذا يهمّ انحراف أقلّ من 10٪",
    },
    dek: {
      en: "An inside view of the QA Manual that governs every AlphaNorm survey, from instrument calibration to traceability.",
      ar: "نظرة من الداخل إلى دليل ضمان الجودة الذي يحكم كلّ مسح تُجريه ألفانورم، من معايرة الأجهزة إلى قابلية التتبّع.",
    },
    photo: "/images/home/expertise.jpg",
    sections: [
      {
        paragraphs: {
          en: [
            "When a regulator asks \"is this site safe?\", the only acceptable answer is one backed by traceable data. That's where QA earns its keep. Without it, a number on a report is just an opinion expressed in decimals.",
          ],
          ar: [
            "حين تسأل الجهة التنظيمية: \"هل هذا الموقع آمن؟\"، فالإجابة المقبولة الوحيدة هي تلك المدعومة ببيانات قابلة للتتبّع. هنا يكتسب ضمان الجودة قيمته. بدونه، فإنّ الرقم في التقرير ليس سوى رأي مُعبَّر عنه بأرقام عشرية.",
          ],
        },
      },
      {
        heading: {
          en: "Calibration first, measurements second",
          ar: "المعايرة أولاً، ثمّ القياسات",
        },
        paragraphs: {
          en: [
            "Every gamma spectrometer in our fleet is calibrated against IAEA-traceable reference sources before it leaves the prep room. We track each instrument's calibration history and retire devices when their drift exceeds the budget — a discipline most operators don't see, and that quietly distinguishes a defensible report from an indefensible one.",
          ],
          ar: [
            "يُعايَر كلّ جهاز قياس طيف غاما في أسطولنا مقابل مصادر مرجعية قابلة للتتبّع إلى IAEA قبل أن يغادر غرفة التحضير. نتتبّع تاريخ معايرة كلّ جهاز، ونسحب الأجهزة من الخدمة حين يتجاوز انحرافها الميزانيةَ — وهي ممارسة لا يراها معظم المشغّلين، لكنّها تُميّز بهدوء التقرير القابل للدفاع عنه من غير القابل لذلك.",
          ],
        },
      },
      {
        heading: { en: "The 10% rule", ar: "قاعدة الـ10٪" },
        paragraphs: {
          en: [
            "Our QA Manual mandates a deviation budget of less than 10% across calibrated devices. That number isn't arbitrary — it sits below the dose-rate variability we'd accept as 'real change' between two surveys, so any signal we see in the data is a real signal, not an artifact of instrument drift.",
          ],
          ar: [
            "يُلزم دليل ضمان الجودة لدينا بميزانية انحراف تقلّ عن 10٪ على الأجهزة المعايَرة. هذا الرقم ليس اعتباطياً — إذ يقع تحت التباين في معدّل الجرعة الذي نقبله بوصفه \"تغيُّراً حقيقياً\" بين مسحَين، بحيث يكون أيُّ مؤشّر نراه في البيانات مؤشّراً حقيقياً لا أثراً لانحراف الأجهزة.",
          ],
        },
        blockquote: {
          en: "You can't remediate what you can't measure precisely.",
          ar: "لا يمكنك معالجة ما لا تستطيع قياسه بدقّة.",
        },
      },
      {
        heading: {
          en: "What this means for clients",
          ar: "ماذا يعني ذلك للعملاء",
        },
        paragraphs: {
          en: [
            "For an operator, this discipline shows up as fewer surprises in the regulator's office, faster sign-off after remediation, and a smaller envelope of doubt around every reported number. It's invisible until something goes wrong — at which point it's the only thing that matters.",
          ],
          ar: [
            "بالنسبة للمشغّل، يظهر هذا الانضباط في صورة مفاجآت أقلّ في مكتب الجهة التنظيمية، واعتماد أسرع بعد المعالجة، وغلاف شكّ أصغر حول كلّ رقم مُبلَّغ عنه. وهو غير مرئيّ إلى أن يحدث خطأ ما — حينها يصبح الأمر الوحيد الذي يهمّ.",
          ],
        },
      },
    ],
  },
  {
    slug: "iaea-to-field-protocol",
    date: "2026-01-21",
    readMinutes: 6,
    title: {
      en: "From IAEA standard to field protocol",
      ar: "من معيار IAEA إلى البروتوكول الميداني",
    },
    dek: {
      en: "How we translate IAEA Safety Standards into practical, repeatable field procedures for our team.",
      ar: "كيف نُترجم معايير سلامة IAEA إلى إجراءات ميدانية عملية وقابلة للتكرار لدى فريقنا.",
    },
    photo: "/images/home/why.jpg",
    sections: [
      {
        paragraphs: {
          en: [
            "An IAEA Safety Standard is a hundred-page document that tells you what \"good\" looks like in principle. A field protocol is a four-page document that tells a surveyor exactly what to do at 6:00 AM on a windy site with a calibrated spectrometer in their hand. The translation between them is where most consultancies lose the thread.",
          ],
          ar: [
            "معيار السلامة الصادر عن IAEA وثيقة من مئة صفحة تُخبرك كيف يبدو \"الجيّد\" نظرياً. أمّا البروتوكول الميداني فهو وثيقة من أربع صفحات تُخبر القائم بالمسح بما يتعيّن عليه فعله بالضبط في السادسة صباحاً، في موقع ريحه شديدة، وفي يده جهاز قياس طيف معايَر. والترجمة بين الاثنين هي المكان الذي تضيع فيه معظم الجهات الاستشارية.",
          ],
        },
      },
      {
        heading: {
          en: "Three things we do differently",
          ar: "ثلاثة أمور نفعلها بطريقة مختلفة",
        },
        paragraphs: {
          en: [
            "First, every protocol is written by the person who'll execute it, then reviewed by a senior surveyor — not the other way around. The person who has to use the document at 6:00 AM is the person best placed to spot the gaps.",
            "Second, we keep protocols short. If a procedure is more than four pages, the field team won't read it. So we move detail into appendices and version those separately, leaving the protocol itself decisive and brief.",
            "Third, we audit our own protocols at a fixed cadence. Procedures drift; the world doesn't stop changing the moment we write a document. Re-baselining is a discipline, not a courtesy.",
          ],
          ar: [
            "أولاً، يكتب كلّ بروتوكول الشخصُ الذي سيُنفّذه، ثم يُراجعه قائم مسح متمرّس — لا العكس. فالشخص الذي يضطرّ لاستخدام الوثيقة في السادسة صباحاً هو الأقدر على رصد الثغرات.",
            "ثانياً، نحرص على إيجاز البروتوكولات. إذا تجاوز الإجراء أربع صفحات، فلن يقرأه الفريق الميداني. لذا ننقل التفاصيل إلى ملاحق ونُصدر إصداراتها بشكل منفصل، تاركين البروتوكول نفسه حاسماً وموجزاً.",
            "ثالثاً، نُدقّق بروتوكولاتنا بتواتر ثابت. فالإجراءات تنحرف، والعالم لا يتوقّف عن التغيّر بمجرد أن نكتب وثيقة. وإعادة ضبط خط الأساس انضباط لا مجاملة.",
          ],
        },
      },
      {
        heading: {
          en: "Why this is worth the effort",
          ar: "لماذا يستحقّ ذلك الجهد",
        },
        paragraphs: {
          en: [
            "Because the alternative is a binder full of unread procedures and a field team relying on memory. We've audited those programmes, and they don't survive contact with a serious regulator. Translation isn't optional — it's the work.",
          ],
          ar: [
            "لأنّ البديل هو ملفّ ضخم من الإجراءات غير المقروءة وفريق ميداني يعتمد على الذاكرة. لقد دقّقنا في برامج كهذه، وهي لا تصمد أمام التماسّ مع جهة تنظيمية جدّية. الترجمة ليست خياراً — إنّها صلب العمل.",
          ],
        },
      },
    ],
  },
];
