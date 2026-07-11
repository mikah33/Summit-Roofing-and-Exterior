import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-mist pb-24 pt-40">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white px-6 py-12 shadow-soft sm:px-12">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate-400">Last updated: {updated}</p>
        <div className="prose-headings:font-heading mt-8 space-y-6 text-[0.95rem] leading-relaxed text-slate-600 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </section>
  );
}
