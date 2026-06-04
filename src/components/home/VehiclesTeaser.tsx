import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  ShieldCheck,
  Tent,
  type LucideIcon,
} from "lucide-react";
import { VEHICLES } from "@/lib/data";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

const BULLETS: { Icon: LucideIcon; label: string }[] = [
  { Icon: ShieldCheck, label: "Fully serviced & insured fleet" },
  { Icon: Tent, label: "Camping & rooftop-tent kits" },
  { Icon: Headphones, label: "24/7 roadside support line" },
];

export function VehiclesTeaser() {
  const primary = VEHICLES[0];
  return (
    <section className="bg-paper py-[84px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[60px] px-sp-6 lg:grid-cols-[1fr_380px]">
        <div>
          <span className="kt-eyebrow">Self-drive or driver-guide</span>
          <h2 className="mt-2">Safari-ready 4×4 hire</h2>
          <p className="mt-[14px] mb-[22px] max-w-[480px] text-[16.5px] leading-[1.7] text-fg-2">
            Take the wheel yourself or travel with one of our driver-guides.
            Every Land Cruiser leaves our Kampala yard checked, kitted and
            ready for the parks — pop-top roofs, rooftop tents and full camping
            gear available.
          </p>
          <ul className="mb-[28px] flex flex-col gap-3">
            {BULLETS.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-[11px] text-[15.5px] font-medium text-fg-1"
              >
                <Icon
                  className="size-[19px] text-forest"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-2 rounded-pill bg-maroon-600 px-6 py-[13px] text-[15px] font-semibold text-fg-on-maroon shadow-maroon transition-all duration-200 hover:-translate-y-px hover:bg-maroon-800"
          >
            Browse the fleet
            <ArrowRight className="size-[17px]" aria-hidden="true" />
          </Link>
        </div>
        {primary && (
          <div>
            <VehicleCard vehicle={primary} />
          </div>
        )}
      </div>
    </section>
  );
}
