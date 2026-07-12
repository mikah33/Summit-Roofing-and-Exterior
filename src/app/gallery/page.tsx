import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/before-after";
import { FadeIn } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Project Gallery — Roofing, Siding & Deck Transformations",
  description:
    "See real before-and-after transformations from Summit Roofing & Exterior: roof replacements, siding, and custom decks across Rhode Island.",
  alternates: { canonical: "/gallery" },
};

const projects = [
  {
    eyebrow: "Roofing",
    title: "A Full Roof Replacement, Start to Finish",
    lead: "Same house, same angle — from full tear-off with fresh underlayment exposed to a finished architectural shingle roof.",
    before: "/gallery/roof-replacement-before.jpg",
    after: "/gallery/roof-replacement-after.jpg",
    alt: "Full roof replacement — tear-off with underlayment exposed replaced with a finished architectural shingle roof",
  },
  {
    eyebrow: "Siding",
    title: "A Full Exterior Transformation",
    lead: "Same house, same angle — worn wood and cedar shake siding replaced with clean, modern lap siding that changes the whole look of the home.",
    before: "/gallery/siding-before.jpg",
    after: "/gallery/siding-after.jpg",
    alt: "Home siding replacement — worn wood siding replaced with new blue-gray lap siding",
  },
  {
    eyebrow: "Decks",
    title: "Outdoor Living, Rebuilt to Last",
    lead: "A dated deck replaced with a custom-built composite deck, finished with matching privacy walls and trim.",
    before: "/gallery/deck-before.jpg",
    after: "/gallery/deck-after.jpg",
    alt: "Deck replacement — dated composite deck replaced with a custom-built deck with privacy walls",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="Our Work Speaks From Every Rooftop"
        lead="Real transformations in roofing, siding, and decks. Drag each slider to see the difference."
        image="/gallery/gallery-hero-aerial.jpg"
      />

      {projects.map((project, i) => (
        <section
          key={project.eyebrow}
          className={i % 2 === 0 ? "bg-white py-24" : "bg-mist py-24"}
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <FadeIn>
              <SectionHeading
                eyebrow={project.eyebrow}
                title={project.title}
                lead={project.lead}
              />
            </FadeIn>
            <FadeIn className="mt-12">
              <BeforeAfterSlider
                before={project.before}
                after={project.after}
                alt={project.alt}
              />
            </FadeIn>
          </div>
        </section>
      ))}

      <CTABanner
        title="Your Home Could Be Next"
        body="Every project here started with a free inspection. Book yours and see what's possible."
      />
    </>
  );
}
