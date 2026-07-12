import type { Metadata } from "next";
import { FAQAccordion } from "@/components/faq";
import { FadeIn } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { generalFaqs } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Roofing, Warranties & Insurance",
  description:
    "Honest answers to the questions homeowners ask most about roof replacement, repairs, inspections, insurance claims, and warranties.",
  alternates: { canonical: "/faq" },
};

const allFaqs = [
  ...generalFaqs,
  ...services.flatMap((s) => s.faqs.slice(0, 1)),
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Straight Answers to Real Questions"
        lead="No sales-speak, no dodging. If your question isn't here, call us — a human in Rhode Island will pick up."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="The Essentials"
            title="Working With Summit"
          />
        </FadeIn>
        <FadeIn className="mt-10">
          <FAQAccordion items={generalFaqs} />
        </FadeIn>

        <FadeIn className="mt-20">
          <SectionHeading
            eyebrow="Service Specifics"
            title="Repairs, Replacements & Claims"
          />
        </FadeIn>
        <FadeIn className="mt-10">
          <FAQAccordion items={services.flatMap((s) => s.faqs.slice(0, 1))} />
        </FadeIn>

        <FadeIn className="mt-14 rounded-3xl bg-navy p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Still have a question?
          </h2>
          <p className="mt-2 text-slate-300">
            Call{" "}
            <a href={site.phoneHref} className="font-bold text-accent">
              {site.phone}
            </a>{" "}
            — weekdays 7am–6pm, Saturdays 8am–2pm, and 24/7 for storm
            emergencies.
          </p>
        </FadeIn>
      </section>

      <CTABanner />
    </>
  );
}
