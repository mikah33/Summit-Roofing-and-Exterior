"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none-desktop");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest(INTERACTIVE_SELECTOR));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    >
      {/* Lagging ring */}
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-accent/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          backgroundColor: hovering ? "rgb(255 90 31 / 0.08)" : "transparent",
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 } }}
      />
      {/* Instant dot */}
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hovering ? 0 : 1,
        }}
      />
    </div>
  );
}
