import Image from "next/image";

type Props = { label: string; photo: string };

export default function IndustryCard({ label, photo }: Props) {
  return (
    <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-mist group">
      <Image
        src={photo}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10"
      />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-lg sm:text-xl font-medium text-white">
          {label}
        </h3>
      </div>
    </div>
  );
}
