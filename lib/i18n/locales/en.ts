/**
 * en — fallback locale. Used whenever the visitor's browser language isn't
 * pt-BR or es. Must satisfy the same shape as pt-BR.ts (see `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText, ApplicationText } from './pt-BR';

const projects: Record<string, ProjectText> = {
  'saas-product-platform': {
    title: 'Product Platform',
    discipline: 'SaaS / Product Design / Development',
    tags: ['Product Design', 'UI/UX', 'Frontend', 'Design System'],
    summary:
      'End-to-end design and build of a SaaS platform — from information architecture and design system to a production React front end.',
    overview: {
      body: 'A full product surface designed and built as one system: a component library, a documented design language, and a front end wired to real data. The goal was a platform that could grow without the UI drifting.',
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
      body: 'This is a concept project, not real client work — built to show process and level of execution. Screens, motion and code keep expanding.',
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
      body: 'Identity work that treats the website as the primary artifact. The brand is defined by how it moves and composes on screen, then extracted back out into static applications.',
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
      body: 'This is a concept project, not real client work — built to show process and level of execution. Guidelines and applications keep expanding.',
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
      body: 'A launch page is a short film with a call to action. This one is built around a single narrative spine, with motion used to control pace rather than decorate sections.',
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
      body: 'This is a concept project, not real client work — built to show process and level of execution. Final copy and performance numbers keep being refined.',
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
      body: 'Producing social content by hand does not scale and drifts off-brand fast. This system turns brand rules into templates and renders motion programmatically.',
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
      body: 'This is a concept project, not real client work — built to show process and level of execution. Rendered sets keep being expanded.',
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
    title: 'Websites & Landing Pages',
    summary: 'High-quality, responsive websites and landing pages designed to communicate value, build trust and turn attention into action.',
    detail: 'Editorial, motion-led websites designed around a single narrative — built to make the right impression in the first few seconds and hold up on every screen after that.',
    capabilities: ['Business websites', 'Landing pages', 'SaaS websites', 'Website redesigns'],
  },
  'saas-product': {
    title: 'SaaS & Product Design',
    summary: 'Intuitive digital products and interfaces designed to make complex experiences clear, useful and easy to navigate.',
    detail: 'Information architecture, flows and interface systems. The work starts at the data model and the core jobs, so the screens that follow feel inevitable.',
    capabilities: ['SaaS landing pages', 'Web app interfaces', 'Dashboards', 'Design systems'],
  },
  branding: {
    title: 'Branding & Visual Identity',
    summary: 'Clear and cohesive visual identities built to make businesses look professional, memorable and consistent.',
    detail: 'Identity built for screens first — wordmark, type, color and a motion signature — then extracted into guidelines and applications a team can actually use.',
    capabilities: ['Logo design', 'Brand identity', 'Color & type systems', 'Brand guidelines'],
  },
  'social-media': {
    title: 'Social Media Design',
    summary: 'Consistent, recognizable and conversion-focused visual systems designed to make brands stand out across social platforms.',
    detail: 'Templated content systems and campaign creative that stay on-brand at volume — programmatic layouts plus motion rendered from a repeatable pipeline.',
    capabilities: ['Social visual identity', 'Posts & carousels', 'Stories', 'Editable templates'],
  },
  'creative-video': {
    title: 'Creative Videos & Motion Design',
    summary: 'Premium product videos and motion experiences that make digital products easier to understand — and harder to ignore.',
    detail: 'Motion with a purpose: state transitions, product demos, campaign openers. Rendered with Remotion, always from a system, never one-off.',
    capabilities: ['Product videos', 'SaaS demos', 'Motion graphics', 'Vertical videos'],
  },
  advertising: {
    title: 'Advertising & Marketing Creatives',
    summary: 'Creative assets designed to capture attention, communicate quickly and support marketing campaigns.',
    detail: 'Conversion-focused creative — built for the feed, tested in variations, ready to scale a campaign.',
    capabilities: ['Meta Ads', 'TikTok Ads', 'YouTube Ads', 'Campaign landing pages'],
  },
};

const applications: Record<string, ApplicationText> = {
  'saas-startups': {
    title: 'SaaS & Startups',
    description: 'For digital products that need to communicate value fast and scale without losing visual consistency.',
  },
  'local-business': {
    title: 'Local Businesses',
    description: 'For local businesses that want an online presence as good as what they offer in person.',
  },
  'real-estate': {
    title: 'Real Estate',
    description: 'For agencies and agents who need to present properties with the visual quality they deserve.',
  },
  'airbnb-hospitality': {
    title: 'Airbnb & Hospitality',
    description: 'Sites, videos and direct-inquiry pages for hosts who want to stand out before the booking.',
  },
  'digital-products': {
    title: 'Digital Products',
    description: 'For digital products — from MVP to mature platform — that need an interface as good as the idea.',
  },
  ecommerce: {
    title: 'E-commerce',
    description: 'For e-commerce operations that need creatives and pages that turn visits into sales.',
  },
  agencies: {
    title: 'Agencies & Creative Teams',
    description: 'For agencies and creative teams that need an on-demand production partner.',
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
    pricingNote: 'Every project is tailored to its goals, scope and complexity. Contact us to discuss the right approach.',
  },

  hero: {
    eyebrow: 'Digital design & technology studio',
    lines: ['Digital experiences', 'built to', 'stand out.'],
    subcopy: 'Websites, brands and digital experiences for businesses, startups and products.',
    scrollCue: 'View work',
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
    applicationsLabel: 'Applications',
    applicationsIntro: 'Same process, adapted to your kind of business.',
    applications,
  },

  capabilities: {
    label: 'Capabilities',
    note: 'The stack changes when a better tool shows up — the studio standard doesn’t.',
    disciplines: ['Web Design', 'Development', 'UI/UX', 'Branding', 'Social', 'Motion Design'],
    groups: [
      { label: 'Design', items: ['Figma', 'Design systems', 'Art direction'] },
      { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { label: 'Motion', items: ['Remotion', 'After Effects'] },
      { label: 'AI', items: ['LLM workflows', 'Automated QA'] },
    ],
  },

  about: {
    label: 'About',
    quoteLines: ['I don’t just design', 'interfaces —', 'I build the whole thing.'],
    serifLine: 'Design, technology and AI under one point of view.',
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
    baseLocation: 'Remote / Brazil',
    linktreeLabel: 'Linktree',
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
      submitting: 'Opening your email…',
      successTitle: 'Almost there.',
      successBody: 'Your email client should open with the message ready — just review and send. If it doesn’t open, write directly to',
      requiredError: 'Please fill in your name, email and a project description.',
    },
  },

  footer: {
    indexLabel: 'Index',
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
