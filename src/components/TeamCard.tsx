import Image from "next/image";

type Props = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export default function TeamCard({ name, role, bio, photo }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-mist rounded-2xl p-6 sm:p-8 text-center">
      <div className="relative mx-auto h-36 w-36 rounded-full overflow-hidden ring-[3px] ring-white shadow-md">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="144px"
          className="object-cover photo-tint"
        />
      </div>
      <h3 className="mt-5 font-display text-lg font-medium text-ink">{name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cobalt">
        {role}
      </p>
      <p className="mt-3 text-sm leading-6 text-steel">{bio}</p>
    </div>
  );
}
