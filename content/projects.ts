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

export type MockupKind = 'dashboard' | 'browser' | 'social' | 'airbnb';
export type MockupRef = { kind: MockupKind; variant: string };

export type ProjectStructure = {
  slug: string;
  year: string;
  status: 'live' | 'concept';
  mockup: MockupRef;
};

export const projectStructures: ProjectStructure[] = [
  { slug: 'aura-villa', year: '2026', status: 'concept', mockup: { kind: 'airbnb', variant: 'split' } },
  { slug: 'kroma-ai', year: '2026', status: 'concept', mockup: { kind: 'dashboard', variant: 'cmdk' } },
  { slug: 'apex-flow', year: '2026', status: 'concept', mockup: { kind: 'browser', variant: 'funnel' } },
  { slug: 'studio-system', year: '2026', status: 'concept', mockup: { kind: 'social', variant: 'bento' } },
];

export const projectSlugs = projectStructures.map((p) => p.slug);
