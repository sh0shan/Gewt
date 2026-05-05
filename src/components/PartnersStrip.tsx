import Image from "next/image";

type Props = { label: string };

const partners = [
  {
    name: "International Atomic Energy Agency",
    src: "/iaea.png",
    width: 280,
    height: 90,
  },
  {
    name: "Ministry of Environment and Climate Change",
    src: "/Ministry_of_Environment_and_Climate_Change.png",
    width: 280,
    height: 90,
  },
  {
    name: "Ministry of Commerce and Industry",
    src: "/Ministry_of_Commerce.png",
    width: 280,
    height: 90,
  },
];

export default function PartnersStrip({ label }: Props) {
  // Duplicate once for a seamless loop. translateX 0 → -50% lands the
  // second copy exactly where the first started, so the cycle has no
  // visible seam. Each item is w-1/6 of the 200%-wide flex container,
  // which means exactly 3 items fill the viewable area at any moment.
  const loop = [...partners, ...partners];
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.22em] text-steel">
          {label}
        </p>
        <div className="mt-10 overflow-hidden">
          <div className="flex animate-marquee w-[200%]">
            {loop.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="w-1/6 px-6 sm:px-10 flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={p.width}
                  height={p.height}
                  className="h-16 sm:h-20 w-auto object-contain"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
