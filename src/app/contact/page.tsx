import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Kayigi Tours & Travel",
};

const waText = encodeURIComponent("Hi Kayigi, I'd like to get in touch.");
const enquiryWaHref = `https://wa.me/256701004000?text=${encodeURIComponent(
  "Hi Kayigi, I'd like to make an enquiry.",
)}`;

type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const DETAILS: ContactDetail[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+256 701 004 000",
    href: "tel:+256701004000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+256 701 004 000",
    href: `https://wa.me/256701004000?text=${waText}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@kayigitoursandtravel.com",
    href: "mailto:info@kayigitoursandtravel.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Plot 14, Kampala Road, Kampala, Uganda",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 8am–6pm EAT",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="bg-paper py-[84px]">
        <div className="mx-auto max-w-[1200px] px-sp-6">
          <div className="mb-[48px] max-w-[640px]">
            <span className="kt-eyebrow">Get in touch</span>
            <h1 className="mt-2">Contact us</h1>
            <p className="mt-[14px] text-[16.5px] leading-[1.7] text-fg-2">
              Questions about a safari, a vehicle, or a custom trip? Reach our
              Kampala team by phone, WhatsApp or email — we typically reply
              within a few hours.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2">
            <ul className="flex flex-col gap-[22px]">
              {DETAILS.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-100 text-maroon-600">
                      <Icon className="h-[19px] w-[19px]" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-fg-3">
                        {label}
                      </span>
                      <span className="mt-[2px] text-[16px] leading-[1.5] text-fg-1">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={label}>
                    {href ? (
                      <Link
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-center gap-4 transition-colors hover:text-maroon-600"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="rounded-lg bg-surface-card p-[32px] shadow-md sm:p-[40px]">
              <h2 className="font-display text-[26px] font-semibold leading-[1.2] text-fg-1">
                Send us a message
              </h2>
              <p className="mt-[12px] text-[15.5px] leading-[1.65] text-fg-2">
                The fastest way to reach our team is on WhatsApp. Tap below and
                we&apos;ll reply with rates, availability and next steps.
              </p>
              <a
                href={enquiryWaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[24px] inline-flex items-center gap-2 rounded-pill bg-[#25D366] px-6 py-[13px] text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              >
                Chat on WhatsApp
                <ArrowRight className="size-[17px]" aria-hidden="true" />
              </a>
              <p className="mt-[14px] text-[13px] text-fg-3">
                Typically replies within minutes during office hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
