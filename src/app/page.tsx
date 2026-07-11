import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShieldCheck, Star } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after";
import { FAQAccordion } from "@/components/faq";
import { FadeIn } from "@/components/motion";
import {
  CTABanner,
  ProcessSection,
  ServicesGrid,
  TrustBar,
  WhyChooseUs,
} from "@/components/sections";
import { TestimonialCarousel } from "@/components/testimonials";
import { CTAButton, PhoneButton, SectionHeading } from "@/components/ui";
import { generalFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Premium Roofing, Siding & Decks in ${site.address.city}, ${site.address.state}`,
  description: `Protect your home with roofing built to last. Free 21-point inspections, storm damage response, insurance claim help, siding & decks. ${site.stats.yearsExperience}+ years serving the ${site.address.city} metro. Call ${site.phone}.`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2400&q=80"
            alt="Premium architectural shingle roof on a modern Colorado home"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="animate-drift object-cover"
          />
        </div>
        <div className="hero-gradient absolute inset-0" />

        {/* floating accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 rounded-full border border-white/10 lg:block animate-float"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[16%] top-[42%] hidden h-16 w-16 rounded-2xl border border-accent/30 lg:block animate-float [animation-delay:1.5s]"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-32 pt-36 sm:px-6">
          <FadeIn delay={0.1}>
            <p className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.25em] text-accent">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              {site.address.city}&rsquo;s Trusted Exterior Experts Since{" "}
              {2026 - site.stats.yearsExperience}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              Protect Your Home with{" "}
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Roofing Built to Last
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              Premium roof replacement, storm restoration, siding, and decks —
              installed by certified local crews and backed by a lifetime
              workmanship warranty.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/contact" arrow>
                Get Free Inspection
              </CTAButton>
              <CTAButton href="/contact" variant="outline">
                Request Free Estimate
              </CTAButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.65}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-2">
                <span className="flex text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                4.9 from {site.stats.fiveStarReviews.toLocaleString()}+ reviews
              </span>
              <span>Licensed &amp; Insured</span>
              <span>GAF Master Elite® Certified</span>
            </div>
          </FadeIn>
        </div>

        {/* scroll indicator */}
        <div
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex"
          aria-hidden
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-scroll-pulse" />
        </div>
      </section>

      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />

      {/* --------------------------- BEFORE / AFTER --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn direction="right">
            <SectionHeading
              align="left"
              eyebrow="Real Results"
              title="See the Summit Difference"
              lead="Drag the slider to compare a real Front Range hail restoration. Every project is photo-documented from first inspection to final walkthrough."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/gallery" variant="secondary" size="md" arrow>
                View Project Gallery
              </CTAButton>
              <CTAButton href="/contact" variant="ghost" size="md">
                Start Your Project
              </CTAButton>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <BeforeAfterSlider
              before="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80"
              after="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=80"
              alt="Full roof replacement after hail damage in Aurora, Colorado"
            />
          </FadeIn>
        </div>
      </section>

      <ProcessSection />

      {/* ----------------------------- TESTIMONIALS ----------------------------- */}
      <section className="bg-gradient-to-b from-white to-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Customer Stories"
              title="Rated 4.9 Stars by Your Neighbors"
              lead={`${site.stats.fiveStarReviews.toLocaleString()}+ five-star reviews across Google, BBB, and Angi — earned one honest project at a time.`}
            />
          </FadeIn>
          <div className="mt-14">
            <TestimonialCarousel />
          </div>
          <FadeIn className="mt-10 text-center">
            <Link
              href="/reviews"
              className="font-heading text-sm font-bold text-royal underline-offset-4 hover:underline"
            >
              Read all customer reviews →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* -------------------------------- FAQ teaser -------------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <FadeIn direction="right">
            <SectionHeading
              align="left"
              eyebrow="Questions & Answers"
              title="Straight Answers, Before You Ever Call"
              lead="The things homeowners ask us most — answered honestly. Have a question we didn't cover?"
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/faq" variant="secondary" size="md">
                View All FAQs
              </CTAButton>
              <PhoneButton variant="ghost" size="md" />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <FAQAccordion items={generalFaqs.slice(0, 4)} />
          </FadeIn>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
