import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { Logo } from "@/components/logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Project Gallery", href: "/gallery" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-noise bg-navy text-slate-300">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-14 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to protect your home?
            </h2>
            <p className="mt-2 text-slate-400">
              Free 21-point inspection · Written report same day · Zero pressure
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-4 font-heading font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Get Free Inspection
            </Link>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 font-heading font-semibold text-white transition-colors hover:border-white"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo color="white" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Premium roofing, siding, and outdoor living for Rhode Island.{" "}
            {site.stats.yearsExperience} years of craftsmanship, honesty,
            and roofs built to last.
          </p>
          <div className="mt-5 flex items-center gap-1 text-accent" aria-label="5 star rated">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
            ))}
            <span className="ml-2 text-sm font-semibold text-white">
              {site.stats.fiveStarReviews.toLocaleString()}+ five-star reviews
            </span>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-royal"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-royal"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Company
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>Serving all of Rhode Island</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-accent">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                {site.phone}
              </a>
            </li>
          </ul>
          <div className="mt-6 rounded-2xl bg-white/5 p-4 text-xs leading-relaxed">
            {site.hours.map((h) => (
              <p key={h.days} className="flex justify-between gap-4">
                <span className="text-slate-400">{h.days}</span>
                <span className="font-medium text-white">{h.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved. ·{" "}
            {site.license}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
