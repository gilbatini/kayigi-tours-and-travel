# Kayigi Tours & Travel — Build Spec

## Project context
Marketing website for Kayigi Tours & Travel, a Uganda-based inbound tour
operator. Two product lines: guided safaris (gorilla trekking, chimp tracking,
game drives) and safari-ready 4x4 vehicle hire. Audience: international
leisure travellers. Single primary conversion: enquiry form.

## Stack
- Next.js 15 (App Router, TypeScript, strict mode)
- Tailwind CSS v4
- next/font for Cormorant Garamond + Archivo
- lucide-react for icons (NOT the CDN)
- Resend for enquiry email delivery
- Deploy: Vercel (account/team TBD — flag before deploying)
- No Supabase yet. No auth. No CMS. Data lives in `src/lib/data.ts`.

## Source of truth
The folder `kayigi-tours-design-system/` is READ-ONLY reference material.
Never edit files inside it. Never delete it. Treat it as the design spec.

When porting:
- Tokens come from `kayigi-tours-design-system/project/colors_and_type.css`
- Section structure/markup comes from `kayigi-tours-design-system/project/ui_kits/website/*.jsx`
- Visual ground-truth comes from `kayigi-tours-design-system/project/screenshots/*.png`
- Voice/tone, photography direction, and brand rules come from the two READMEs

The JSX in `ui_kits/website/` is plain React (SPA pattern with view-switching
state). We are porting it to Next.js App Router with real routes.

## Target structure
```
src/
├── app/
│   ├── layout.tsx              # Fonts, Masthead, Footer, EnquiryProvider
│   ├── page.tsx                # Home (Hero + Experiences + WhyBand + VehiclesTeaser)
│   ├── globals.css             # Tokens ported from colors_and_type.css
│   ├── safaris/[slug]/page.tsx # Experience detail (replaces Detail.jsx)
│   ├── vehicles/page.tsx       # Full fleet (replaces VehiclesScreen)
│   └── api/enquiry/route.ts    # POST → Resend
├── components/
│   ├── layout/{Masthead,Footer}.tsx
│   ├── home/{Hero,Experiences,ExperienceCard,WhyBand,VehiclesTeaser}.tsx
│   ├── vehicles/{VehicleCard,VehiclesScreen}.tsx
│   ├── detail/ExperienceDetail.tsx
│   └── enquiry/{EnquiryModal,EnquiryProvider}.tsx
└── lib/
    └── data.ts                 # EXPERIENCES[] + VEHICLES[] with slugs
public/
├── logos/                      # copy from design-system/assets
└── photos/                     # placeholder for now; real photos later
```

## Build phases — one at a time, approval-gated

### Phase 1 — Scaffold
- `npx create-next-app@latest .` in this directory (TypeScript, Tailwind,
  App Router, `src/`, no ESLint experimental, import alias `@/*`).
- Verify `kayigi-tours-design-system/` and `BUILD.md` are still present after
  scaffold (create-next-app should not touch them, but confirm).
- Commit: `chore: scaffold next.js 15 app`.

### Phase 2 — Design tokens
- Port every CSS variable from `colors_and_type.css` into `src/app/globals.css`
  under `:root`. Keep variable names identical (`--maroon-600`, `--sand`, etc.).
- Extend `tailwind.config.ts` so all tokens are accessible as Tailwind
  utilities (e.g. `bg-maroon-600`, `text-fg-1`, `rounded-md`, `shadow-maroon`,
  spacing scale `sp-1..sp-10`).
- Port the type classes (`.kt-display`, `.kt-h1` etc) and the h1–h4 bindings.
- Commit: `feat: port design tokens to tailwind + globals`.

### Phase 3 — Fonts
- Load Cormorant Garamond and Archivo via `next/font/google` in `app/layout.tsx`.
- Bind to CSS variables `--font-display` and `--font-sans` so the existing
  token references work.
- Commit: `feat: wire next/font for Cormorant + Archivo`.

### Phase 4 — Data layer
- Port `ui_kits/website/data.jsx` → `src/lib/data.ts` as typed TS.
- Add a `slug` field to each Experience (e.g. `bwindi-gorilla-trek`).
- Drop `useLucide` and the `Icon` wrapper — we'll use `lucide-react` directly.
- Keep `Photo` placeholder pattern (we render the asset path; missing assets
  fall back to a neutral block — do not break the layout).
- Commit: `feat: port experiences + vehicles data to typed ts`.

### Phase 5 — Layout shell
- Port `Masthead.jsx` → `src/components/layout/Masthead.tsx`. Use Next `<Link>`
  for nav. Keep the transparent-to-solid scroll behaviour (`"use client"`).
- Port `Footer.jsx` → `src/components/layout/Footer.tsx` (server component,
  static).
- Build `EnquiryProvider` (context, client) so any CTA can open the modal.
- Wire everything in `app/layout.tsx`.
- Commit: `feat: layout shell with masthead + footer + enquiry provider`.

### Phase 6 — Home page sections
- Port Hero, Experiences (with filter pills), ExperienceCard, WhyBand,
  VehiclesTeaser. Keep filter pills as a client component; everything else
  server where possible.
- The "Find trips" button scrolls to `#experiences`.
- The "Reserve" buttons on vehicle cards open the enquiry modal with the
  vehicle name pre-filled.
- Commit: `feat: home page sections`.

### Phase 7 — Routes
- `/safaris/[slug]` → port `Detail.jsx`. `generateStaticParams` from
  `EXPERIENCES`. `notFound()` for unknown slugs.
- `/vehicles` → port `VehiclesScreen`. The driver-guide / self-drive toggle
  stays client-side.
- Commit: `feat: detail + vehicles routes`.

### Phase 8 — Enquiry submission
- `EnquiryModal` as client component, controlled by `EnquiryProvider`.
- `POST /api/enquiry`: validate with zod, send via Resend to a TBD recipient
  (use env var `KAYIGI_ENQUIRY_TO`). Return `{ ok: true }` on success.
- Modal flips to success state on 200, shows error toast on non-200.
- Commit: `feat: enquiry submission via resend`.

### Phase 9 — Polish + screenshot review
- Compare every page against `kayigi-tours-design-system/project/screenshots/`
  using Playwright headed or manual screenshots. Report deltas.
- Fix obvious layout/spacing/colour drift only. No new features.
- Commit: `polish: align with design screenshots`.

## Working rules
- One phase per turn. Wait for approval before starting the next.
- After each phase: show the diff summary, then I review before commit.
- Never run `git push` without explicit approval — repo remote isn't set yet.
- Never overwrite `BUILD.md` or anything in `kayigi-tours-design-system/`.
- PowerShell uses `;`, your bash uses `&&` — use whichever fits the shell
  you're invoking.
- If `colors_and_type.css` and a screenshot disagree, the CSS tokens win.

## Open items I'll resolve out-of-band
- GitHub repo: `gilbatini/...` or new account? (flag before Phase 1's push)
- Vercel team for deployment.
- Resend domain + `KAYIGI_ENQUIRY_TO` recipient address.
- Real photography (currently the design system has placeholders only).
