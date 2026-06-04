"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { useEnquiry } from "@/components/enquiry/EnquiryProvider";

const NAV_LINKS = [
  { href: "/", label: "Safaris" },
  { href: "/vehicles", label: "4×4 Hire" },
  // Routes added in a later phase; links 404 until then.
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
] as const;

const SCROLL_THRESHOLD = 60;

export function Masthead() {
  const pathname = usePathname();
  const { open } = useEnquiry();
  const isHome = pathname === "/";
  // SSR initial: non-home routes start solid; home starts transparent and
  // syncs on mount in case the user reloaded mid-scroll.
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    const sync = () => setSolid(window.scrollY > SCROLL_THRESHOLD);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [isHome]);

  const navLinkClass = (active: boolean) =>
    [
      "relative py-1 text-[15px] font-medium transition-colors",
      solid
        ? active
          ? "text-maroon-600"
          : "text-ink-soft hover:text-maroon-600"
        : active
          ? "text-white"
          : "text-white/90 hover:text-white",
      active
        ? "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-current after:content-['']"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200",
        solid
          ? "bg-paper/90 backdrop-blur-[10px] shadow-[0_1px_0_var(--sand-deep)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[74px] max-w-[1200px] items-center gap-sp-6 px-sp-6">
        <Link
          href="/"
          aria-label="Kayigi Tours & Travel — home"
          className="flex shrink-0 items-center"
        >
          {/* Both logos rendered; visibility toggled to avoid load-flash on scroll. */}
          <Image
            src="/logos/logo-full-white.png"
            alt=""
            width={485}
            height={225}
            priority
            className={`h-[34px] w-auto ${solid ? "hidden" : ""}`}
          />
          <Image
            src="/logos/logo-full.png"
            alt=""
            width={485}
            height={225}
            priority
            className={`h-[34px] w-auto ${solid ? "" : "hidden"}`}
          />
        </Link>

        <nav className="ml-2 hidden gap-sp-5 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={navLinkClass(pathname === l.href)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-sp-4">
          <a
            href="tel:+256701004000"
            className={[
              "hidden items-center gap-2 text-sm font-medium transition-colors md:flex",
              solid ? "text-ink-soft" : "text-white/90",
            ].join(" ")}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>+256 701 004 000</span>
          </a>
          <button
            type="button"
            onClick={() => open()}
            className="inline-flex items-center gap-2 rounded-pill bg-maroon-600 px-[18px] py-[9px] text-[13.5px] font-semibold text-fg-on-maroon shadow-maroon transition-all duration-200 hover:-translate-y-px hover:bg-maroon-800 active:translate-y-0"
          >
            Plan my trip
          </button>
        </div>
      </div>
    </header>
  );
}
