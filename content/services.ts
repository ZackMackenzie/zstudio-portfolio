/**
 * Ordem de exibição das 4 categorias de capacidade. Título e descrição de
 * cada uma vivem em `dict.services.items[id]` (lib/i18n/locales/*.ts) — este
 * arquivo só define a lista e a ordem.
 */
export const serviceIds = ['web-dev', 'motion-video', 'social-ads', 'brand-assets'] as const;

export type ServiceId = (typeof serviceIds)[number];
