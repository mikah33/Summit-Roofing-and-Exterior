import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import { AnimatedCounter } from "@/components/counter";
import { Icon } from "@/components/icons";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTAButton, PhoneButton, SectionHeading } from "@/components/ui";
import { processSteps, whyChooseUs } from "@/lib/content";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/* ---------------------------------- Trust bar ---------------------------------- */

export function TrustBar() {
  const stats = [
    { value: site.stats.yearsExperience, suffix: "+", label: "Years of Experience" },
    { value: site.stats.projectsCompleted, suffix: "+", label: "Projects Completed" },
    { value: site.stats.fiveStarReviews, suffix: "+", label: "Five-Star Reviews" },
    { value: site.stats.warrantyYears, suffix: "-Year", label: "Material Warranties" },
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
        <div className="glass rounded-3xl px-6 py-10 shadow-lift sm:px-10">
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

/* -------------------------------- Services grid -------------------------------- */

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="services">
      {heading && (
        <FadeIn>
          <SectionHeading
            eyebrow="What We Do"
            title="Complete Exterior Expertise, One Trusted Team"
            lead="From the ridge of your roof to the boards of your deck — every service delivered by certified crews and backed in writing."
          />
        </FadeIn>
      )}
      <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <StaggerItem key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.cardImage}
                  alt={s.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-glow">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-xl font-bold text-navy transition-colors group-hover:text-royal">
                  {s.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {s.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold text-royal">
                  Learn More
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}

        {/* CTA card completes the grid */}
        <StaggerItem>
          <div className="flex h-full flex-col justify-center rounded-3xl bg-navy p-8 text-white shadow-lift">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Not sure what you need?
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold">
              Start with a free inspection.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              A certified inspector will tell you exactly what your home needs —
              and what it doesn&rsquo;t. Written report, drone photos, zero pressure.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <CTAButton href="/contact" size="md">
                Book Free Inspection
              </CTAButton>
              <PhoneButton size="md" />
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

/* --------------------------------- Why choose us -------------------------------- */

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      {/* floating geometry */}
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
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-dark group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-royal-dark text-white transition-transform duration-500 group-hover:scale-110">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------------------------- Process ---------------------------------- */

export function ProcessSection() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="From First Call to Final Warranty"
            lead="A clear six-step process with a named project manager and no surprises. Here's exactly what working with Summit looks like."
          />
        </FadeIn>
        <Stagger className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative h-full rounded-3xl bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span
                  className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-accent font-heading text-sm font-extrabold text-white shadow-glow"
                  aria-hidden
                >
                  {step.step}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                  <span className="sr-only">Step {step.step}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
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
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
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
          {site.emergency} · Licensed &amp; Insured · Lifetime Workmanship Warranty
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
