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
  'kroma-ai': {
    title: 'Kroma AI',
    discipline: 'SaaS Product Design · Kinetic Video · Performance Ads',
    pitch: "A command palette isn't a gimmick here — for a technical buyer, speed is the whole pitch.",
    tags: ['Next.js 15', 'Framer Motion', 'Ad Creatives'],
  },
  acompanhai: {
    title: 'AcompanhaAí',
    discipline: 'SaaS Product Design · Interface Engineering',
    pitch: 'A subscription product lives or dies in the dashboard, not the marketing page — so that came first.',
    tags: ['Product Design', 'Next.js', 'Subscription SaaS'],
  },
  'aura-villa': {
    title: 'Aura Villa',
    discipline: 'Hospitality Web · Direct Booking · Motion Ad',
    pitch: 'Every dollar saved on platform commission had to feel earned, not extracted — hence the direct-booking flow.',
    tags: ['Next.js', 'Direct Checkout', 'Motion Trailer'],
  },
  'apex-flow': {
    title: 'Apex Flow',
    discipline: 'Conversion Rate Optimization · Landing Page · WhatsApp Kit',
    pitch: 'Comparison tables convert better than adjectives, so the whole page argues in numbers.',
    tags: ['Ultra-Fast React', 'Tailwind CSS', 'Ad System'],
  },
  'studio-system': {
    title: 'Studio System',
    discipline: 'Paid Social Creatives · Instagram Carousels · WhatsApp Banners',
    pitch: 'One visual system, cut into every format a paid-social calendar actually needs.',
    tags: ['Motion Design', 'Social Growth', 'Brand Identity'],
  },
  zstudio: {
    title: 'Zstudio',
    discipline: 'Brand Identity · Design System · This Website',
    pitch: 'The studio had to survive the same scrutiny as any client’s brand — this site is the proof.',
    tags: ['Brand System', 'Next.js 15', 'Motion Design'],
  },
};

const services: Record<string, ServiceText> = {
  brand: {
    title: 'Brand',
    items: ['Identity', 'Branding', 'Visual Direction'],
  },
  digital: {
    title: 'Digital',
    items: ['Websites', 'Landing Pages', 'SaaS Products', 'UI/UX Design'],
  },
  content: {
    title: 'Content',
    items: ['Social Media', 'Ad Creatives', 'Product Videos', 'Apple-style Motion'],
  },
  growth: {
    title: 'Growth',
    items: ['Sales Pages', 'Affiliate Funnels', 'Digital Campaigns'],
  },
};

export const en = {
  meta: {
    role: 'Digital Design & Technology Studio',
    description:
      'Zstudio is an independent studio designing and engineering websites, brands and digital products for founders, companies and creators — in Brazil and abroad.',
    ogTagline: 'Websites, brands and digital products, built with intention.',
    ogServices: 'Brand · Digital · Content · Growth',
  },

  header: {
    status: 'Available for new projects · Q2/Q3',
    bookProject: 'Start a Project',
  },

  nav: {
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
  },

  languageSwitcher: {
    label: 'Language',
  },

  whatsappMessage: "Hi, I'm interested in working with Zstudio on a project.",

  cta: {
    pricingNote: 'Every project is scoped to its own goals and timeline — reach out and we’ll figure out the right fit.',
  },

  hero: {
    eyebrow: 'Design, Technology & Digital Products / 2026',
    lines: ['Websites, brands and', 'digital products —', 'built with intention.'],
    subcopy:
      'Zstudio is an independent studio designing and engineering digital experiences for founders, companies and brands across Brazil and abroad.',
    ctaPrimary: 'Explore Selected Work',
    ctaSecondary: 'Start a Project',
    metrics: ['Design + Development, One Team', 'Independent Studio, By Design', 'BR + Global Timezones (EST/BRT)'],
  },

  work: {
    label: 'Selected Work',
    title: ['Curated', 'Showcase'],
    concept: 'Concept project',
    projects,
  },

  services: {
    label: 'Services',
    title: ['Full-Service,', 'By Discipline'],
    items: services,
  },

  about: {
    label: 'About',
    title: ['One Studio,', 'Every Discipline'],
    body: "Zstudio works at the intersection of design, technology and strategy. Every project moves through the same hands — from the first wireframe to the last line of motion code — so the thinking behind a brand and the execution of its product never drift apart. We build for founders and companies who need more than a good-looking interface: a system that holds together under real use, in any language, on any screen.",
    disciplines: ['Design', 'Technology', 'Strategy', 'Motion', 'Branding', 'UX'],
  },

  process: {
    label: 'Process',
    title: ['How a Project', 'Moves Forward'],
    steps: [
      {
        title: 'Discover',
        body: 'Understand the business, the audience, and what "done well" actually means for this project.',
      },
      {
        title: 'Define',
        body: 'Turn that understanding into scope, structure and a clear content map — before any pixel is placed.',
      },
      {
        title: 'Design',
        body: 'Visual direction, typography and layout, tested against real content, not placeholder text.',
      },
      {
        title: 'Build',
        body: 'Production-grade code — responsive, accessible, fast — not a static mockup pretending to be a product.',
      },
      {
        title: 'Refine',
        body: 'Polish motion, performance and edge cases until the experience holds up under real use.',
      },
    ],
  },

  contact: {
    label: 'Contact',
    title: ['Have a Project', 'in Mind?'],
    subcopy: "Tell us what you're building — a brand, a product or a campaign — and we'll get back with next steps.",
    whatsapp: 'Message us on WhatsApp',
    copyEmail: 'Copy email',
    copied: 'Copied!',
  },

  footer: {
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
