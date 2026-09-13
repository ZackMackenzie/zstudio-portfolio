/**
 * Configuração central e NÃO-TRADUZÍVEL do site (nome da marca, URLs, e-mail,
 * fuso horário, contato). Todo texto visível (labels, headlines, descrições)
 * vive nos dicionários em lib/i18n/locales/*.ts.
 *
 * Tudo marcado como PLACEHOLDER pode ser trocado por um valor real sem mexer
 * em código de componente — troque só o valor aqui.
 */

const whatsappNumber = '5511999999999'; // PLACEHOLDER — troque pelo número real com DDI+DDD
const whatsappMessage = "Hi, I'm interested in working with Zstudio on a project.";

export const site = {
  name: 'Zstudio',
  wordmark: 'Zstudio®',

  /** Usado em <title>, OG, URLs canônicas e metadataBase. */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zstudio-lake.vercel.app',

  /** Contato — valores PLACEHOLDER. Substitua pelos dados reais. */
  contact: {
    email: 'contact@zstudio.design', // PLACEHOLDER — troque pelo e-mail ativo
    whatsapp: whatsappNumber,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    /** Link do Cal.com/Calendly — mantido como opção secundária. */
    calLink: 'https://cal.com/seu-usuario/15min', // PLACEHOLDER
    timezone: 'America/Sao_Paulo',
  },
} as const;
