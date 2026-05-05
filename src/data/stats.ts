export type Stat = {
  value: string;
  labelKey: "yearsExperience" | "qaDeviation" | "serviceDomains" | "iaeaAligned";
};

export const stats: Stat[] = [
  { value: "15+", labelKey: "yearsExperience" },
  { value: "Local", labelKey: "qaDeviation" },
  { value: "6", labelKey: "serviceDomains" },
  { value: "GCC", labelKey: "iaeaAligned" },
];
