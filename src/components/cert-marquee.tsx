import { BadgeCheck } from "lucide-react";

const certs = [
  "GAF Master Elite® Certified",
  "Owens Corning Preferred Contractor",
  "James Hardie Certified",
  "Trex Pro Platinum Builder",
  "A+ BBB Accredited",
  "HAAG Certified Inspectors",
  "Licensed & Insured in Rhode Island",
  "CertainTeed SELECT ShingleMaster",
];

export function CertMarquee() {
  const track = [...certs, ...certs];

  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-slate-200 bg-white py-5"
    >
      <div className="flex w-max animate-marquee gap-12">
        {track.map((cert, i) => (
          <span
            key={`${cert}-${i}`}
            className="flex shrink-0 items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-slate-400"
          >
            <BadgeCheck className="h-4 w-4 text-royal/50" />
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
}
