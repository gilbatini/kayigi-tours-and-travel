const STATS = [
  { n: "12", l: "Years guiding Uganda" },
  { n: "6", l: "National parks covered" },
  { n: "100%", l: "Permits secured for you" },
  { n: "4.9★", l: "From 380+ travellers" },
] as const;

export function WhyBand() {
  return (
    <section className="bg-maroon-700 py-[88px] text-fg-on-maroon">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[56px] px-sp-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="kt-eyebrow text-gold-soft">
            Why travel with Kayigi
          </span>
          <h2 className="mb-[18px] mt-[14px] font-display text-[40px] font-semibold leading-[1.12] text-white">
            Local guides. Real wilderness.
            <br />
            Nothing left to chance.
          </h2>
          <p className="max-w-[480px] text-[16.5px] leading-[1.7] text-fg-on-maroon-soft">
            We&apos;re a Ugandan-owned operator based in Kampala. Our
            driver-guides grew up beside these parks — they read the forest,
            fix the truck, and get you to the gorillas. We handle the permits,
            the lodges and the logistics so your trip simply works.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[2px] overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2">
          {STATS.map((s) => (
            <div key={s.l} className="bg-maroon-700 px-7 py-[30px]">
              <div className="font-display text-[48px] font-semibold leading-[1] text-gold-soft">
                {s.n}
              </div>
              <div className="mt-2 text-[13.5px] text-fg-on-maroon-soft">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
