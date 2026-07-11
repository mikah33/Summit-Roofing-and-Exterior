import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/before-after";
import { GalleryGrid } from "@/components/gallery-grid";
import { FadeIn } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Project Gallery — Roofing, Siding & Deck Transformations",
  description:
    "Browse completed Summit Roofing & Exterior projects across the Denver metro: roof replacements, storm restorations, James Hardie siding, and custom decks.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="Our Work Speaks From Every Rooftop"
        lead="Real projects, real addresses, real homeowners. Filter by service and see what the Summit standard looks like up close."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <GalleryGrid />
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Before & After"
              title="Drag to See the Transformation"
              lead="A full hail restoration in Aurora — from storm-battered to better than new in a single day."
            />
          </FadeIn>
          <FadeIn className="mt-12">
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80"
              after="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80"
              alt="Hail-damaged roof fully restored with architectural shingles"
            />
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Your Home Could Be Next"
        body="Every project here started with a free inspection. Book yours and see what's possible."
      />
    </>
  );
}
