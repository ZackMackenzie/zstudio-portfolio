/**
 * ============================================================================
 * en — base locale (English, default for international reach)
 * ============================================================================
 * Every visible string on the site lives here (and in the pt-BR.ts copy).
 * Structural data (slugs, seeds, mockup refs) lives in content/*.ts — see
 * lib/i18n/mergeProject.ts for how the two join.
 *
 * `Dictionary` (the type inferred from this file) is the contract pt-BR.ts
 * must satisfy — TypeScript flags any missing field.
 * ============================================================================
 */

export type MetaEntry = { label: string; value: string };
export type TechGroup = { label: string; items: string[] };
export type ProjectMedia = { alt: string };

export type ProjectText = {
  title: string;
  category: string;
  tags: string[];
  summary: string;
  overview: { body: string; meta: MetaEntry[] };
  design?: { body: string; media?: ProjectMedia[] };
  result: { body: string };
  technologies: { groups: TechGroup[] };
};

export type ServiceText = {
  title: string;
  summary: string;
};

const projects: Record<string, ProjectText> = {
  'aura-stays': {
    title: 'Aura Stays',
    category: 'Hospitality Web & Apple-Style Video',
    tags: ['Direct Booking Web', 'Video Motion', 'Social Ad Kit'],
    summary:
      'A direct-booking showcase and a cinematic teaser built to pull bookings off the platforms and onto the host’s own site.',
    overview: {
      body: 'Airbnb hosts lose 15–20% to platform fees. Aura Stays pairs a direct-booking property page with a short, Apple-style video teaser built for social — so guests book straight from the host, not the marketplace.',
      meta: [
        { label: 'Scope', value: 'Booking page + video teaser' },
        { label: 'Role', value: 'Design + Motion + Build' },
        { label: 'Format', value: 'Web + 0:30 video' },
        { label: 'Year', value: '2026' },
      ],
    },
    design: {
      body: 'A clean property page — gallery, direct-booking badge, instant date check — next to a cinematic teaser built for Reels and Stories.',
      media: [{ alt: 'Aura Stays — direct booking page' }, { alt: 'Aura Stays — video teaser' }],
    },
    result: {
      body: 'A studio-owned project — built to demonstrate direct-booking conversion design and short-form motion craft.',
    },
    technologies: {
      groups: [
        { label: 'Web', items: ['Next.js', 'Tailwind CSS'] },
        { label: 'Motion', items: ['Framer Motion', 'Remotion'] },
        { label: 'Design', items: ['Figma'] },
      ],
    },
  },
  'kroma-ai': {
    title: 'Kroma AI',
    category: 'SaaS Web & Apple-Style Product Video',
    tags: ['Next.js 15', 'Framer Motion', 'SaaS Ad Creatives'],
    summary: 'A dark, investor-ready dashboard with a command palette and a launch teaser built for a funding round.',
    overview: {
      body: 'SaaS founders raising money or fighting for signups need a product that already looks like the market leader. Kroma AI pairs a glowing, data-dense dashboard with a keynote-style launch teaser.',
      meta: [
        { label: 'Scope', value: 'Product UI + launch video' },
        { label: 'Role', value: 'Design + Frontend + Motion' },
        { label: 'Format', value: 'Web app + 0:30 video' },
        { label: 'Year', value: '2026' },
      ],
    },
    design: {
      body: 'A dark dashboard with live metrics, a ⌘K command palette, and a kinetic-typography teaser built for the launch page and paid social.',
      media: [{ alt: 'Kroma AI — dashboard overview' }, { alt: 'Kroma AI — command palette' }],
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
        { label: 'Motion', items: ['Framer Motion'] },
        { label: 'Design', items: ['Figma'] },
      ],
    },
  },
  'apex-flow': {
    title: 'Apex Flow',
    category: 'Conversion Funnels & Performance Creative',
    tags: ['Affiliate Bridge', 'Sub-second Speed', 'WhatsApp Kits'],
    summary: 'A sub-second bridge page built to warm up cold traffic and double click-through before the offer.',
    overview: {
      body: 'Media buyers need bridge pages that load instantly and build trust in seconds. Apex Flow uses urgency, social proof and a stripped-down comparison table to move traffic from ad to offer without friction.',
      meta: [
        { label: 'Scope', value: 'Bridge page + ad kit' },
        { label: 'Role', value: 'Design + Frontend' },
        { label: 'Focus', value: 'Speed, trust, CTR' },
        { label: 'Year', value: '2026' },
      ],
    },
    design: {
      body: 'A high-contrast, mobile-first page — countdown, trust badges, a two-column comparison, one CTA.',
      media: [{ alt: 'Apex Flow — bridge page' }],
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js static export', 'Tailwind CSS'] },
        { label: 'Performance', items: ['Sub-second load', 'Core Web Vitals budget'] },
      ],
    },
  },
  'studio-creatives': {
    title: 'Studio Creatives',
    category: 'Motion Ads, Social Carousels & WhatsApp Banners',
    tags: ['Paid Social Creatives', 'Carousel Systems', 'WhatsApp Banners'],
    summary: 'A modular creative system — carousels, story ads and WhatsApp banners — built to keep paid campaigns fed with volume.',
    overview: {
      body: 'Scaling paid traffic needs a constant supply of on-brand creative. Studio Creatives turns brand rules into templates — carousel slides, story ads and WhatsApp promo banners — rendered programmatically.',
      meta: [
        { label: 'Scope', value: 'Template system + creative pack' },
        { label: 'Role', value: 'Design + Motion + Tooling' },
        { label: 'Output', value: 'Static + animated creatives' },
        { label: 'Year', value: '2026' },
      ],
    },
    design: {
      body: 'A bento grid of ready-to-run formats: a square carousel slide and a WhatsApp promo banner — one visual system, every channel.',
      media: [{ alt: 'Studio Creatives — carousel slide' }, { alt: 'Studio Creatives — WhatsApp banner' }],
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Motion', items: ['Remotion', 'Framer Motion'] },
        { label: 'Design', items: ['Figma', 'Programmatic layout'] },
      ],
    },
  },
};

