import type { Bilingual } from "./services";

export type Industry = {
  key: string;
  label: Bilingual;
  photo: string;
};

export const industries: Industry[] = [
  {
    key: "oil-gas",
    label: { en: "Oil & Gas", ar: "النفط والغاز" },
    photo: "/oil-gas.webp",
  },
  {
    key: "industrial-waste",
    label: { en: "Industrial Waste", ar: "النفايات الصناعية" },
    photo: "/waste.webp",
  },
  {
    key: "environmental-authorities",
    label: {
      en: "Environmental Authorities",
      ar: "الجهات البيئية",
    },
    photo: "/authorities.webp",
  },
  {
    key: "regulatory-research",
    label: {
      en: "Regulatory & Research",
      ar: "القطاع التنظيمي والبحثي",
    },
    photo: "/regulatory.webp",
  },
];
