/**
 * Configuração central e NÃO-TRADUZÍVEL do site (nome da marca, URLs, e-mail,
 * fuso horário, hrefs de rede social, ids de navegação). Todo texto visível
 * (labels, descrições, disponibilidade etc.) vive nos dicionários em
 * lib/i18n/locales/*.ts — ver aquele diretório para editar copy.
 *
 * Tudo marcado como PLACEHOLDER pode ser trocado por um valor real sem mexer
 * em código de componente — troque só o valor aqui.
 */

const whatsappNumber = '5511999999999'; // PLACEHOLDER — troque pelo número real com DDI+DDD
const whatsappMessage = 'Olá! Vim pelo site da Zstudio e gostaria de um orçamento.';

export const site = {
  name: 'Zstudio',
  shortName: 'Zstudio',
  wordmark: 'Zstudio',
  wordmarkFull: 'Zstudio',

  /** Usado em <title>, OG, URLs canônicas e metadataBase. */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zstudio-lake.vercel.app',

  /** Contato — valores PLACEHOLDER. Substitua pelos dados reais. */
  contact: {
    email: 'contato.zstudio@gmail.com', // PLACEHOLDER — troque pelo e-mail ativo de contato
    whatsapp: whatsappNumber,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    /** Link do Cal.com/Calendly para uma chamada de 15min — PLACEHOLDER. */
    calLink: 'https://cal.com/seu-usuario/15min', // PLACEHOLDER — troque pelo link real
    timezone: 'America/Sao_Paulo',
    location: 'Brasil (UTC-3)',
    timezoneInfo: 'UTC-3 — sobreposição total com o horário comercial dos EUA (costa leste) e tardes na Europa',
  },

  /**
   * Redes — todas PLACEHOLDER. Substitua os href; mantenha as chaves (`label`
   * dobra como o nome de exibição da rede — "WhatsApp"/"LinkedIn" etc. não
   * mudam por idioma, por isso ficam aqui e não no dicionário). WhatsApp e
   * Email consomem `contact.whatsappUrl`/`contact.email` acima, então só
   * precisam ser atualizados em um lugar.
   */
  socials: [
    { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}` },
    { label: 'Email', href: 'mailto:contato.zstudio@gmail.com' }, // PLACEHOLDER
    { label: 'LinkedIn', href: 'https://linkedin.com/in/seu-perfil' }, // PLACEHOLDER
    { label: 'Instagram', href: 'https://instagram.com/seu-perfil' }, // PLACEHOLDER
    { label: 'X', href: 'https://x.com/seu-perfil' }, // PLACEHOLDER
    { label: 'Behance', href: 'https://behance.net/seu-perfil' }, // PLACEHOLDER
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
