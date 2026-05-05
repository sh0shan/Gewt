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
    slug: "norm-measurement",
    title: {
      en: "NORM Measurement & Evaluation",
      ar: "قياس وتقييم المواد المشعّة الطبيعية",
    },
    dek: {
      en: "High-resolution gamma spectrometry, field surveys, contamination mapping, and source identification.",
      ar: "قياس طيف غاما عالي الدقّة، مسوحات ميدانية، رسم خرائط التلوّث، وتحديد المصادر.",
    },
    body: {
      en: [
        "We measure naturally occurring radioactive material across operational sites with calibrated gamma spectrometers and dose-rate instruments. Each survey is designed around the operator's exposure profile so the data we capture answers the questions that actually drive decisions.",
        "Outputs include source identification, isotope-specific concentrations, dose-rate maps, and clear written reports suited for both regulators and operations leadership.",
      ],
      ar: [
        "نقيس المواد المشعّة الطبيعية في المواقع التشغيلية باستخدام أجهزة قياس طيف غاما المعايَرة وأجهزة معدّل الجرعة. تُصمَّم كلّ عملية مسح وفقاً لملف التعرّض الإشعاعي للمشغّل، بحيث تُجيب البيانات الملتقطة عن الأسئلة التي تتّخذ بناءً عليها القرارات.",
        "تشمل المخرجات تحديد المصادر، وتراكيز النظائر المحددة، وخرائط معدّل الجرعة، وتقارير مكتوبة واضحة تناسب الجهات التنظيمية والقيادة التشغيلية على حدّ سواء.",
      ],
    },
    activities: {
      en: [
        "Calibrated gamma spectrometry surveys (HPGe and NaI)",
        "Surface contamination mapping (alpha/beta)",
        "Dose-rate measurement across exposure pathways",
        "Source identification and isotope-specific reporting",
        "Survey design tailored to site exposure profile",
        "Data deliverables suited for regulator and operations review",
      ],
      ar: [
        "مسوحات قياس طيف غاما المعايَرة (HPGe وNaI)",
        "رسم خرائط التلوّث السطحي (ألفا/بيتا)",
        "قياس معدّل الجرعة عبر مسارات التعرّض",
        "تحديد المصادر والتقارير الخاصة بكلّ نظير",
        "تصميم المسح وفق ملف التعرّض الإشعاعي للموقع",
        "مخرجات بيانات تناسب مراجعة الجهة التنظيمية والعمليات",
      ],
    },
    methodology: {
      en: [
        "All measurement work follows IAEA Safety Standards Series guidance with instruments traceable to national metrology bodies. Our QA Manual mandates a deviation budget of less than 10% across calibrated devices, audited internally before every project.",
        "Each survey ships with traceability records, calibration certificates, and uncertainty budgets so the data can be defended to any reviewer.",
      ],
      ar: [
        "تتّبع جميع أعمال القياس إرشادات سلسلة معايير السلامة الصادرة عن IAEA، بأجهزة قابلة للتتبّع إلى الهيئات الوطنية للقياس. يُلزم دليل ضمان الجودة لدينا بميزانية انحراف تقلّ عن 10٪ على الأجهزة المعايَرة، تخضع لمراجعة داخلية قبل كلّ مشروع.",
        "تُسلَّم كلّ عملية مسح مع سجلات التتبّع، وشهادات المعايرة، وميزانيات عدم اليقين بما يجعل البيانات قابلةً للدفاع عنها أمام أيّ مراجع.",
      ],
    },
    photo: "/images/services/norm-measurement.jpg",
  },
  {
    slug: "radiological-assessment",
    title: {
      en: "Radiological & Environmental Assessment",
      ar: "التقييم الإشعاعي والبيئي",
    },
    dek: {
      en: "Soil, water, and air sampling and analysis with risk characterization and stakeholder reporting.",
      ar: "أخذ عيّنات وتحليل التربة والماء والهواء مع توصيف المخاطر وإعداد التقارير لأصحاب المصلحة.",
    },
    body: {
      en: [
        "We characterize radiological risk in the wider environment around an operation: soil cores, surface and ground water, ambient air, and biota where appropriate. Sampling design is statistical, not anecdotal, so the resulting picture stands up to peer review.",
        "Findings are translated into stakeholder-grade reports for regulators, operators, and surrounding communities — making complex radiological data accessible to non-specialists without losing technical rigor.",
      ],
      ar: [
        "نوصّف المخاطر الإشعاعية في البيئة المحيطة بأيّ عملية: عيّنات التربة، والمياه السطحية والجوفية، والهواء المحيط، والكائنات الحية عند الاقتضاء. يُصمَّم أخذ العيّنات إحصائياً، لا بشكل ظنّي، بحيث تصمد الصورة الناتجة أمام مراجعة الأقران.",
        "تُترجَم النتائج إلى تقارير ذات جودة عالية لأصحاب المصلحة، تشمل الجهات التنظيمية والمشغّلين والمجتمعات المحيطة، بما يجعل البيانات الإشعاعية المعقّدة في متناول غير المتخصّصين دون التضحية بالدقّة التقنية.",
      ],
    },
    activities: {
      en: [
        "Statistically designed sampling (soil, water, air, biota)",
        "Lab analysis with traceable instrumentation",
        "Risk characterization and dose-pathway analysis",
        "Baseline studies and post-event environmental assessment",
        "Stakeholder-grade reporting for regulators and communities",
      ],
      ar: [
        "أخذ عيّنات مصمَّم إحصائياً (تربة، ماء، هواء، كائنات حية)",
        "تحليل مخبري بأجهزة قابلة للتتبّع",
        "توصيف المخاطر وتحليل مسارات الجرعة",
        "دراسات خط الأساس والتقييم البيئي بعد الأحداث",
        "تقارير بجودة عالية للجهات التنظيمية والمجتمعات",
      ],
    },
    methodology: {
      en: [
        "Sampling protocols follow IAEA guidance and ISO standards for environmental radioactivity. All laboratory work is supported by chain-of-custody documentation and matrix-matched calibration.",
        "We report results with full uncertainty budgets and contextual interpretation — never bare numbers. The aim is to inform decisions, not to produce data dumps.",
      ],
      ar: [
        "تتّبع بروتوكولات أخذ العيّنات إرشادات IAEA ومعايير ISO الخاصة بالنشاط الإشعاعي البيئي. تُدعَم جميع الأعمال المخبرية بتوثيق سلسلة الحيازة والمعايرة المتطابقة مع المصفوفات.",
        "نُقدّم النتائج مع ميزانيات عدم يقين كاملة وتفسير سياقي — لا أرقاماً مجرّدة. الهدف هو إثراء عملية اتّخاذ القرار، لا إغراق المراجع بالبيانات.",
      ],
    },
    photo: "/image4.jpg",
  },
  {
    slug: "decontamination",
    title: {
      en: "Decontamination Consulting",
      ar: "استشارات إزالة التلوّث",
    },
    dek: {
      en: "Site characterization, remediation planning, and post-remediation verification audits.",
      ar: "توصيف الموقع، وتخطيط المعالجة، وعمليات تدقيق التحقّق بعد المعالجة.",
    },
    body: {
      en: [
        "When a site shows elevated NORM levels, our consulting walks the operator from initial scoping through remediation design and final verification. We don't execute the cleanup — we design it, supervise it, and validate it.",
        "After remediation, we provide independent post-remediation audits that confirm exposures are within accepted limits, giving the operator and regulator the documented basis to close the file.",
      ],
      ar: [
        "حين تُظهر المنشأة مستويات مرتفعة من المواد المشعّة الطبيعية، تُرافق استشاراتنا المشغّلَ من تحديد النطاق الأوّلي حتى تصميم المعالجة والتحقّق النهائي. لا نُنفّذ أعمال التطهير، بل نُصمّمها ونُشرف عليها ونُصادق عليها.",
        "بعد المعالجة، نُجري عمليات تدقيق مستقلّة تُؤكّد أنّ مستويات التعرّض ضمن الحدود المقبولة، بما يمنح المشغّل والجهة التنظيمية الأساس الموثَّق لإغلاق الملف.",
      ],
    },
    activities: {
      en: [
        "Site characterization and baseline radiological surveys",
        "Contamination zoning and exclusion-area mapping",
        "Remediation method selection (mechanical, chemical, encapsulation)",
        "Waste characterization and disposal-route advisory",
        "Post-remediation verification audits",
        "Stakeholder reporting (operator, regulator, insurer)",
      ],
      ar: [
        "توصيف الموقع ومسوحات إشعاعية لخط الأساس",
        "تقسيم مناطق التلوّث ورسم خرائط مناطق الاستبعاد",
        "اختيار أسلوب المعالجة (ميكانيكية، كيميائية، تغليف)",
        "توصيف النفايات والاستشارة في مسارات التخلّص",
        "تدقيقات التحقّق بعد المعالجة",
        "تقارير لأصحاب المصلحة (المشغّل، الجهة التنظيمية، شركة التأمين)",
      ],
    },
    methodology: {
      en: [
        "All decontamination consulting follows IAEA Safety Standards guidance. Calibrated instruments are used end-to-end, and the QA Manual ensures consistency between baseline, in-progress, and verification surveys so changes are real, not artifacts.",
        "The auditing posture is independent — we will sign off only when the data supports it, regardless of project pressure.",
      ],
      ar: [
        "تتّبع جميع استشارات إزالة التلوّث إرشادات سلسلة معايير السلامة الصادرة عن IAEA. تُستخدم الأجهزة المعايَرة من البداية إلى النهاية، ويضمن دليل ضمان الجودة الاتّساقَ بين مسوحات خط الأساس والمسوحات أثناء العمل ومسوحات التحقّق، بحيث تكون التغيّرات حقيقيّة لا نتاج تباين أدوات.",
        "نتبنّى موقف تدقيق مستقلّ — لا نُصادق إلّا حين تدعم البيانات ذلك، بصرف النظر عن ضغوط المشروع.",
      ],
    },
    photo: "/image2.jpg",
  },
  {
    slug: "radiation-impact",
    title: {
      en: "Radiation Impact Analysis",
      ar: "تحليل الأثر الإشعاعي",
    },
    dek: {
      en: "Dose assessment, pathway modeling, and GIS-supported visualization for occupational and public exposure.",
      ar: "تقييم الجرعات، ونمذجة مسارات التعرّض، والتصوير الجغرافي للتعرّض المهني والعامّ.",
    },
    body: {
      en: [
        "Impact analysis turns measurements into outcomes. We model occupational and public exposure pathways, calculate effective and committed doses, and present the result as decision-grade information — not data engineers can't use.",
        "GIS-supported visualization means stakeholders see where the risk is, not just what it is. That's often the difference between a report that gets filed and a report that gets acted on.",
      ],
      ar: [
        "يُحوّل تحليل الأثر القياساتِ إلى نتائج. ننمذج مسارات التعرّض المهنية والعامّة، ونحسب الجرعات الفعّالة والملتزمة، ونُقدّم النتيجة بصيغة قابلة لاتّخاذ القرار — لا في صيغة لا يستطيع المهندسون استخدامها.",
        "يُتيح التصوير الجغرافي لأصحاب المصلحة رؤية أين تكمن المخاطر، لا ما هي فحسب. وكثيراً ما يكون هذا هو الفارق بين تقرير يُحفَظ وتقرير يُتَّخَذ بناءً عليه.",
      ],
    },
    activities: {
      en: [
        "Occupational and public dose assessment",
        "Internal and external pathway modeling",
        "Committed effective dose calculation per IAEA methodology",
        "GIS-supported risk visualization",
        "Scenario modeling for design and emergency response planning",
        "Reporting tailored to operations, EHS, and regulatory audiences",
      ],
      ar: [
        "تقييم الجرعات المهنية والعامّة",
        "نمذجة مسارات التعرّض الداخلية والخارجية",
        "احتساب الجرعة الفعّالة الملتزمة وفقاً لمنهجية IAEA",
        "تصوير المخاطر بدعم نظم المعلومات الجغرافية",
        "نمذجة السيناريوهات لأغراض التصميم وتخطيط الاستجابة للطوارئ",
        "تقارير مصمَّمة للعمليات والصحّة والسلامة والبيئة والجهات التنظيمية",
      ],
    },
    methodology: {
      en: [
        "Pathway modeling uses IAEA-accepted methodologies and parameter values. Where site-specific values matter (occupancy factors, ingestion patterns, ventilation rates) we measure them rather than guess.",
        "Every model run is documented with its inputs, assumptions, and uncertainty so the result is reproducible and reviewable.",
      ],
      ar: [
        "تستخدم نمذجة المسارات منهجيات وقيم معاملات معتمدة من IAEA. وحين تكون القيم الخاصة بالموقع مهمّة (عوامل الإشغال، أنماط الابتلاع، معدّلات التهوية)، فإنّنا نقيسها بدلاً من تخمينها.",
        "تُوثَّق كلّ عملية نمذجة بمدخلاتها وافتراضاتها وعدم اليقين فيها، بحيث تكون النتيجة قابلةً للتكرار والمراجعة.",
      ],
    },
    photo: "/images/services/radiation-impact.jpg",
  },
  {
    slug: "radiation-safety",
    title: {
      en: "Radiation Safety Planning",
      ar: "تخطيط الأمان الإشعاعي",
    },
    dek: {
      en: "Protective measures, training, and occupational dose programs aligned with IAEA standards.",
      ar: "تدابير الحماية، والتدريب، وبرامج الجرعة المهنية بما يتوافق مع معايير IAEA.",
    },
    body: {
      en: [
        "Beyond measurement, operators need a programme: who is exposed, how often, to what, and what happens when exposures change. We build radiation safety programmes that are practical at the site level and credible to the regulator.",
        "Training is a core deliverable — workers and supervisors who understand their dose budget make safer, faster operational decisions than those who don't.",
      ],
      ar: [
        "لا يكتفي المشغّلون بالقياس — فهم بحاجة إلى برنامج يُحدِّد من يتعرّض، وبأيّ تواتر، ولأيّ أمر، وماذا يحدث حين تتغيّر مستويات التعرّض. نضع برامج أمان إشعاعي تكون عملية على مستوى الموقع وموثوقة أمام الجهة التنظيمية.",
        "يُعدّ التدريب من أهمّ المخرجات — فالعاملون والمشرفون الذين يفهمون ميزانية جرعاتهم يتّخذون قرارات تشغيلية أكثر أماناً وأسرع من غيرهم.",
      ],
    },
    activities: {
      en: [
        "Radiation safety programme design and documentation",
        "Occupational dose budgets and ALARA implementation",
        "Worker classification and personal monitoring programmes",
        "Operator and supervisor training (theory and field)",
        "Emergency preparedness and response procedures",
        "Independent programme audits",
      ],
      ar: [
        "تصميم وتوثيق برامج الأمان الإشعاعي",
        "ميزانيات الجرعات المهنية وتطبيق مبدأ ALARA",
        "تصنيف العاملين وبرامج الرصد الشخصي",
        "تدريب المشغّلين والمشرفين (نظري وميداني)",
        "إجراءات التأهّب والاستجابة للطوارئ",
        "تدقيقات مستقلّة للبرامج",
      ],
    },
    methodology: {
      en: [
        "All programmes are written against IAEA Basic Safety Standards and tailored to local regulator requirements (MECC). Documentation is structured for audit-readiness from day one.",
        "We re-baseline programmes annually so they stay tied to actual operations rather than drifting into paperwork that no one reads.",
      ],
      ar: [
        "تُصاغ جميع البرامج وفقاً لمعايير الأمان الأساسية الصادرة عن IAEA، وتُكيَّف مع متطلّبات الجهة التنظيمية المحلية (MECC). تُهيكَل الوثائق لتكون جاهزةً للتدقيق منذ اليوم الأول.",
        "نُعيد ضبط البرامج سنوياً لتظلّ مرتبطةً بالعمليات الفعلية، وألّا تتحوّل إلى أوراق لا يقرأها أحد.",
      ],
    },
    photo: "/images/services/radiation-safety.jpg",
    photoPosition: "50% 25%",
  },
];
