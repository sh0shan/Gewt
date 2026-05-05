export type Bilingual = { en: string; ar: string };

export type Service = {
  slug: string;
  title: Bilingual;
  dek: Bilingual;
  body: { en: string[]; ar: string[] };
  activities: { en: string[]; ar: string[] };
  methodology: { en: string[]; ar: string[] };
  photo: string;
  photoPosition?: string;
};

export const services: Service[] = [
  {
    slug: "reverse-osmosis",
    title: {
      en: "Reverse Osmosis & Membrane Treatment",
      ar: "التناضح العكسي ومعالجة الأغشية",
    },
    dek: {
      en: "Seawater and brackish-water RO systems engineered around your salinity, throughput, and recovery targets.",
      ar: "منظومات تناضح عكسي لمياه البحر والمياه قليلة الملوحة، مصمَّمة وفقاً لقيم الملوحة والإنتاجية والاسترداد لديك.",
    },
    body: {
      en: [
        "We design RO systems sized to the source water, the duty cycle, and the downstream specification — not to a generic catalogue. That sizing decision drives membrane choice, pre-treatment depth, and energy recovery design, so it's where most of the project economics are won or lost.",
        "Our locally manufactured membranes give clients a credible second source for replacements alongside the imported alternatives, which materially shortens lead times when a vessel needs swapping out.",
      ],
      ar: [
        "نُصمّم منظومات التناضح العكسي بأحجام تتلاءم مع مياه المصدر ودورة التشغيل ومواصفات الناتج — لا وفق كتالوج عام. ويحكم هذا الاختيارُ نوعَ الأغشية وعمقَ المعالجة الأوّلية وتصميمَ استرداد الطاقة، وفيه تُكسب اقتصاديات المشروع أو تُخسر.",
        "تُتيح أغشيتنا المُصنّعة محلياً للعملاء مصدراً ثانياً موثوقاً للقطع البديلة إلى جانب البدائل المستوردة، ما يُقصّر مدد التوريد عند استبدال الأوعية بشكل ملموس.",
      ],
    },
    activities: {
      en: [
        "Feed-water analysis and salinity profiling",
        "RO system sizing for SWRO and BWRO duties",
        "Locally manufactured RO membranes",
        "Energy recovery and high-pressure pump selection",
        "Pre-treatment integration (UF / cartridge / antiscalant)",
      ],
      ar: [
        "تحليل مياه التغذية وتوصيف الملوحة",
        "تحديد أحجام منظومات التناضح العكسي للمياه البحرية وقليلة الملوحة",
        "أغشية تناضح عكسي مُصنّعة محلياً",
        "اختيار وحدات استرداد الطاقة ومضخّات الضغط العالي",
        "دمج المعالجة الأوّلية (UF / خراطيش / مضادات تكلّس)",
      ],
    },
    methodology: {
      en: [
        "Each design starts from a measured feed-water profile, not assumptions. We model recovery, scaling, and fouling risk before locking specification, so the system runs near its sweet spot rather than at the edge of its envelope.",
      ],
      ar: [
        "يبدأ كلّ تصميم من توصيف مقاس لمياه التغذية، لا من فرضيّات. ننمذج الاسترداد ومخاطر التكلّس والانسداد قبل تثبيت المواصفات، بحيث تعمل المنظومة قرب نقطتها المثلى لا على حافّة نطاقها التشغيلي.",
      ],
    },
    photo: "/images/services/norm-measurement.jpg",
  },
  {
    slug: "filtration",
    title: {
      en: "Filtration, Demineralization & Softening",
      ar: "الترشيح وإزالة الأملاح والتطرية",
    },
    dek: {
      en: "Multimedia, ultrafiltration, ion-exchange, and softening trains for industrial and municipal feed water.",
      ar: "محطّات ترشيح متعدّد الطبقات، وترشيح فائق، وتبادل أيوني، وتطرية لمياه التغذية الصناعية والبلدية.",
    },
    body: {
      en: [
        "Filtration is where many water systems quietly fail — under-specified pre-treatment shortens membrane life and breaks downstream specs. We size each stage to the actual contaminant load and operating pattern.",
        "Outputs include process diagrams, vendor specifications, and clear interface points with downstream units so the whole train behaves as one system rather than a chain of unrelated boxes.",
      ],
      ar: [
        "الترشيح هو المكان الذي تفشل فيه كثير من منظومات المياه بصمت — فالمعالجة الأوّلية غير الكافية تُقصّر عمر الأغشية وتُخلّ بالمواصفات اللاحقة. نُحدّد حجم كلّ مرحلة وفق عبء الملوّثات الفعلي ونمط التشغيل.",
        "تشمل المخرجات مخطّطات العمليات ومواصفات الموردين ونقاط التداخل الواضحة مع الوحدات اللاحقة، بحيث تتصرّف المحطّة بأكملها كمنظومة واحدة لا كسلسلة من الصناديق المنفصلة.",
      ],
    },
    activities: {
      en: [
        "Multimedia and cartridge filtration",
        "Ultrafiltration as RO pre-treatment",
        "Ion-exchange demineralization",
        "Lime / soda softening for hardness control",
        "Activated carbon for chlorine and organics",
      ],
      ar: [
        "ترشيح متعدّد الطبقات وترشيح بالخراطيش",
        "ترشيح فائق كمعالجة أوّلية للتناضح العكسي",
        "إزالة أملاح بالتبادل الأيوني",
        "تطرية بالجير أو الصودا للتحكّم بالعسر",
        "كربون منشّط للكلور والمركّبات العضوية",
      ],
    },
    methodology: {
      en: [
        "We design pre-treatment around the worst-credible feed-water case, not the average, so the downstream RO or polish train doesn't get hit by a transient that an average-case design wouldn't have absorbed.",
      ],
      ar: [
        "نُصمّم المعالجة الأوّلية وفق أسوأ حالة معقولة لمياه التغذية، لا وفق المتوسط، بحيث لا تتعرّض منظومات التناضح العكسي أو التلميع اللاحقة لتذبذبات لم تكن تصاميم الحالة المتوسّطة لتمتصّها.",
      ],
    },
    photo: "/images/services/radiological-assessment.jpg",
  },
  {
    slug: "wastewater",
    title: {
      en: "Wastewater Treatment",
      ar: "معالجة مياه الصرف",
    },
    dek: {
      en: "Municipal and industrial wastewater treatment trains, sized to discharge or reuse specifications.",
      ar: "محطّات معالجة مياه الصرف البلدية والصناعية، مُحدَّدة الأحجام وفق مواصفات التصريف أو إعادة الاستخدام.",
    },
    body: {
      en: [
        "We design wastewater plants for the standard the operator actually has to meet — discharge into the marine environment, sewer surcharge limits, or reuse for irrigation or cooling. The design changes meaningfully at each tier.",
        "Where reuse is the goal, our membrane experience pays off: MBR and post-RO polishing make a credible reclaimed-water product within the salinity and microbial limits non-potable industrial reuse demands.",
      ],
      ar: [
        "نُصمّم محطّات الصرف وفق المعيار الذي يتعيّن على المشغّل الالتزام به فعلاً — التصريف في البيئة البحرية، أو حدود التحميل على الصرف الصحي، أو إعادة الاستخدام للريّ أو التبريد. ويتغيّر التصميم بشكل ملموس عند كلّ مستوى.",
        "حيث تكون إعادة الاستخدام هدفاً، تُؤتي خبرتنا في الأغشية ثمارها: تُنتج محطّات MBR والتلميع بالتناضح العكسي مياهاً مُعاد تدويرها ضمن حدود الملوحة والميكروبات التي يتطلّبها الاستخدام الصناعي غير الصالح للشرب.",
      ],
    },
    activities: {
      en: [
        "Municipal wastewater treatment plants",
        "Industrial effluent treatment",
        "Membrane bioreactor (MBR) systems",
        "Tertiary polish and reuse trains",
        "Sludge handling and dewatering",
      ],
      ar: [
        "محطّات معالجة مياه الصرف البلدية",
        "معالجة المياه العادمة الصناعية",
        "منظومات المفاعل الحيوي الغشائي (MBR)",
        "محطّات التلميع الثلاثية وإعادة الاستخدام",
        "معالجة الحمأة وتجفيفها",
      ],
    },
    methodology: {
      en: [
        "Discharge limits and reuse targets are set first, then the train works backward from there. We don't propose a treatment topology and then ask the regulator to accept it — we work to the spec the regulator already has on file.",
      ],
      ar: [
        "تُحدَّد حدود التصريف وأهداف إعادة الاستخدام أوّلاً، ثم تعمل المحطّة عكسياً انطلاقاً منها. لا نقترح طوبولوجيا معالجة ثم نطلب من الجهة التنظيمية قبولها — بل نعمل وفق المواصفات المسجّلة لديها.",
      ],
    },
    photo: "/images/services/decontamination.jpg",
  },
  {
    slug: "high-purity",
    title: {
      en: "High Purity & Ultra-Pure Water",
      ar: "المياه عالية النقاء وفائقة النقاء",
    },
    dek: {
      en: "Lab, pharmaceutical, and electronics-grade water systems for clients that can't tolerate variability.",
      ar: "منظومات مياه بدرجة المختبرات والصيدلة والإلكترونيات للعملاء الذين لا يتحمّلون التباين.",
    },
    body: {
      en: [
        "High-purity water isn't a single grade — it's a family of standards (Type I–III, USP, EDI-polish, etc.) and each has different cost and reliability implications. Our role is to design to the specific grade the application needs, not over-spec by default.",
        "We build in continuous monitoring and alarming so the operator finds out about a drift before the downstream process does. That's usually the difference between a small consumable swap and a batch loss.",
      ],
      ar: [
        "لا تُمثّل المياه عالية النقاء درجة واحدة، بل عائلةً من المعايير (النوع I-III، USP، تلميع EDI...)، ولكلّ معيار آثار مختلفة على التكلفة والموثوقية. ودورنا أن نُصمّم وفق الدرجة المحدّدة التي يحتاجها التطبيق، لا أن نُبالغ في المواصفات افتراضياً.",
        "نُدمج رصداً وتنبيهاً مستمرّين بحيث يكتشف المشغّل أيّ انحراف قبل أن تكتشفه العملية اللاحقة. وهذا غالباً ما يكون الفارق بين استبدال مستهلَك صغير وفقدان دفعة كاملة.",
      ],
    },
    activities: {
      en: [
        "Lab Type I, II, III water systems",
        "Pharmaceutical USP/EP grade water",
        "EDI polishing and final filtration",
        "Continuous TOC, conductivity, and microbial monitoring",
        "Distribution loop design and sanitization",
      ],
      ar: [
        "منظومات مياه المختبرات النوع I وII وIII",
        "مياه الصيدلة بمعايير USP/EP",
        "تلميع EDI وترشيح نهائي",
        "رصد مستمرّ للكربون العضوي الكلّي والتوصيلية والميكروبات",
        "تصميم حلقات التوزيع والتعقيم",
      ],
    },
    methodology: {
      en: [
        "We pair point-of-use sensors with a calibration discipline that mirrors what regulated industries already require. The data is reviewable, traceable, and auditable — not a screen that only the local technician knows how to read.",
      ],
      ar: [
        "نقرن مستشعرات نقطة الاستخدام بانضباط معايرة يُحاكي ما تشترطه القطاعات المنظَّمة. والبيانات قابلة للمراجعة وللتتبّع وللتدقيق — لا شاشة لا يعرف قراءتها إلّا الفنّي المحلي.",
      ],
    },
    photo: "/images/services/radiation-impact.jpg",
  },
  {
    slug: "operations",
    title: {
      en: "Operations & Maintenance",
      ar: "التشغيل والصيانة",
    },
    dek: {
      en: "Long-term O&M for water plants — chemicals, spares, manpower, and performance reporting under one contract.",
      ar: "تشغيل وصيانة طويلَي الأمد لمحطّات المياه — كيماويات وقطع غيار وقوى عاملة وتقارير أداء ضمن عقد واحد.",
    },
    body: {
      en: [
        "Most water plants don't fail because of design — they fail because consumables, instrumentation, and operator attention drift over years of running. Our O&M contracts wrap chemicals, spare-parts supply, scheduled maintenance, and on-site or remote monitoring into one accountable package.",
        "We report on availability, recovery, and specific energy use monthly, in the same format every month, so the trend is the story rather than a quarterly surprise.",
      ],
      ar: [
        "لا تفشل معظم محطّات المياه بسبب التصميم — بل تفشل لأنّ المستهلَكات والقياسات وانتباه المشغّل تنحرف عبر سنوات التشغيل. تجمع عقود التشغيل والصيانة لدينا الكيماويات وتوريد قطع الغيار والصيانة المجدولة والرصد الموقعي أو عن بُعد في حزمة واحدة مسؤولة.",
        "نُقدّم تقارير شهرية عن التوفّر والاسترداد واستهلاك الطاقة النوعي، بصيغة موحّدة كلّ شهر، حتى يكون الاتّجاه هو الحكاية لا المفاجأة الفصلية.",
      ],
    },
    activities: {
      en: [
        "Scheduled mechanical and instrumentation maintenance",
        "Chemical supply and dosing optimisation",
        "Spare parts inventory and emergency response",
        "Membrane replacement programmes",
        "Monthly performance reporting (availability, recovery, kWh/m³)",
      ],
      ar: [
        "صيانة ميكانيكية وقياسية مجدولة",
        "توريد كيماويات وتحسين الجرعات",
        "مخزون قطع الغيار والاستجابة للطوارئ",
        "برامج استبدال الأغشية",
        "تقارير أداء شهرية (التوفّر، الاسترداد، كيلوواط ساعة/م³)",
      ],
    },
    methodology: {
      en: [
        "We work to a maintenance plan that's measurable on day one and reviewed annually. Drift is detected against a baseline, not against an operator's memory of how the plant ran last year.",
      ],
      ar: [
        "نعمل وفق خطّة صيانة قابلة للقياس من اليوم الأول وتُراجَع سنوياً. ويُكتشف الانحراف مقارنةً بخطّ أساس، لا مقارنةً بذاكرة المشغّل عن كيفية تشغيل المحطّة في العام الماضي.",
      ],
    },
    photo: "/images/services/radiation-safety.jpg",
    photoPosition: "50% 25%",
  },
];
