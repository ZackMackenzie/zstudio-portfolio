/**
 * Segmentos de negócio para os quais o Zstudio adapta o trabalho ("Applications"
 * dentro da seção Services). Título/descrição vivem em
 * `dict.applications.items[id]`. Nunca afirme cliente real aqui — a
 * linguagem é sempre "For" / "Ideal for" / "Applications".
 */
export const applicationIds = [
  'saas-startups',
  'local-business',
  'real-estate',
  'airbnb-hospitality',
  'digital-products',
  'ecommerce',
  'agencies',
] as const;

export type ApplicationId = (typeof applicationIds)[number];
