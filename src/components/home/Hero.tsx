import {
  BadgeCheck,
  Calendar,
  Compass,
  Leaf,
  MapPin,
  Search,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Photo } from "@/components/photo/Photo";

const TRUST: { Icon: LucideIcon; label: string }[] = [
  { Icon: BadgeCheck, label: "Licensed Ugandan operator" },
  { Icon: Star, label: "12 years guiding" },
  { Icon: Leaf, label: "Permits handled for you" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[660px] items-end pb-[64px] pt-[140px]">
      <Photo
        variant="photo--forest"
        label="Mountain gorilla · Bwindi"
        className="absolute inset-0"
      />
      {/* Scrim — top + bottom darkening for content legibility. */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(36,13,22,0.55)_0%,rgba(36,13,22,0.12)_32%,rgba(36,13,22,0.30)_64%,rgba(36,13,22,0.82)_100%)]" />
      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-sp-6">
        <span className="kt-eyebrow text-gold-soft">
          Uganda · The Pearl of Africa
        </span>
        <h1 className="mb-[18px] mt-[14px] max-w-[760px] font-display text-[52px] font-semibold leading-[1] tracking-[-0.01em] text-white md:text-[68px]">
          Stand metres from a{" "}
          <em className="font-display italic text-gold-soft">
            mountain gorilla.
          </em>
        </h1>
        <p className="mb-[30px] max-w-[580px] text-[19px] leading-[1.55] text-white/90">
          Small-group safaris and self-drive 4×4 adventures across Uganda&apos;s
          forests and savannas — planned with guides who know these hills by
          name.
        </p>

        <div className="flex max-w-[840px] flex-wrap items-center gap-1 rounded-lg bg-paper/95 p-3 pl-2 shadow-lg backdrop-blur">
          <SearchField
            icon={<Compass className="size-[17px] text-maroon-600" aria-hidden="true" />}
            label="Experience"
            value="Gorilla trekking"
          />
          <Divider />
          <SearchField
            icon={<MapPin className="size-[17px] text-maroon-600" aria-hidden="true" />}
            label="Park"
            value="Bwindi Forest"
          />
          <Divider />
          <SearchField
            icon={<Calendar className="size-[17px] text-maroon-600" aria-hidden="true" />}
            label="When"
            value="Add dates"
            muted
          />
          <a
            href="#experiences"
            className="ml-[6px] inline-flex items-center gap-2 rounded-pill bg-maroon-600 px-6 py-[13px] text-[15px] font-semibold text-fg-on-maroon shadow-maroon transition-all duration-200 hover:-translate-y-px hover:bg-maroon-800"
          >
            <Search className="size-[17px]" aria-hidden="true" />
            Find trips
          </a>
        </div>

        <div className="mt-[26px] flex flex-wrap gap-6">
          {TRUST.map(({ Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-white/90"
            >
              <Icon className="size-4 text-gold-soft" aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchField({
  icon,
  label,
  value,
  muted = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex-1 px-4 py-2 min-w-[160px]">
      <div className="mb-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
        {label}
      </div>
      <div
        className={`flex items-center gap-2 text-[15px] font-semibold ${
          muted ? "text-slate-300" : "text-fg-1"
        }`}
      >
        {icon}
        <span>{value}</span>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-[34px] w-px bg-sand-deep" />;
}
