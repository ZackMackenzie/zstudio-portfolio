/**
 * LAB — dados estruturais dos experimentos (id, seed da arte gerada, clipe do
 * Remotion). Título/kind/nota vivem em `dict.lab.items[id]` nos dicionários.
 * `clipId` aponta para um arquivo renderizado em /public/media (ver remotion/).
 * Entradas sem clipe usam arte gerada como fallback. Ordem = ordem de exibição.
 */
export type Experiment = {
  id: string;
  clipId?: string;
  seed: string;
  accent?: boolean;
};

export const experiments: Experiment[] = [
  { id: 'kinetic-type', clipId: 'typography-reel', seed: 'kinetic-type', accent: true },
  { id: 'motion-poster', clipId: 'motion-poster', seed: 'motion-poster' },
  { id: 'generative-grids', seed: 'generative-grids' },
  { id: 'case-teaser', clipId: 'case-teaser', seed: 'case-teaser', accent: true },
  { id: 'reveal-system', seed: 'reveal-system' },
  { id: 'social-render-pipeline', clipId: 'social-creative', seed: 'social-render-pipeline' },
];
