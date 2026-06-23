import type { Metadata } from "next";
import { VEHICLES } from "@/lib/data";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export const metadata: Metadata = {
  title: "Hire a Vehicle — Kayigi Tours & Travel",
};

export default function VehiclesPage() {
  return (
    <main className="flex-1">
      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[38px] max-w-[640px]">
            <span className="kt-eyebrow">Our fleet</span>
            <h1 className="mt-2">Hire a vehicle</h1>
            <p className="mt-[14px] text-[16.5px] leading-[1.7] text-fg-2">
              Self-drive or travel with one of our driver-guides. Every vehicle
              leaves our Kampala yard serviced, insured and ready for the road
              — from luxury SUVs for city stays to safari-ready 4×4s for the
              parks and family vans for the group.
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
