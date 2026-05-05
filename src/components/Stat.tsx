"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  label: string;
  duration?: number;
};

function parseNumeric(value: string): { num: number; suffix: string } | null {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return null;
  return { num: parseInt(m[1], 10), suffix: m[2] };
}

export default function Stat({ value, label, duration = 1400 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    const numeric = parseNumeric(value);
    if (!numeric) {
      setDisplay(value);
      return;
    }
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const node = ref.current;
    if (!node) {
      setDisplay(value);
      return;
    }
    setDisplay(`0${numeric.suffix}`);
    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              const n = Math.round(eased * numeric.num);
              setDisplay(`${n}${numeric.suffix}`);
              if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-white">
        {display}
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
    </div>
  );
}
