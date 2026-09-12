/**
 * Ordem de exibição dos serviços. Título, resumo, descrição e capacidades de
 * cada um vivem em `dict.services.items[id]` nos dicionários
 * (lib/i18n/locales/*.ts) — este arquivo só define a lista e a ordem.
 * Para adicionar um serviço: acrescente o id aqui e a entrada correspondente
 * em `services.items` nos três dicionários.
 */
export const serviceIds = [
  'websites',
  'saas-product',
  'branding',
  'social-media',
  'creative-video',
  'advertising',
] as const;

export type ServiceId = (typeof serviceIds)[number];
