import { site } from "@/lib/site";

type LogoColor = "color" | "white" | "black";

const palettes: Record<
  LogoColor,
  { top: string; mid: string; base: string; text: string; sub: string }
> = {
  color: {
    top: "#F97316",
    mid: "#2563EB",
    base: "#0F172A",
    text: "#0F172A",
    sub: "#2563EB",
  },
  white: {
    top: "#F97316",
    mid: "#FFFFFF",
    base: "#FFFFFF",
    text: "#FFFFFF",
    sub: "#CBD5E1",
  },
  black: {
    top: "#0F172A",
    mid: "#0F172A",
    base: "#0F172A",
    text: "#0F172A",
    sub: "#0F172A",
  },
};

export function LogoIcon({
  color = "color",
  className,
}: {
  color?: LogoColor;
  className?: string;
}) {
  const p = palettes[color];
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={`${site.name} logo`}
      fill="none"
    >
      <path d="M16 24 L32 8 L48 24 H40 L32 16 L24 24 Z" fill={p.top} />
      <path d="M12 38 L32 18 L52 38 H43 L32 27 L21 38 Z" fill={p.mid} />
      <path d="M6 54 L32 28 L58 54 H49 L32 37 L15 54 Z" fill={p.base} />
    </svg>
  );
}

export function Logo({
  color = "color",
  className,
}: {
  color?: LogoColor;
  className?: string;
}) {
  const p = palettes[color];
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoIcon color={color} className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className="font-heading text-xl font-bold tracking-tight"
          style={{ color: p.text }}
        >
          SUMMIT
        </span>
        <span
          className="mt-0.5 text-[0.62rem] font-semibold tracking-[0.22em]"
          style={{ color: p.sub }}
        >
          ROOFING &amp; EXTERIOR
        </span>
      </span>
    </span>
  );
}
