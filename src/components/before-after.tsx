"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  alt,
  className,
}: {
  before: string;
  after: string;
  alt: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(97, Math.max(3, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative aspect-[16/10] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-3xl shadow-lift ${className ?? ""}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      role="slider"
      aria-label={`Before and after comparison: ${alt}`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(3, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(97, p + 4));
      }}
    >
      <Image
        src={after}
        alt={`After: ${alt}`}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`Before: ${alt}`}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover grayscale-[35%] brightness-90"
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-accent px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white">
        After
      </span>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lift transition-transform duration-200 group-hover:scale-110">
          <ChevronsLeftRight className="h-5 w-5" aria-hidden />
        </span>
      </div>
    </div>
  );
}
