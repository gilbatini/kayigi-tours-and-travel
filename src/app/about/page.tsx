import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Kayigi Tours & Travel",
};

const STATS = [
  { n: "12", l: "Years guiding Uganda" },
  { n: "6", l: "National parks covered" },
  { n: "100%", l: "Permits secured for you" },
  { n: "4.9★", l: "From 380+ travellers" },
] as const;

type Value = { icon: LucideIcon; title: string; line: string };

const VALUES: Value[] = [
  {
    icon: Compass,
    title: "Local guides",
    line: "Driver-guides born beside the parks — they know the terrain.",
  },
  {
    icon: ShieldCheck,
    title: "Permits & logistics",
    line: "Gorilla permits, lodges and park fees fully handled for you.",
  },
  {
    icon: Truck,
    title: "Well-kept 4×4 fleet",
    line: "Every vehicle leaves our yard serviced, insured and road-ready.",
  },
  {
    icon: BadgeCheck,
    title: "Fair, transparent pricing",
    line: "Clear quotes, no hidden fees — what we say is what you pay.",
  },
];

const ctaWaHref = `https://wa.me/256701004000?text=${encodeURIComponent(
  "Hi Kayigi, I'd like to plan a trip.",
)}`;

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="max-w-[760px]">
            <span className="kt-eyebrow">Who we are</span>
            <h1 className="mt-2">
              Ugandan-owned. Guiding from the ground up.
            </h1>
            <p className="mt-[18px] text-[16.5px] leading-[1.7] text-fg-2">
              Kayigi Tours &amp; Travel is a Kampala-based, Ugandan-owned safari
              and vehicle-hire company. Our driver-guides grew up beside these
              parks — they read the forest, fix the truck, and get you to the
              gorillas. We handle the permits, the lodges and the logistics so
              your trip simply works.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[1fr_1.2fr] lg:gap-[88px]">
            <div>
              <span className="kt-eyebrow">Our story</span>
              <h2 className="mt-2">Our story</h2>
            </div>
            <div className="flex flex-col gap-[18px] text-[16.5px] leading-[1.75] text-fg-2">
              <p>
                Kayigi started as a small team of Ugandan guides who had spent
                years tracking gorillas in Bwindi, reading the savannah of
                Queen Elizabeth, and driving the long roads between them. We
                turned that ground knowledge into a company — one that runs
                trips the way we&apos;d want our own families to travel.
              </p>
              <p>
                Today we plan everything from a half-day around Kampala to
                multi-park expeditions across Uganda. What hasn&apos;t changed
                is the principle: fair, transparent pricing, well-kept
                vehicles, guides who take pride in their craft, and travellers
                who leave as friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-maroon-700 py-[84px] text-fg-on-maroon">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[36px] max-w-[640px]">
            <span className="kt-eyebrow text-gold-soft">By the numbers</span>
            <h2 className="mt-2 font-display text-[34px] font-semibold leading-[1.18] text-white">
              A decade of guiding,
              <br className="hidden sm:block" /> trip after trip.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[2px] overflow-hidden rounded-lg bg-white/15 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="bg-maroon-700 px-7 py-[30px]">
                <div className="font-display text-[44px] font-semibold leading-[1] text-gold-soft">
                  {s.n}
                </div>
                <div className="mt-2 text-[13.5px] leading-[1.4] text-fg-on-maroon-soft">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[44px] max-w-[640px]">
            <span className="kt-eyebrow">What sets us apart</span>
            <h2 className="mt-2">Why travel with Kayigi</h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, line }) => (
              <div
                key={title}
                className="rounded-lg bg-surface-card p-[26px] shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
                  <Icon className="h-[20px] w-[20px]" aria-hidden="true" />
                </span>
                <h3 className="mt-[18px] font-display text-[18px] font-semibold leading-[1.3] text-fg-1">
                  {title}
                </h3>
                <p className="mt-[8px] text-[14.5px] leading-[1.6] text-fg-2">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6 text-center">
          <span className="kt-eyebrow">Ready when you are</span>
          <h2 className="mt-2">Plan your Uganda trip</h2>
          <p className="mx-auto mt-[14px] max-w-[560px] text-[16.5px] leading-[1.7] text-fg-2">
            Tell us your dates and we&apos;ll send tailored rates,
            availability and a route plan within hours.
          </p>
          <div className="mt-[28px] flex flex-wrap items-center justify-center gap-3">
            <a
              href={ctaWaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill bg-[#25D366] px-6 py-[13px] text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
            >
              Chat on WhatsApp
              <ArrowRight className="size-[17px]" aria-hidden="true" />
            </a>
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-maroon-300 px-6 py-[13px] text-[15px] font-semibold text-maroon-600 transition-all duration-200 hover:bg-maroon-100"
            >
              Browse the fleet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
