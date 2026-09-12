# Zstudio

Portfolio site for **Zstudio** — a digital design & technology studio (websites, SaaS/product
design, branding, social media, motion/video, advertising creatives).

Single-page experience with dedicated `/work/[slug]` case studies, smooth scroll, scroll-triggered
motion, real motion assets produced with Remotion, and full **pt-BR / en / es** support with
automatic browser-language detection.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, **static export** → `out/`) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom-property design tokens |
| Motion | Framer Motion + Lenis (smooth scroll) |
| Video / motion assets | Remotion → rendered to `public/media/` |
| Fonts | `next/font` — Hanken Grotesk, Inter, IBM Plex Mono, Newsreader |
| i18n | Custom client-side system — `lib/i18n/` (see below) |

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

Deploy `out/` to any static host (Vercel, Netlify, Cloudflare Pages, S3…). Set the real domain
in `content/site.ts` (`site.url`) first — it drives canonical URLs, OG tags, sitemap and robots.

## Motion assets (Remotion)

```bash
npm run motion:studio                 # preview / tweak compositions
npm run motion:render                 # render all → public/media/<id>.{webm,mp4} + poster
npm run motion:render typography-reel  # render a subset
```

See [`remotion/README.md`](remotion/README.md) for how compositions map to the site and how to
add new ones. The site plays the rendered files via `components/ui/MediaPlayer.tsx`; it never
bundles Remotion itself. Motion clips are only produced in pt-BR — not re-rendered per language.

## Languages (pt-BR / en / es)

Client-side i18n — no `/pt`, `/en`, `/es` routes (the site stays a single static export). How it
resolves the active language, in order:

1. A language the visitor picked before (`localStorage["zstudio-lang"]`).
2. The browser's language (`navigator.languages`) — `pt*` → pt-BR, `en*` → en, `es*` → es.
3. English, if nothing above matched.

The exported HTML is always pt-BR (the base locale); `app/layout.tsx` injects a tiny inline
script that resolves the real language into `window.__Z_LANG__` before the app loads. React
still hydrates as pt-BR (required — anything else throws a hydration mismatch), then
`lib/i18n/LanguageProvider.tsx` swaps to the resolved language right after mount. The manual
switcher (`PT / EN / ES` in the header and in the mobile menu — `components/ui/LanguageSwitcher.tsx`)
saves the choice to `localStorage` and it wins on every later visit.

**Where the text lives:**

- `lib/i18n/locales/pt-BR.ts` — the base locale and the `Dictionary` type every other locale
  must satisfy (TypeScript errors if `en.ts`/`es.ts` are missing a field).
- `lib/i18n/locales/en.ts`, `es.ts` — full translations (natural, not literal).
- `content/*.ts` now holds only **structural, non-text** data (slugs, ids, order, Remotion
  `clipId`s, generated-art seeds, media dimensions) — see the header comment in each file.
  `lib/i18n/mergeProject.ts` joins a project's structure with its dictionary text into the
  `Project` shape the case-study components render.

**To add a 4th language:**

1. Copy `lib/i18n/locales/en.ts` → `lib/i18n/locales/<locale>.ts` and translate every value.
2. Add the locale to `LOCALES` / `LOCALE_LABELS` in `lib/i18n/types.ts`.
3. Register the dictionary in `lib/i18n/LanguageProvider.tsx` (`dictionaries` map) and add a
   match rule in `lib/i18n/detect.ts` (`matchLocale` + the inline script string, kept in sync).

**Known limitation:** `<title>`/meta description/OG image/JSON-LD are baked at build time in
pt-BR only (static export has no per-request rendering to branch on). The page content itself
re-localizes correctly client-side in all three languages; only the SEO/social-preview layer
stays pt-BR. Real per-language SEO would need locale-prefixed routes, which was intentionally
skipped to keep the architecture simple and stable.

## Services, Applications, capabilities

- **Services** (`content/services.ts` ids + `dict.services.items`) — 6 services, each with a
  title, summary, one-paragraph detail and a curated capability list, shown as an accordion.
