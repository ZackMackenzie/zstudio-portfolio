/**
 * ============================================================================
 * PROJETOS — fonte única de verdade
 * ============================================================================
 * A lista "Trabalhos" da home e cada case em /work/[slug] são gerados a partir
 * deste array. Para adicionar um projeto:
 *
 *   1. Copie um objeto abaixo e dê a ele um `slug` único.
 *   2. Marque `status: 'live'` quando ele tiver visuais e texto reais
 *      (placeholders mostram a tag "Em andamento" e um estado de espera no case).
 *   3. Coloque assets reais em /public/media e referencie via `cover` / `media`
 *      do bloco (nome-base do arquivo, sem extensão — ver components/ui/Media.tsx).
 *   4. A ordem neste array = a ordem no site. `next` volta ao início em loop.
 *
 * Não invente nomes de clientes, métricas ou depoimentos. Entradas placeholder
 * descrevem o *tipo* de trabalho e a abordagem — tudo verdadeiro, tudo genérico.
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

export type MediaRef = {
  src?: string; // nome-base do arquivo em /public/media, sem extensão
  alt: string;
  width: number;
  height: number;
  seed?: string; // seed do fallback de arte gerada
  accent?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  discipline: string; // linha curta abaixo do título
  disciplines: string[]; // lista de tags
  year: string;
  status: 'live' | 'placeholder';
  summary: string;
  cover: MediaRef;
  blocks: CaseBlock[];
};

export const projects: Project[] = [
  {
    slug: 'saas-product-platform',
    title: 'Plataforma de Produto',
    discipline: 'SaaS / Design de Produto / Desenvolvimento',
    disciplines: ['Design de Produto', 'UI/UX', 'Frontend', 'Design System'],
    year: '2026',
    status: 'placeholder',
    summary:
      'Design e desenvolvimento ponta a ponta de uma plataforma SaaS — da arquitetura de informação e do design system até um front-end React em produção.',
    cover: { alt: 'Plataforma de Produto — capa abstrata', width: 1600, height: 1100, seed: 'saas-product-platform', accent: true },
    blocks: [
      {
        type: 'overview',
        body: 'Uma superfície de produto inteira desenhada e construída como um sistema: uma biblioteca de componentes, uma linguagem de design documentada e um front-end ligado a dados reais. O objetivo era uma plataforma capaz de crescer sem a UI se perder.',
        meta: [
          { label: 'Escopo', value: 'Design system, UI de produto, build de frontend' },
          { label: 'Papel', value: 'Design + Desenvolvimento' },
          { label: 'Prazo', value: 'Em andamento' },
          { label: 'Ano', value: '2026' },
        ],
      },
      {
        type: 'challenge',
        body: 'A maioria dos produtos em estágio inicial acumula telas mais rápido do que acumula estrutura. O briefing era definir a estrutura primeiro — tokens, primitivas, padrões — para que cada nova feature encaixe num sistema em vez de expandir a área de decisões.',
      },
      {
        type: 'approach',
        body: 'Começar pelo modelo de dados e pelas tarefas principais, não pelas telas. Desenhar o sistema à vista, em código, para que design e implementação nunca divirjam.',
        steps: [
          'Mapear os objetos centrais e as três ou quatro tarefas que mais importam',
          'Definir tokens: cor, tipografia, espaçamento, movimento',
          'Construir primitivas e padrões como uma biblioteca documentada',
          'Montar telas a partir da biblioteca — nunca sob medida',
        ],
      },
      {
        type: 'design',
        body: 'Uma linguagem de interface contida: um acento, controles de densidade generosos e uma escala tipográfica que se segura de tabelas densas a superfícies de marketing.',
        media: [
          { alt: 'Sistema de interface — visão geral', width: 1600, height: 1000, seed: 'saas-design-1' },
          { alt: 'Estados de componente', width: 1600, height: 1000, seed: 'saas-design-2', accent: true },
        ],
      },
      {
        type: 'development',
        body: 'React e TypeScript, estilizados com uma camada de tokens que mapeia 1:1 com os arquivos de design. A API de componentes é pequena de propósito — a maioria das telas é composição, não configuração.',
        media: [{ alt: 'Arquitetura de front-end', width: 1600, height: 1000, seed: 'saas-dev-1' }],
      },
      {
        type: 'motion',
        body: 'Aqui o movimento é funcional: transições de estado, updates otimistas e movimentação de foco. Nada fica em loop, nada decora.',
        clipId: 'typography-reel',
      },
      {
        type: 'result',
        body: 'Telas selecionadas, métricas e o produto no ar serão adicionados aqui quando este case for publicado.',
      },
      {
        type: 'technologies',
        groups: [
          { label: 'Design', items: ['Figma', 'Design tokens', 'Escala tipográfica variável'] },
          { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
          { label: 'Ferramentas', items: ['Storybook', 'Vercel', 'QA assistido por IA'] },
        ],
      },
    ],
  },
  {
    slug: 'brand-identity-system',
    title: 'Sistema de Identidade',
    discipline: 'Marca / Direção de Arte / Web',
    disciplines: ['Identidade Visual', 'Direção de Arte', 'Web Design', 'Motion'],
    year: '2026',
    status: 'placeholder',
    summary:
      'Uma identidade visual feita para viver em todo lugar — wordmark, sistema tipográfico, linguagem de movimento e um site que entrega a marca em vez de descrevê-la.',
    cover: { alt: 'Sistema de Identidade — capa abstrata', width: 1600, height: 1100, seed: 'brand-identity-system' },
    blocks: [
      {
        type: 'overview',
        body: 'Trabalho de identidade que trata o site como o artefato principal. A marca é definida por como se move e compõe na tela, e depois é extraída de volta em aplicações estáticas.',
        meta: [
          { label: 'Escopo', value: 'Wordmark, tipografia, cor, motion, site' },
          { label: 'Papel', value: 'Direção de Arte + Design + Build' },
          { label: 'Entregáveis', value: 'Guidelines, build web, kit de social' },
          { label: 'Ano', value: '2026' },
        ],
      },
      { type: 'challenge', body: 'Um logo é fácil de fazer e fácil de ignorar. O problema mais difícil é um sistema com regras suficientes para ser reconhecível e espaço suficiente para ser usado por outras pessoas sem desmontar.' },
      {
        type: 'approach',
        body: 'Desenhar o menor conjunto de decisões que faz tudo que vem depois parecer inevitável.',
        steps: ['Definir a voz tipográfica', 'Fixar a lógica de grid e espaçamento', 'Definir uma assinatura de movimento', 'Documentar com exemplos reais, não amostras'],
      },
      { type: 'design', body: 'Um wordmark grotesco confiante, um grid editorial rígido e uma única assinatura de movimento que se repete em cada ponto de contato.', media: [{ alt: 'Estudos de wordmark', width: 1600, height: 1000, seed: 'brand-design-1' }, { alt: 'Layouts editoriais', width: 1600, height: 1000, seed: 'brand-design-2', accent: true }] },
      { type: 'motion', body: 'Uma revelação, uma transição, um loop — aplicados de forma consistente para que o movimento vire parte da identidade, não um efeito.', clipId: 'motion-poster' },
      { type: 'gallery', media: [{ alt: 'Aplicação — pôster', width: 1200, height: 1500, seed: 'brand-gallery-1' }, { alt: 'Aplicação — social', width: 1200, height: 1200, seed: 'brand-gallery-2', accent: true }, { alt: 'Aplicação — web', width: 1600, height: 1000, seed: 'brand-gallery-3' }] },
      { type: 'result', body: 'Guidelines finais, aplicações e o site no ar serão adicionados aqui quando este case for publicado.' },
      { type: 'technologies', groups: [{ label: 'Design', items: ['Figma', 'Ferramentas de type design'] }, { label: 'Motion', items: ['Remotion', 'After Effects'] }, { label: 'Web', items: ['Next.js', 'Framer Motion'] }] },
    ],
  },
  {
    slug: 'landing-page-conversion',
    title: 'Página de Lançamento',
    discipline: 'Landing Page / Copy / Build',
    disciplines: ['Landing Page', 'Narrativa', 'Frontend', 'Motion'],
    year: '2026',
    status: 'placeholder',
    summary:
      'Uma experiência de lançamento de página única — estrutura narrativa, motion sob medida e um build estático rápido, projetado para os primeiros dez segundos.',
    cover: { alt: 'Página de Lançamento — capa abstrata', width: 1600, height: 1100, seed: 'landing-page-conversion', accent: true },
    blocks: [
      { type: 'overview', body: 'Uma página de lançamento é um curta com uma chamada para ação. Esta foi construída em torno de uma única espinha narrativa, com o movimento usado para controlar o ritmo em vez de decorar seções.', meta: [{ label: 'Escopo', value: 'Narrativa, design, copy, build' }, { label: 'Papel', value: 'Design + Desenvolvimento' }, { label: 'Foco', value: 'Primeira impressão, performance, clareza' }, { label: 'Ano', value: '2026' }] },
      { type: 'challenge', body: 'A página precisa fazer três coisas ao mesmo tempo em poucos segundos: estabelecer qualidade, explicar a oferta e deixar o próximo passo óbvio — numa conexão lenta, num celular.' },
      { type: 'approach', body: 'Escrever o argumento primeiro. Desenhar para o argumento. Construir como HTML estático que pinta instantaneamente.', steps: ['Rascunhar a narrativa em frases simples', 'Fazer o storyboard do scroll', 'Desenhar cada momento', 'Publicar estático, medir Core Web Vitals'] },
      { type: 'design', body: 'Tipografia grande, espaço em branco deliberado, uma ideia por viewport. O design nunca compete com a mensagem.', media: [{ alt: 'Storyboard de scroll', width: 1600, height: 1000, seed: 'landing-design-1' }] },
      { type: 'development', body: 'Exportado estaticamente, imagens pré-otimizadas, motion atrás de reduced-motion. A meta é um first paint abaixo de um segundo e layout shift próximo de zero.', media: [{ alt: 'Perfil de performance', width: 1600, height: 1000, seed: 'landing-dev-1', accent: true }] },
      { type: 'motion', body: 'Revelações ligadas ao scroll que dão ritmo à leitura do argumento, mais um momento de assinatura na oferta.', clipId: 'case-teaser' },
      { type: 'result', body: 'Página final, copy e números de performance serão adicionados aqui quando este case for publicado.' },
      { type: 'technologies', groups: [{ label: 'Frontend', items: ['Next.js export estático', 'Tailwind', 'Framer Motion'] }, { label: 'Performance', items: ['AVIF/WebP', 'Mídia lazy', 'Budget de Lighthouse'] }] },
    ],
  },
  {
    slug: 'social-creative-system',
    title: 'Sistema Criativo',
    discipline: 'Social / Motion / Templates',
    disciplines: ['Social', 'Motion Design', 'Templates', 'Direção de Arte'],
    year: '2026',
    status: 'placeholder',
    summary:
      'Um sistema templatizado para conteúdo de social — layouts programáticos e motion renderizado com Remotion que mantém o feed consistente em volume.',
    cover: { alt: 'Sistema Criativo — capa abstrata', width: 1600, height: 1100, seed: 'social-creative-system' },
    blocks: [
      { type: 'overview', body: 'Produzir conteúdo de social na mão não escala e sai da marca rápido. Este sistema transforma regras de marca em templates e renderiza motion de forma programática.', meta: [{ label: 'Escopo', value: 'Sistema de templates, motion, pipeline de render' }, { label: 'Papel', value: 'Design + Motion + Ferramentas' }, { label: 'Saída', value: 'Posts estáticos + vídeo renderizado' }, { label: 'Ano', value: '2026' }] },
      { type: 'challenge', body: 'Manter um feed com cara de que uma só mão fez, enquanto produz volume suficiente para importar — entre formatos, numa fração do tempo.' },
      { type: 'approach', body: 'Codificar a lógica de layout. Alimentar com conteúdo. Renderizar.', steps: ['Definir um grid que funciona em 1:1, 4:5 e 9:16', 'Construir templates de layout como componentes', 'Compor o motion no Remotion', 'Renderizar em lote a partir de um manifesto'] },
      { type: 'motion', body: 'Cada clipe é uma composição Remotion guiada por dados — muda a copy e as props, re-renderiza o conjunto.', clipId: 'social-creative' },
      { type: 'gallery', media: [{ alt: 'Template — quadrado', width: 1200, height: 1200, seed: 'social-gallery-1' }, { alt: 'Template — retrato', width: 1200, height: 1500, seed: 'social-gallery-2', accent: true }, { alt: 'Template — story', width: 1080, height: 1920, seed: 'social-gallery-3' }] },
      { type: 'result', body: 'Conjuntos renderizados e o fluxo de produção serão adicionados aqui quando este case for publicado.' },
      { type: 'technologies', groups: [{ label: 'Motion', items: ['Remotion', 'React'] }, { label: 'Design', items: ['Figma', 'Layout programático'] }, { label: 'Pipeline', items: ['Script de render em Node', 'Rascunhos de copy com IA'] }] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getAdjacent = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { next: projects[0] };
  return { next: projects[(i + 1) % projects.length] };
};
