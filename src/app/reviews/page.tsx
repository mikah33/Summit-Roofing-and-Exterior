import type { Metadata } from "next";
import { Star } from "lucide-react";
import { AnimatedCounter } from "@/components/counter";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Reviews — 4.9 Stars Across Rhode Island",
  description: `Read what homeowners say about Summit Roofing & Exterior: ${site.stats.fiveStarReviews.toLocaleString()}+ five-star reviews for roofing, siding, storm restoration, and decks.`,
  alternates: { canonical: "/reviews" },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: site.name,
  url: site.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    reviewCount: String(site.stats.fiveStarReviews),
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: t.text,
  })),
};

function Stars({ size = "h-4 w-4" }: { size?: string }) {
  return (
    <span className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} fill-current`} aria-hidden />
      ))}
    </span>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Customer Reviews"
        title="Earned One Honest Project at a Time"
        lead="We don't buy reviews and we don't cherry-pick. This is what your neighbors actually say."
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Rating summary */}
      <section className="relative z-10 -mt-14 px-4 sm:px-6">
        <FadeIn className="mx-auto max-w-4xl">
          <div className="grid gap-8 rounded-3xl bg-white px-8 py-10 shadow-lift ring-1 ring-slate-900/5 sm:grid-cols-3">
            <div className="text-center">
              <p className="font-heading text-5xl font-extrabold text-navy">4.9</p>
              <div className="mt-2 flex justify-center">
                <Stars size="h-5 w-5" />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Average Rating
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-5xl font-extrabold text-navy">
                <AnimatedCounter value={site.stats.fiveStarReviews} suffix="+" />
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Five-Star Reviews
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-5xl font-extrabold text-navy">A+</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                BBB Rating
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Review wall */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="In Their Words"
            title="Recent Reviews From Real Homeowners"
          />
        </FadeIn>
        <Stagger className="mt-14 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="break-inside-avoid">
              <figure className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-900/5 transition-shadow duration-300 hover:shadow-lift">
                <Stars />
                <blockquote className="mt-4 leading-relaxed text-slate-600">
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
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-14 text-center">
          <p className="text-slate-500">
            Find hundreds more on{" "}
            <a
              href={site.social.google}
              className="font-semibold text-royal underline-offset-4 hover:underline"
            >
              Google
            </a>
            , BBB, and Angi.
          </p>
        </FadeIn>
      </section>

      <CTABanner
        title="Become Our Next Five-Star Story"
        body="It starts the same way every review here did — with a free, honest inspection."
      />
    </>
  );
}
