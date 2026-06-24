"use client";

import { useState } from "react";
import { EXPERIENCES, type ExperienceCategory } from "@/lib/data";
import { ExperienceCard } from "./ExperienceCard";

const FILTERS = ["All", "Gorilla Trek", "Chimps", "Game Drive"] as const;
type FilterValue = (typeof FILTERS)[number];

export function Experiences() {
  const [active, setActive] = useState<FilterValue>("All");
  const list =
    active === "All"
      ? EXPERIENCES
      : EXPERIENCES.filter(
          (e) => e.cat === (active as ExperienceCategory),
        );

  return (
    <section
      id="experiences"
      className="scroll-mt-[74px] bg-paper py-[84px] even:bg-sand"
    >
      <div className="mx-auto max-w-[1200px] px-sp-6">
        <div className="mb-[38px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="kt-eyebrow">Pair your hire with a safari</span>
            <h2 className="mt-2">Add a guided trip</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={[
                    "rounded-pill border-[1.5px] px-[18px] py-[9px] text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "border-maroon-600 bg-maroon-600 text-fg-on-maroon"
                      : "border-sand-deep bg-transparent text-ink-soft hover:border-maroon-300 hover:text-maroon-600",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
          {list.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
