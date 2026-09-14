/**
 * ============================================================================
 * PROJETOS — dados estruturais (a "forma" de cada card)
 * ============================================================================
 * Cada case agora é um card único e completo direto na home — sem subpáginas
 * de case study. Este arquivo define slug, ano, status e qual mockup de UI
 * (ver components/work/mockups) ilustra o card; TODO o texto (título,
 * disciplina, pitch, tags) vive em `dict.work.projects[slug]` — ver
 * lib/i18n/locales/{en,pt-BR}.ts.
 *
 * Todos os 4 projetos são **concept projects** — showcases próprios do
 * estúdio para demonstrar nível de execução, não trabalho de cliente real.
 * Não invente clientes, métricas ou depoimentos.
 * ============================================================================
 */

export type MockupKind = 'dashboard' | 'browser' | 'social' | 'airbnb' | 'brand';
export type MockupRef = { kind: MockupKind; variant: string };

export type ProjectStructure = {
  slug: string;
  year: string;
  status: 'live' | 'concept';
  mockup: MockupRef;
};

/**
 * 6 full-width editorial spreads. `acompanhai` and `zstudio` are real,
 * self-directed products (no external client, so still no invented
 * results); the rest are concept showcases (`status: 'concept'` renders a
 * discreet label — see components/work/ProjectCard.tsx).
 */
export const projectStructures: ProjectStructure[] = [
  { slug: 'kroma-ai', year: '2026', status: 'concept', mockup: { kind: 'dashboard', variant: 'cmdk' } },
  { slug: 'acompanhai', year: '2026', status: 'live', mockup: { kind: 'dashboard', variant: 'overview' } },
  { slug: 'aura-villa', year: '2026', status: 'concept', mockup: { kind: 'airbnb', variant: 'split' } },
  { slug: 'apex-flow', year: '2026', status: 'concept', mockup: { kind: 'browser', variant: 'funnel' } },
  { slug: 'studio-system', year: '2026', status: 'concept', mockup: { kind: 'social', variant: 'bento' } },
  { slug: 'zstudio', year: '2026', status: 'live', mockup: { kind: 'brand', variant: 'system' } },
];

export const projectSlugs = projectStructures.map((p) => p.slug);
