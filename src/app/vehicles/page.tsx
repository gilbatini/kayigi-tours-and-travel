import type { Metadata } from "next";
import {
  Fuel,
  Headphones,
  Key,
  ShieldCheck,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { VEHICLES } from "@/lib/data";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export const metadata: Metadata = {
  title: "Hire a Vehicle — Kayigi Tours & Travel",
};

const INCLUDES: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: "Comprehensive insurance" },
  { Icon: Wrench, label: "Serviced before every trip" },
  { Icon: Fuel, label: "Full tank on collection" },
  { Icon: Headphones, label: "24/7 roadside support" },
];

export default function VehiclesPage() {
  return (
    <main className="flex-1">
      <section className="bg-paper pb-[44px] pt-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="max-w-[720px]">
            <span className="kt-eyebrow">Our fleet</span>
            <h1 className="mt-2">Hire a vehicle in Uganda</h1>
            <p className="mt-[14px] text-[16.5px] leading-[1.7] text-fg-2">
              Self-drive or travel with one of our driver-guides. From premium
              SUVs for city stays and airport runs to safari-ready 4×4s for the
              parks — every vehicle leaves our Kampala yard serviced, fuelled
              and insured.
            </p>
          </div>
          <div className="mt-[34px] grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDES.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-md border border-sand-deep bg-surface-card px-[14px] py-[12px]"
              >
                <Icon
                  className="size-[19px] shrink-0 text-forest"
                  aria-hidden="true"
                />
                <span className="text-[14.5px] font-medium text-fg-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-[64px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[28px] max-w-[640px]">
            <span className="kt-eyebrow">How it works</span>
            <h2 className="mt-2">Self-drive or with a driver-guide</h2>
          </div>
          <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-2">
            <HireOption
              Icon={Key}
              title="Self-drive"
              body="Take the keys and go. We hand the vehicle over with a full tank, route notes, an unlocked Ugandan SIM and 24/7 roadside support if anything goes sideways. Minimum 21 years, full licence, refundable deposit on collection."
              points={[
                "Full insurance & roadside cover",
                "Camping kit & rooftop tent on request",
                "Pick-up in Kampala or Entebbe",
              ]}
            />
            <HireOption
              Icon={UserCheck}
              title="With a driver-guide"
              body="Travel with one of our Ugandan driver-guides — fluent in English, trained on every park gate, and quietly excellent at fixing things. You get the seat, the camera and the conversation; we handle the road."
              points={[
                "Daily rate covers driver, fuel & insurance",
                "Guide accommodation & meals included",
                "Bookable with any vehicle in the fleet",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[38px] max-w-[640px]">
            <span className="kt-eyebrow">Browse the fleet</span>
            <h2 className="mt-2">Available vehicles</h2>
            <p className="mt-[14px] text-[16.5px] leading-[1.7] text-fg-2">
              Day rates are indicative — get in touch for week+ rates,
              cross-border permits and Kampala-to-park transfers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {VEHICLES.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HireOption({
  Icon,
  title,
  body,
  points,
}: {
  Icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
}) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-surface-card p-7 shadow-md">
      <div className="mb-[14px] inline-flex size-[42px] items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
        <Icon className="size-[20px]" aria-hidden="true" />
      </div>
      <h3 className="font-display text-[24px] font-semibold leading-tight text-fg-1">
        {title}
      </h3>
      <p className="mt-[10px] text-[15.5px] leading-[1.65] text-fg-2">{body}</p>
      <ul className="mt-[18px] flex flex-col gap-2">
        {points.map((p) => (
          <li
            key={p}
            className="flex items-start gap-[9px] text-[14.5px] text-fg-2"
          >
            <span
              aria-hidden="true"
              className="mt-[7px] size-[6px] shrink-0 rounded-full bg-forest"
            />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}
