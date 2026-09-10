/**
 * Configuração central do site. Edite este arquivo para atualizar identidade,
 * navegação, contato e redes sociais. Tudo marcado como PLACEHOLDER pode ser
 * trocado por um valor real sem mexer em código de componente.
 */

export const site = {
  name: 'Zstudio',
  shortName: 'Zstudio',
  wordmark: 'Zstudio',
  wordmarkFull: 'Zstudio',

  /** Usado em <title>, OG e URLs canônicas. Atualize no deploy. */
  url: 'https://zstudio.studio', // domínio PLACEHOLDER
  locale: 'pt-BR',

  role: 'Estúdio de design e tecnologia digital',
  tagline: 'Design encontra tecnologia.',
  description:
    'Zstudio é um estúdio digital independente que constrói sites, produtos, marcas e experiências digitais — desenhados e desenvolvidos com tecnologia, design e IA.',

  /** Contato — valores PLACEHOLDER. Substitua pelos dados reais. */
  contact: {
    email: 'ola@zstudio.studio', // PLACEHOLDER
    availability: 'Disponível para projetos selecionados — 2026',
    baseLocation: 'Remoto / Brasil',
    timezone: 'America/Sao_Paulo',
  },

  /** Redes — todas PLACEHOLDER. Substitua os href; mantenha as chaves. */
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/0000000000', handle: 'Mensagem' }, // PLACEHOLDER
    { label: 'Email', href: 'mailto:ola@zstudio.studio', handle: 'ola@zstudio.studio' }, // PLACEHOLDER
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zstudio', handle: '/zstudio' }, // PLACEHOLDER
    { label: 'Instagram', href: 'https://instagram.com/zstudio', handle: '@zstudio' }, // PLACEHOLDER
    { label: 'X', href: 'https://x.com/zstudio', handle: '@zstudio' }, // PLACEHOLDER
    { label: 'Behance', href: 'https://behance.net/zstudio', handle: '/zstudio' }, // PLACEHOLDER
  ],

  /** Âncoras das seções na página, em ordem. O número vira o índice editorial. */
  nav: [
    { index: 1, id: 'work', label: 'Trabalhos' },
    { index: 2, id: 'services', label: 'Serviços' },
    { index: 3, id: 'about', label: 'Sobre' },
    { index: 4, id: 'capabilities', label: 'Capacidades' },
    { index: 5, id: 'lab', label: 'Lab' },
    { index: 6, id: 'contact', label: 'Contato' },
  ],
} as const;

export type SocialLink = (typeof site.socials)[number];
export type NavItem = (typeof site.nav)[number];
