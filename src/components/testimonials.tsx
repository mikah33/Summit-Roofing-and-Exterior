"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5200, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.334%]"
            >
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-900/5 transition-shadow duration-300 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <Stars />
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      fill="#4285F4"
                      d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v4h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.7 1.1a6.4 6.4 0 0 1-6-4.4H2.3v2.8A11 11 0 0 0 12 23Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M6 14.2a6.6 6.6 0 0 1 0-4.2V7.2H2.3a11 11 0 0 0 0 9.8L6 14.2Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.6c1.6 0 3.1.6 4.3 1.7l3.2-3.2A11 11 0 0 0 2.3 7.2L6 10c.9-2.6 3.2-4.4 6-4.4Z"
                    />
                  </svg>
                </div>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-slate-600">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal font-heading text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-bold text-navy">
                      {t.name}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {t.location} · {t.service}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-slate-900/5 transition-colors hover:bg-royal hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                selected === i ? "w-6 bg-accent" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-slate-900/5 transition-colors hover:bg-royal hover:text-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
