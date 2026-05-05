export type Stat = {
  value: string;
  labelKey: "yearsExperience" | "qaDeviation" | "serviceDomains" | "iaeaAligned";
};

export const stats: Stat[] = [
  { value: "30+", labelKey: "yearsExperience" },
  { value: "<10%", labelKey: "qaDeviation" },
  { value: "5", labelKey: "serviceDomains" },
  { value: "IAEA", labelKey: "iaeaAligned" },
];
