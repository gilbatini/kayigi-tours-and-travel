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
  { Icon: Star, label: "Fully insured fleet" },
  { Icon: Leaf, label: "Self-drive or chauffeur" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[660px] items-end pb-[64px] pt-[140px]">
      <Photo
        variant="/images/safaris/safari-landcruiser-savanna-front.png"
        label="Kayigi Land Cruiser on the Ugandan savanna"
        className="absolute inset-0"
        priority
        sizes="100vw"
      />
      {/* Scrim — top + bottom darkening for content legibility. */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(36,13,22,0.55)_0%,rgba(36,13,22,0.12)_32%,rgba(36,13,22,0.30)_64%,rgba(36,13,22,0.82)_100%)]" />
      <div className="relative z-[2] mx-auto w-full max-w-[1200px] px-sp-6">
        <span className="kt-eyebrow text-gold-soft">
          Vehicle Hire · Uganda
        </span>
        <h1 className="mb-[18px] mt-[14px] max-w-[760px] font-display text-[52px] font-semibold leading-[1] tracking-[-0.01em] text-white md:text-[68px]">
          Safari 4×4s &amp; luxury cars{" "}
          <em className="font-display italic text-gold-soft">
            for hire.
          </em>
        </h1>
        <p className="mb-[30px] max-w-[580px] text-[19px] leading-[1.55] text-white/90">
          Self-drive or with a driver-guide. Pop-top safari Land Cruisers, plus
          premium SUVs for city, airport and upcountry trips — across Uganda.
        </p>

        <div className="flex max-w-[840px] flex-wrap items-center gap-1 rounded-lg bg-paper/95 p-3 pl-2 shadow-lg backdrop-blur">
          <SearchField
            icon={<Compass className="size-[17px] text-maroon-600" aria-hidden="true" />}
            label="Vehicle type"
            value="Safari Land Cruiser"
          />
          <Divider />
          <SearchField
            icon={<MapPin className="size-[17px] text-maroon-600" aria-hidden="true" />}
            label="Pick-up"
            value="Entebbe Airport"
          />
          <Divider />
          <SearchField
            icon={<Calendar className="size-[17px] text-maroon-600" aria-hidden="true" />}
            label="Dates"
            value="Add dates"
            muted
          />
          <a
            href="#experiences"
            className="ml-[6px] inline-flex items-center gap-2 rounded-pill bg-maroon-600 px-6 py-[13px] text-[15px] font-semibold text-fg-on-maroon shadow-maroon transition-all duration-200 hover:-translate-y-px hover:bg-maroon-800"
          >
            <Search className="size-[17px]" aria-hidden="true" />
            Find vehicles
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
