import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { FAQAccordion } from "@/components/faq";
import { Icon } from "@/components/icons";
import { LeadForm } from "@/components/lead-form";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { CTAButton, PhoneButton, SectionHeading } from "@/components/ui";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${site.address.city}, ${site.address.state}`,
    description: `${service.excerpt} Serving ${site.serviceAreas.slice(0, 4).join(", ")} and the entire ${site.address.city} metro. Call ${site.phone} for a free estimate.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} | ${site.name}`,
      description: service.excerpt,
      images: [{ url: service.heroImage, width: 1600, height: 1000 }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.excerpt,
      provider: {
        "@type": "RoofingContractor",
        name: site.name,
        telephone: site.phone,
        url: site.url,
      },
      areaServed: site.serviceAreas.map((c) => ({
        "@type": "City",
        name: `${c}, CO`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${site.url}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: `${site.url}/services/${service.slug}`,
        },
      ],
    },
  ];

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow={service.name}
        title={service.headline}
        lead={service.subheadline}
        image={service.heroImage}
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
            <Link href="/#services" className="hover:text-royal">
              Services
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
          <li aria-current="page" className="font-semibold text-navy">
            {service.name}
          </li>
        </ol>
      </nav>

      {/* Body + sticky lead form */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <FadeIn>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-glow">
                <Icon name={service.icon} className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
                {service.name}, the Summit Way
              </h2>
              {service.description.map((p) => (
                <p key={p.slice(0, 40)} className="mt-5 leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </FadeIn>

            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
              {service.features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="h-full rounded-3xl bg-mist p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift hover:ring-1 hover:ring-royal/15">
                    <CheckCircle2 className="h-6 w-6 text-royal" aria-hidden />
                    <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {f.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn className="mt-16">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                {service.name} Questions, Answered
              </h2>
              <div className="mt-8">
                <FAQAccordion items={service.faqs} />
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn direction="left">
              <div className="rounded-3xl bg-navy p-8 shadow-lift">
                <h2 className="font-heading text-xl font-bold text-white">
                  {service.cta}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Fill this out and a specialist calls you within one business
                  hour — or call{" "}
                  <a href={site.phoneHref} className="font-bold text-accent">
                    {site.phone}
                  </a>
                  .
                </p>
                <div className="mt-6 rounded-2xl bg-white p-5">
                  <LeadForm compact defaultService={service.name} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-mist p-7">
                <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-slate-500">
                  Other Services
                </h3>
                <ul className="mt-4 space-y-1">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-white hover:text-royal"
                      >
                        {s.name}
                        <ChevronRight
                          className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-royal"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      {/* Related visual band */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Recent Work"
              title="Craftsmanship You Can See From the Curb"
              lead="Browse completed Summit projects across the Front Range."
            />
          </FadeIn>
          <FadeIn className="mt-12 grid gap-6 sm:grid-cols-3">
            {otherServices.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                href="/gallery"
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft"
              >
                <Image
                  src={s.cardImage}
                  alt={`${s.name} project by ${site.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="absolute bottom-4 left-5 font-heading font-bold text-white">
                  {s.name}
                </span>
              </Link>
            ))}
          </FadeIn>
          <FadeIn className="mt-10 flex justify-center gap-4">
            <CTAButton href="/gallery" variant="secondary" size="md" arrow>
              View Full Gallery
            </CTAButton>
            <PhoneButton variant="ghost" size="md" />
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title={`Ready to talk ${service.shortName.toLowerCase()}?`}
        body="Start with a free inspection and a fixed, line-item estimate. No pressure, no games — just straight answers from a local team."
      />
    </>
  );
}
