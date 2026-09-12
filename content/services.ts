/**
 * Ordem de exibição dos serviços. Título e resumo de uma linha de cada um
 * vivem em `dict.services.items[id]` nos dicionários (lib/i18n/locales/*.ts)
 * — este arquivo só define a lista e a ordem.
 *
 * Estes são as FERRAMENTAS do estúdio, não um catálogo fechado — a Services
 * (componente) mostra uma frase deixando claro que um projeto pode combinar
 * vários desses ao mesmo tempo. Para adicionar um serviço: acrescente o id
 * aqui e a entrada correspondente em `services.items` nos três dicionários.
 */
export const serviceIds = [
  'websites',
  'landing-pages',
  'saas-product',
  'branding',
  'social-media',
  'motion-video',
  'advertising',
] as const;

export type ServiceId = (typeof serviceIds)[number];
