/**
 * ============================================================================
 * PROJETOS — dados estruturais (a "forma" de cada case)
 * ============================================================================
 * Este arquivo define slug, ano, status, capa e a sequência de blocos de cada
 * case study — tudo que NÃO muda por idioma (seeds/mockups, ordem dos blocos).
 *
 * O TEXTO de cada projeto (título, categoria, resumo, corpo de cada bloco,
 * tags) vive em `dict.work.projects[slug]` nos dicionários — ver
 * lib/i18n/locales/{en,pt-BR}.ts. `lib/i18n/mergeProject.ts` junta os dois.
 *
 * Todos os 4 projetos são **concept projects** — showcases próprios do
 * estúdio para demonstrar nível de execução, não trabalho de cliente real.
 * Não invente clientes, métricas ou depoimentos.
 * ============================================================================
 */

export type CaseBlock =
  | { type: 'overview'; body: string; meta: { label: string; value: string }[] }
  | { type: 'design'; body: string; media?: MediaRef[] }
  | { type: 'result'; body: string }
  | { type: 'technologies'; groups: { label: string; items: string[] }[] };

export type MockupKind = 'dashboard' | 'browser' | 'social' | 'airbnb';
export type MockupRef = { kind: MockupKind; variant: string };

export type MediaRef = {
  src?: string; // nome-base do arquivo em /public/media, sem extensão
  alt: string;
  width: number;
  height: number;
  seed?: string; // seed do fallback de arte gerada
  accent?: boolean;
  /** Mockup de UI renderizado em código (ver components/work/mockups) — tem
   * prioridade sobre a arte gerada abstrata quando presente. */
  mockup?: MockupRef;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  status: 'live' | 'concept';
  summary: string;
  cover: MediaRef;
  blocks: CaseBlock[];
};

// ---------------------------------------------------------------------------
// Estrutura (sem texto) — a ordem dos blocos aqui deve bater com a ordem das
// chaves de bloco na entrada correspondente de cada dicionário.
// ---------------------------------------------------------------------------

type MediaSeed = { width: number; height: number; seed: string; accent?: boolean; mockup?: MockupRef };

export type ProjectStructure = {
  slug: string;
  year: string;
  status: 'live' | 'concept';
  cover: MediaSeed;
  blocks: Array<
    | { type: 'overview' | 'result' | 'technologies' }
    | { type: 'design'; media?: MediaSeed[] }
  >;
};

export const projectStructures: ProjectStructure[] = [
  {
    slug: 'aura-stays',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'aura-stays', accent: true, mockup: { kind: 'airbnb', variant: 'listing' } },
    blocks: [
      { type: 'overview' },
      {
        type: 'design',
        media: [
          { width: 1600, height: 1000, seed: 'aura-design-1', mockup: { kind: 'airbnb', variant: 'listing' } },
          { width: 1600, height: 1000, seed: 'aura-design-2', accent: true, mockup: { kind: 'airbnb', variant: 'video' } },
        ],
      },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
  {
    slug: 'kroma-ai',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'kroma-ai', mockup: { kind: 'dashboard', variant: 'cmdk' } },
    blocks: [
      { type: 'overview' },
      {
        type: 'design',
        media: [
          { width: 1600, height: 1000, seed: 'kroma-design-1', mockup: { kind: 'dashboard', variant: 'overview' } },
          { width: 1600, height: 1000, seed: 'kroma-design-2', accent: true, mockup: { kind: 'dashboard', variant: 'cmdk' } },
        ],
      },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
  {
    slug: 'apex-flow',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'apex-flow', accent: true, mockup: { kind: 'browser', variant: 'funnel' } },
    blocks: [
      { type: 'overview' },
      {
        type: 'design',
        media: [{ width: 1600, height: 1000, seed: 'apex-design-1', mockup: { kind: 'browser', variant: 'funnel' } }],
      },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
  {
    slug: 'studio-creatives',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'studio-creatives', mockup: { kind: 'social', variant: 'grid' } },
    blocks: [
      { type: 'overview' },
      {
        type: 'design',
        media: [
          { width: 1200, height: 1200, seed: 'studio-design-1', mockup: { kind: 'social', variant: 'square' } },
          { width: 1600, height: 1000, seed: 'studio-design-2', accent: true, mockup: { kind: 'social', variant: 'whatsapp' } },
        ],
      },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
];

export const projectSlugs = projectStructures.map((p) => p.slug);

export const getProjectStructure = (slug: string) => projectStructures.find((p) => p.slug === slug);

export const getAdjacentStructure = (slug: string) => {
  const i = projectStructures.findIndex((p) => p.slug === slug);
  if (i === -1) return projectStructures[0];
  return projectStructures[(i + 1) % projectStructures.length];
};
