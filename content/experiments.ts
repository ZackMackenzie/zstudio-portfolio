/**
 * LAB — experimentos, estudos e conceitos.
 * `clipId` aponta para um arquivo renderizado em /public/media (ver remotion/).
 * Entradas sem clipe usam arte gerada como fallback. Adicione à vontade; ordem = ordem de exibição.
 */
export type Experiment = {
  id: string;
  title: string;
  kind: string; // ex.: "Motion", "Tipografia", "Generativo"
  note: string;
  clipId?: string;
  seed: string;
  accent?: boolean;
};

export const experiments: Experiment[] = [
  {
    id: 'kinetic-type',
    title: 'Tipografia Cinética',
    kind: 'Tipografia / Motion',
    note: 'Um reel tipográfico explorando peso, tracking e ritmo em movimento — renderizado com Remotion.',
    clipId: 'typography-reel',
    seed: 'kinetic-type',
    accent: true,
  },
  {
    id: 'motion-poster',
    title: 'Motion Poster',
    kind: 'Motion / Composição',
    note: 'Um estudo de pôster em loop: grid, uma forma, um acento. Um teste de quão pouco movimento ainda parece vivo.',
    clipId: 'motion-poster',
    seed: 'motion-poster',
  },
  {
    id: 'generative-grids',
    title: 'Grids Generativos',
    kind: 'Generativo / Código',
    note: 'Composições abstratas determinísticas geradas a partir de uma string — o sistema por trás de todo visual placeholder deste site.',
    seed: 'generative-grids',
  },
  {
    id: 'case-teaser',
    title: 'Abertura de Case',
    kind: 'Motion / Editorial',
    note: 'Um formato curto para abrir um case study com movimento em vez de um hero estático.',
    clipId: 'case-teaser',
    seed: 'case-teaser',
    accent: true,
  },
  {
    id: 'reveal-system',
    title: 'Sistema de Revelações',
    kind: 'Interação',
    note: 'As animações acionadas por scroll usadas neste site — máscaras de clip, stagger, parallax; todas cientes de reduced-motion.',
    seed: 'reveal-system',
  },
  {
    id: 'social-render-pipeline',
    title: 'Pipeline de Render',
    kind: 'Ferramentas / Motion',
    note: 'Renderização em lote de motion para social a partir de um manifesto — muda o dado, re-renderiza o conjunto.',
    clipId: 'social-creative',
    seed: 'social-render-pipeline',
  },
];
