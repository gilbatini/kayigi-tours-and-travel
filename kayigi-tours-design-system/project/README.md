# Kayigi Tours & Travel — Design System

A brand-driven design system for **Kayigi Tours & Travel**, a Uganda-based inbound tour
operator. This system gives design agents the tokens, assets, and UI components needed to
build well-branded marketing pages, decks, and prototypes that look and feel like Kayigi.

---

## 1. Company & Product Context

**Kayigi Tours & Travel** is a Uganda-based inbound tour operator. Two product lines:

1. **Guided safaris** — gorilla trekking (Bwindi Impenetrable Forest), chimpanzee tracking
   (Kibale Forest), and savanna game drives across **Murchison Falls, Queen Elizabeth, and
   Kidepo Valley** national parks.
2. **Safari-ready 4×4 vehicle hire** — self-drive or with a driver-guide (Land Cruisers,
   pop-top roofs, rooftop tents, camping gear).

**Audience:** international travelers planning a Uganda trip — mostly leisure travelers from
Europe, North America, and beyond researching once-in-a-lifetime wildlife experiences.

**Surface:** a marketing website that sells trips and vehicle hire (browse experiences →
build/enquire about an itinerary → book or request a quote).

### Sources used to build this system
- **Logo / brand mark:** `uploads/01.jpg` (provided) — maroon gazelle-and-palms mark with
  the "KAYIGI / TOURS AND TRAVEL" wordmark on a cream card.
- **GitHub repo:** https://github.com/gilbatini/kayigi-tours-and-travel — **the repository
  is currently empty** (no commits/code at time of build). When the team pushes the real
  site, re-run this build to mine actual components, copy, and screens. Explore the repo
  further if/when it has content to improve fidelity.

> ⚠️ **Caveat:** With no codebase or Figma to mine, the color palette is sampled directly
> from the logo and the rest of the system (type, components, layouts) is an *informed brand
> interpretation* in the premium-editorial-safari direction — not a recreation of an existing
> site. Treat type and component choices as a proposed foundation to confirm, not as
> established fact. See the **Caveats & Ask** at the bottom.

---

## 2. Content Fundamentals (voice & tone)

Kayigi sells *experiences and trust* to travelers spending serious money on a bucket-list
trip. The voice is **warm, knowledgeable, and grounded** — a well-travelled local expert,
never a hard-sell call center.

| Trait | Guidance |
|---|---|
| **Person** | Speak to the reader as **"you"**; the company is **"we / our guides"**. Personal and human. |
| **Tone** | Warm, confident, quietly premium. Evokes place and wonder without purple prose. |
| **Casing** | Sentence case for headlines and body. Reserve UPPERCASE only for short eyebrows/labels (e.g. `GORILLA TREKKING`, `TOURS AND TRAVEL`) — letter-spaced. |
| **Emoji** | **None.** Not part of the brand. Use real photography and icons instead. |
| **Specifics over hype** | Name real places, durations, permits, and what's included. "3-day Bwindi gorilla trek" beats "amazing adventure". |
| **Numbers** | Concrete and reassuring: park names, trek durations, group sizes, "permit included", "12 years guiding". |

**Example copy (in-voice):**
- Eyebrow: `BWINDI IMPENETRABLE FOREST`
- Headline: *"Stand metres from a mountain gorilla."*
- Lead: *"Trek through misted rainforest with a Kayigi guide who knows these hills — and the
  families who live in them. Permits, transfers, and a packed lunch handled. You just walk."*
- CTA: `Plan my trek` · `Request a quote` · `See vehicles`

**Avoid:** exclamation-stuffing, "epic/amazing/unforgettable" filler, ALL-CAPS sentences,
emoji, generic stock-travel clichés.

---

## 3. Visual Foundations

The brand is **premium editorial safari**: deep maroon and warm cream, full-bleed wildlife
photography, an elegant serif paired with a sturdy grotesque, and generous, calm spacing.

### Color
- **Maroon (`#600C30` → `#6E1336`)** is the signature — sampled from the wordmark. Used for
  primary actions, the masthead, eyebrows, and key accents. Rich and heritage, never neon.
- **Warm cream / sand** neutrals (`#FBF9F2`, `#F2EBDD`) carry the page. The brand is
  *light and warm*, not dark — dark surfaces are maroon, not black.
- **Slate** (`#6E7A85`, from the logo subtitle) is the muted UI / secondary-text gray.
- **Earth accents** — **savanna gold** (`#C58A3D`) and **forest green** (`#2E5A3E`) — are
  used *sparingly* for category coding (gold = savanna game drives; forest = gorilla/chimp
  forest treks) and for CTA accents on dark/photographic backgrounds.
- Text is warm near-black (`#2A211E`), never pure `#000`.

### Type
- **Display:** *Cormorant Garamond* — an elegant, high-contrast editorial serif for hero and
  section headlines. Carries the "luxury travel magazine" feel. Sentence case, weight 600.
- **Sans / body / UI:** *Archivo* — a sturdy grotesque that echoes the bold geometric
  wordmark. Used for body copy, navigation, buttons, labels, and letter-spaced eyebrows.
- Pairing logic: serif for *romance and place*, sans for *clarity and action*.

