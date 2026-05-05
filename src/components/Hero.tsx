import Image from "next/image";

type Props = {
  photo: string;
  alt?: string;
  height?: "tall" | "medium" | "short";
  overlay?: "bottom" | "full" | "none";
  children: React.ReactNode;
};

const heightClass = {
  tall: "h-[460px] sm:h-[540px]",
  medium: "h-[340px] sm:h-[400px]",
  short: "h-[220px] sm:h-[260px]",
};

export default function Hero({
  photo,
  alt = "",
  height = "tall",
  overlay = "bottom",
  children,
}: Props) {
  return (
    <section className={`relative isolate overflow-hidden ${heightClass[height]}`}>
      <Image
        src={photo}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover photo-tint"
      />
      {overlay !== "none" && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            overlay === "full"
              ? "bg-gradient-to-b from-ink/40 via-ink/55 to-ink/80"
              : "bg-gradient-to-b from-ink/10 via-ink/30 to-ink/75"
          }`}
        />
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10 sm:pb-14">
        <div className="text-white max-w-3xl">{children}</div>
      </div>
    </section>
  );
}
