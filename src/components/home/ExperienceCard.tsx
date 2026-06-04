import Link from "next/link";
import {
  Clock,
  Compass,
  Heart,
  Leaf,
  MapPin,
  Sun,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Photo } from "@/components/photo/Photo";
import type { Experience } from "@/lib/data";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  trees: Trees,
  leaf: Leaf,
  sun: Sun,
  compass: Compass,
};

export function ExperienceCard({ exp }: { exp: Experience }) {
  const CatIcon = CATEGORY_ICONS[exp.icon] ?? Compass;
  const tagClass =
    exp.catClass === "forest"
      ? "bg-forest-wash text-forest"
      : "bg-gold-wash text-[#9c6c22]";

  return (
    <Link
      href={`/safaris/${exp.slug}`}
      className="group block overflow-hidden rounded-lg bg-surface-card shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <Photo
        variant={exp.photo}
        label={exp.park}
        className="h-[212px]"
      >
        <span
          className={`absolute left-[14px] top-[14px] z-[2] inline-flex items-center gap-[6px] rounded-pill px-3 py-[6px] text-[11px] font-semibold uppercase tracking-[0.1em] ${tagClass}`}
        >
          <CatIcon className="size-[13px]" aria-hidden="true" />
          {exp.cat}
        </span>
        <span className="absolute right-[12px] top-[12px] z-[2] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-paper/90 transition-colors group-hover:bg-paper">
          <Heart className="size-4 text-maroon-600" aria-hidden="true" />
        </span>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[rgba(36,13,22,0.85)] to-transparent" />
      </Photo>
      <div className="px-5 pb-5 pt-[18px]">
        <h3 className="font-display text-[25px] font-semibold leading-tight text-fg-1">
          {exp.title}
        </h3>
        <div className="mt-[5px] mb-[15px] flex items-center gap-[5px] text-[13px] text-fg-3">
          <MapPin className="size-[14px]" aria-hidden="true" />
          {exp.park}
        </div>
        <div className="flex items-end justify-between border-t border-sand-deep pt-[15px]">
          <div className="flex gap-[14px]">
            <span className="inline-flex items-center gap-[6px] text-sm font-medium text-fg-2">
              <Clock className="size-4 text-slate-500" aria-hidden="true" />
              {exp.days}
            </span>
            <span className="inline-flex items-center gap-[6px] text-sm font-medium text-fg-2">
              <Users className="size-4 text-slate-500" aria-hidden="true" />
              {exp.group}
            </span>
          </div>
          <div className="text-right">
            <b className="block whitespace-nowrap font-display text-[19px] font-semibold leading-tight text-maroon-600">
              {exp.price}
            </b>
            <span className="text-[11px] text-fg-3">per person</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
