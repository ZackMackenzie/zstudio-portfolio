# Zstudio

Portfolio site for **Zstudio** — an independent creative studio building high-converting
websites, Apple-style product motion videos, and paid social creatives for startups,
hospitality brands, and performance marketers, in Brazil and internationally.

A single-page, visual-first flow: **Header → Hero → Curated Work (4 turnkey showcase projects,
each rendered as real code UI, not stock imagery) → Capabilities → Guarantees → Footer
(the conversion hub)**. No About section, no long contact form — every section exists to help a
visitor understand the studio, judge the work, or get in touch in one click; see "Show less" at
the bottom of this file.

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
npm run motion:render typography-reel  # render a subset
```

See [`remotion/README.md`](remotion/README.md) for how compositions map to the site. The site
plays rendered files via `components/ui/MediaPlayer.tsx`; it never bundles Remotion itself.

## Languages (English default / Portuguese toggle)

Client-side i18n — no `/en`, `/pt` routes (the site stays a single static export). Resolution
order:

1. A language the visitor picked before (`localStorage["zstudio-lang"]`).
2. The browser's language (`navigator.languages`) — `pt*` → pt-BR, anything else → English.
3. English, if nothing above matched.

The exported HTML is always English (the base locale); `app/layout.tsx` injects a tiny inline
script that resolves the real language into `window.__Z_LANG__` before the app loads. React
still hydrates as English (required — anything else throws a hydration mismatch), then
`lib/i18n/LanguageProvider.tsx` swaps to the resolved language right after mount. The `EN | PT`
switcher in the header (`components/ui/LanguageSwitcher.tsx`) saves the choice to `localStorage`
and it wins on every later visit.

**Where the text lives:**

- `lib/i18n/locales/en.ts` — the base locale and the `Dictionary` type every other locale must
  satisfy (TypeScript errors if `pt-BR.ts` is missing a field).
- `lib/i18n/locales/pt-BR.ts` — full, natural (not literal) translation.
- `content/*.ts` holds only **structural, non-text** data (slugs, ids, order, Remotion `clipId`s,
  UI-mockup refs, media dimensions) — see the header comment in each file.
  `lib/i18n/mergeProject.ts` joins a project's structure with its dictionary text into the
  `Project` shape the case-study components render.

**To add a 3rd language:** copy `lib/i18n/locales/en.ts` → `lib/i18n/locales/<locale>.ts`,
translate every value (type it as `en`'s `Dictionary`), add the locale to `LOCALES`/
`LOCALE_LABELS` in `lib/i18n/types.ts`, register it in `LanguageProvider.tsx`'s `dictionaries`
map, and add a match rule in `detect.ts` (`matchLocale` + the inline script string, kept in
sync).

**Known limitation:** `<title>`/meta description/OG image/JSON-LD are baked at build time in
English only (static export has no per-request rendering to branch on). Page content re-localizes
correctly client-side in both languages; only the SEO/social-preview layer stays English.

## Capabilities (Services)

`content/services.ts` (4 ids, order only) + `dict.services.items` — four scannable cards, no
accordion, no paragraph walls:

1. **Web Development & Landing Pages** — Next.js/React sites, SaaS marketing pages, Airbnb
   direct-booking pages, affiliate presell funnels.
2. **Apple-Style Motion & Videos** — kinetic typography reels, 3D UI product teasers,
   keynote-style launch videos.
3. **Social & Paid Ad Creatives** — Meta/LinkedIn ad creatives, carousel systems, story motion
   ads.
4. **Brand Assets & Messaging Kits** — WhatsApp promo banners, sales decks, launch identity
   systems.

`components/sections/Guarantees.tsx` renders the short turnaround/guarantee strip
(`dict.guarantees.items`) right below — 7-day sprint delivery, timezone-friendly collaboration,
99+ performance. No pricing table; `dict.cta.pricingNote` says proposals are scoped per project.

## Selected Work — 4 turnkey showcase projects

All 4 case studies are **concept projects** (`status: 'concept'`, a discreet badge on every card
and case page) — self-directed studio work, not real-client claims. No invented clients, metrics,
or testimonials.

| Slug | What it shows |
|---|---|
| `aura-stays` | Luxury Airbnb direct-booking page + an Apple-style video teaser |
| `kroma-ai` | Dark SaaS dashboard with a ⌘K command palette + launch-teaser badge |
| `apex-flow` | High-contrast affiliate bridge page — countdown, trust badges, comparison table |
| `studio-creatives` | Paid-social creative pack — carousel slide, WhatsApp promo banner |

Every case's cover/design media is a **real, code-rendered UI mockup** (`components/work/
mockups/`), not stock imagery or abstract wireframe art:

- `DashboardMockup` — SaaS dashboard; `overview` / `table` / `metric` / `cmdk` (⌘K palette +
  video-teaser badge) variants.
- `AirbnbShowcaseMockup` — `listing` (booking card) / `video` (teaser player) variants.
- `BrowserLandingMockup` — browser-chrome wrapper; `hero` / `pricing` / `proof` / `funnel`
  (countdown + trust badges + comparison table) variants.
- `SocialGridMockup` — `grid` / `square` / `story` / `whatsapp` (promo banner) variants.

`content/projects.ts` media entries carry an optional `mockup: {kind, variant}`, rendered by
`components/ui/Media.tsx` in place of the `GeneratedArt` abstract-art fallback (still used
wherever no mockup is set). Case pages are short by design: Overview → Design (mockup showcase) →
Result (one line, no apology — "a studio-owned project built to demonstrate design architecture,
production-grade code and typographic rigor") → Stack.

**⚠️ `Math.sin`/`Math.cos` gotcha:** transcendental math isn't guaranteed bit-identical between
Node's SSR pass and the browser's V8, which caused a real hydration mismatch on `DashboardMockup`'s
SVG sparkline (`.toFixed(2)` on the computed points fixed it). Round any `Math.sin/cos/tan`-derived
value before interpolating it into SSR'd markup.

## Header & Footer — the conversion hub

The header is a wordmark, a live "available for new projects" status pill (pulsing dot), the
`EN | PT` toggle, and a single `Book a Project` CTA straight to WhatsApp. No hamburger, no nav
links — the page is scroll-driven (Hero's primary CTA scrolls to `#work`).

`components/layout/Footer.tsx` is the **entire** contact system — frictionless by design, no
multi-field form:

- A direct WhatsApp link (`site.contact.whatsappUrl`, pre-filled message).
- Click-to-copy email (`site.contact.email`) with a "Copied!" tooltip (`navigator.clipboard`,
  gracefully no-ops if permission is denied — the email stays visible/selectable either way).
- A live São Paulo/UTC-3 clock (`Intl.DateTimeFormat`) next to an "Online now" pulsing-dot badge.

## Where things live

```
app/                     routes, layout, metadata, sitemap/robots, OG image
  work/[slug]/            case-study route (static params from content/projects.ts)
components/
  sections/              Hero, SelectedWork, Services, Guarantees
  work/                  ProjectListItem, CaseIntro, CaseBlock, NextProject, CaseStudyView
    mockups/               DashboardMockup, AirbnbShowcaseMockup, BrowserLandingMockup,
                           SocialGridMockup — code-rendered case-study UI previews
  layout/                Navigation, Footer, SmoothScroll, Grain
  ui/                    MotionText, MagneticButton, LanguageSwitcher, Reveal, Media,
                         MediaPlayer, GeneratedArt, SectionHeader
content/                 ← structural data only (see "Languages" above for where text lives)
  site.ts                non-translatable config: brand name, url, email, WhatsApp, timezone
  projects.ts             project structure + case-block order + mockup refs
  services.ts             capability id order (4 entries — copy lives in the dictionaries)
lib/
  i18n/                  locales (en base / pt-BR), LanguageProvider, detect.ts, mergeProject.ts
  motion.ts  hooks/  utils.ts  art (via GeneratedArt)
remotion/                motion compositions + shared theme
```

## Design tokens

Canonical values are CSS custom properties in `app/globals.css` (`:root`). They are mirrored in
`tailwind.config.ts` (utilities) and `remotion/theme.ts` (video). Change a value in all three to
keep the system in sync.

- Background: `--bg: #09090b` (deep obsidian); text: `--text: #fafafa`; hairlines:
  `--line: #1e1f22` (`border-white/10`-equivalent)
- Accent: `--accent: #2f6bff` (electric blue); `--accent-2: #34e1ff` (cyan, signature aura)

## Accessibility & motion

- Lenis smooth scroll disables itself under `prefers-reduced-motion`; transform animations fall
  back to opacity/instant.
- Skip link, semantic landmarks, `:focus-visible` rings, keyboard-operable language switcher.
- Standard system pointer everywhere (no custom cursor).
- Secondary text uses `--text-dim` at full opacity (kept bright enough for real contrast — avoid
  reintroducing low-opacity `text-dim/40`-`/60` modifiers, they read fine on a design file but
  fail contrast on a real screen).

## Notes

- All 4 case studies are self-directed **concept projects** — see "Selected Work" above. Never
  invent real clients, metrics, or testimonials.
- Placeholder contact data (`content/site.ts`) — email, WhatsApp number, Cal.com link — needs
  real values before this goes in front of paying clients; everything is marked PLACEHOLDER in
  the file.
- `favicon`/icons are generated from `public/favicon.svg` via `node scripts/gen-icons.mjs`.
- **Show less, make it better.** Before adding a new top-level section, ask whether it helps a
  visitor understand the studio, judge the work, or reach out — if not, it belongs inside an
  existing section or not on the page at all. This is why there's no About section and no
  multi-field contact form: the Footer's one-click actions do that job with less friction.
