"use client";

import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  poster?: string;
  alt: string;
  duration: number;
};

const slides: Slide[] = [
  {
    src: "/hero/roof-tearoff-aerial.mp4",
    poster: "/hero/roof-job-aerial-poster.jpg",
    alt: "Aerial drone view of a Summit Roofing crew tearing off and re-decking a residential roof",
    duration: 15000,
  },
  {
    src: "/hero/foster-roof-vertical.mp4",
    alt: "Aerial drone view of a Summit Roofing crew stripping shingles down to the deck",
    duration: 15000,
  },
];

const FADE_MS = 1200;

export function HeroRotation() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (reduceRef.current) return;
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % slides.length);
    }, slides[active].duration);
    return () => clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === active) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [active]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
            }}
            aria-hidden={!isActive}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="h-full w-full object-cover"
              poster={slide.poster}
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          </div>
        );
      })}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 gap-2 lg:flex">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
