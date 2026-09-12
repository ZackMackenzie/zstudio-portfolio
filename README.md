# Zstudio

Portfolio site for **Zstudio** — a digital design & technology studio (websites, SaaS/product
design, branding, social media, motion/video, advertising creatives).

Single-page experience with dedicated `/work/[slug]` case studies, smooth scroll, scroll-triggered
motion, real motion assets produced with Remotion, and full **pt-BR / en / es** support with
automatic browser-language detection.

Page hierarchy is deliberately short (a 2026-09 simplification pass cut a standalone Capabilities
section, a Lab/experiments section, and later the Applications sub-section too): **Hero →
Selected Work → Services (a flat, combinable tool list — Zstudio isn't a fixed catalog) → About
(the tools/stack strip folded in) → Contact.** Every section is only there to help a visitor
understand the studio, judge the work, or get in touch — see the "Show less" note at the bottom
of this file before adding a new one.

The **header carries only the wordmark, the language switcher and Menu** — Work / Services /
About / Contact and the "Start a project" CTA live inside the menu overlay, not scattered across
the top bar. This was an explicit, later request: portfolio-first, minimal chrome.

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

## Services & positioning

Zstudio isn't sold as a fixed catalog of six things — it's a studio that solves whatever a
project needs, and the services are the tools it has for that. That shapes the Services section:

- **Services** (`content/services.ts` ids + `dict.services.items`) — 7 short entries (Websites,
  Landing Pages, SaaS & Product Design, Branding, Social Media, Motion & Video, Advertising), each
  just a title + one line. No accordion, no capability-chip walls, no per-service paragraph —
  index + name + one line, full stop.
- `dict.services.combineNote` — one sentence making the "not a catalog" positioning explicit
  ("One project can combine design, development, branding, motion and whatever else it needs").
  There's no separate "Applications"/industries section any more — client-type breadth is implied
  by the portfolio, not spelled out in a second list.
- **Capabilities** (`dict.about.capabilities`) — just four words (Design / Development / Motion /
  AI) inside **About**, not its own section or a tool-name shopping list.
- No pricing table. One line (`dict.cta.pricingNote`) at the end of Services says proposals are
  scoped per project.

## Contact — form + CTAs

`components/sections/Contact.tsx` has the site's one contact system: a short kicker + headline
("Have a project in mind? / Let's build something great, together."), quick email/WhatsApp
buttons, a proper form (Name, Email, Company/Project, Service of interest, Description, optional
Budget range), and the status/location/local-time/social block. **The form has no backend** (this
is a static export) — on submit it validates the required fields client-side and opens the
visitor's email client via a `mailto:` link pre-filled with the message (subject + all fields in
the body), then shows a short confirmation. Wiring a real form service (Formspree, Resend, a
serverless function) is a natural follow-up once you have an account for one — the current
version needed no external service or credentials.

`components/ui/StartProjectButton.tsx` is the recurring "Start a project" CTA — always scrolls to
`#contact`, never to an external page. It lives in the menu overlay (always reachable, one tap
from anywhere) and after Selected Work. The header and Hero deliberately don't have their own
CTA or nav links any more — see "Header & menu" below — and Footer/Contact don't repeat it either
(Contact's own headline is the site's closing CTA).

## Header & menu

The header is just the wordmark, `LanguageSwitcher`, and the Menu toggle — nothing else competes
for that space. `components/layout/MenuOverlay.tsx` carries Work / Services / About / Contact,
the "Start a project" CTA and the social links.

**Technical note:** `MenuOverlay` is always mounted (never `{open && <MenuOverlay/>}` +
`AnimatePresence`) and animates via plain CSS transition classes driven by an `open` boolean prop
— not Framer Motion's `animate` prop. A Framer-driven version of this (tried both as a
conditionally-mounted `motion.div` inside `AnimatePresence`, and later as an always-mounted one
with a state-driven `animate` target) was found to never actually reach its target values, in dev
*and* in the static production build, even though the underlying React state updated correctly —
CSS transitions don't have that problem. If you touch this component, keep the CSS-transition
approach; don't reintroduce a Framer `animate`/`AnimatePresence` show/hide here without verifying
it actually reaches its end state in a real, focused browser window (not just checking that state
toggled — `aria-expanded`/text can update correctly while the animated styles stay stuck).
`inert={!open}` (not just opacity/pointer-events) keeps it out of the tab order while closed.

## Where things live

```
app/                     routes, layout, metadata, sitemap/robots, OG image
  work/[slug]/            case-study route (static params from content/projects.ts)
components/
  sections/              Hero, SelectedWork, Services, About, Contact
  work/                  ProjectListItem, CaseIntro, CaseBlock, NextProject, CaseStudyView
  layout/                Navigation, MenuOverlay, Footer, SmoothScroll, Grain
  ui/                    MotionText, MagneticButton, StartProjectButton, LanguageSwitcher,
                         Marquee, Reveal, Media, MediaPlayer, GeneratedArt, SectionHeader
content/                 ← structural data only (see "Languages" above for where text lives)
  site.ts                non-translatable config: brand name, url, email, timezone, social hrefs
  projects.ts             project structure + case-block order
  services.ts             service id order (7 entries — title/summary live in the dictionaries)
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
- Skip link, semantic landmarks, `:focus-visible` rings, keyboard-operable menu / work list /
  language switcher / contact form.
- Standard system pointer everywhere (no custom cursor).
- Legibility over effect on purpose: secondary text uses `--text-dim` (kept bright enough for
  real contrast, not just a faded tint), mono labels/tags are `text-2xs`/`.label` at 12px with a
  medium weight rather than the thin, tiny caps that read fine on a design file but not on a
  screen.

## Notes

- All project entries are **concept projects** (`status: 'concept'`) — no invented clients,
  metrics or testimonials. The case pages say so plainly.
- Placeholder visuals are deterministic generated SVG art (`components/ui/GeneratedArt.tsx`), not
  stock imagery.
- `favicon`/icons are generated from `public/favicon.svg` via `node scripts/gen-icons.mjs`.
- **Show less, make it better.** Before adding a new top-level section, ask whether it helps a
  visitor understand the studio, judge the work, or reach out — if not, it belongs inside an
  existing section (or not on the page at all). This is why Lab and the standalone Capabilities
  section were removed rather than kept "just in case."
