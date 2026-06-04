import Image from "next/image";

/**
 * Temporary holding page — replaced wholesale in Phase 6 (home sections).
 * Inline color styles override Phase 2's unlayered h1/p element bindings until
 * Phase 6 wraps the kt-* type classes in @layer components.
 */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-maroon-700 px-sp-6 py-sp-8 text-center">
      <div className="flex flex-col items-center gap-sp-8">
        <Image
          src="/logos/logo-full-white.png"
          alt="Kayigi Tours & Travel"
          width={485}
          height={225}
          priority
          className="h-auto w-[240px]"
        />
        <div className="flex flex-col items-center gap-sp-6">
          <h1
            className="font-display text-fg-on-maroon"
            style={{ color: "var(--fg-on-maroon)" }}
          >
            Kayigi Tours &amp; Travel
          </h1>
          <p
            className="font-sans text-fg-on-maroon-soft"
            style={{ color: "var(--fg-on-maroon-soft)" }}
          >
            Safaris and 4×4 hire in Uganda — site launching soon
          </p>
        </div>
        <div
          className="font-sans text-sm"
          style={{ color: "var(--fg-on-maroon-soft)" }}
        >
          Kampala, Uganda
        </div>
      </div>
    </main>
  );
}
