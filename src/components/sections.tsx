import Image from "next/image";
import { BadgeCheck, Search, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import { AnimatedCounter } from "@/components/counter";
import { Icon } from "@/components/icons";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ServiceShowcase } from "@/components/service-showcase";
import { Spotlight } from "@/components/spotlight";
import { CTAButton, PhoneButton, SectionHeading } from "@/components/ui";
import { processSteps, whyChooseUs } from "@/lib/content";
import { site } from "@/lib/site";

/* ---------------------------------- Trust bar ---------------------------------- */

export function TrustBar() {
  const stats = [
    { value: site.stats.yearsExperience, suffix: "+", label: "Years of Experience" },
    { value: site.stats.projectsCompleted, suffix: "+", label: "Projects Completed" },
    { value: site.stats.fiveStarReviews, suffix: "+", label: "Five-Star Reviews" },
    { value: site.stats.warrantyYears, suffix: "-Year", label: "Shingle Warranty" },
  ];
  const badges = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: BadgeCheck, label: "Manufacturer Certified" },
    { icon: Star, label: "A+ BBB Rating" },
    { icon: ThumbsUp, label: "Lifetime Workmanship Warranty" },
  ];

  return (
    <section aria-label="Why homeowners trust us" className="relative z-10 -mt-16 px-4 sm:px-6">
      <FadeIn className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-10 shadow-lift ring-1 ring-slate-900/5 sm:px-10">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-orange-400 to-royal"
          />
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dd className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:text-sm">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-900/10 pt-7">
            {badges.map((b) => (
              <span
                key={b.label}
                className="flex items-center gap-2 text-sm font-semibold text-slate-600"
              >
                <b.icon className="h-4 w-4 text-royal" aria-hidden />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* -------------------------------- Services showcase -------------------------------- */

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-mist py-24" id="services">
      {/* Blueprint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0A0A0C 1px, transparent 1px), linear-gradient(90deg, #0A0A0C 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {heading && (
          <FadeIn>
            <SectionHeading
              eyebrow="What We Do"
              title="Complete Exterior Expertise, One Trusted Team"
              lead="From the ridge of your roof to the boards of your deck — every service delivered by certified crews and backed in writing. Browse the full lineup below."
            />
          </FadeIn>
        )}

        <FadeIn className="mt-14">
          <ServiceShowcase />
        </FadeIn>

        {/* Closing CTA banner */}
        <FadeIn className="mt-8">
          <div className="gradient-border flex flex-col items-center justify-between gap-6 rounded-[1.75rem] bg-navy px-8 py-8 text-center shadow-lift sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-glow sm:flex">
                <Search className="h-7 w-7" aria-hidden />
              </span>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Not sure what you need?
                </p>
                <h3 className="mt-1 font-heading text-xl font-bold text-white">
                  Start with a free inspection — we&rsquo;ll tell you straight.
                </h3>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact" size="md">
                Book Free Inspection
              </CTAButton>
              <PhoneButton size="md" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* --------------------------------- Why choose us -------------------------------- */

// Bento spans for the first 7 tiles on lg screens; item index 7 (Emergency Service)
// renders separately as the full-width closing strip below the grid.
const bentoSpan = ["lg:col-span-2", "", "", "", "", "", ""];

export function WhyChooseUs() {
  const gridItems = whyChooseUs.slice(0, 7);
  const closer = whyChooseUs[7];

  return (
    <section className="bg-noise relative overflow-hidden bg-navy py-24">
      {/* Blueprint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-royal/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            dark
            eyebrow="The Summit Standard"
            title="Why Homeowners Choose Summit"
            lead="Anyone can nail down shingles. We built our reputation on everything that happens before, during, and decades after."
          />
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gridItems.map((item, i) => {
            const featured = i === 0;
            return (
              <StaggerItem key={item.title} className={bentoSpan[i]}>
                <Spotlight
                  color="rgba(212,169,84,0.3)"
                  className={`group h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                    featured
                      ? "glass-dark bg-gradient-to-br from-royal/25 via-transparent to-transparent hover:bg-white/10 sm:p-9"
                      : "glass-dark hover:bg-white/10"
                  }`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-5 font-heading text-xs font-bold tabular-nums text-white/25"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-royal-dark text-white shadow-glow transition-transform duration-500 group-hover:scale-110 ${
                      featured ? "h-16 w-16" : "h-12 w-12"
                    }`}
                  >
                    <Icon name={item.icon} className={featured ? "h-8 w-8" : "h-6 w-6"} />
                  </span>
                  <h3
                    className={`mt-5 font-heading font-bold text-white ${
                      featured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-slate-300 ${
                      featured ? "max-w-sm text-base" : "text-sm"
                    }`}
                  >
                    {item.body}
                  </p>
                </Spotlight>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Closing strip — Emergency Service */}
        <FadeIn className="mt-5">
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-accent to-accent-dark px-8 py-7 text-center shadow-glow sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Icon name={closer.icon} className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {closer.title}
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-white/85">
                  {closer.body}
                </p>
              </div>
            </div>
            <a
              href={site.phoneHref}
              className="shrink-0 rounded-full bg-white px-7 py-3.5 font-heading text-sm font-bold text-accent-dark shadow-lift transition-all duration-300 hover:-translate-y-0.5"
            >
              Call {site.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------- Process ---------------------------------- */

function ProcessCard({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <Spotlight className="mx-auto w-full max-w-[15.5rem] overflow-hidden rounded-2xl bg-white p-5 text-center shadow-soft ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-royal/10 text-royal">
        <Icon name={step.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-3 font-heading text-sm font-bold text-navy">
        <span className="sr-only">Step {step.step}: </span>
        {step.title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-4">
        {step.body}
      </p>
    </Spotlight>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-mist py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0A0A0C 1px, transparent 1px), linear-gradient(90deg, #0A0A0C 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="From First Call to Final Warranty"
            lead="A clear six-step process with a named project manager and no surprises. Here's exactly what working with Summit looks like."
          />
        </FadeIn>

        {/* Desktop: connected zigzag timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[8.34%] top-[276px] h-0.5 bg-slate-300"
          />
          <div className="grid grid-cols-6">
            {processSteps.map((step, i) => {
              const above = i % 2 === 0;
              return (
                <FadeIn key={step.step} delay={i * 0.08} className="flex flex-col items-center">
                  <div
                    className={`flex h-56 w-full items-end justify-center pb-4 ${above ? "" : "invisible"}`}
                  >
                    {above && <ProcessCard step={step} />}
                  </div>
                  <div className={`h-6 w-px bg-slate-300 ${above ? "" : "invisible"}`} aria-hidden />
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-mist bg-navy font-heading text-sm font-extrabold text-white shadow-lift">
                    {step.step}
                  </div>
                  <div className={`h-6 w-px bg-slate-300 ${above ? "invisible" : ""}`} aria-hidden />
                  <div
                    className={`flex h-56 w-full items-start justify-center pt-4 ${above ? "invisible" : ""}`}
                  >
                    {!above && <ProcessCard step={step} />}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-14 space-y-8 lg:hidden">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.06}>
              <div className="relative flex gap-5">
                {i !== processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[27px] top-14 h-[calc(100%+1.25rem)] w-px bg-slate-300"
                  />
                )}
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-extrabold text-white shadow-lift">
                  {step.step}
                </span>
                <div className="flex-1 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-900/5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal/10 text-royal">
                    <Icon name={step.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 font-heading text-base font-bold text-navy">
                    <span className="sr-only">Step {step.step}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- CTA banner ---------------------------------- */

export function CTABanner({
  title = "Get Your Free Roof Inspection This Week",
  body = "Drone imagery, a 21-point checklist, and a written report — free, fast, and pressure-free. Storm damage? We respond 24/7.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24">
      <Image
        src="/hero/cta-banner-aerial.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-royal/70" />
      <FadeIn className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">{body}</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <CTAButton href="/contact" arrow>
            Get Free Inspection
          </CTAButton>
          <PhoneButton />
        </div>
        <p className="mt-6 text-sm font-medium text-slate-300">
          {site.emergency} · Licensed &amp; Insured · Lifetime Workmanship Warranty on Top of a 30-Year Shingle Warranty
        </p>
      </FadeIn>
    </section>
  );
}

/* --------------------------------- Page hero (inner pages) --------------------------------- */

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[26rem] items-center overflow-hidden pt-28 pb-16 lg:min-h-[30rem]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="animate-drift object-cover"
          aria-hidden
        />
      </div>
      <div className="hero-gradient absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <FadeIn direction="up">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              {lead}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
