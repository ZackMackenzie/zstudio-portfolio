# Zstudio

Portfolio site for **ZSTUDIO®** — an independent studio building high-converting websites,
Apple-style product motion, and performance creative systems for global brands, founders, and
Brazilian clients alike.

A single-page, visual-first flow, Sui-inspired (Swiss grid, geometric type, dark obsidian +
electric cyan): **Header → Hero (headline + quick-metrics bar) → Curated Showcase (4 self-contained
project cards, no subpages) → Capabilities Matrix**. Footer (global, in `layout.tsx`) is the
conversion hub. No About section, no multi-field contact form, no case-study subroutes — every
case is fully readable in its own card, in under 5 seconds; see "Show less" at the bottom of this
file.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, **static export** → `out/`) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom-property design tokens |
| Motion | Framer Motion + Lenis (smooth scroll) |
| Video / motion assets | Remotion → rendered to `public/media/` |
| Fonts | `next/font` — Hanken Grotesk, Inter, IBM Plex Mono |
| i18n | Custom client-side system — `lib/i18n/` (English default, Portuguese toggle) |

## Develop

```bash
npm install
npm run dev            # http://localhost:3000
```

Type-checking and linting are **not** part of `next build` (keeps peak memory low). Run them
directly:

```bash
npm run typecheck
npm run lint
```

**Never run `next build` while `next dev` is running** — they share `.next` and the dev server
breaks (500s). Stop the dev server, build, then restart it.

## Build

```bash
npm run build          # static export to ./out
```

Deploy `out/` to any static host (Vercel, Netlify, Cloudflare Pages, S3…). `content/site.ts`
(`site.url`) resolves from `NEXT_PUBLIC_SITE_URL` and falls back to the live Vercel URL; set that
env var once a custom domain is live — it drives canonical URLs, OG tags, sitemap and robots.

## Motion assets (Remotion)

```bash
npm run motion:studio                 # preview / tweak compositions
npm run motion:render                 # render all → public/media/<id>.{webm,mp4} + poster
```

See [`remotion/README.md`](remotion/README.md) for how compositions map to the site.

## Languages (English default / Portuguese toggle)

Client-side i18n — no `/en`, `/pt` routes (the site stays a single static export). Resolution
order: a saved choice (`localStorage["zstudio-lang"]`) → the browser's language (`pt*` → pt-BR,
anything else → English) → English.

The exported HTML is always English (the base locale); `app/layout.tsx` injects a tiny inline
script that resolves the real language into `window.__Z_LANG__` before the app loads. React
hydrates as English (required — anything else throws a hydration mismatch), then
`lib/i18n/LanguageProvider.tsx` swaps to the resolved language right after mount. The `EN | PT`
switcher in the header (`components/ui/LanguageSwitcher.tsx`) saves the choice to `localStorage`.

**Where the text lives:**

- `lib/i18n/locales/en.ts` — base locale + the `Dictionary` type `pt-BR.ts` must satisfy.
- `lib/i18n/locales/pt-BR.ts` — full, natural (not literal) translation.
- `content/*.ts` holds only **structural, non-text** data (slugs, ids, order, mockup refs).

**To add a 3rd language:** copy `en.ts` → `lib/i18n/locales/<locale>.ts`, translate every value,
add it to `LOCALES`/`LOCALE_LABELS` in `lib/i18n/types.ts`, register it in
`LanguageProvider.tsx`'s `dictionaries` map, and add a match rule in `detect.ts`.

**Known limitation:** `<title>`/meta description/OG image/JSON-LD are baked at build time in
English only (static export, no per-request rendering). Page content re-localizes correctly
client-side in both languages; only the SEO/social-preview layer stays English.

**WhatsApp messages are locale-aware**: `dict.whatsappMessage` holds the pre-filled text per
language; `whatsappHref(message)` in `content/site.ts` builds the `wa.me` link from it. Every
WhatsApp CTA on the site (header, hero, footer) calls this with the current `dict.whatsappMessage`
— never a hardcoded link.

## Capabilities Matrix

`content/services.ts` (4 ids, order only) + `dict.services.items` — a bordered, Sui-style
technical grid (`components/sections/Services.tsx`), **not** cards or an accordion: each row is
`01 / LABEL` on the left and a `·`-separated capability list on the right.

1. **Web Architecture** — SaaS websites, Airbnb direct-booking, affiliate engines, custom
   React/Next.js.
2. **Motion & Video** — Apple-style keynote motion, UI feature teasers, kinetic typography reels.
3. **Performance Creative** — Meta & LinkedIn ads, high-retention carousels, WhatsApp promo kits.
4. **Brand & Strategy** — visual identity, design tokens, design systems in Figma.

No pricing table; `dict.cta.pricingNote` says proposals are scoped per project.

## Selected Work — 4 self-contained showcase cards

**There are no `/work/[slug]` subpages.** Every case study is a single, complete card rendered
directly on the home page (`components/work/ProjectCard.tsx`, listed by
`components/sections/SelectedWork.tsx`) — mockup, title, discipline, a one-paragraph pitch, and
tech tags, all visible without a click. All 4 are **concept projects** (a discreet badge on every
card) — self-directed studio work, not real-client claims. No invented clients, metrics, or
testimonials.

| Slug | Card |
|---|---|
| `aura-villa` | Airbnb direct-booking listing split with an Apple-style video teaser |
| `kroma-ai` | Dark SaaS dashboard with a ⌘K command palette + launch-teaser badge |
| `apex-flow` | Affiliate bridge page — countdown, Lighthouse-99 badge, trust stars, comparison table |
| `studio-system` | Paid-social bento: WhatsApp banner + carousel slide + story ad |

