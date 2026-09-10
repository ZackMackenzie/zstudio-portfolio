/**
 * ============================================================================
 * PROJECTS — single source of truth
 * ============================================================================
 * The homepage "Selected Work" list and every /work/[slug] case study are
 * generated from this array. To add a project:
 *
 *   1. Copy one object below and give it a unique `slug`.
 *   2. Set `status: 'live'` once it has real visuals + copy (placeholders show
 *      an "In progress" tag and a holding state on the case page).
 *   3. Drop real assets in /public/media and reference them via `cover` /
 *      block `media` (base filename, no extension — see components/ui/Media.tsx).
 *   4. Order in this array = order on the site. `next` links auto-wrap around.
 *
 * Do not invent client names, metrics, or testimonials. Placeholder entries
 * describe the *kind* of work and the approach — all true, all generic.
 * ============================================================================
 */

export type CaseBlock =
  | { type: 'overview'; body: string; meta: { label: string; value: string }[] }
  | { type: 'challenge'; body: string }
  | { type: 'approach'; body: string; steps?: string[] }
  | { type: 'design'; body: string; media?: MediaRef[] }
  | { type: 'development'; body: string; media?: MediaRef[] }
  | { type: 'motion'; body: string; clipId?: string }
  | { type: 'result'; body: string }
  | { type: 'gallery'; media: MediaRef[] }
  | { type: 'technologies'; groups: { label: string; items: string[] }[] };

export type MediaRef = {
  src?: string; // base filename under /public/media, no extension
  alt: string;
  width: number;
  height: number;
  seed?: string; // generated-art fallback seed
  accent?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  discipline: string; // short line under the title
  disciplines: string[]; // tag list
  year: string;
  status: 'live' | 'placeholder';
  summary: string;
  cover: MediaRef;
  blocks: CaseBlock[];
};

