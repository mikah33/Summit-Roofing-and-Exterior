"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/icons";
import { services } from "@/lib/services";

const ROTATE_MS = 5000;

export function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hovered = useRef(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      if (!hovered.current) setActive((i) => (i + 1) % services.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused]);

  const current = services[active];

  return (
    <div>
      {/* ---------------------------- Desktop showcase ---------------------------- */}
      <div
        className="hidden lg:grid lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-3 lg:rounded-[2rem] lg:bg-white lg:p-3 lg:shadow-lift lg:ring-1 lg:ring-slate-900/5"
        onMouseEnter={() => (hovered.current = true)}
        onMouseLeave={() => (hovered.current = false)}
      >
        {/* Index list */}
        <ol className="flex flex-col">
          {services.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.slug}>
                <button
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  className={`group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                    isActive ? "bg-navy" : "hover:bg-mist"
                  }`}
                  aria-current={isActive}
                >
                  <span
                    className={`font-heading text-xs font-bold tabular-nums ${
                      isActive ? "text-accent" : "text-slate-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive
                        ? "bg-accent text-white"
                        : "bg-royal/10 text-royal group-hover:bg-royal/15"
                    }`}
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span
                    className={`font-heading text-sm font-bold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-navy"
                    }`}
                  >
                    {s.name}
                  </span>
                  <ArrowRight
                    className={`ml-auto h-4 w-4 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-accent opacity-100"
                        : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                    aria-hidden
                  />
                </button>
              </li>
            );
          })}
        </ol>

        {/* Active panel */}
        <div className="relative overflow-hidden rounded-[1.6rem]">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
              aria-hidden={i !== active}
            >
              <Image
                src={s.heroImage}
                alt={s.name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/10" />
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
                <h3 className="mt-3 max-w-md text-2xl font-bold text-white lg:text-3xl">
                  {s.headline}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200">
                  {s.excerpt}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {s.features.slice(0, 3).map((f) => (
                    <li
                      key={f.title}
                      className="flex items-center gap-2 text-xs font-semibold text-white"
                    >
                      <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
                      {f.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          ))}
          {/* Reserve panel height */}
          <div className="invisible aspect-[16/11]" aria-hidden />
        </div>
      </div>

      {/* Progress rail */}
      <div className="mt-4 hidden gap-1.5 lg:flex">
        {services.map((s, i) => (
          <span
            key={s.slug}
            className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200"
          >
            <span
              className={`block h-full rounded-full bg-accent transition-all ease-linear ${
                i === active
                  ? `w-full ${paused ? "duration-300" : "duration-[5000ms]"}`
                  : "w-0 duration-300"
              }`}
            />
          </span>
        ))}
      </div>

      {/* ------------------------------ Mobile stacked list ------------------------------ */}
      <div className="flex flex-col gap-5 lg:hidden">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-900/5"
          >
            <div className="relative w-32 shrink-0 sm:w-44">
              <Image
                src={s.cardImage}
                alt={s.name}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-5">
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-royal/10 text-royal">
                  <Icon name={s.icon} className="h-4 w-4" />
                </span>
                <h3 className="font-heading text-base font-bold text-navy">
                  {s.name}
                </h3>
              </span>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                {s.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 font-heading text-xs font-bold text-royal">
                Learn More
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
