"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

/** Mouse-tracked radial glow that fades in on hover — wrap around a card's
 * inner content (the card itself should be relative + overflow-hidden). */
export function Spotlight({
  children,
  color = "rgba(255,90,31,0.18)",
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`group/spotlight relative ${className ?? ""}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 70%)`,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
