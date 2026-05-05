import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  title: string;
  dek: string;
  photo: string;
  meta: string;
  layout?: "row" | "stacked";
};

export default function InsightCard({
  href,
  title,
  dek,
  photo,
  meta,
  layout = "row",
}: Props) {
  const isRow = layout === "row";
  return (
    <Link
      href={href}
      className={`group block bg-white/80 backdrop-blur-md border border-mist rounded-2xl overflow-hidden hover:border-cobalt hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 ${
        isRow ? "sm:flex sm:items-stretch" : ""
      }`}
    >
      <div
        className={`relative ${
          isRow ? "h-44 sm:w-56 sm:h-auto sm:flex-shrink-0" : "h-48"
        }`}
      >
        <Image
          src={photo}
          alt=""
          fill
          sizes={isRow ? "(max-width: 640px) 100vw, 224px" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover photo-tint group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-1">
        <p className="text-xs uppercase tracking-[0.2em] text-steel">{meta}</p>
        <h3 className="mt-2 font-display text-xl font-medium text-ink">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-steel">{dek}</p>
      </div>
    </Link>
  );
}
