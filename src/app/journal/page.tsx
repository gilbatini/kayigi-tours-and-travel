import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal — Kayigi Tours & Travel",
};

const ctaWaHref = `https://wa.me/256701004000?text=${encodeURIComponent(
  "Hi Kayigi, I have a question about visiting Uganda.",
)}`;

export default function JournalPage() {
  return (
    <main className="flex-1">
      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="max-w-[760px]">
            <span className="kt-eyebrow">Field notes</span>
            <h1 className="mt-2">The Kayigi Journal</h1>
            <p className="mt-[18px] text-[16.5px] leading-[1.7] text-fg-2">
              Stories from the trail, park guides and travel tips written by
              the guides and drivers who live this country. We&apos;re still
              putting the first entries together — new posts coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mx-auto max-w-[640px] rounded-lg bg-surface-card p-[44px] text-center shadow-md sm:p-[56px]">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
              <BookOpen className="h-[24px] w-[24px]" aria-hidden="true" />
            </span>
            <h2 className="mt-[20px] font-display text-[26px] font-semibold leading-[1.25] text-fg-1">
              Stories are on the way
            </h2>
            <p className="mx-auto mt-[12px] max-w-[480px] text-[15.5px] leading-[1.65] text-fg-2">
              Park guides, trip reports and seasonal tips for visiting Uganda
              are being written now — check back soon, or reach out and
              we&apos;ll answer any question by hand in the meantime.
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
                Browse safaris
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
