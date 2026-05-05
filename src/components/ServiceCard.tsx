import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  title: string;
  dek: string;
  photo: string;
  photoPosition?: string;
  readMoreLabel: string;
  fullWidth?: boolean;
};

export default function ServiceCard({
  href,
  title,
  dek,
  photo,
  photoPosition,
  readMoreLabel,
  fullWidth = false,
}: Props) {
  return (
    <Link
      href={href}
      className={`group block bg-white/80 backdrop-blur-md border border-mist rounded-2xl overflow-hidden hover:border-cobalt hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 ${
        fullWidth ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <Image
          src={photo}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover photo-tint group-hover:scale-105 transition-transform duration-500"
          style={photoPosition ? { objectPosition: photoPosition } : undefined}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-steel">{dek}</p>
        <p className="mt-4 text-sm font-medium text-cobalt">
          {readMoreLabel}
        </p>
      </div>
    </Link>
  );
}