const services: Record<string, ServiceText> = {
  'web-dev': {
    title: 'Web Development & Landing Pages',
    summary: 'Next.js/React websites, SaaS marketing sites, Airbnb direct-booking pages, and high-velocity affiliate presell funnels.',
  },
  'motion-video': {
    title: 'Apple-Style Motion & Videos',
    summary: 'Kinetic typography reels, 3D UI product feature teasers, and keynote-style launch videos.',
  },
  'social-ads': {
    title: 'Social & Paid Ad Creatives',
    summary: 'High-CTR Meta/LinkedIn ad creatives, educational carousel systems, and story motion ads.',
  },
  'brand-assets': {
    title: 'Brand Assets & Messaging Kits',
    summary: 'Promotional WhatsApp banners, sales decks, and launch identity systems.',
  },
};

export const en = {
  meta: {
    role: 'Creative Studio & Design Engineering',
    description:
      'Zstudio is an independent creative studio building high-converting websites, Apple-style product videos, and paid social creatives for startups, hospitality brands, and performance marketers.',
    ogTagline: 'We build the complete conversion machine.',
    ogServices: 'Web · Motion · Ads · Brand',
  },

  header: {
    status: 'Available for new projects',
    bookProject: 'Book a Project',
  },

  languageSwitcher: {
    label: 'Language',
  },

  cta: {
    pricingNote: 'Every project is scoped to its own goals and timeline — reach out and we’ll figure out the right fit.',
  },

  hero: {
    lines: ['Websites, Apple-style motion,', 'and creative systems', 'that drive revenue.'],
    subcopy:
      'From SaaS landing pages and luxury Airbnb showcases to viral affiliate funnels and product launch videos. Engineered for maximum conversion.',
    ctaPrimary: 'Explore Selected Work',
    ctaSecondary: 'Start a Project',
  },

  work: {
    label: 'Selected Work',
    title: ['Curated', 'Showcase'],
    concept: 'Concept project',
    back: '← Selected work',
    nextProject: 'Next project',
    headings: {
      overview: 'Overview',
      design: 'Design',
      result: 'Result',
      technologies: 'Stack',
    },
    projects,
  },

  services: {
    label: 'Capabilities',
    title: ['What', 'we build'],
    items: services,
  },

  guarantees: {
    items: ['⚡ 7-Day Sprint Delivery', '🌍 Timezone Friendly (EST/BRT)', '🚀 99+ Performance'],
  },

  footer: {
    titleLines: ['Ready to launch something', 'exceptional?'],
    whatsapp: 'Message us on WhatsApp',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    onlineNow: 'Online now',
    baseLocation: 'São Paulo · UTC-3',
    backToTop: 'Back to top ↑',
  },

  notFound: {
    badge: 'Error 404',
    titleLines: ['This page', "doesn’t exist."],
    body: 'The link is broken or the page has moved. Everything else is one click away.',
    back: '← Back to home',
  },
};

export type Dictionary = typeof en;
