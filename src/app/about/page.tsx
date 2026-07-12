import type { Metadata } from "next";
import Image from "next/image";
import { Award, HandHeart, Home, Waves } from "lucide-react";
import { AnimatedCounter } from "@/components/counter";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { CTABanner, PageHero, ProcessSection } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Local, Licensed & Family-Owned",
  description: `Summit Roofing & Exterior has protected Rhode Island homes for ${site.stats.yearsExperience}+ years. Meet the family-owned team behind ${site.stats.projectsCompleted.toLocaleString()}+ completed projects.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Waves,
    title: "Built for New England",
    body: "Nor'easters, coastal salt air, freeze-thaw winters, and humid summers — we engineer every roof for the specific climate that will attack it.",
  },
  {
    icon: HandHeart,
    title: "Honesty Over Revenue",
    body: "About a third of our inspections end with 'your roof is fine.' We'd rather earn your trust today and your project in five years.",
  },
  {
    icon: Award,
    title: "Craftsmanship in Writing",
    body: "A lifetime workmanship warranty only works if the company plans to exist for a lifetime. We've been here 22 years — and we're not going anywhere.",
  },
  {
    icon: Home,
    title: "Neighbors, Not a Call Center",
    body: "Our owners live in the communities we serve. When you call, a Summit employee in Rhode Island answers — not an answering service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Two Decades on Rhode Island Rooftops"
        lead="Summit Roofing & Exterior is a family-owned, Rhode Island-grown company built on a simple idea: do exceptional work, tell the truth, and stand behind every nail."
        image="https://images.unsplash.com/photo-1654613698291-e5f7a9e3d71e?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <FadeIn direction="right">
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="From One Truck to Rhode Island's Most Trusted Exterior Team"
            />
            <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
              <p>
                Summit started in {2026 - site.stats.yearsExperience} with one
                truck, one crew, and a founder who'd spent a decade watching
                storm-chasing outfits blow through New England, do mediocre work,
                and disappear. He believed a roofing company could be different:
                local, accountable, and honest enough to tell a homeowner when
                their roof <em>didn&rsquo;t</em> need replacing.
              </p>
              <p>
                {site.stats.projectsCompleted.toLocaleString()}+ projects later,
                that idea hasn&rsquo;t changed. We&rsquo;re certified by the
                manufacturers we install, our project managers are on-site every
                day, and our license number rides on every truck — because
                accountability shouldn&rsquo;t be hard to find.
              </p>
              <p>
                Today our teams handle everything outside your walls: roofing,
                storm restoration, insurance claims, siding, and custom decks.
                One company, one standard, one warranty.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=1200&q=80"
                  alt="Summit Roofing & Exterior crew installing an asphalt shingle roof"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 rounded-3xl bg-white px-8 py-6 shadow-lift ring-1 ring-slate-900/5 sm:-left-8">
                <p className="font-heading text-4xl font-extrabold text-navy">
                  <AnimatedCounter value={site.stats.yearsExperience} suffix="+" />
                </p>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                  Years of Craftsmanship
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Believe"
              title="The Values Behind the Warranty"
            />
          </FadeIn>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex h-full gap-6 rounded-3xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                    <v.icon className="h-7 w-7" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{v.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Credentials"
            title="Certified, Insured, and Accountable"
            lead="Certifications aren't wall decorations — they're what qualifies your project for the strongest warranties in the industry."
          />
        </FadeIn>
        <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "GAF Master Elite® Certified",
            "Owens Corning Preferred",
            "James Hardie Certified",
            "Trex Pro Platinum Builder",
            "A+ BBB Accredited",
            "HAAG Certified Inspectors",
            "OSHA-Certified Crews",
            "Fully Licensed & Insured",
          ].map((c) => (
            <StaggerItem key={c}>
              <div className="flex h-full items-center justify-center rounded-2xl bg-white px-5 py-7 text-center font-heading text-sm font-bold text-navy shadow-soft ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:ring-royal/25">
                {c}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ProcessSection />
      <CTABanner
        title="Work With a Team That Answers the Phone"
        body="Get a free inspection from a company that's been here 22 years — and will be here for the life of your warranty."
      />
    </>
  );
}
