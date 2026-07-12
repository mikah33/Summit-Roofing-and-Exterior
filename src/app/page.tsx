import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, ShieldCheck, Star } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after";
import { CertMarquee } from "@/components/cert-marquee";
import { FAQAccordion } from "@/components/faq";
import { HeroGlow } from "@/components/hero-glow";
import { HeroRotation } from "@/components/hero-rotation";
import { Magnetic } from "@/components/magnetic";
import { FadeIn } from "@/components/motion";
import { RevealUp } from "@/components/reveal-up";
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
  description: `Protect your home with roofing built to last. Free 21-point inspections, storm damage response, insurance claim help, siding & decks. ${site.stats.yearsExperience}+ years serving all of Rhode Island. Call ${site.phone}.`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="bg-noise relative flex min-h-svh items-center overflow-hidden bg-navy">
        <HeroRotation />
        <div className="hero-gradient absolute inset-0" />
        <HeroGlow />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 sm:pt-36">
          <RevealUp delay={0.15}>
            <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
              Rhode Island&rsquo;s Trusted Exterior Experts Since{" "}
              {2026 - site.stats.yearsExperience}
            </span>
          </RevealUp>
          <RevealUp delay={0.28} className="mt-7">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
              Protect Your Home with{" "}
              <span className="bg-gradient-to-r from-accent via-orange-400 to-royal bg-clip-text text-transparent">
                Roofing Built to Last
              </span>
            </h1>
          </RevealUp>
          <FadeIn delay={0.55}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone sm:text-xl">
              Premium roof replacement, storm restoration, siding, and decks —
              installed by certified local crews and backed by a lifetime
              workmanship warranty on top of a 30-year shingle warranty.
            </p>
          </FadeIn>
          <FadeIn delay={0.7}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <CTAButton href="/contact" arrow>
                  Get Free Inspection
                </CTAButton>
              </Magnetic>
              <Magnetic>
                <CTAButton href="/contact" variant="outline">
                  Request Free Estimate
                </CTAButton>
              </Magnetic>
            </div>
          </FadeIn>
          <FadeIn delay={0.85}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="glass-dark flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-ivory">
                <span className="flex text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                4.9 from {site.stats.fiveStarReviews.toLocaleString()}+ reviews
              </span>
              <span className="glass-dark rounded-full px-4 py-2 text-xs font-semibold text-ivory">
                Licensed &amp; Insured
              </span>
              <span className="glass-dark hidden rounded-full px-4 py-2 text-xs font-semibold text-ivory sm:inline-block">
                GAF Master Elite® Certified
              </span>
            </div>
          </FadeIn>
        </div>

        {/* scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone/70 lg:flex"
          aria-hidden
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5 animate-scroll-pulse" />
        </div>
      </section>

      <TrustBar />
      <div className="mt-16">
        <CertMarquee />
      </div>
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
              lead="Drag the slider to compare a real Rhode Island roof replacement. Every project is photo-documented from first inspection to final walkthrough."
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
              before="/gallery/roof-replacement-before.jpg"
              after="/gallery/roof-replacement-after.jpg"
              alt="Full roof replacement — tear-off with underlayment exposed replaced with a finished architectural shingle roof"
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
