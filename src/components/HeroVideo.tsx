"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  ariaLabel: string;
  muteLabel: string;
  unmuteLabel: string;
  className?: string;
};

export default function HeroVideo({
  src,
  poster,
  ariaLabel,
  muteLabel,
  unmuteLabel,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next && v.paused) {
      v.play().catch(() => {
        v.muted = true;
        setMuted(true);
      });
    }
  }

  return (
    <div
      aria-label={ariaLabel}
      role="region"
      className={`relative isolate overflow-hidden rounded-2xl border border-mist bg-ink/5 shadow-sm aspect-video ${className}`}
    >
      {!reducedMotion && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {reducedMotion && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {!reducedMotion && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? unmuteLabel : muteLabel}
          aria-pressed={!muted}
          title={muted ? unmuteLabel : muteLabel}
          className="absolute bottom-3 end-3 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-ink/55 backdrop-blur-md text-white border border-white/30 hover:bg-ink/75 hover:border-white/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          {muted ? (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 9l5 6m0-6l-5 6" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5a5 5 0 010 7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 6a8 8 0 010 12" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
