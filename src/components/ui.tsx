import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold tracking-tight transition-all duration-300 focus-visible:outline-accent active:scale-[0.97]";

const variants = {
  primary:
    "bg-gradient-to-r from-accent to-accent-dark text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lift hover:brightness-110",
  secondary:
    "bg-gradient-to-r from-royal to-royal-dark text-navy shadow-glow-gold hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105",
  outline:
    "border border-white/30 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-navy",
  ghost:
    "border border-navy/15 text-navy hover:border-royal hover:text-royal",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </Link>
  );
}

export function PhoneButton({
  variant = "outline",
  size = "lg",
  className,
}: {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <a
      href={site.phoneHref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
    >
      <Phone className="h-4 w-4" aria-hidden />
      {site.phone}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
