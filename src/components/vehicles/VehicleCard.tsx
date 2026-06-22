"use client";

import { CarFront, Check, Settings, Users } from "lucide-react";
import { Photo } from "@/components/photo/Photo";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";
import type { Vehicle } from "@/lib/data";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { open } = useEnquiry();
  return (
    <article className="overflow-hidden rounded-lg bg-surface-card shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Photo
        variant={vehicle.photo}
        label={vehicle.name}
        className="relative h-[178px]"
        sizes="(min-width: 1024px) 380px, 100vw"
      >
        <span className="absolute left-[14px] top-[14px] inline-flex items-center gap-[6px] rounded-pill bg-maroon-100 px-3 py-[6px] text-[11px] font-semibold uppercase tracking-[0.1em] text-maroon-600">
          <CarFront className="size-[13px]" aria-hidden="true" />
          4×4 Hire
        </span>
      </Photo>
      <div className="px-5 pb-5 pt-[18px]">
        <h3 className="mb-[10px] font-display text-[22px] font-semibold leading-tight text-fg-1">
          {vehicle.name}
        </h3>
        <div className="mb-[14px] flex gap-[14px]">
          <span className="inline-flex items-center gap-[6px] text-sm font-medium text-fg-2">
            <Users className="size-4 text-slate-500" aria-hidden="true" />
            {vehicle.seats}
          </span>
          <span className="inline-flex items-center gap-[6px] text-sm font-medium text-fg-2">
            <Settings className="size-4 text-slate-500" aria-hidden="true" />
            {vehicle.trans}
          </span>
        </div>
        <ul className="mb-[16px] flex flex-col gap-2">
          {vehicle.specs.map((s) => (
            <li
              key={s}
              className="flex items-center gap-[9px] text-[13.5px] text-fg-2"
            >
              <Check
                className="size-[15px] shrink-0 text-forest"
                aria-hidden="true"
              />
              {s}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-sand-deep pt-[15px]">
          <div className="flex items-baseline">
            <b className="whitespace-nowrap font-display text-[20px] font-semibold text-maroon-600">
              {vehicle.price}
            </b>
            <span className="ml-[3px] text-xs text-fg-3">/ day</span>
          </div>
          <button
            type="button"
            onClick={() => open(vehicle.name)}
            className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-maroon-300 bg-transparent px-[14px] py-[7px] text-[13.5px] font-semibold text-maroon-600 transition-all duration-200 hover:bg-maroon-100"
          >
            Reserve
          </button>
        </div>
      </div>
    </article>
  );
}
