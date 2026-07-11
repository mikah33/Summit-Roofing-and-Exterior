import {
  Home,
  Wrench,
  Search,
  CloudLightning,
  ShieldCheck,
  Layers,
  Fence,
  Gem,
  BadgeCheck,
  Zap,
  HandCoins,
  MessageSquare,
  Award,
  Siren,
  FileText,
  CalendarCheck,
  Hammer,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Home,
  Wrench,
  Search,
  CloudLightning,
  ShieldCheck,
  Layers,
  Fence,
  Gem,
  BadgeCheck,
  Zap,
  HandCoins,
  MessageSquare,
  Award,
  Siren,
  FileText,
  CalendarCheck,
  Hammer,
  ClipboardCheck,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? Home;
  return <Cmp className={className} aria-hidden />;
}
