"use client";

import { useEffect, useRef } from "react";

/** Ambient cinematic lighting for the hero — two soft glow orbs that drift
 * gently with the cursor. Pure lighting, not decorative shapes. */
export function HeroGlow() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const xPct = e.clientX / window.innerWidth - 0.5;
      const yPct = e.clientY / window.innerHeight - 0.5;
      orb1.current?.style.setProperty(
        "transform",
        `translate3d(${xPct * 40}px, ${yPct * 40}px, 0)`,
      );
      orb2.current?.style.setProperty(
        "transform",
        `translate3d(${xPct * -50}px, ${yPct * -50}px, 0)`,
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        ref={orb1}
        className="glow-orb animate-pulse-glow absolute -left-[10%] top-[10%] h-[38rem] w-[38rem] bg-accent/25 transition-transform duration-700 ease-out"
      />
      <div
        ref={orb2}
        className="glow-orb animate-pulse-glow absolute -right-[15%] bottom-[5%] h-[32rem] w-[32rem] bg-royal/20 transition-transform duration-700 ease-out [animation-delay:2s]"
      />
    </div>
  );
}
