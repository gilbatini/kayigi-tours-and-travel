import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Leaf,
  Recycle,
  Users,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Responsible Travel — Kayigi Tours & Travel",
};

type Pillar = { icon: LucideIcon; title: string; line: string };

const PILLARS: Pillar[] = [
  {
    icon: Leaf,
    title: "Conservation first",
    line: "Every gorilla permit, park fee and lodge night we book channels money directly into protecting Uganda's forests and the species that call them home.",
  },
  {
    icon: Users,
    title: "Local communities",
    line: "We stay at community-run lodges, eat at family kitchens and hire local trackers — so the villages around each park share in what travellers leave behind.",
  },
  {
    icon: Recycle,
    title: "Low-impact operations",
    line: "Refillable water bottles in every vehicle, no single-use plastics on our trips, and routes planned to keep fuel use and park pressure down.",
  },
  {
    icon: Heart,
    title: "Fair employment",
    line: "Our guides, drivers and office team are paid above the industry rate, with training, insurance and steady work between high seasons.",
  },
];

const ctaWaHref = `https://wa.me/256701004000?text=${encodeURIComponent(
  "Hi Kayigi, I'd like to plan a responsible trip.",
)}`;

export default function ResponsibleTravelPage() {
  return (
    <main className="flex-1">
      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="max-w-[760px]">
            <span className="kt-eyebrow">Travel that gives back</span>
            <h1 className="mt-2">Responsible travel</h1>
            <p className="mt-[18px] text-[16.5px] leading-[1.7] text-fg-2">
              Uganda&apos;s wildlife and the communities living beside it are
              the reason any of this works. We plan every trip to protect
              both — so the forests stay standing, the gorillas keep
              breeding, and the next generation of Ugandans grows up with
              the same parks to be proud of.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[44px] max-w-[640px]">
            <span className="kt-eyebrow">Our principles</span>
            <h2 className="mt-2">How we travel responsibly</h2>
          </div>
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ icon: Icon, title, line }) => (
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

      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-[1fr_1.2fr] lg:gap-[88px]">
            <div>
              <span className="kt-eyebrow">Where we stand</span>
              <h2 className="mt-2">Our commitment</h2>
            </div>
            <div className="flex flex-col gap-[18px] text-[16.5px] leading-[1.75] text-fg-2">
              <p>
                We try to leave every place a little better than we found
                it — picking up what others have left, supporting the
                rangers who keep the parks safe, and listening to the
                communities who know the land best. None of this is a
                marketing line; it&apos;s how a Ugandan-owned company stays
                welcome in its own home.
              </p>
              <p>
                We&apos;re also transparent about where your money goes.
                Permits, park fees and community levies are itemised on
                every quote, and we&apos;re happy to walk you through how
                each dollar is spent. Ask us anything — the answer will
                always be honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6 text-center">
          <span className="kt-eyebrow">Make it count</span>
          <h2 className="mt-2">Travel with purpose</h2>
          <p className="mx-auto mt-[14px] max-w-[560px] text-[16.5px] leading-[1.7] text-fg-2">
            Tell us what matters to you and we&apos;ll shape a trip that
            puts your money where it does the most good.
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
              href="/"
              className="inline-flex items-center gap-2 rounded-pill border-[1.5px] border-maroon-300 px-6 py-[13px] text-[15px] font-semibold text-maroon-600 transition-all duration-200 hover:bg-maroon-100"
            >
              Explore safaris
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
