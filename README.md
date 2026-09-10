# ZStudio

Portfolio site for **ZStudio** — a digital design & technology studio (web design, development,
UI/UX, brand, social, motion, AI-accelerated production).

Single-page experience with dedicated `/work/[slug]` case studies, a custom cursor, smooth
scroll, scroll-triggered motion, and real motion assets produced with Remotion.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, **static export** → `out/`) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom-property design tokens |
| Motion | Framer Motion + Lenis (smooth scroll) |
| Video / motion assets | Remotion → rendered to `public/media/` |
| Fonts | `next/font` — Hanken Grotesk, Inter, IBM Plex Mono, Newsreader |

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
bundles Remotion itself.

## Where things live

```
app/                     routes, layout, metadata, sitemap/robots, OG image
  work/[slug]/            case-study route (static-generated from content/projects.ts)
components/
  sections/              Hero, SelectedWork, Services, About, Capabilities, Experiments, Contact
  work/                  ProjectListItem, CaseIntro, CaseBlock, NextProject
  layout/                Navigation, MenuOverlay, Footer, SmoothScroll, Grain
  cursor/                CustomCursor + store
  ui/                    MotionText, MagneticButton, Marquee, Reveal, Media, MediaPlayer, GeneratedArt, SectionHeader
content/                 ← EDIT THESE
  site.ts                identity, nav, contact, social links   (placeholders marked)
  projects.ts            all project + case-study data
  services.ts  capabilities.ts  experiments.ts
lib/                     motion presets, hooks, utils, generated-art seeding
remotion/                motion compositions + shared theme
```

## Editing content

- **Identity / links / contact** → `content/site.ts`. Every social link and the email are
  `PLACEHOLDER` — replace the `href` values, keep the keys.
- **Projects** → `content/projects.ts`. Header comment explains the shape. New project = one
  object in the array. Set `status: 'live'` when it has real visuals + copy; `placeholder`
  entries show an honest "In progress" tag and a holding state.
- **Real images** → drop optimized files in `public/media/` (`name.avif` + `name.webp` +
  `name.jpg`) and set the `src` (base name, no extension) on a `MediaRef`.
- **Services / Lab / stack** → the matching file in `content/`.

## Design tokens

Canonical values are CSS custom properties in `app/globals.css` (`:root`). They are mirrored
in `tailwind.config.ts` (utilities) and `remotion/theme.ts` (video). Change a value in all
three to keep the system in sync.

- Accent: `--accent: #2f6bff` (electric blue; cyan `--accent-2: #34e1ff` for the signature aura)
- Surfaces: `--bg`, `--bg-raised`; text: `--text`, `--text-dim`; hairlines: `--line`
- `.paper` flips the token roles for the inverted About section

## Accessibility & motion

- Custom cursor is desktop-only (`pointer: fine`) and removed under `prefers-reduced-motion`.
- Lenis smooth scroll disables itself under `prefers-reduced-motion`; all transform animations
  fall back to opacity/instant.
- Skip link, semantic landmarks, `:focus-visible` rings, keyboard-operable menu / work list / Lab.

## Notes

- All project entries are structured placeholders — no invented clients, metrics or testimonials.
- Placeholder visuals are deterministic generated SVG art (`lib/art` seeding), not stock imagery.
- `favicon`/icons are generated from `public/favicon.svg` via `node scripts/gen-icons.mjs`.
