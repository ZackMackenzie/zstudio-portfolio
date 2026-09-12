/**
 * Configuração central e NÃO-TRADUZÍVEL do site (nome da marca, URLs, e-mail,
 * fuso horário, hrefs de rede social, ids de navegação). Todo texto visível
 * (labels, descrições, disponibilidade etc.) vive nos dicionários em
 * lib/i18n/locales/*.ts — ver aquele diretório para editar copy.
 *
 * Tudo marcado como PLACEHOLDER pode ser trocado por um valor real sem mexer
 * em código de componente.
 */

export const site = {
  name: 'Zstudio',
  shortName: 'Zstudio',
  wordmark: 'Zstudio',
  wordmarkFull: 'Zstudio',

  /** Usado em <title>, OG e URLs canônicas. Atualize no deploy. */
  url: 'https://zstudio.studio', // domínio PLACEHOLDER

  /** Contato — valores PLACEHOLDER. Substitua pelos dados reais. */
  contact: {
    email: 'ola@zstudio.studio', // PLACEHOLDER
    timezone: 'America/Sao_Paulo',
  },

  /**
   * Redes — todas PLACEHOLDER. Substitua os href; mantenha as chaves (`label`
   * dobra como o nome de exibição da rede — "WhatsApp"/"LinkedIn" etc. não
   * mudam por idioma, por isso ficam aqui e não no dicionário).
   */
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/0000000000' }, // PLACEHOLDER
    { label: 'Email', href: 'mailto:ola@zstudio.studio' }, // PLACEHOLDER
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zstudio' }, // PLACEHOLDER
    { label: 'Instagram', href: 'https://instagram.com/zstudio' }, // PLACEHOLDER
    { label: 'X', href: 'https://x.com/zstudio' }, // PLACEHOLDER
    { label: 'Behance', href: 'https://behance.net/zstudio' }, // PLACEHOLDER
    { label: 'Linktree', href: 'https://linktr.ee/zstudio' }, // PLACEHOLDER — secondary option, never the primary CTA destination
  ],

  /** Âncoras das seções na página, em ordem. O número vira o índice editorial. */
  nav: [
    { index: 1, id: 'work' },
    { index: 2, id: 'services' },
    { index: 3, id: 'about' },
    { index: 4, id: 'contact' },
  ],
} as const;

export type SocialLink = (typeof site.socials)[number];
export type NavItem = (typeof site.nav)[number];
