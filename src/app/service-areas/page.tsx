import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { services } from "@/lib/services";
import { towns, type Region } from "@/lib/towns";

export const metadata: Metadata = {
  title: "Service Areas — Roofing Across Rhode Island",
  description: `Summit Roofing & Exterior serves ${towns.length} cities and towns across Rhode Island with roofing, siding, storm restoration, and decks. Find your town.`,
  alternates: { canonical: "/service-areas" },
};

const regionOrder: Region[] = [
  "Greater Providence",
  "Kent County",
  "East Bay",
  "South County",
  "Blackstone Valley",
  "Aquidneck Island",
  "Sakonnet",
  "Block Island",
];

export default function ServiceAreasPage() {
  const byRegion = regionOrder
    .map((region) => ({
      region,
      towns: towns.filter((t) => t.region === region),
    }))
    .filter((g) => g.towns.length > 0);

  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Proudly Local Across Rhode Island"
        lead={`Our crews live where they work. We serve ${towns.length} cities and towns across the Ocean State — find yours below.`}
        image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Where We Work"
            title="Communities We Serve Every Week"
            lead="Same-week repairs, 48-hour inspection scheduling, and 24/7 storm response throughout Rhode Island."
          />
        </FadeIn>

        <div className="mt-16 space-y-14">
          {byRegion.map((group) => (
            <div key={group.region}>
              <h2 className="font-heading text-lg font-bold uppercase tracking-widest text-royal">
                {group.region}
              </h2>
              <Stagger className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.towns.map((town) => (
                  <StaggerItem key={town.slug}>
                    <Link
                      href={`/service-areas/${town.slug}`}
                      className="group flex h-full items-center gap-3 rounded-2xl bg-white px-5 py-5 shadow-soft ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-royal/25"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal transition-colors group-hover:bg-accent group-hover:text-white">
                        <MapPin className="h-5 w-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block font-heading font-bold text-navy">
                          {town.name}
                        </span>
                        <span className="text-xs text-slate-500">
                          {town.akaName ?? town.county}
                        </span>
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>

        <FadeIn className="mt-14 text-center text-slate-500">
          Don&rsquo;t see your town? We regularly serve surrounding communities —{" "}
          <Link href="/contact" className="font-semibold text-royal underline-offset-4 hover:underline">
            ask us
          </Link>
          .
        </FadeIn>
      </section>

      {/* Services × areas for local SEO */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Full-Service, Everywhere We Go"
              title="Every Service, Every City"
              lead="Whether you're in Warwick or Westerly, you get the same certified crews, the same warranty, and the same standard."
            />
          </FadeIn>
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block h-full rounded-2xl bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <h3 className="font-heading font-bold text-navy">
                    {s.name} in Rhode Island
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                    {s.excerpt}
                  </p>
                  <span className="mt-3 inline-block font-heading text-sm font-bold text-royal">
                    Learn more →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABanner
        title="Your Neighborhood Is Our Job Site"
        body="Ask for addresses of completed Summit projects near you — we're happy to share references."
      />
    </>
  );
}
