# Z.studio

The official portfolio for **Z.studio** — a digital design & technology studio. Built from
scratch as a full Next.js App Router site: editorial home page, individual case-study pages,
a working contact form, and a Remotion pipeline for the motion pieces embedded in the work.

## Identity

- **Palette**: black, white, neutral grays — plus one accent, electric blue (`--accent:
  #3a5bff`), used sparingly for CTAs, links, hover states, and motion details. See
  "Design tokens" below.
- **Type**: Space Grotesk (display/headlines), Inter (body/UI), IBM Plex Mono (labels,
  index numbers, tags) — all loaded via `next/font/google`.
- **Wordmark**: `Z.studio`, set in the display face with the period in accent blue
  (`components/ui/Logo.tsx`). No external logo file exists yet — if one is supplied later,
  swap it in `Logo.tsx`, `favicon.svg`, and `app/opengraph-image.tsx` without touching layout.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, standard Node/Vercel runtime — not static export, because the contact form needs a live API route) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom-property design tokens |
| Motion | Framer Motion (site), Remotion (rendered video assets) |
| Email | Resend (`app/api/contact/route.ts`) |
| i18n | `/pt`, `/en`, `/es` — URL-segment based, middleware-detected, cookie-persisted |

## Develop

```bash
npm install
npm run dev            # http://localhost:3000
```

**Never run `next build` while `next dev` is running against the same `.next` folder** — they
can race and corrupt the dev server's module cache (manifests as `__webpack_modules__[id] is
not a function` / random 500s). Stop one before running the other, or point `next build` at a
separate working copy.

```bash
npm run typecheck
npm run lint
npm run build
```

## i18n

Locales live at `/pt`, `/en`, `/es` (`app/[locale]/…`). `middleware.ts` redirects `/` and any
locale-less path to the best match: a saved `z_locale` cookie first, then the browser's
`Accept-Language` header, then English. The in-page `PT / EN / ES` switcher
(`components/ui/LanguageSwitcher.tsx`) sets that cookie and re-routes client-side.

**Where the text lives:**

- `lib/i18n/types.ts` — the `Dictionary` type every locale must satisfy.
- `lib/i18n/locales/{en,pt,es}.ts` — full copy per locale (nav, hero, services, about, contact
  form, footer, 404, case-study labels).
- `content/projects.ts` — structural project data (slug, year, tech, which services apply)
  plus each project's copy nested per locale (`project.copy.en/pt/es`).

**To add a 4th language:** add it to `LOCALES`/`LOCALE_LABELS`/`LOCALE_NAMES` in
`lib/i18n/types.ts`, add `lib/i18n/locales/<locale>.ts` (copy `en.ts` and translate every
value), register it in `lib/i18n/dictionaries.ts`, and add a `copy.<locale>` entry to every
project in `content/projects.ts`.

## Work / case studies

`content/projects.ts` defines 6 **self-directed concept projects** — clearly labelled
"Concept project" on every card and case page. None are real clients; no invented metrics or
testimonials. Each has a `visual` id rendered by `components/work/ProjectVisual.tsx` — bespoke
SVG/CSS compositions (not fake screenshots) standing in for product shots. The one audiovisual
case (`apex`) embeds a real rendered video from the Remotion pipeline instead.

Case study route: `app/[locale]/work/[slug]/page.tsx` — Overview → Challenge → Solution →
(optional) Process → Result (omitted/honest placeholder when there's no real metric to report,
per project) → visual showcase → next project.

## Remotion (motion pipeline)

```bash
npm run motion:studio     # preview/tweak compositions in Remotion Studio
npm run motion:render     # render all compositions → public/media/
```

`remotion/components/` holds the reusable building blocks (`KineticText`, `DeviceFrame`,
`BrowserMockup`, `PhoneMockup`, `ProductScreen`, `Cursor`, `ProjectPreview`) so new
compositions compose from the same system instead of one-off code. `remotion/Root.tsx`
registers compositions; `scripts/render-motion.mjs` bundles and renders each one to
`public/media/<name>.{mp4,webm}` + a JPEG poster. Currently renders `ApexReel`
(`public/media/apex-reel.*`), embedded on the Apex case study via
`components/ui/MediaPlayer.tsx` (falls back to the poster image, then to `ProjectVisual`, if
video fails to load).

Add a new video: build a composition in `remotion/compositions/`, register it in
`remotion/Root.tsx`, add it to the `RENDER` array in `scripts/render-motion.mjs`, run
`npm run motion:render`, commit the output.

## Contact form

`components/sections/Contact.tsx` posts to `app/api/contact/route.ts`, which validates with
Zod, rate-limits per IP (in-memory, 5 / 10 min — resets on cold start, good enough without
extra infra), and sends via [Resend](https://resend.com).

**Required environment variables** (see `.env.example`):

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key. Without it, the endpoint returns 500 and the form shows its error state — it never pretends to send. |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives submissions. |
| `CONTACT_FROM_EMAIL` | No | Verified sender address. Defaults to Resend's shared `onboarding@resend.dev`, which works without domain verification. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for metadata/OG/sitemap/robots. Falls back to the live Vercel URL. |

Set these in the Vercel project's Environment Variables before relying on the form in
production.

## Design tokens

Canonical values are CSS custom properties in `app/globals.css` (`:root`), mirrored in
`tailwind.config.ts` (utilities) and `remotion/theme.ts` (video). Update a value in all three
to keep the system in sync.

- Background `--bg: #060607`; raised surface `--bg-raised: #101013`; hairline `--line`
- Text `--text: #f6f6f4`; secondary `--text-dim: #97979d`
- Accent `--accent: #3a5bff` (the one chosen color — blue over red, for a more contemporary,
  trust-forward "digital studio" read); soft variant `--accent-soft`; tint `--accent-tint`

