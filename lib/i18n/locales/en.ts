/**
 * en — fallback locale. Used whenever the visitor's browser language isn't
 * pt-BR or es. Must satisfy the same shape as pt-BR.ts (see `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText } from './pt-BR';

const projects: Record<string, ProjectText> = {
  'saas-product-platform': {
    title: 'Product Platform',
    discipline: 'SaaS / Product Design / Development',
    tags: ['Product Design', 'UI/UX', 'Frontend', 'Design System'],
    summary:
      'End-to-end design and build of a SaaS platform — from information architecture and design system to a production React front end.',
    overview: {
      body: 'A full product surface designed and built as one system: a component library, a documented design language, and a front end wired to real data. The goal was a platform that could grow without the UI drifting. Design system and interface architecture for a cloud data platform, focused on information density and response time.',
      meta: [
        { label: 'Scope', value: 'Design system, product UI, frontend build' },
        { label: 'Role', value: 'Design + Development' },
        { label: 'Timeline', value: 'Concept project' },
        { label: 'Year', value: '2026' },
      ],
    },
    challenge: {
      body: 'Most early-stage products accumulate screens faster than they accumulate structure. The brief was to define the structure first — tokens, primitives, patterns — so every new feature slots into a system instead of expanding the surface area of decisions.',
    },
    approach: {
      body: 'Start from the data model and the primary jobs, not the screens. Design the system in the open, in code, so design and implementation never diverge.',
      steps: [
        'Map the core objects and the three or four jobs that matter most',
        'Define tokens: color, type, spacing, motion',
        'Build primitives and patterns as a documented library',
        'Assemble screens from the library — never bespoke',
      ],
    },
    design: {
      body: 'A restrained interface language: one accent, generous density controls, and a type scale that holds from dense tables to marketing surfaces.',
      media: [{ alt: 'Interface system — overview' }, { alt: 'Component states' }],
    },
    development: {
      body: 'React and TypeScript, styled with a token layer that maps 1:1 to the design files. The component API is small on purpose — most screens are composition, not configuration.',
      media: [{ alt: 'Front end architecture' }],
    },
    motion: {
      body: 'Motion is functional here: state transitions, optimistic updates, and focus movement. Nothing loops, nothing decorates.',
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Design', items: ['Figma', 'Design tokens', 'Variable type scale'] },
        { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
        { label: 'Tooling', items: ['Storybook', 'Vercel', 'AI-assisted QA'] },
      ],
    },
  },
  'brand-identity-system': {
    title: 'Identity System',
    discipline: 'Brand / Art Direction / Web',
    tags: ['Brand Identity', 'Art Direction', 'Web Design', 'Motion'],
    summary:
      'A visual identity built to live everywhere — wordmark, type system, motion language and a site that ships the brand rather than describing it.',
    overview: {
      body: 'Identity work that treats the website as the primary artifact. The brand is defined by how it moves and composes on screen, then extracted back out into static applications. A scalable visual and verbal identity for a technology brand, covering design guidelines, typography and asset directories.',
      meta: [
        { label: 'Scope', value: 'Wordmark, type, color, motion, website' },
        { label: 'Role', value: 'Art Direction + Design + Build' },
        { label: 'Deliverables', value: 'Guidelines, web build, social kit' },
        { label: 'Year', value: '2026' },
      ],
    },
    challenge: {
      body: 'A logo is easy to make and easy to ignore. The harder problem is a system with enough rules to be recognizable and enough room to be used by other people without falling apart.',
    },
    approach: {
      body: 'Design the smallest set of decisions that make everything downstream feel inevitable.',
      steps: ['Set the typographic voice', 'Fix the grid and spacing logic', 'Define one motion signature', 'Document with real examples, not swatches'],
    },
    design: {
      body: 'A confident grotesque wordmark, a strict editorial grid, and a single motion signature that repeats across every touchpoint.',
      media: [{ alt: 'Wordmark studies' }, { alt: 'Editorial layouts' }],
    },
    motion: {
      body: 'One reveal, one transition, one loop — applied consistently so motion becomes part of the identity rather than an effect.',
    },
    gallery: {
      media: [{ alt: 'Application — poster' }, { alt: 'Application — social' }, { alt: 'Application — web' }],
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Design', items: ['Figma', 'Type design tools'] },
        { label: 'Motion', items: ['Remotion', 'After Effects'] },
        { label: 'Web', items: ['Next.js', 'Framer Motion'] },
      ],
    },
  },
  'landing-page-conversion': {
    title: 'Launch Page',
    discipline: 'Landing Page / Copy / Build',
    tags: ['Landing Page', 'Narrative', 'Frontend', 'Motion'],
    summary:
      'A single-page launch experience — narrative structure, custom motion and a fast static build engineered for the first ten seconds.',
    overview: {
      body: 'A launch page is a short film with a call to action. This one is built around a single narrative spine, with motion used to control pace rather than decorate sections. A high-converting landing page structured around product-led copywriting and a sub-1-second load time.',
      meta: [
        { label: 'Scope', value: 'Narrative, design, copy, build' },
        { label: 'Role', value: 'Design + Development' },
        { label: 'Focus', value: 'First impression, performance, clarity' },
        { label: 'Year', value: '2026' },
      ],
    },
    challenge: {
      body: 'The page has to do three jobs at once in a few seconds: establish quality, explain the offer, and make the next step obvious — on a slow connection, on a phone.',
    },
    approach: {
      body: 'Write the argument first. Design to the argument. Build it as static HTML that paints instantly.',
      steps: ['Draft the narrative as plain sentences', 'Storyboard the scroll', 'Design each beat', 'Ship static, measure Core Web Vitals'],
    },
    design: {
      body: 'Big type, deliberate whitespace, one idea per viewport. The design never competes with the message.',
      media: [{ alt: 'Scroll storyboard' }],
    },
    development: {
      body: 'Statically exported, images pre-optimized, motion gated behind reduced-motion. The target is a sub-second first paint and near-zero layout shift.',
      media: [{ alt: 'Performance profile' }],
    },
    motion: {
      body: 'Scroll-linked reveals that pace the reader through the argument, plus one signature moment at the offer.',
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js static export', 'Tailwind', 'Framer Motion'] },
        { label: 'Performance', items: ['AVIF/WebP', 'Lazy media', 'Lighthouse budget'] },
      ],
    },
  },
  'social-creative-system': {
    title: 'Creative System',
    discipline: 'Social / Motion / Templates',
    tags: ['Social', 'Motion Design', 'Templates', 'Art Direction'],
    summary:
      'A templated system for social content — programmatic layouts and Remotion-rendered motion that keeps a feed consistent at volume.',
    overview: {
      body: 'Producing social content by hand does not scale and drifts off-brand fast. This system turns brand rules into templates and renders motion programmatically. A modular creative and motion system built to scale across social channels and performance media.',
      meta: [
        { label: 'Scope', value: 'Template system, motion, render pipeline' },
        { label: 'Role', value: 'Design + Motion + Tooling' },
        { label: 'Output', value: 'Static posts + rendered video' },
        { label: 'Year', value: '2026' },
      ],
    },
    challenge: {
      body: 'Keep a feed looking like one hand made it while producing enough volume to matter — across formats, in a fraction of the time.',
    },
    approach: {
      body: 'Codify the layout logic. Feed it content. Render.',
      steps: ['Define a grid that works at 1:1, 4:5 and 9:16', 'Build layout templates as components', 'Compose motion in Remotion', 'Batch-render from a manifest'],
    },
    motion: {
      body: 'Every clip is a Remotion composition driven by data — change the copy and the props, re-render the set.',
    },
    gallery: {
      media: [{ alt: 'Template — square' }, { alt: 'Template — portrait' }, { alt: 'Template — story' }],
    },
    result: {
      body: 'A studio-owned project — built to demonstrate design architecture, production-grade code and typographic rigor.',
    },
    technologies: {
      groups: [
        { label: 'Motion', items: ['Remotion', 'React'] },
        { label: 'Design', items: ['Figma', 'Programmatic layout'] },
        { label: 'Pipeline', items: ['Node render script', 'AI copy drafts'] },
      ],
    },
  },
};

const services: Record<string, ServiceText> = {
  websites: {
    title: 'Websites',
    summary: 'Fast, focused sites built to make the right first impression.',
  },
  'landing-pages': {
    title: 'Landing Pages',
    summary: 'Conversion pages built around a single, clear message.',
  },
  'saas-product': {
    title: 'SaaS & Product Design',
    summary: 'Digital product design and development, from flow to interface.',
  },
  branding: {
    title: 'Branding',
    summary: 'Visual and verbal identity for brands that need to be remembered.',
  },
  'social-media': {
    title: 'Social Media',
    summary: 'Creatives and templates that keep a feed consistent at volume.',
  },
  'motion-video': {
    title: 'Motion & Video',
    summary: 'Video and motion that make products easier to understand.',
  },
  advertising: {
    title: 'Advertising',
    summary: 'Campaign creative built for performance, tested in variations.',
  },
};

export const en: Dictionary = {
  meta: {
    role: 'Digital design & technology studio',
    description:
      'Zstudio is an independent digital studio that creates websites, brands and digital experiences for businesses, startups and digital products — designed and engineered with technology, design and AI.',
    ogTagline: 'I build digital experiences.',
    ogServices: 'Web · Product · Brand · Motion · AI',
  },

  nav: {
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    menuAria: 'Navigation menu',
    portfolioBadge: 'Portfolio — 2026',
    skipToContent: 'Skip to content',
  },

  languageSwitcher: {
    label: 'Language',
  },

  cta: {
    startProject: 'Start a project',
    bookCall: 'Book a call (15 min)',
    pricingNote: 'Every project is tailored to its goals, scope and complexity. Contact us to discuss the right approach.',
  },

  hero: {
    eyebrow: 'Digital design & technology studio',
    lines: ['Digital experiences', 'built to', 'stand out.'],
    subcopy: 'Websites, products, brands and digital experiences — built for whatever your project needs.',
  },

  work: {
    label: 'Selected Work',
    title: ['Selected', 'work'],
    concept: 'Concept project',
    back: '← Selected work',
    nextProject: 'Next project',
    viewCursor: 'View',
    nextCursor: 'Next',
    motionStudyAlt: 'Motion study',
    headings: {
      overview: 'Overview',
      challenge: 'Challenge',
      approach: 'Approach',
      design: 'Design',
      development: 'Development',
      motion: 'Motion',
      result: 'Final result',
      gallery: 'Gallery',
      technologies: 'Technologies',
    },
    projects,
  },

  services: {
    label: 'Services',
    title: ['What', 'we do'],
    items: services,
    combineNote: 'One project can combine design, development, branding, motion and whatever else it needs.',
  },

  about: {
    label: 'About',
    quoteLines: ['I don’t just design', 'interfaces —', 'I build the whole thing.'],
    serifLine: 'Every project asks for a different mix of disciplines — Zstudio puts it together.',
    capabilities: ['Design', 'Development', 'Motion', 'AI'],
    note: 'The stack changes when a better tool shows up — the studio standard doesn’t.',
    pillars: [
      {
        title: 'Product & SaaS Design',
        body: 'From information architecture and Figma prototypes to production-ready front-end code (React/Next.js/Tailwind).',
      },
      {
        title: 'High-Converting Websites',
        body: 'Landing pages and institutional sites with a modern look, functional animation and technical SEO.',
      },
      {
        title: 'Brand & Visual Systems',
        body: 'Visual identities, design tokens and component libraries built to scale.',
      },
    ],
    timezoneNote:
      'Based in Brazil (UTC-3) — Full daily business hours overlap with US East Coast (EST) and European afternoons. High-velocity design engineering with zero timezone friction.',
  },

  contact: {
    label: 'Contact',
    kicker: 'Have a project in mind?',
    titleLines: ['Let’s build', 'something great, together.'],
    emailCursor: 'Email',
    chatCursor: 'Chat',
    whatsapp: 'WhatsApp',
    statusLabel: 'Status',
    baseLabel: 'Based',
    localTimeLabel: 'Local time',
    socialLabel: 'Social',
    availability: 'Available for select projects — 2026',
    baseLocation: 'Based in Brazil (UTC-3) · Business hours aligned with the US and Europe',
    linktreeLabel: 'Linktree',
    calBanner: {
      title: 'Prefer to talk it through directly?',
      body: 'Book 15 minutes on my calendar to align on scope and timeline.',
      button: 'View available times',
    },
    form: {
      intro: 'Or fill in the form — I’ll reply by email.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      company: 'Company or project',
      companyPlaceholder: 'Optional',
      service: 'Service of interest',
      serviceOptional: 'Select (optional)',
      description: 'Project description',
      descriptionPlaceholder: 'Tell me a bit about the idea, the goal, and any references that help.',
      budget: 'Budget range',
      budgetOptional: 'Optional',
      budgetPlaceholder: 'e.g. to be defined, or a rough range',
      submit: 'Send message',
      submitting: 'Sending…',
      successTitle: 'Almost there.',
      successBody: 'Your email client should open with the message ready — just review and send. If it doesn’t open, write directly to',
      successFollowup: 'Once you send it, you’ll hear back within 24 business hours.',
      urgentLabel: 'Urgent?',
      urgentLink: 'Message me directly on WhatsApp',
      requiredError: 'Please fill in your name, email and a project description.',
      errorHelp: 'You can also write directly to',
    },
  },

  footer: {
    tagline: 'Independent digital design and technology studio.',
    networksLabel: 'Elsewhere',
    backToTop: 'Back to top ↑',
    colophon: 'Hanken Grotesk · Inter · IBM Plex Mono — Next.js · Remotion',
  },

  notFound: {
    badge: 'Error 404',
    titleLines: ['This page', "doesn’t exist."],
    body: 'The link is broken or the page has moved. Everything else is one click away.',
    back: '← Back to home',
  },
};
