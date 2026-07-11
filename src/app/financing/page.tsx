import type { Metadata } from "next";
import { BadgePercent, CalendarClock, CircleDollarSign, Lock } from "lucide-react";
import { FAQAccordion } from "@/components/faq";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero } from "@/components/sections";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Roofing & Exterior Financing — 0% Options Available",
  description:
    "Flexible financing for roof replacement, siding, and decks: 0% same-as-cash plans, low fixed rates up to 15 years, and 60-second approvals with no prepayment penalties.",
  alternates: { canonical: "/financing" },
};

const plans = [
  {
    name: "0% Same-As-Cash",
    term: "12–18 months",
    highlight: "Most Popular",
    points: [
      "No interest if paid within the promo period",
      "No payments for the first 90 days",
      "Perfect for insurance-deductible gaps",
    ],
  },
  {
    name: "Low Fixed Rate",
    term: "5–15 years",
    highlight: null,
    points: [
      "Predictable monthly payments from $99/mo",
      "Rates from 6.99% APR for qualified buyers",
      "No prepayment penalties, ever",
    ],
  },
  {
    name: "Deferred Start",
    term: "Flexible",
    highlight: null,
    points: [
      "Project now, first payment in 6 months",
      "Ideal while an insurance claim finalizes",
      "Convertible to fixed-rate plan anytime",
    ],
  },
];

const faqs = [
  {
    q: "Will applying affect my credit score?",
    a: "The initial pre-qualification is a soft pull that does not affect your score. A hard inquiry only happens if you accept an offer and proceed.",
  },
  {
    q: "How fast is approval?",
    a: "Most applicants receive a decision in under 60 seconds through our lending partners, right from your kitchen table during the estimate.",
  },
  {
    q: "Can I finance just my insurance deductible?",
    a: "Yes. Many storm-restoration customers finance only their deductible and out-of-pocket upgrades while insurance covers the rest.",
  },
  {
    q: "Are there prepayment penalties?",
    a: "Never. Pay your balance off early on any plan and you simply stop paying interest.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="A New Roof Shouldn't Wait on a Rainy-Day Fund"
        lead="0% same-as-cash options, fixed rates up to 15 years, and 60-second approvals — so you can fix the problem now and pay on your schedule."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Payment Options"
            title="Three Ways to Make It Easy"
            lead="Financing through trusted home-improvement lenders, arranged in minutes during your free estimate."
          />
        </FadeIn>
        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                  p.highlight
                    ? "bg-navy text-white shadow-lift"
                    : "bg-white shadow-soft ring-1 ring-slate-900/5"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-white shadow-glow">
                    {p.highlight}
                  </span>
                )}
                <h3
                  className={`font-heading text-2xl font-bold ${p.highlight ? "text-white" : "text-navy"}`}
                >
                  {p.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-semibold uppercase tracking-widest ${
                    p.highlight ? "text-accent" : "text-royal"
                  }`}
                >
                  {p.term}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 text-sm leading-relaxed ${
                    p.highlight ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <BadgePercent
                        className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-accent" : "text-royal"}`}
                        aria-hidden
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-8 text-center text-xs text-slate-400">
          Financing subject to credit approval through third-party lenders.
          Rates, terms, and availability vary by applicant. Ask your estimator
          for current offers.
        </FadeIn>
      </section>

      {/* How it works */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Simple Process"
              title="From Application to Approval in Minutes"
            />
          </FadeIn>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: CircleDollarSign,
                title: "1 · Get Your Estimate",
                body: "Your fixed, line-item project price comes first — financing decisions are easier with a real number.",
              },
              {
                icon: Lock,
                title: "2 · Soft-Pull Pre-Qualify",
                body: "A 60-second application with no impact to your credit score shows your available offers.",
              },
              {
                icon: CalendarClock,
                title: "3 · Pick Your Payment",
                body: "Choose the plan that fits your budget and sign digitally. Your project is scheduled the same day.",
              },
            ].map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-3xl bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                    <s.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading eyebrow="Financing FAQ" title="Money Questions, Answered" />
        </FadeIn>
        <FadeIn className="mt-12">
          <FAQAccordion items={faqs} />
        </FadeIn>
      </section>

      <CTABanner
        title="See Your Monthly Payment Before You Commit"
        body="Get a free estimate with financing options side by side — then decide what works for your family."
      />
    </>
  );
}
