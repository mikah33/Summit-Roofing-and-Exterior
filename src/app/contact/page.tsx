import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Free Inspections & Estimates",
  description: `Request a free roof inspection or estimate from Summit Roofing & Exterior. Call ${site.phone}, email, or send the form — we respond within one business hour.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Home"
        lead="Free inspections, honest estimates, and a team that answers the phone. Reach out however works for you."
        image="https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <FadeIn direction="right">
            <h2 className="text-3xl font-bold text-navy">Get in Touch</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Prefer to talk it through? Call us — a Summit employee in
              Colorado answers, not a call center.
            </p>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-4 rounded-2xl bg-mist p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-glow">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Call or Text
                    </span>
                    <span className="font-heading text-lg font-bold text-navy group-hover:text-royal">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl bg-mist p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal text-white">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Email
                    </span>
                    <span className="font-heading text-lg font-bold text-navy group-hover:text-royal">
                      {site.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl bg-mist p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Office
                  </span>
                  <span className="font-heading font-bold text-navy">
                    {site.address.street}, {site.address.city},{" "}
                    {site.address.state} {site.address.zip}
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-slate-900/5">
              <h3 className="flex items-center gap-2 font-heading font-bold text-navy">
                <Clock className="h-5 w-5 text-royal" aria-hidden />
                Business Hours
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-slate-500">{h.days}</dt>
                    <dd className="font-semibold text-navy">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-3xl bg-accent/10 p-6 ring-1 ring-accent/30">
              <Siren className="h-8 w-8 shrink-0 text-accent" aria-hidden />
              <p className="text-sm leading-relaxed text-slate-700">
                <strong className="font-heading text-navy">
                  Roof emergency?
                </strong>{" "}
                Storm damage and active leaks get 24/7 response. Call{" "}
                <a href={site.phoneHref} className="font-bold text-accent">
                  {site.phone}
                </a>{" "}
                any time, day or night.
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="left">
            <div className="rounded-3xl bg-white p-8 shadow-lift ring-1 ring-slate-900/5 sm:p-10">
              <h2 className="text-2xl font-bold text-navy">
                Request Your Free Inspection or Estimate
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Takes 30 seconds. We respond within one business hour, 7am–6pm.
              </p>
              <div className="mt-8">
                <LeadForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Office location map" className="px-4 pb-24 sm:px-6">
        <FadeIn className="mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-lift">
          <iframe
            title={`Map to ${site.name} office in ${site.address.city}, ${site.address.state}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${site.address.street} ${site.address.city} ${site.address.state} ${site.address.zip}`,
            )}&output=embed`}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </FadeIn>
      </section>
    </>
  );
}
