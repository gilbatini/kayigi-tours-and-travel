import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, Phone, Users } from "lucide-react";

const FOOTER_LINKS = {
  safaris: [
    { href: "/", label: "Gorilla trekking" },
    { href: "/", label: "Chimp tracking" },
    { href: "/", label: "Savanna game drives" },
    { href: "/", label: "Grand Uganda tour" },
  ],
  vehicles: [
    { href: "/vehicles", label: "Land Cruiser TZ" },
    { href: "/vehicles", label: "Rooftop tents" },
    { href: "/vehicles", label: "Self-drive" },
    { href: "/vehicles", label: "Driver-guides" },
  ],
  brand: [
    { href: "/about", label: "About us" },
    { href: "/journal", label: "Journal" },
    { href: "/responsible-travel", label: "Responsible travel" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

const SOCIAL_ICONS = [
  { Icon: Camera, label: "Instagram (placeholder)" },
  { Icon: Users, label: "Facebook (placeholder)" },
  { Icon: Mail, label: "Email" },
  { Icon: Phone, label: "Phone" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-[#cbbfb8]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-sp-7 px-sp-6 pt-sp-8 pb-sp-7 sm:grid-cols-[1.3fr_2fr]">
        <div>
          <Image
            src="/logos/logo-full-white.png"
            alt="Kayigi Tours & Travel"
            width={485}
            height={225}
            className="mb-sp-4 h-[38px] w-auto"
          />
          <p className="mb-sp-5 max-w-[320px] text-sm leading-relaxed text-[#a89c95]">
            Ugandan-owned safaris &amp; 4×4 hire. Plot 14, Kampala Road,
            Kampala, Uganda.
          </p>
          <div className="flex gap-2">
            {SOCIAL_ICONS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-maroon-600"
              >
                <Icon className="size-4 text-[#e6ddd7]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-sp-6 sm:grid-cols-3">
          <FooterColumn title="Safaris" links={FOOTER_LINKS.safaris} />
          <FooterColumn title="Vehicle hire" links={FOOTER_LINKS.vehicles} />
          <FooterColumn title="Kayigi" links={FOOTER_LINKS.brand} />
        </div>
      </div>

      <div className="border-t border-white/10 py-sp-4">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-sp-6 text-[13px] text-[#8a7e77] sm:flex-row sm:justify-between">
          <span>© 2026 Kayigi Tours &amp; Travel</span>
          <span>www.kayigitoursandtravel.com</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-sp-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
        {title}
      </h4>
      <ul className="flex flex-col gap-[11px]">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[14.5px] text-[#a89c95] transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
