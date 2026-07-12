"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

/** Wraps a card and gives it a subtle 3D tilt toward the cursor, with a
 * light glare sweep. Respects prefers-reduced-motion via CSS spring damping
 * (motion values simply won't move meaningfully if the user never triggers
 * pointer movement, and the effect is purely additive/decorative). */
export function TiltCard({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [strength, -strength]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-strength, strength]), {
    stiffness: 300,
    damping: 30,
  });
  const glareX = useTransform(px, [0, 1], [0, 100]);
  const glareY = useTransform(py, [0, 1], [0, 100]);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  return (
    <motion.div
      ref={ref}
      className={`relative [transform-style:preserve-3d] ${className ?? ""}`}
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
        glareOpacity.set(1);
      }}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
        glareOpacity.set(0);
      }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          opacity: glareOpacity,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(320px circle at ${gx}% ${gy}%, rgb(255 255 255 / 0.14), transparent 60%)`,
          ),
        }}
      />
    </motion.div>
  );
}
