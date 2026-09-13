/**
 * ============================================================================
 * PROJETOS — dados estruturais (a "forma" de cada case)
 * ============================================================================
 * Este arquivo define slug, ano, status, capa e a sequência de blocos de cada
 * case study — tudo que NÃO muda por idioma (seeds de arte gerada, clipIds do
 * Remotion, dimensões de mídia, ordem dos blocos).
 *
 * O TEXTO de cada projeto (título, resumo, corpo de cada bloco, steps, meta,
 * grupos de tecnologia) vive em `dict.projects[slug]` nos três dicionários —
 * ver lib/i18n/locales/{pt-BR,en,es}.ts. `lib/i18n/mergeProject.ts` junta os
 * dois na hora de renderizar.
 *
 * Para adicionar um projeto:
 *   1. Acrescente um objeto aqui com um `slug` único.
 *   2. Acrescente a entrada de texto correspondente em `projects[slug]` nos
 *      TRÊS dicionários, com os mesmos blocos (na mesma ordem) definidos aqui.
 *   3. `status: 'live'` quando houver visuais e texto reais; `'concept'`
 *      mostra o selo discreto "Concept project" — para projetos que não são
 *      trabalho de cliente real (o caso de todos os 4 projetos atuais).
 *
 * Não invente clientes, métricas ou depoimentos.
 * ============================================================================
 */

export type CaseBlock =
  | { type: 'overview'; body: string; meta: { label: string; value: string }[] }
  | { type: 'challenge'; body: string }
  | { type: 'approach'; body: string; steps?: string[] }
  | { type: 'design'; body: string; media?: MediaRef[] }
  | { type: 'development'; body: string; media?: MediaRef[] }
  | { type: 'motion'; body: string; clipId?: string }
  | { type: 'result'; body: string }
  | { type: 'gallery'; media: MediaRef[] }
  | { type: 'technologies'; groups: { label: string; items: string[] }[] };

export type MockupKind = 'dashboard' | 'brand' | 'browser' | 'social';
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
  discipline: string; // linha curta abaixo do título
  disciplines: string[]; // lista de tags
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
    | { type: 'overview' | 'challenge' | 'approach' | 'result' | 'technologies' }
    | { type: 'design' | 'development'; media?: MediaSeed[] }
    | { type: 'motion'; clipId?: string }
    | { type: 'gallery'; media: MediaSeed[] }
  >;
};

export const projectStructures: ProjectStructure[] = [
  {
    slug: 'saas-product-platform',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'saas-product-platform', accent: true, mockup: { kind: 'dashboard', variant: 'overview' } },
    blocks: [
      { type: 'overview' },
      { type: 'challenge' },
      { type: 'approach' },
      {
        type: 'design',
        media: [
          { width: 1600, height: 1000, seed: 'saas-design-1', mockup: { kind: 'dashboard', variant: 'table' } },
          { width: 1600, height: 1000, seed: 'saas-design-2', accent: true, mockup: { kind: 'dashboard', variant: 'metric' } },
        ],
      },
      {
        type: 'development',
        media: [{ width: 1600, height: 1000, seed: 'saas-dev-1', mockup: { kind: 'dashboard', variant: 'overview' } }],
      },
      { type: 'motion', clipId: 'typography-reel' },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
  {
    slug: 'brand-identity-system',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'brand-identity-system', mockup: { kind: 'brand', variant: 'palette' } },
    blocks: [
      { type: 'overview' },
      { type: 'challenge' },
      { type: 'approach' },
      {
        type: 'design',
        media: [
          { width: 1600, height: 1000, seed: 'brand-design-1', mockup: { kind: 'brand', variant: 'type' } },
          { width: 1600, height: 1000, seed: 'brand-design-2', accent: true, mockup: { kind: 'brand', variant: 'apply' } },
        ],
      },
      { type: 'motion', clipId: 'motion-poster' },
      {
        type: 'gallery',
        media: [
          { width: 1200, height: 1500, seed: 'brand-gallery-1', mockup: { kind: 'brand', variant: 'apply' } },
          { width: 1200, height: 1200, seed: 'brand-gallery-2', accent: true, mockup: { kind: 'brand', variant: 'palette' } },
          { width: 1600, height: 1000, seed: 'brand-gallery-3', mockup: { kind: 'brand', variant: 'type' } },
        ],
      },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
  {
    slug: 'landing-page-conversion',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'landing-page-conversion', accent: true, mockup: { kind: 'browser', variant: 'hero' } },
    blocks: [
      { type: 'overview' },
      { type: 'challenge' },
      { type: 'approach' },
      {
        type: 'design',
        media: [{ width: 1600, height: 1000, seed: 'landing-design-1', mockup: { kind: 'browser', variant: 'proof' } }],
      },
      {
        type: 'development',
        media: [{ width: 1600, height: 1000, seed: 'landing-dev-1', accent: true, mockup: { kind: 'browser', variant: 'pricing' } }],
      },
      { type: 'motion', clipId: 'case-teaser' },
      { type: 'result' },
      { type: 'technologies' },
    ],
  },
  {
    slug: 'social-creative-system',
    year: '2026',
    status: 'concept',
    cover: { width: 1600, height: 1100, seed: 'social-creative-system', mockup: { kind: 'social', variant: 'grid' } },
    blocks: [
      { type: 'overview' },
      { type: 'challenge' },
      { type: 'approach' },
      { type: 'motion', clipId: 'social-creative' },
      {
        type: 'gallery',
        media: [
          { width: 1200, height: 1200, seed: 'social-gallery-1', mockup: { kind: 'social', variant: 'square' } },
          { width: 1200, height: 1500, seed: 'social-gallery-2', accent: true, mockup: { kind: 'social', variant: 'story' } },
          { width: 1080, height: 1920, seed: 'social-gallery-3', mockup: { kind: 'social', variant: 'story' } },
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
