import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlphaNorm Enviro Solutions — Radiation Expertise Rooted in Experience",
  description:
    "Qatar's licensed NORM consultancy. 30+ years of experience in naturally occurring radioactive material monitoring, assessment, decontamination, and radiation safety planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
