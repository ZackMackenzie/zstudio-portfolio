/**
 * ============================================================================
 * en — base locale (English, default for international reach)
 * ============================================================================
 * Every visible string on the site lives here (and in the pt-BR.ts copy).
 * Structural data (slugs, mockup refs) lives in content/*.ts.
 *
 * `Dictionary` (the type inferred from this file) is the contract pt-BR.ts
 * must satisfy — TypeScript flags any missing field.
 * ============================================================================
 */

export type ProjectText = {
  title: string;
  discipline: string;
  pitch: string;
  tags: string[];
};

export type ServiceText = {
  title: string;
  items: string[];
};

const projects: Record<string, ProjectText> = {
  'aura-villa': {
    title: 'Aura Villa',
    discipline: 'Hospitality Web · Direct Booking · Motion Ad',
    pitch:
      'Direct-booking website and viral social video for an architectural Airbnb property, cutting platform commissions.',
    tags: ['Next.js', 'Direct Checkout', 'Motion Trailer'],
  },
  'kroma-ai': {
    title: 'Kroma AI',
    discipline: 'SaaS Product Design · Kinetic Video · Performance Ads',
    pitch:
      'High-ticket SaaS launch experience featuring an interactive dark-mode dashboard and a 30s keynote-style product teaser video.',
    tags: ['Next.js 15', 'Framer Motion', 'Ad Creatives'],
  },
  'apex-flow': {
    title: 'Apex Flow',
    discipline: 'Conversion Rate Optimization · Landing Page · WhatsApp Kit',
    pitch:
      'Sub-second affiliate presell landing page with psychological conversion triggers, comparison matrix, and instant WhatsApp launch kit.',
    tags: ['Ultra-Fast React', 'Tailwind CSS', 'Ad System'],
  },
  'studio-system': {
    title: 'Studio System',
    discipline: 'Paid Social Creatives · Instagram Carousels · WhatsApp Banners',
    pitch: 'Complete creative volume machine for brands scaling paid traffic and social media.',
    tags: ['Motion Design', 'Social Growth', 'Brand Identity'],
  },
};

const services: Record<string, ServiceText> = {
  'web-dev': {
    title: 'Web Architecture',
    items: ['SaaS Websites', 'Airbnb Direct-Booking', 'Affiliate Engines', 'Custom React/Next.js'],
  },
  'motion-video': {
    title: 'Motion & Video',
    items: ['Apple-style Keynote Motion', 'UI Feature Teasers', 'Kinetic Typography Reels'],
  },
  'social-ads': {
    title: 'Performance Creative',
    items: ['Meta & LinkedIn Ads', 'High-Retention Carousels', 'WhatsApp Promo Kits'],
  },
  'brand-assets': {
    title: 'Brand & Strategy',
    items: ['Visual Identity', 'Design Tokens', 'Design Systems in Figma'],
  },
};

export const en = {
  meta: {
    role: 'Creative Engineering & Digital Systems',
    description:
      'Zstudio is an independent studio crafting high-converting web experiences, cinematic product teasers, and performance creative systems for global brands and founders.',
    ogTagline: 'We build digital products that command attention.',
    ogServices: 'Web · Motion · Ads · Brand',
  },

  header: {
    status: 'Available for new projects · Q2/Q3',
    bookProject: 'Start a Project',
  },

  languageSwitcher: {
    label: 'Language',
  },

  whatsappMessage: "Hi, I'm interested in working with Zstudio on a project.",

  cta: {
    pricingNote: 'Every project is scoped to its own goals and timeline — reach out and we’ll figure out the right fit.',
  },

  hero: {
    eyebrow: 'Creative Engineering & Digital Systems / 2026',
    lines: ['We build digital products,', 'Apple-style motion, and', 'websites that command attention.'],
    subcopy:
      'An independent studio crafting high-converting web experiences, cinematic product teasers, and performance creative systems for global brands and founders.',
    ctaPrimary: 'Explore Selected Work',
    ctaSecondary: 'Start a Project',
    metrics: ['7-Day Sprint Delivery', 'Sub-Second Speed', 'Global Timezone (EST/BRT)'],
  },

  work: {
    label: 'Selected Work',
    title: ['Curated', 'Showcase'],
    concept: 'Concept project',
    projects,
  },

  services: {
    label: 'Capabilities',
    title: ['Capabilities', 'Matrix'],
    items: services,
  },

  footer: {
    titleLines: ["Let's build something", 'unforgettable.'],
    whatsapp: 'Message us on WhatsApp',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    onlineNow: 'Online now',
    backToTop: 'Back to top ↑',
    copyright: '© 2026 ZSTUDIO. ALL RIGHTS RESERVED. TIMEZONE COMPATIBLE (EST / BRT).',
  },

  notFound: {
    badge: 'Error 404',
    titleLines: ['This page', "doesn’t exist."],
    body: 'The link is broken or the page has moved. Everything else is one click away.',
    back: '← Back to home',
  },
};

export type Dictionary = typeof en;
