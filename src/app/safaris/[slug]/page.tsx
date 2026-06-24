import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  Check,
  Compass,
  Leaf,
  MapPin,
  Mountain,
  Sun,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/data";
import { Photo } from "@/components/photo/Photo";

type Props = {
  params: Promise<{ slug: string }>;
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  trees: Trees,
  leaf: Leaf,
  sun: Sun,
  compass: Compass,
};

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = EXPERIENCES.find((e) => e.slug === slug);
  if (!exp) {
    return { title: "Safari — Kayigi Tours & Travel" };
  }
  return {
    title: `${exp.title} — Kayigi Tours & Travel`,
    description: exp.blurb,
  };
}

export default async function SafariPage({ params }: Props) {
  const { slug } = await params;
  const exp = EXPERIENCES.find((e) => e.slug === slug);
  if (!exp) notFound();

  const CatIcon = CATEGORY_ICONS[exp.icon] ?? Compass;
  const tagClass =
    exp.catClass === "forest"
      ? "bg-forest-wash text-forest"
      : "bg-gold-wash text-[#9c6c22]";

  const whatsappText = `Hi Kayigi, I'd like to add the ${exp.title} safari to a vehicle hire. Could you share rates and availability?`;
  const whatsappHref = `https://wa.me/256701004000?text=${encodeURIComponent(whatsappText)}`;

  return (
    <main className="flex-1">
      <section className="relative">
        <Photo
          variant={exp.photo}
          label={exp.title}
          className="relative h-[440px] sm:h-[520px] lg:h-[600px]"
          sizes="100vw"
          priority
          showHint={false}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(36,13,22,0.85)] via-[rgba(36,13,22,0.45)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1200px] px-sp-6 pb-[60px]">
              <span
                className={`inline-flex items-center gap-[6px] rounded-pill px-3 py-[6px] text-[11px] font-semibold uppercase tracking-[0.1em] ${tagClass}`}
              >
                <CatIcon className="size-[13px]" aria-hidden="true" />
                {exp.cat}
              </span>
              <h1 className="mt-[14px] max-w-[820px] text-white">{exp.title}</h1>
              <p className="mt-[14px] max-w-[680px] text-[16.5px] leading-[1.7] text-white/90">
                {exp.blurb}
              </p>
              <p className="mt-[10px] max-w-[680px] text-[13.5px] italic leading-[1.55] text-white/70">
                Bookable as an add-on to any Kayigi vehicle hire.
              </p>
            </div>
          </div>
        </Photo>
      </section>

      <section className="bg-paper py-[60px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="grid grid-cols-2 gap-[26px] sm:grid-cols-4">
            <Fact icon={MapPin} label="Park" value={exp.park} />
            <Fact icon={Calendar} label="Duration" value={exp.days} />
            <Fact icon={Users} label="Group" value={exp.group} />
            <Fact icon={Mountain} label="Grade" value={exp.grade} />
          </div>
        </div>
      </section>

      <section className="bg-sand py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[38px] max-w-[640px]">
            <span className="kt-eyebrow">Day by day</span>
            <h2 className="mt-2">Itinerary</h2>
          </div>
          <ol className="flex flex-col gap-[18px]">
            {exp.days_list.map((day) => (
              <li
                key={day.d}
                className="rounded-lg bg-surface-card p-6 shadow-md"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-maroon-600">
                    {day.d}
                  </span>
                  <h3 className="font-display text-[20px] font-semibold leading-tight text-fg-1">
                    {day.t}
                  </h3>
                </div>
                <p className="mt-[10px] text-[15.5px] leading-[1.65] text-fg-2">
                  {day.b}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[28px] max-w-[640px]">
            <span className="kt-eyebrow">What&apos;s included</span>
            <h2 className="mt-2">What this add-on includes</h2>
          </div>
          <ul className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
            {exp.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[10px] text-[15.5px] text-fg-1"
              >
                <Check
                  className="mt-[3px] size-[18px] shrink-0 text-forest"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6 text-center">
          <span className="kt-eyebrow">Add it to your hire</span>
          <h2 className="mt-2">Add {exp.title} to your hire</h2>
          <p className="mx-auto mt-[14px] max-w-[560px] text-[16.5px] leading-[1.7] text-fg-2">
            Tell us your dates and which vehicle you&apos;d like to drive —
            we&apos;ll bundle this safari onto your hire with rates,
            permits and a route plan sorted within hours.
          </p>
          <div className="mt-[28px] flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappHref}
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
              Browse vehicles
            </Link>
          </div>
          <p className="mt-[14px] text-[13px] text-fg-3">{exp.price}</p>
        </div>
      </section>
    </main>
  );
}

function Fact({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-[12px]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
        <Icon className="size-[18px]" aria-hidden="true" />
      </span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-3">
          {label}
        </div>
        <div className="mt-[2px] font-display text-[17px] font-semibold leading-tight text-fg-1">
          {value}
        </div>
      </div>
    </div>
  );
}
