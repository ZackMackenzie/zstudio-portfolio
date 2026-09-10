export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    summary: 'Websites, landing pages and digital experiences.',
    detail:
      'Editorial, motion-led websites designed around a single narrative — built to make the right impression in the first few seconds and hold up on every screen after that.',
    deliverables: ['Marketing sites', 'Landing pages', 'Interactive experiences', 'Design systems'],
  },
  {
    id: 'development',
    title: 'Development',
    summary: 'Modern web applications and SaaS products.',
    detail:
      'Production front ends in React and TypeScript. Component libraries, static-fast marketing builds, and product UI wired to real data — engineered, not stitched together.',
    deliverables: ['React / Next.js builds', 'Component libraries', 'SaaS front ends', 'Performance work'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    summary: 'Interfaces, systems and product experiences.',
    detail:
      'Information architecture, flows and interface systems. The work starts at the data model and the core jobs, so the screens that follow feel inevitable.',
    deliverables: ['Product UX', 'Design systems', 'Flows & prototypes', 'Interface audits'],
  },
  {
    id: 'brand-design',
    title: 'Brand & Design',
    summary: 'Visual identities, digital design and creative direction.',
    detail:
      'Identity built for screens first — wordmark, type, color and a motion signature — then extracted into guidelines and applications a team can actually use.',
    deliverables: ['Visual identity', 'Type & color systems', 'Art direction', 'Guidelines'],
  },
  {
    id: 'social-creative',
    title: 'Social & Creative',
    summary: 'Social content, campaigns and digital creatives.',
    detail:
      'Templated content systems and campaign creative that stay on-brand at volume — programmatic layouts plus motion rendered from a repeatable pipeline.',
    deliverables: ['Content systems', 'Campaign creative', 'Motion templates', 'Ad variants'],
  },
  {
    id: 'ai-production',
    title: 'AI-Powered Production',
    summary: 'Modern AI workflows across the whole process.',
    detail:
      'AI used deliberately to accelerate research, exploration, copy drafting, asset generation and QA — so more of the timeline goes to judgment and craft. The output is held to a studio standard, not an AI one.',
    deliverables: ['Faster iteration', 'Research & synthesis', 'Asset generation', 'Automated QA'],
  },
];