- **Applications** (`content/applications.ts` ids + `dict.services.applications`) — 7 business
  segments (SaaS & Startups, Local Businesses, Real Estate, Airbnb & Hospitality, Digital
  Products, E-commerce, Agencies) the same services get adapted to. Rendered inside the Services
  section, not a separate nav item. Never claims a real client — copy always reads "For…" /
  "Ideal for…".
- **Capabilities** (`dict.capabilities`) is the existing tools/stack section (Design / Frontend /
  Motion / AI / Delivery) — a different thing from "Applications" on purpose, kept as-is to avoid
  a redundant near-duplicate section.
- No pricing table. A one-line note (`dict.cta.pricingNote`) near Services says proposals are
  scoped per project.

## Contact — form + CTAs

`components/sections/Contact.tsx` has the site's one contact system: quick email/WhatsApp
buttons, a proper form (Name, Email, Company/Project, Service of interest, Description, optional
Budget range), and the status/location/local-time/social block. **The form has no backend** (this
is a static export) — on submit it validates the required fields client-side and opens the
visitor's email client via a `mailto:` link pre-filled with the message (subject + all fields in
the body), then shows a short confirmation. Wiring a real form service (Formspree, Resend, a
serverless function) is a natural follow-up once you have an account for one — the current
version needed no external service or credentials.

`components/ui/StartProjectButton.tsx` is the recurring "Start a project" CTA — always scrolls to
`#contact`, never to an external page. It appears in the header (`lg:` and up — hidden below that
to avoid crowding, still reachable via the mobile menu), the hero, after Services, after Selected
Work, and in the footer.

## Where things live

```
app/                     routes, layout, metadata, sitemap/robots, OG image
  work/[slug]/            case-study route (static params from content/projects.ts)
components/
  sections/              Hero, SelectedWork, Services, About, Capabilities, Experiments, Contact
  work/                  ProjectListItem, CaseIntro, CaseBlock, NextProject, CaseStudyView
  layout/                Navigation, MenuOverlay, Footer, SmoothScroll, Grain
  ui/                    MotionText, MagneticButton, StartProjectButton, LanguageSwitcher,
                         Marquee, Reveal, Media, MediaPlayer, GeneratedArt, SectionHeader
content/                 ← structural data only (see "Languages" above for where text lives)
  site.ts                non-translatable config: brand name, url, email, timezone, social hrefs
  projects.ts             project structure + case-block order
  services.ts  applications.ts  experiments.ts
lib/
  i18n/                  locales, LanguageProvider, detect.ts, mergeProject.ts
  motion.ts  hooks/  utils.ts  art (via GeneratedArt)
remotion/                motion compositions + shared theme
```

## Design tokens

Canonical values are CSS custom properties in `app/globals.css` (`:root`). They are mirrored
in `tailwind.config.ts` (utilities) and `remotion/theme.ts` (video). Change a value in all
three to keep the system in sync.

- Accent: `--accent: #2f6bff` (electric blue; cyan `--accent-2: #34e1ff` for the signature aura)
- Surfaces: `--bg`, `--bg-raised`; text: `--text`, `--text-dim`; hairlines: `--line`
- `.paper` flips the token roles for the inverted About section

## Accessibility & motion

- Lenis smooth scroll disables itself under `prefers-reduced-motion`; all transform animations
  fall back to opacity/instant.
- Skip link, semantic landmarks, `:focus-visible` rings, keyboard-operable menu / work list / Lab
  / language switcher / contact form.
- Standard system pointer everywhere (no custom cursor).

## Notes

- All project entries are **concept projects** (`status: 'concept'`) — no invented clients,
  metrics or testimonials. The case pages say so plainly.
- Placeholder visuals are deterministic generated SVG art (`components/ui/GeneratedArt.tsx`), not
  stock imagery.
- `favicon`/icons are generated from `public/favicon.svg` via `node scripts/gen-icons.mjs`.