## Accessibility & motion

- `prefers-reduced-motion` disables the grain animation, the hero's autoplay-by-default video
  behavior, and collapses all Framer Motion transition durations globally (see the media query
  at the bottom of `app/globals.css`).
- The custom cursor (`components/ui/CustomCursor.tsx`) is **additive** — it never hides the
  real system cursor, and disables itself off `pointer: fine` and reduced-motion.
- Skip link, semantic landmarks, visible `:focus-visible` rings, keyboard-operable nav and
  language switcher, labelled form fields.

## Where things live

```
app/
  [locale]/              layout (root — html/body lives here), home page, work/[slug]
  api/contact/            contact form endpoint
  robots.ts, sitemap.ts, opengraph-image.tsx   — locale-agnostic, site-wide
  fonts.ts, globals.css
components/
  sections/               Hero, SelectedWork, Services, About, Contact
  work/                   ProjectCard, ProjectVisual
  layout/                 Navigation, Footer, Grain
  ui/                     Logo, CustomCursor, MagneticButton, Reveal, SectionHeader,
                          LanguageSwitcher, MediaPlayer, Marquee
content/                  site.ts (config), projects.ts (structural + per-locale copy)
lib/
  i18n/                   types, dictionaries, locales/{en,pt,es}, detect (Accept-Language)
  hooks/, motion.ts, utils.ts
middleware.ts             locale detection/redirect
remotion/                 motion compositions + reusable components + shared theme
scripts/                  gen-icons.mjs, render-motion.mjs
```

## Deploy (Vercel)

1. Push to the connected GitHub repo (`origin`).
2. Import the repo in Vercel (or it auto-deploys if already connected).
3. Set the environment variables above in the Vercel project settings.
4. Deploy. `NEXT_PUBLIC_SITE_URL` can be left unset for the first deploy (canonical/OG URLs
   fall back to the live Vercel URL); set it once a custom domain is attached, and redeploy.

## Notes

- All 6 case studies are self-directed **concept projects** — see "Work / case studies" above.
  Never invent real clients, metrics, or testimonials when adding more.
- `content/site.ts` has placeholder contact details (`hello@zstudio.design`, social links) —
  replace with real ones before this goes in front of paying clients.
- Icons are generated from `public/favicon.svg` via `npm run icons:gen` (uses `sharp`) —
  regenerate after changing the mark.
