"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Magnetic } from "@/components/magnetic";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const nav = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative rounded-full px-4 py-2 font-heading text-sm font-medium text-stone transition-colors duration-300 hover:text-ivory"
    >
      {children}
      <span
        aria-hidden
        className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-royal transition-transform duration-300 group-hover:scale-x-100"
      />
    </Link>
  );
}

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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6">
      <header
        className="pointer-events-auto mt-3 w-full max-w-6xl rounded-[1.75rem] border border-white/10 bg-graphite/95 shadow-lift transition-all duration-500 sm:mt-4"
      >
        <div
          className={`flex items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          <Link
            href="/"
            aria-label="Summit Roofing & Exterior — Home"
            className="group"
          >
            <div className="transition-transform duration-500 group-hover:scale-[1.03]">
              <Logo color="white" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-medium text-stone transition-colors duration-300 hover:text-ivory"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-graphite p-2 shadow-lift"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-stone transition-colors hover:bg-white/5 hover:text-royal"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {nav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-heading text-sm font-semibold text-stone transition-colors duration-300 hover:text-ivory"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white shadow-glow">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              {site.phone}
            </a>
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 font-heading text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                Free Inspection
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            className="rounded-full p-2 text-ivory lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              className="overflow-hidden border-t border-white/10 lg:hidden"
              aria-label="Mobile"
            >
              <div className="space-y-1 px-6 py-4">
                <p className="pt-2 font-heading text-xs font-semibold uppercase tracking-widest text-stone/60">
                  Services
                </p>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block rounded-lg px-2 py-2 font-medium text-stone"
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="my-2 border-t border-white/10" />
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-2 py-2 font-medium text-stone"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-3 block rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3.5 text-center font-heading font-semibold text-white shadow-glow"
                >
                  Get Free Inspection
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
