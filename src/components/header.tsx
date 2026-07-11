"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const nav = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Financing", href: "/financing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`hidden overflow-hidden bg-navy text-white transition-all duration-500 lg:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="font-medium text-slate-300">{site.license}</p>
          <p className="font-semibold text-accent">{site.emergency} — Call {site.phone}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" aria-label="Summit Roofing & Exterior — Home">
          <Logo color={scrolled ? "color" : "white"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-navy hover:text-royal"
                  : "text-white hover:text-accent"
              }`}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full w-72 rounded-2xl bg-white p-2 shadow-lift ring-1 ring-slate-900/5"
                >
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-mist hover:text-royal"
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-navy hover:text-royal"
                  : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`flex items-center gap-2 font-heading text-sm font-bold transition-colors ${
              scrolled ? "text-navy hover:text-royal" : "text-white hover:text-accent"
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white">
              <Phone className="h-4 w-4" aria-hidden />
            </span>
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 font-heading text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            Free Inspection
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`rounded-full p-2 lg:hidden ${
            scrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white shadow-lift lg:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-6 py-4">
              <p className="pt-2 font-heading text-xs font-semibold uppercase tracking-widest text-slate-400">
                Services
              </p>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block rounded-lg px-2 py-2 font-medium text-ink"
                >
                  {s.name}
                </Link>
              ))}
              <div className="my-2 border-t border-slate-100" />
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-2 py-2 font-medium text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 block rounded-full bg-accent px-6 py-3.5 text-center font-heading font-semibold text-white"
              >
                Get Free Inspection
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