export const projects: Project[] = [
  {
    slug: 'saas-product-platform',
    title: 'Product Platform',
    discipline: 'SaaS / Product Design / Development',
    disciplines: ['Product Design', 'UI/UX', 'Frontend', 'Design System'],
    year: '2026',
    status: 'placeholder',
    summary:
      'End-to-end design and build of a SaaS platform — from information architecture and design system to a production React front end.',
    cover: { alt: 'Product Platform — abstract cover', width: 1600, height: 1100, seed: 'saas-product-platform', accent: true },
    blocks: [
      {
        type: 'overview',
        body: 'A full product surface designed and built as one system: a component library, a documented design language, and a front end wired to real data. The goal was a platform that could grow without the UI drifting.',
        meta: [
          { label: 'Scope', value: 'Design system, product UI, frontend build' },
          { label: 'Role', value: 'Design + Development' },
          { label: 'Timeline', value: 'Ongoing' },
          { label: 'Year', value: '2026' },
        ],
      },
      {
        type: 'challenge',
        body: 'Most early-stage products accumulate screens faster than they accumulate structure. The brief was to define the structure first — tokens, primitives, patterns — so every new feature slots into a system instead of expanding the surface area of decisions.',
      },
      {
        type: 'approach',
        body: 'Start from the data model and the primary jobs, not the screens. Design the system in the open, in code, so design and implementation never diverge.',
        steps: [
          'Map the core objects and the three or four jobs that matter most',
          'Define tokens: color, type, spacing, motion',
          'Build primitives and patterns as a documented library',
          'Assemble screens from the library — never bespoke',
        ],
      },
      {
        type: 'design',
        body: 'A restrained interface language: one accent, generous density controls, and a type scale that holds from dense tables to marketing surfaces.',
        media: [
          { alt: 'Interface system — overview', width: 1600, height: 1000, seed: 'saas-design-1' },
          { alt: 'Component states', width: 1600, height: 1000, seed: 'saas-design-2', accent: true },
        ],
      },
      {
        type: 'development',
        body: 'React and TypeScript, styled with a token layer that maps 1:1 to the design files. The component API is small on purpose — most screens are composition, not configuration.',
        media: [{ alt: 'Front end architecture', width: 1600, height: 1000, seed: 'saas-dev-1' }],
      },
      {
        type: 'motion',
        body: 'Motion is functional here: state transitions, optimistic updates, and focus movement. Nothing loops, nothing decorates.',
        clipId: 'typography-reel',
      },
      {
        type: 'result',
        body: 'Selected screens, metrics and the live product will be added here as this case is published.',
      },
      {
        type: 'technologies',
        groups: [
          { label: 'Design', items: ['Figma', 'Design tokens', 'Variable type scale'] },
          { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
          { label: 'Tooling', items: ['Storybook', 'Vercel', 'AI-assisted QA'] },
        ],
      },
    ],
  },
  {
    slug: 'brand-identity-system',
    title: 'Identity System',
    discipline: 'Brand / Art Direction / Web',
    disciplines: ['Brand Identity', 'Art Direction', 'Web Design', 'Motion'],
    year: '2026',
    status: 'placeholder',
    summary:
      'A visual identity built to live everywhere — wordmark, type system, motion language and a site that ships the brand rather than describing it.',
    cover: { alt: 'Identity System — abstract cover', width: 1600, height: 1100, seed: 'brand-identity-system' },
    blocks: [
      {
        type: 'overview',
        body: 'Identity work that treats the website as the primary artifact. The brand is defined by how it moves and composes on screen, then extracted back out into static applications.',
        meta: [
          { label: 'Scope', value: 'Wordmark, type, color, motion, website' },
          { label: 'Role', value: 'Art Direction + Design + Build' },
          { label: 'Deliverables', value: 'Guidelines, web build, social kit' },
          { label: 'Year', value: '2026' },
        ],
      },
      { type: 'challenge', body: 'A logo is easy to make and easy to ignore. The harder problem is a system with enough rules to be recognizable and enough room to be used by other people without falling apart.' },
      {
        type: 'approach',
        body: 'Design the smallest set of decisions that make everything downstream feel inevitable.',
        steps: ['Set the typographic voice', 'Fix the grid and spacing logic', 'Define one motion signature', 'Document with real examples, not swatches'],
      },
      { type: 'design', body: 'A confident grotesque wordmark, a strict editorial grid, and a single motion signature that repeats across every touchpoint.', media: [{ alt: 'Wordmark studies', width: 1600, height: 1000, seed: 'brand-design-1' }, { alt: 'Editorial layouts', width: 1600, height: 1000, seed: 'brand-design-2', accent: true }] },
      { type: 'motion', body: 'One reveal, one transition, one loop — applied consistently so motion becomes part of the identity rather than an effect.', clipId: 'motion-poster' },
      { type: 'gallery', media: [{ alt: 'Application — poster', width: 1200, height: 1500, seed: 'brand-gallery-1' }, { alt: 'Application — social', width: 1200, height: 1200, seed: 'brand-gallery-2', accent: true }, { alt: 'Application — web', width: 1600, height: 1000, seed: 'brand-gallery-3' }] },
      { type: 'result', body: 'Final guidelines, applications and the live site will be added here as this case is published.' },
      { type: 'technologies', groups: [{ label: 'Design', items: ['Figma', 'Type design tools'] }, { label: 'Motion', items: ['Remotion', 'After Effects'] }, { label: 'Web', items: ['Next.js', 'Framer Motion'] }] },
    ],
  },
  {
    slug: 'landing-page-conversion',
    title: 'Launch Page',
    discipline: 'Landing Page / Copy / Build',
    disciplines: ['Landing Page', 'Narrative', 'Frontend', 'Motion'],
    year: '2026',
    status: 'placeholder',
    summary:
      'A single-page launch experience — narrative structure, custom motion and a fast static build engineered for the first ten seconds.',
    cover: { alt: 'Launch Page — abstract cover', width: 1600, height: 1100, seed: 'landing-page-conversion', accent: true },
    blocks: [
      { type: 'overview', body: 'A launch page is a short film with a call to action. This one is built around a single narrative spine, with motion used to control pace rather than decorate sections.', meta: [{ label: 'Scope', value: 'Narrative, design, copy, build' }, { label: 'Role', value: 'Design + Development' }, { label: 'Focus', value: 'First impression, performance, clarity' }, { label: 'Year', value: '2026' }] },
      { type: 'challenge', body: 'The page has to do three jobs at once in a few seconds: establish quality, explain the offer, and make the next step obvious — on a slow connection, on a phone.' },
      { type: 'approach', body: 'Write the argument first. Design to the argument. Build it as static HTML that paints instantly.', steps: ['Draft the narrative as plain sentences', 'Storyboard the scroll', 'Design each beat', 'Ship static, measure Core Web Vitals'] },
      { type: 'design', body: 'Big type, deliberate whitespace, one idea per viewport. The design never competes with the message.', media: [{ alt: 'Scroll storyboard', width: 1600, height: 1000, seed: 'landing-design-1' }] },
      { type: 'development', body: 'Statically exported, images pre-optimized, motion gated behind reduced-motion. The target is a sub-second first paint and near-zero layout shift.', media: [{ alt: 'Performance profile', width: 1600, height: 1000, seed: 'landing-dev-1', accent: true }] },
      { type: 'motion', body: 'Scroll-linked reveals that pace the reader through the argument, plus one signature moment at the offer.', clipId: 'case-teaser' },
      { type: 'result', body: 'Final page, copy and performance numbers will be added here as this case is published.' },
      { type: 'technologies', groups: [{ label: 'Frontend', items: ['Next.js static export', 'Tailwind', 'Framer Motion'] }, { label: 'Performance', items: ['AVIF/WebP', 'Lazy media', 'Lighthouse budget'] }] },
    ],
  },
  {
    slug: 'social-creative-system',
    title: 'Creative System',
    discipline: 'Social / Motion / Templates',
    disciplines: ['Social', 'Motion Design', 'Templates', 'Art Direction'],
    year: '2026',
    status: 'placeholder',
    summary:
      'A templated system for social content — programmatic layouts and Remotion-rendered motion that keeps a feed consistent at volume.',
    cover: { alt: 'Creative System — abstract cover', width: 1600, height: 1100, seed: 'social-creative-system' },
    blocks: [
      { type: 'overview', body: 'Producing social content by hand does not scale and drifts off-brand fast. This system turns brand rules into templates and renders motion programmatically.', meta: [{ label: 'Scope', value: 'Template system, motion, render pipeline' }, { label: 'Role', value: 'Design + Motion + Tooling' }, { label: 'Output', value: 'Static posts + rendered video' }, { label: 'Year', value: '2026' }] },
      { type: 'challenge', body: 'Keep a feed looking like one hand made it while producing enough volume to matter — across formats, in a fraction of the time.' },
      { type: 'approach', body: 'Codify the layout logic. Feed it content. Render.', steps: ['Define a grid that works at 1:1, 4:5 and 9:16', 'Build layout templates as components', 'Compose motion in Remotion', 'Batch-render from a manifest'] },
      { type: 'motion', body: 'Every clip is a Remotion composition driven by data — change the copy and the props, re-render the set.', clipId: 'social-creative' },
      { type: 'gallery', media: [{ alt: 'Template — square', width: 1200, height: 1200, seed: 'social-gallery-1' }, { alt: 'Template — portrait', width: 1200, height: 1500, seed: 'social-gallery-2', accent: true }, { alt: 'Template — story', width: 1080, height: 1920, seed: 'social-gallery-3' }] },
      { type: 'result', body: 'Rendered sets and the production workflow will be added here as this case is published.' },
      { type: 'technologies', groups: [{ label: 'Motion', items: ['Remotion', 'React'] }, { label: 'Design', items: ['Figma', 'Programmatic layout'] }, { label: 'Pipeline', items: ['Node render script', 'AI copy drafts'] }] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getAdjacent = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { next: projects[0] };
  return { next: projects[(i + 1) % projects.length] };
};
