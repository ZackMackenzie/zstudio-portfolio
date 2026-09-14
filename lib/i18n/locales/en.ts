import type { Dictionary } from '../types';

const en: Dictionary = {
  meta: {
    title: 'Z.studio — Digital Design & Technology Studio',
    description:
      'Z.studio designs and builds websites, SaaS products, brand identity, and motion for companies that want to look like they mean it.',
  },
  nav: {
    work: 'Work',
    services: 'Services',
    contact: 'Contact',
    cta: 'Start a project',
  },
  hero: {
    kicker: 'Digital design & technology studio',
    line1: 'Digital products,',
    line2: 'brands & experiences.',
    subhead: 'A small studio designing across web, product, brand, and motion.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See the work',
    scroll: 'Scroll',
  },
  work: {
    kicker: 'Selected work',
    title: 'Work',
    intro:
      'Z.studio Concepts — self-directed projects built the way we build for a client: same rigor, same system, no shortcuts.',
    concept: 'Z.studio Concept',
    viewCase: 'View case',
    allProjects: 'All projects',
    role: 'Role',
    year: 'Year',
  },
  services: {
    kicker: 'What we do',
    title: 'Services',
  },
  about: {
    kicker: 'About',
    title: 'A small studio, built to do it all well.',
    paragraphs: [
      'Z.studio is a small digital studio, building across design, engineering, and motion — not a generalist shop that does a bit of everything.',
      'We work as one team on design, code, and motion, so a site, a product, and the content around it share one system instead of three different vendors.',
      'Every project on this page was designed and built by us, for us — proof of how we work, before you hire us to do it for your brand.',
    ],
    stack: [
      { label: 'Design', items: ['UI/UX', 'Art Direction', 'Design Systems'] },
      { label: 'Engineering', items: ['Next.js', 'React', 'TypeScript', 'Performance'] },
      { label: 'Motion', items: ['Remotion', 'Motion Graphics', '3D'] },
      { label: 'Growth', items: ['Creative Strategy', 'Funnels', 'Conversion', 'Ads'] },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Have a project in mind?',
    intro: "Tell us what you're building. We reply within one business day.",
    formName: 'Name',
    formEmail: 'Email',
    formCompany: 'Company / Brand',
    formCompanyOptional: '(optional)',
    formType: 'Project type',
    formTypeOptions: [
      'Website',
      'SaaS Product',
      'Brand Identity',
      'Motion / Film',
      'Creative & Ads',
      'Other',
    ],
    formMessage: 'Message',
    formMessagePlaceholder: "What are you building, and what does success look like?",
    formSubmit: 'Send message',
    formSubmitting: 'Sending…',
    formSuccess: "Message sent. We'll be in touch shortly.",
    formError: 'Something went wrong. Please try again or email us directly.',
    directLabel: 'Or write directly to',
  },
  footer: {
    tagline: 'A small digital studio — design, engineering, and motion.',
    rights: 'All rights reserved.',
    back: 'Back to top',
  },
  notFound: {
    kicker: '404',
    title: "This page doesn't exist.",
    body: 'The page you were looking for was moved, renamed, or never existed.',
    cta: 'Back to home',
  },
  caseStudy: {
    overview: 'Overview',
    category: 'Category',
    servicesLabel: 'Stack',
    year: 'Year',
    concept: 'Concept',
    direction: 'Direction',
    interface: 'Interface',
    motion: 'Motion',
    development: 'Development',
    result: 'Result',
    noResult:
      'A Z.studio Concept — a self-directed project, not a client engagement. Objectives below are the brief we set ourselves, not reported results.',
    next: 'Next project',
    back: 'All work',
  },
};

export default en;
