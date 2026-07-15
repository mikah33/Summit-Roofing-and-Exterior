import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MapPin, ShieldCheck, Siren } from "lucide-react";
import { Icon } from "@/components/icons";
import { FAQAccordion } from "@/components/faq";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { CTAButton, PhoneButton, SectionHeading } from "@/components/ui";
import { generalFaqs } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { getTown, nearbyTowns, towns } from "@/lib/towns";

type Props = { params: Promise<{ town: string }> };

// A small rotation of already-verified exterior photos, cycled by index so
// the 36 town pages aren't all wearing the exact same hero image.
const heroImages = [
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1602193458517-db6caca8f1fe?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1773101883541-42a4881daef3?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1613544723412-b331bda01e87?auto=format&fit=crop&w=2400&q=80",
];

export function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};

  const displayName = town.akaName ? `${town.name} (${town.akaName})` : town.name;

  return {
    title: `Roofing, Siding & Deck Services in ${displayName}, RI`,
    description: `Licensed roofing, siding, and deck contractor serving ${displayName}, RI — ${town.county}. Free inspections, storm damage response, lifetime workmanship warranty. Call ${site.phone}.`,
    alternates: { canonical: `/service-areas/${town.slug}` },
  };
}

export default async function TownPage({ params }: Props) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) notFound();

  const index = towns.findIndex((t) => t.slug === town.slug);
  const heroImage = heroImages[index % heroImages.length];
  const displayName = town.akaName ? `${town.name} (${town.akaName})` : town.name;
  const neighbors = nearbyTowns(town.slug, 5);

  // Swap the generic "how fast can you start" answer for ferry-dependent
  // towns — the standard 48-hour/same-week promise doesn't apply there.
  const townFaqs = town.ferryOnly
    ? generalFaqs.slice(0, 5).map((f) =>
        f.q === "How fast can you start my project?"
          ? {
              q: "How fast can you start my project on Block Island?",
              a: "Island projects are scheduled around ferry availability for crews and materials, so timelines run longer than our mainland same-week turnaround. We'll give you a realistic start date once we know the scope — reach out early in the season for the best availability.",
            }
          : f,
      )
    : generalFaqs.slice(0, 5);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Roofing, Siding & Deck Services in ${town.name}, RI`,
      description: `Roof replacement, roof repair, storm damage restoration, siding, and deck construction serving ${town.name}, Rhode Island.`,
      provider: {
        "@type": "RoofingContractor",
        name: site.name,
        telephone: site.phone,
        url: site.url,
      },
      areaServed: {
        "@type": "City",
        name: `${town.name}, RI`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Areas",
          item: `${site.url}/service-areas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: town.name,
          item: `${site.url}/service-areas/${town.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: townFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={town.county}
        title={`Roofing, Siding & Decks in ${displayName}, RI`}
        lead={`Licensed local crews serving ${town.name} — ${town.blurb}.`}
        image={heroImage}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4 text-sm text-slate-500 sm:px-6">
          <li>
            <Link href="/" className="hover:text-royal">
              Home
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <li>
            <Link href="/service-areas" className="hover:text-royal">
              Service Areas
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <li aria-current="page" className="font-semibold text-navy">
            {town.name}
          </li>
        </ol>
      </nav>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <FadeIn>
              <SectionHeading
                align="left"
                eyebrow={`Serving ${town.name}`}
                title={`Local Roofing & Exterior Contractors in ${town.name}`}
              />
              {town.ferryOnly ? (
                <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                  <p>
                    {town.name} — {town.akaName} — is {town.blurb}. Because
                    every project here depends on ferry scheduling for crews
                    and materials, we plan Block Island jobs well in advance
                    rather than promising the same-week turnaround we offer
                    on the mainland. Reach out early and we&rsquo;ll build a
                    realistic timeline around the ferry schedule.
                  </p>
                  <p>
                    Once on-island, you get the exact same Summit standard as
                    every mainland customer: licensed crews, premium
                    materials, and a lifetime workmanship warranty on top of
                    a 30-year manufacturer shingle warranty.
                  </p>
                </div>
              ) : (
                <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                  <p>
                    {town.name} is {town.blurb}, part of {town.county}. Our
                    crews regularly work throughout {town.county}
                    {" "}
                    and know the roofing challenges New England homes face —
                    nor&rsquo;easters, high winds, and hard freeze-thaw
                    winters among them.
                  </p>
                  <p>
                    Whether it&rsquo;s a full roof replacement, a same-week
                    repair, storm damage restoration, new siding, or a custom
                    deck, {town.name} homeowners get a free 21-point
                    inspection, a fixed line-item estimate, and a lifetime
                    workmanship warranty on top of a 30-year manufacturer
                    shingle warranty — backed by a local team that answers
                    the phone.
                  </p>
                </div>
              )}
            </FadeIn>

            {/* Services */}
            <FadeIn className="mt-12">
              <h2 className="font-heading text-xl font-bold text-navy">
                Services Available in {town.name}
              </h2>
              <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((s) => (
                  <StaggerItem key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-3 rounded-2xl bg-mist p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal transition-colors group-hover:bg-accent group-hover:text-white">
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="font-heading text-sm font-bold text-navy group-hover:text-royal">
                        {s.name}
                      </span>
                      <ChevronRight
                        className="ml-auto h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-royal"
                        aria-hidden
                      />
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeIn>

            {/* FAQ */}
            <FadeIn className="mt-14">
              <h2 className="font-heading text-xl font-bold text-navy">
                Common Questions from {town.name} Homeowners
              </h2>
              <div className="mt-6">
                <FAQAccordion items={townFaqs} />
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn direction="left">
              <div className="rounded-3xl bg-navy p-8 shadow-lift">
                <h2 className="font-heading text-xl font-bold text-white">
                  Get a Free Estimate in {town.name}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  A specialist calls you within one business hour — or call{" "}
                  <a href={site.phoneHref} className="font-bold text-accent">
                    {site.phone}
                  </a>
                  .
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CTAButton href="/contact" size="md">
                    Request Free Inspection
                  </CTAButton>
                  <PhoneButton size="md" variant="outline" />
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                  <p className="text-xs leading-relaxed text-slate-300">
                    Licensed &amp; insured. Lifetime workmanship warranty on
                    top of a 30-year shingle warranty.
                  </p>
                </div>
                {town.ferryOnly && (
                  <div className="mt-3 flex items-center gap-3 rounded-2xl bg-accent/15 p-4">
                    <Siren className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                    <p className="text-xs leading-relaxed text-slate-200">
                      Island scheduling depends on ferry availability — reach
                      out early to lock in a project date.
                    </p>
                  </div>
                )}
              </div>

              {/* Nearby areas */}
              {neighbors.length > 0 && (
                <div className="mt-6 rounded-3xl bg-mist p-7">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-slate-500">
                    Nearby Areas We Serve
                  </h3>
                  <ul className="mt-4 space-y-1">
                    {neighbors.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/service-areas/${n.slug}`}
                          className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white hover:text-royal"
                        >
                          <span className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" aria-hidden />
                            {n.name}
                          </span>
                          <ChevronRight
                            className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-royal"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/service-areas"
                    className="mt-3 inline-block text-sm font-semibold text-royal underline-offset-4 hover:underline"
                  >
                    View all service areas →
                  </Link>
                </div>
              )}
            </FadeIn>
          </aside>
        </div>
      </section>

      <CTABanner
        title={`Ready to Get Started in ${town.name}?`}
        body={
          town.ferryOnly
            ? "Reach out early to plan your Block Island project around ferry scheduling — same Summit standard, island logistics."
            : `Every ${town.name} project starts with a free 21-point inspection. Book yours and see what's possible.`
        }
      />
    </>
  );
}
