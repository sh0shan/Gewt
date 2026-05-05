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
    key: "municipal",
    label: { en: "Municipal Utilities", ar: "المرافق البلدية" },
    photo: "/waste.webp",
  },
  {
    key: "industrial",
    label: { en: "Industrial Process Water", ar: "المياه الصناعية" },
    photo: "/authorities.webp",
  },
  {
    key: "high-purity",
    label: {
      en: "Healthcare & Laboratories",
      ar: "الرعاية الصحية والمختبرات",
    },
    photo: "/regulatory.webp",
  },
];
