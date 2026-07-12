"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { LeadForm } from "@/components/lead-form";

/** Mobile-only: full-width call/estimate bar. */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 lg:hidden"
        >
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 bg-navy py-4 font-heading text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-accent py-4 font-heading text-sm font-bold text-white"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Free Estimate
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Exit-intent popup — fires once per session when the cursor leaves the viewport top. */
export function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("summit-exit-shown")) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("summit-exit-shown")) {
        sessionStorage.setItem("summit-exit-shown", "1");
        setShow(true);
      }
    };
    const timer = setTimeout(
      () => document.addEventListener("mouseleave", onLeave),
      8000,
    );
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
          onClick={() => setShow(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Free inspection offer"
        >
          <motion.div
            initial={{ scale: 0.92, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-mist text-slate-500 transition-colors hover:bg-slate-200"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Before you go
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy">
              Your roof inspection is free. Seriously.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              21-point inspection, drone photos, written report — zero cost,
              zero pressure. It takes 30 seconds to request.
            </p>
            <div className="mt-6">
              <LeadForm compact defaultService="Roof Inspection" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