### Backgrounds & imagery
- **Full-bleed photography** is central: gorillas, savanna at golden hour, Land Cruisers on
  red-dirt roads, the Nile at Murchison. Warm-toned, golden, slightly saturated — never cold
  or heavily desaturated. Black-and-white is *not* the brand.
- Photos carry **maroon-to-transparent "protection gradients"** at the bottom/edges so white
  text and logos stay legible. No heavy filters or duotones.
- Section backgrounds alternate **cream (`--paper`) and sand (`--sand`)**; occasional
  full-maroon sections for emphasis (testimonials, CTAs). Max 1–2 background colors per page.
- No busy patterns or noisy textures. A subtle paper warmth is enough.

### Cards
- White or cream surface, **small radius (`6–10px`)**, hairline warm border (`--sand-deep`)
  and a **soft warm shadow** (`--shadow-md`). Image-led cards use a larger radius (`18px`)
  with the photo bleeding to the card edges.
- No colored-left-border cards. No glassmorphism as a default (light blur only over photos).

### Corners, borders, elevation
- **Radii:** controls and cards are gently rounded (`6–10px`); pills (`999px`) for tags,
  filters, and primary CTAs. Hero/photo cards `18px`. Nothing sharp-cornered, nothing
  bubble-round.
- **Borders:** hairline, warm (`--sand-deep` / `--border-strong`), 1px. On maroon surfaces,
  borders are translucent cream.
- **Shadows:** warm-tinted (brown, not gray), soft and diffuse. Elevation is subtle —
  the brand leans on whitespace and imagery, not heavy drop shadows.

### Motion, hover & press
- **Easing:** gentle ease-out (`cubic-bezier(0.16,1,0.3,1)`); durations `140–480ms`. Calm
  and considered — fades and slow image scale, no bounces or springy overshoot.
- **Hover:** images scale up subtly (`1.04`) under a fixed frame; buttons darken
  (maroon → `--maroon-800`) or lift with a slightly stronger shadow; links draw a maroon
  underline. Cards lift a few px with a deeper warm shadow.
- **Press:** slight scale-down (`0.98`) and/or a darker fill. No color inversion.

### Transparency & blur
- Used only over photography: a translucent cream/maroon scrim behind nav over a hero, or a
  frosted booking bar. Never as a decorative default on flat backgrounds.

### Layout
- Generous margins, a calm editorial grid (12-col), wide gutters. Content max-width ~1200px
  for text-led sections; full-bleed for imagery. Sticky transparent-to-solid masthead.

---

## 4. Iconography

- **Approach:** thin-to-medium **line icons**, rounded joins, matching Archivo's friendly-
  but-sturdy character. Icons are used for trip facts (duration, group size, difficulty,
  vehicle specs, what's included) and wayfinding — not decoration.
- **Source / substitution:** the source repo is empty, so there is no in-house icon set to
  copy. This system standardizes on **[Lucide](https://lucide.dev)** (consistent 1.75–2px
  stroke, rounded caps) loaded from CDN — the closest match to the brand's clean, warm line
  style. **This is a flagged substitution**: if Kayigi has a preferred icon set, swap the
  CDN link and update this section.
- **Color:** icons take `currentColor` — maroon on cream, cream/gold on maroon, slate when
  muted. Stroke weight stays consistent across sizes (16 / 20 / 24 px).
- **Emoji:** never used. **Unicode glyphs** are not used as icons.
- **Logo / brand marks** live in `assets/` (full lockup, mark-only, plus white/cream
  reversals for dark and photographic backgrounds). Use the **white** lockup over photos and
  maroon; the **maroon** lockup on cream.

---

## 5. Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, index. |
| `colors_and_type.css` | All design tokens: color, type families + scale, spacing, radii, shadows, motion, plus semantic type classes (`.kt-h1`, `.kt-eyebrow`, etc.). **Import this everywhere.** |
| `SKILL.md` | Agent-Skill manifest so this folder works as a downloadable Claude skill. |
| `assets/` | Logo lockups (full / mark / white / cream reversals) and the original logo card. |
| `preview/` | Small HTML cards rendered in the Design System tab (colors, type, spacing, components). |
| `ui_kits/website/` | High-fidelity, interactive recreation of the Kayigi marketing website (homepage, experience detail, vehicle hire, enquiry). `index.html` + JSX components. |

### Fonts
Cormorant Garamond and Archivo load from **Google Fonts** (see `@import` at the top of
`colors_and_type.css`). No local font files are bundled. If the brand standardizes on
specific licensed faces, drop the `.woff2` files into `fonts/` and update the `@import`.

---

## 6. Caveats & the Ask

**Caveats**
- The GitHub repo is **empty**, so there was no real code, copy, or Figma to recreate. Colors
  are sampled from the logo; **type (Cormorant Garamond + Archivo), the accent palette
  (gold/forest), and all components are an interpretive proposal**, not Kayigi's established
  system.
- Iconography uses **Lucide via CDN** as a substitute for a missing in-house set.
- No photography is bundled — UI kits use labelled image placeholders for the user to fill.

**The ask** 👉 **Tell me which way to steer.** Specifically:
1. Is the **premium-editorial-serif** direction right, or do you want something more rugged /
   adventurous / modern-minimal?
2. Confirm or replace the **type pairing** and the **gold + forest accent** colors.
3. Share **real photography**, any **existing website**, or **push the repo** so I can lift
   true components and copy. Then I'll tighten everything to pixel-fidelity.