`content/projects.ts` defines each project's `mockup: {kind, variant}`; `components/ui/Media.tsx`
renders the matching component from `components/work/mockups/` (falling back to the abstract
`GeneratedArt` SVG wherever no mockup is set — unused today, kept for future placeholder cases):

- `DashboardMockup` — `overview` / `table` / `metric` / `cmdk` (⌘K palette + video-teaser badge).
- `AirbnbShowcaseMockup` — `listing` / `video` / `split` (both side-by-side).
- `BrowserLandingMockup` — browser-chrome wrapper; `hero` / `pricing` / `proof` / `funnel`
  (countdown + Lighthouse badge + trust stars + comparison table).
- `SocialGridMockup` — `grid` / `square` / `story` / `whatsapp` / `bento` (3-tile composite).

**⚠️ `Math.sin`/`Math.cos` gotcha:** transcendental math isn't guaranteed bit-identical between
Node's SSR pass and the browser's V8 — round any such value (e.g. `.toFixed(2)`) before
interpolating it into SSR'd markup, or it produces a real hydration mismatch (hit once on
`DashboardMockup`'s SVG sparkline).

**Mockup copy stays in English regardless of site locale** — decorative product-UI text ("MRR",
"Get started", "Claim your spot") reads as a normal SaaS/ad-creative convention in any language
context; it is not wired to the dictionary on purpose.

## Header & Footer — the conversion hub

The header is a wordmark (`ZSTUDIO®`), a live "available for new projects" status pill (pulsing
cyan dot), the `EN | PT` toggle, and a single `Start a Project` CTA straight to WhatsApp. No
hamburger, no nav links — the page is scroll-driven (Hero's primary CTA scrolls to `#work`).

`components/layout/Footer.tsx` is the **entire** contact system — frictionless by design:

- A direct WhatsApp link (`whatsappHref(dict.whatsappMessage)`, locale-aware pre-filled text).
- Click-to-copy email (`site.contact.email`) with a "Copied!" tooltip (`navigator.clipboard`,
  gracefully no-ops if permission is denied — the email stays visible/selectable either way).
- Two live clocks side by side — São Paulo/UTC-3 and New York/UTC-5 (`Intl.DateTimeFormat`) —
  next to an "Online now" pulsing-dot badge.

## Where things live

```
app/                     routes, layout, metadata, sitemap/robots, OG image
components/
  sections/              Hero, SelectedWork, Services
  work/                  ProjectCard
    mockups/               DashboardMockup, AirbnbShowcaseMockup, BrowserLandingMockup,
                           SocialGridMockup — code-rendered case-study UI previews
  layout/                Navigation, Footer, SmoothScroll, Grain
  ui/                    MotionText, MagneticButton, LanguageSwitcher, Reveal, Media,
                         MediaPlayer, GeneratedArt, SectionHeader
content/                 ← structural data only (see "Languages" above for where text lives)
  site.ts                non-translatable config: brand name, url, email, WhatsApp, timezone,
                         whatsappHref() helper
  projects.ts             project order + mockup refs (4 entries)
  services.ts             capability id order (4 entries — copy lives in the dictionaries)
lib/
  i18n/                  locales (en base / pt-BR), LanguageProvider, detect.ts
  motion.ts  hooks/  utils.ts  art (via GeneratedArt)
remotion/                motion compositions + shared theme
```

## Design tokens

Canonical values are CSS custom properties in `app/globals.css` (`:root`). They are mirrored in
`tailwind.config.ts` (utilities) and `remotion/theme.ts` (video). Change a value in all three to
keep the system in sync.

- Background: `--bg: #08090a` (technical black); card surface: `--bg-raised: #12151a`
  (`border-white/[0.08]` on cards, not the flatter `--line` hairline used for section rules)
- Text: `--text: #fafafa`; secondary: `--text-dim: #9aa0a8`
- Accent: `--accent: #0284c7` (deep cyan); `--accent-2: #38bdf8` (electric cyan — status dots, the
  signature bottom-left aura, active states); `--accent-tint: #e0f2fe` (rarely used ice tint)

## Accessibility & motion

- Lenis smooth scroll disables itself under `prefers-reduced-motion`; transform animations fall
  back to opacity/instant.
- Skip link, semantic landmarks, `:focus-visible` rings, keyboard-operable language switcher.
- Standard system pointer everywhere (no custom cursor).
- Secondary text uses `--text-dim` at full opacity — avoid reintroducing low-opacity
  `text-dim/40`-`/60` modifiers, they read fine on a design file but fail contrast on a real
  screen.

## Notes

- All 4 case cards are self-directed **concept projects** — see "Selected Work" above. Never
  invent real clients, metrics, or testimonials.
- Placeholder contact data (`content/site.ts`) — email, WhatsApp number, Cal.com link — needs
  real values before this goes in front of paying clients; everything is marked PLACEHOLDER.
- `favicon`/icons are generated from `public/favicon.svg` via `node scripts/gen-icons.mjs`.
- **Show less, make it better.** Before adding a new top-level section, ask whether it helps a
  visitor understand the studio, judge the work, or reach out in one click — if not, it doesn't
  belong on the page. This is why there's no About section, no contact form, and no case-study
  subroutes: the cards + footer already do that job, faster.
