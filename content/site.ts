/**
 * Central site configuration. Edit this file to update identity, navigation,
 * contact details and social links. Anything marked PLACEHOLDER is safe to swap
 * for a real value without touching component code.
 */

export const site = {
  name: 'ZStudio',
  shortName: 'ZStudio',
  wordmark: 'ZStudio',
  wordmarkFull: 'ZStudio',

  /** Used for <title>, OG, canonical URLs. Update on deploy. */
  url: 'https://zstudio.studio', // PLACEHOLDER domain
  locale: 'en',

  role: 'Digital design & technology studio',
  tagline: 'Design meets technology.',
  description:
    'ZStudio is an independent digital studio building websites, products, brands and digital experiences — designed and engineered with technology, design and AI.',

  /** Contact — PLACEHOLDER values. Replace with real details. */
  contact: {
    email: 'hello@zstudio.studio', // PLACEHOLDER
    availability: 'Available for select projects — 2026',
    baseLocation: 'Remote / Brazil',
    timezone: 'America/Sao_Paulo',
  },

  /** Social links — all PLACEHOLDER. Replace href values; keep the keys. */
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/0000000000', handle: 'Message' }, // PLACEHOLDER
    { label: 'Email', href: 'mailto:hello@zstudio.studio', handle: 'hello@zstudio.studio' }, // PLACEHOLDER
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zstudio', handle: '/zstudio' }, // PLACEHOLDER
    { label: 'Instagram', href: 'https://instagram.com/zstudio', handle: '@zstudio' }, // PLACEHOLDER
    { label: 'X', href: 'https://x.com/zstudio', handle: '@zstudio' }, // PLACEHOLDER
    { label: 'Behance', href: 'https://behance.net/zstudio', handle: '/zstudio' }, // PLACEHOLDER
  ],

  /** In-page section anchors, in order. Numbers render as the editorial index. */
  nav: [
    { index: 1, id: 'work', label: 'Selected Work' },
    { index: 2, id: 'services', label: 'Services' },
    { index: 3, id: 'about', label: 'About' },
    { index: 4, id: 'capabilities', label: 'Capabilities' },
    { index: 5, id: 'lab', label: 'Lab' },
    { index: 6, id: 'contact', label: 'Contact' },
  ],
} as const;

export type SocialLink = (typeof site.socials)[number];
export type NavItem = (typeof site.nav)[number];
