import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import type { ReactNode } from "react";

type PhotoProps = {
  /**
   * Either a kit variant key (`photo--forest`, `photo--maroon`) for the
   * gradient placeholder, or a path beginning with `/` for a local asset
   * rendered through `next/image`.
   */
  variant?: string;
  label?: string;
  className?: string;
  children?: ReactNode;
  /** Show the centered "image" hint with label. Only applies to gradient placeholder. */
  showHint?: boolean;
  /** Pass-through to `next/image` — set true for the hero only. */
  priority?: boolean;
  /** Pass-through to `next/image` for srcset generation. */
  sizes?: string;
};

type VariantKey = "default" | "forest" | "maroon";

const FALLBACK_BG: Record<VariantKey, string> = {
  default: "#3a2820",
  forest: "#1c2a20",
  maroon: "#3a0a1e",
};

const GRADIENT: Record<VariantKey, string> = {
  default:
    "radial-gradient(120% 80% at 20% 0%, rgba(197,138,61,0.35), transparent 60%), linear-gradient(160deg, #6e4632 0%, #3a2820 55%, #241813 100%)",
  forest:
    "radial-gradient(120% 80% at 80% 0%, rgba(92,131,102,0.4), transparent 60%), linear-gradient(160deg, #2f4a36 0%, #20312492 55%, #182019 100%)",
  maroon:
    "radial-gradient(110% 90% at 75% 10%, rgba(132,36,74,0.55), transparent 60%), linear-gradient(160deg, #5a1031 0%, #3a0a1e 60%, #2a0716 100%)",
};

function variantKey(variant?: string): VariantKey {
  if (variant === "photo--forest") return "forest";
  if (variant === "photo--maroon") return "maroon";
  return "default";
}

function isLocalPath(variant?: string): variant is string {
  return typeof variant === "string" && variant.startsWith("/");
}

export function Photo({
  variant,
  label,
  className = "",
  children,
  showHint = true,
  priority = false,
  sizes,
}: PhotoProps) {
  const path = isLocalPath(variant);
  const v = variantKey(variant);
  const style = path
    ? { backgroundColor: FALLBACK_BG[v] }
    : { backgroundColor: FALLBACK_BG[v], backgroundImage: GRADIENT[v] };
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      {path && (
        <Image
          src={variant!}
          alt={label ?? ""}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          style={{ objectFit: "cover" }}
        />
      )}
      {children}
      {showHint && !path && label && (
        <span className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[7px] text-[12px] font-medium tracking-[0.02em] text-white/40">
          <ImageIcon className="size-4" aria-hidden="true" />
          {label}
        </span>
      )}
    </div>
  );
}
