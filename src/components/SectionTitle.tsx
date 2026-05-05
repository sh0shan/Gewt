import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className="mt-4 text-lg leading-7 text-steel">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
