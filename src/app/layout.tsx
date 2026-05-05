import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Energy Water Treatment — Engineering water for a greener Qatar",
  description:
    "Qatar-based water treatment EPC. Reverse osmosis, filtration, wastewater, and operations — designed locally and built to run.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
