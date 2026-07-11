"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/lib/content";

const categories = [
  "All",
  "Roofing",
  "Storm Restoration",
  "Siding",
  "Decks",
] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((v) => (v === null ? v : (v + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) =>
          v === null ? v : (v - 1 + items.length) % items.length,
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setFilter(c);
              setLightbox(null);
            }}
            className={`rounded-full px-5 py-2.5 font-heading text-sm font-semibold transition-all duration-300 ${
              filter === c
                ? "bg-navy text-white shadow-soft"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-royal/40"
            }`}
            aria-pressed={filter === c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl text-left shadow-soft"
              aria-label={`View ${item.title}`}
            >
              <Image
                src={item.image}
                alt={`${item.title} in ${item.location}, Colorado`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-6 transition-transform duration-300 group-hover:translate-y-0">
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-accent">
                  {item.category}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-300">
                  <MapPin className="h-3 w-3" aria-hidden />
                  {item.location}, CO
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && items[lightbox] && (
          <Lightbox
            item={items[lightbox]}
            onClose={() => setLightbox(null)}
            onPrev={() =>
              setLightbox((lightbox - 1 + items.length) % items.length)
            }
            onNext={() => setLightbox((lightbox + 1) % items.length)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-md sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous project"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next project"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      <motion.figure
        initial={{ scale: 0.94, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 16 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <Image
            src={item.image}
            alt={`${item.title} in ${item.location}, Colorado`}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 flex items-center justify-between text-white">
          <div>
            <h3 className="font-heading text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.location}, Colorado</p>
          </div>
          <span className="rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest">
            {item.category}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}
