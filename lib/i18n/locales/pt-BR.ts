/**
 * ============================================================================
 * pt-BR — idioma-base do site
 * ============================================================================
 * Todo texto visível do site vive aqui (e nas cópias en.ts / es.ts). Dados
 * estruturais (slugs, seeds, clipIds, dimensões de mídia) ficam em
 * content/*.ts — ver lib/i18n/mergeProject.ts para como os dois se juntam.
 *
 * `Dictionary` (o tipo inferido deste arquivo) é o contrato que en.ts e es.ts
 * precisam satisfazer — o TypeScript aponta qualquer campo faltando.
 * ============================================================================
 */

export type MetaEntry = { label: string; value: string };
export type TechGroup = { label: string; items: string[] };
export type ProjectMedia = { alt: string };

export type ProjectText = {
  title: string;
  discipline: string;
  tags: string[];
  summary: string;
  overview: { body: string; meta: MetaEntry[] };
  challenge: { body: string };
  approach: { body: string; steps: string[] };
  design?: { body: string; media?: ProjectMedia[] };
  development?: { body: string; media?: ProjectMedia[] };
  motion: { body: string };
  gallery?: { media: ProjectMedia[] };
  result: { body: string };
  technologies: { groups: TechGroup[] };
};

export type ServiceText = {
  title: string;
  summary: string;
};

const projects: Record<string, ProjectText> = {
  'saas-product-platform': {
    title: 'Plataforma de Produto',
    discipline: 'SaaS / Design de Produto / Desenvolvimento',
    tags: ['Design de Produto', 'UI/UX', 'Frontend', 'Design System'],
    summary:
      'Design e desenvolvimento ponta a ponta de uma plataforma SaaS — da arquitetura de informação e do design system até um front-end React em produção.',
    overview: {
      body: 'Uma superfície de produto inteira desenhada e construída como um sistema: uma biblioteca de componentes, uma linguagem de design documentada e um front-end ligado a dados reais. O objetivo era uma plataforma capaz de crescer sem a UI se perder.',
      meta: [
        { label: 'Escopo', value: 'Design system, UI de produto, build de frontend' },
        { label: 'Papel', value: 'Design + Desenvolvimento' },
        { label: 'Prazo', value: 'Concept project' },
        { label: 'Ano', value: '2026' },
      ],
    },
    challenge: {
      body: 'A maioria dos produtos em estágio inicial acumula telas mais rápido do que acumula estrutura. O briefing era definir a estrutura primeiro — tokens, primitivas, padrões — para que cada nova feature encaixe num sistema em vez de expandir a área de decisões.',
    },
    approach: {
      body: 'Começar pelo modelo de dados e pelas tarefas principais, não pelas telas. Desenhar o sistema à vista, em código, para que design e implementação nunca divirjam.',
      steps: [
        'Mapear os objetos centrais e as três ou quatro tarefas que mais importam',
        'Definir tokens: cor, tipografia, espaçamento, movimento',
        'Construir primitivas e padrões como uma biblioteca documentada',
        'Montar telas a partir da biblioteca — nunca sob medida',
      ],
    },
    design: {
      body: 'Uma linguagem de interface contida: um acento, controles de densidade generosos e uma escala tipográfica que se segura de tabelas densas a superfícies de marketing.',
      media: [{ alt: 'Sistema de interface — visão geral' }, { alt: 'Estados de componente' }],
    },
    development: {
      body: 'React e TypeScript, estilizados com uma camada de tokens que mapeia 1:1 com os arquivos de design. A API de componentes é pequena de propósito — a maioria das telas é composição, não configuração.',
      media: [{ alt: 'Arquitetura de front-end' }],
    },
    motion: {
      body: 'Aqui o movimento é funcional: transições de estado, updates otimistas e movimentação de foco. Nada fica em loop, nada decora.',
    },
    result: {
      body: 'Este é um concept project, sem cliente real — pensado para demonstrar processo e nível de execução. Telas, motion e código seguem sendo expandidos.',
    },
    technologies: {
      groups: [
        { label: 'Design', items: ['Figma', 'Design tokens', 'Escala tipográfica variável'] },
        { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
        { label: 'Ferramentas', items: ['Storybook', 'Vercel', 'QA assistido por IA'] },
      ],
    },
  },
  'brand-identity-system': {
    title: 'Sistema de Identidade',
    discipline: 'Marca / Direção de Arte / Web',
    tags: ['Identidade Visual', 'Direção de Arte', 'Web Design', 'Motion'],
    summary:
      'Uma identidade visual feita para viver em todo lugar — wordmark, sistema tipográfico, linguagem de movimento e um site que entrega a marca em vez de descrevê-la.',
    overview: {
      body: 'Trabalho de identidade que trata o site como o artefato principal. A marca é definida por como se move e compõe na tela, e depois é extraída de volta em aplicações estáticas.',
      meta: [
        { label: 'Escopo', value: 'Wordmark, tipografia, cor, motion, site' },
        { label: 'Papel', value: 'Direção de Arte + Design + Build' },
        { label: 'Entregáveis', value: 'Guidelines, build web, kit de social' },
        { label: 'Ano', value: '2026' },
      ],
    },
    challenge: {
      body: 'Um logo é fácil de fazer e fácil de ignorar. O problema mais difícil é um sistema com regras suficientes para ser reconhecível e espaço suficiente para ser usado por outras pessoas sem desmontar.',
    },
    approach: {
      body: 'Desenhar o menor conjunto de decisões que faz tudo que vem depois parecer inevitável.',
      steps: ['Definir a voz tipográfica', 'Fixar a lógica de grid e espaçamento', 'Definir uma assinatura de movimento', 'Documentar com exemplos reais, não amostras'],
    },
    design: {
      body: 'Um wordmark grotesco confiante, um grid editorial rígido e uma única assinatura de movimento que se repete em cada ponto de contato.',
      media: [{ alt: 'Estudos de wordmark' }, { alt: 'Layouts editoriais' }],
    },
    motion: {
      body: 'Uma revelação, uma transição, um loop — aplicados de forma consistente para que o movimento vire parte da identidade, não um efeito.',
    },
    gallery: {
      media: [{ alt: 'Aplicação — pôster' }, { alt: 'Aplicação — social' }, { alt: 'Aplicação — web' }],
    },
    result: {
      body: 'Este é um concept project, sem cliente real — pensado para demonstrar processo e nível de execução. Guidelines e aplicações seguem sendo expandidas.',
    },
    technologies: {
      groups: [
        { label: 'Design', items: ['Figma', 'Ferramentas de type design'] },
        { label: 'Motion', items: ['Remotion', 'After Effects'] },
        { label: 'Web', items: ['Next.js', 'Framer Motion'] },
      ],
    },
  },
  'landing-page-conversion': {
    title: 'Página de Lançamento',
    discipline: 'Landing Page / Copy / Build',
    tags: ['Landing Page', 'Narrativa', 'Frontend', 'Motion'],
    summary:
      'Uma experiência de lançamento de página única — estrutura narrativa, motion sob medida e um build estático rápido, projetado para os primeiros dez segundos.',
    overview: {
      body: 'Uma página de lançamento é um curta com uma chamada para ação. Esta foi construída em torno de uma única espinha narrativa, com o movimento usado para controlar o ritmo em vez de decorar seções.',
      meta: [
        { label: 'Escopo', value: 'Narrativa, design, copy, build' },
        { label: 'Papel', value: 'Design + Desenvolvimento' },
        { label: 'Foco', value: 'Primeira impressão, performance, clareza' },
        { label: 'Ano', value: '2026' },
      ],
    },
    challenge: {
      body: 'A página precisa fazer três coisas ao mesmo tempo em poucos segundos: estabelecer qualidade, explicar a oferta e deixar o próximo passo óbvio — numa conexão lenta, num celular.',
    },
    approach: {
      body: 'Escrever o argumento primeiro. Desenhar para o argumento. Construir como HTML estático que pinta instantaneamente.',
      steps: ['Rascunhar a narrativa em frases simples', 'Fazer o storyboard do scroll', 'Desenhar cada momento', 'Publicar estático, medir Core Web Vitals'],
    },
    design: {
      body: 'Tipografia grande, espaço em branco deliberado, uma ideia por viewport. O design nunca compete com a mensagem.',
      media: [{ alt: 'Storyboard de scroll' }],
    },
    development: {
      body: 'Exportado estaticamente, imagens pré-otimizadas, motion atrás de reduced-motion. A meta é um first paint abaixo de um segundo e layout shift próximo de zero.',
      media: [{ alt: 'Perfil de performance' }],
    },
    motion: {
      body: 'Revelações ligadas ao scroll que dão ritmo à leitura do argumento, mais um momento de assinatura na oferta.',
    },
    result: {
      body: 'Este é um concept project, sem cliente real — pensado para demonstrar processo e nível de execução. Copy final e números de performance seguem sendo refinados.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js export estático', 'Tailwind', 'Framer Motion'] },
        { label: 'Performance', items: ['AVIF/WebP', 'Mídia lazy', 'Budget de Lighthouse'] },
      ],
    },
  },
  'social-creative-system': {
    title: 'Sistema Criativo',
    discipline: 'Social / Motion / Templates',
    tags: ['Social', 'Motion Design', 'Templates', 'Direção de Arte'],
    summary:
      'Um sistema templatizado para conteúdo de social — layouts programáticos e motion renderizado com Remotion que mantém o feed consistente em volume.',
    overview: {
      body: 'Produzir conteúdo de social na mão não escala e sai da marca rápido. Este sistema transforma regras de marca em templates e renderiza motion de forma programática.',
      meta: [
        { label: 'Escopo', value: 'Sistema de templates, motion, pipeline de render' },
        { label: 'Papel', value: 'Design + Motion + Ferramentas' },
        { label: 'Saída', value: 'Posts estáticos + vídeo renderizado' },
        { label: 'Ano', value: '2026' },
      ],
    },
    challenge: {
      body: 'Manter um feed com cara de que uma só mão fez, enquanto produz volume suficiente para importar — entre formatos, numa fração do tempo.',
    },
    approach: {
      body: 'Codificar a lógica de layout. Alimentar com conteúdo. Renderizar.',
      steps: ['Definir um grid que funciona em 1:1, 4:5 e 9:16', 'Construir templates de layout como componentes', 'Compor o motion no Remotion', 'Renderizar em lote a partir de um manifesto'],
    },
    motion: {
      body: 'Cada clipe é uma composição Remotion guiada por dados — muda a copy e as props, re-renderiza o conjunto.',
    },
    gallery: {
      media: [{ alt: 'Template — quadrado' }, { alt: 'Template — retrato' }, { alt: 'Template — story' }],
    },
    result: {
      body: 'Este é um concept project, sem cliente real — pensado para demonstrar processo e nível de execução. Conjuntos renderizados seguem sendo ampliados.',
    },
    technologies: {
      groups: [
        { label: 'Motion', items: ['Remotion', 'React'] },
        { label: 'Design', items: ['Figma', 'Layout programático'] },
        { label: 'Pipeline', items: ['Script de render em Node', 'Rascunhos de copy com IA'] },
      ],
    },
  },
};

const services: Record<string, ServiceText> = {
  websites: {
    title: 'Websites',
    summary: 'Sites rápidos e focados, feitos para a primeira impressão certa.',
  },
  'landing-pages': {
    title: 'Landing Pages',
    summary: 'Páginas de conversão construídas em torno de uma única mensagem.',
  },
  'saas-product': {
    title: 'SaaS & Product Design',
    summary: 'Design e desenvolvimento de produtos digitais, do fluxo à interface.',
  },
  branding: {
    title: 'Branding',
    summary: 'Identidade visual e verbal para marcas que precisam ser lembradas.',
  },
  'social-media': {
    title: 'Social Media',
    summary: 'Criativos e templates que mantêm o feed consistente em volume.',
  },
  'motion-video': {
    title: 'Motion & Video',
    summary: 'Vídeos e motion que tornam produtos mais fáceis de entender.',
  },
  advertising: {
    title: 'Advertising',
    summary: 'Criativos de campanha feitos para performance, testados em variações.',
  },
};

export const ptBR = {
  meta: {
    role: 'Estúdio de design e tecnologia digital',
    description:
      'Zstudio é um estúdio digital independente que constrói sites, produtos, marcas e experiências digitais — desenhados e desenvolvidos com tecnologia, design e IA.',
    ogTagline: 'Eu construo experiências digitais.',
    ogServices: 'Web · Produto · Marca · Motion · IA',
  },

  nav: {
    work: 'Trabalhos',
    services: 'Serviços',
    about: 'Sobre',
    contact: 'Contato',
    menu: 'Menu',
    close: 'Fechar',
    menuAria: 'Menu de navegação',
    portfolioBadge: 'Portfólio — 2026',
    skipToContent: 'Pular para o conteúdo',
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  cta: {
    startProject: 'Iniciar um projeto',
    pricingNote: 'Cada projeto é adaptado aos seus objetivos, escopo e complexidade. Entre em contato para encontrarmos a melhor abordagem.',
  },

  hero: {
    eyebrow: 'Estúdio de design e tecnologia digital',
    lines: ['Experiências', 'digitais feitas', 'para se destacar.'],
    subcopy: 'Websites, produtos, marcas e experiências digitais — construídos para o que o seu projeto precisa.',
  },

  work: {
    label: 'Trabalhos',
    title: ['Trabalhos', 'selecionados'],
    concept: 'Concept project',
    back: '← Trabalhos',
    nextProject: 'Próximo projeto',
    viewCursor: 'Ver',
    nextCursor: 'Próximo',
    motionStudyAlt: 'Estudo de motion',
    headings: {
      overview: 'Visão geral',
      challenge: 'Desafio',
      approach: 'Abordagem',
      design: 'Design',
      development: 'Desenvolvimento',
      motion: 'Motion',
      result: 'Resultado final',
      gallery: 'Galeria',
      technologies: 'Tecnologias',
    },
    projects,
  },

  services: {
    label: 'Serviços',
    title: ['O que', 'fazemos'],
    items: services,
    combineNote: 'Um projeto pode combinar design, desenvolvimento, branding, motion e o que mais for preciso.',
  },

  about: {
    label: 'Sobre',
    quoteLines: ['Não desenho só', 'interfaces —', 'eu construo tudo.'],
    serifLine: 'Cada projeto pede uma combinação diferente de disciplinas — a Zstudio monta essa combinação.',
    capabilities: ['Design', 'Desenvolvimento', 'Motion', 'IA'],
    note: 'A stack muda quando aparece uma ferramenta melhor — o padrão de estúdio não.',
  },

  contact: {
    label: 'Contato',
    kicker: 'Tem um projeto em mente?',
    titleLines: ['Vamos criar', 'algo incrível, juntos.'],
    emailCursor: 'Email',
    chatCursor: 'Conversar',
    whatsapp: 'WhatsApp',
    statusLabel: 'Status',
    baseLabel: 'Base',
    localTimeLabel: 'Horário local',
    socialLabel: 'Redes',
    availability: 'Disponível para projetos selecionados — 2026',
    baseLocation: 'Remoto / Brasil',
    linktreeLabel: 'Linktree',
    form: {
      intro: 'Ou preencha o formulário — eu respondo por e-mail.',
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      email: 'Email',
      emailPlaceholder: 'voce@empresa.com',
      company: 'Empresa ou projeto',
      companyPlaceholder: 'Opcional',
      service: 'Serviço de interesse',
      serviceOptional: 'Selecione (opcional)',
      description: 'Descrição do projeto',
      descriptionPlaceholder: 'Conta um pouco sobre a ideia, o objetivo e qualquer referência que ajude.',
      budget: 'Faixa de orçamento',
      budgetOptional: 'Opcional',
      budgetPlaceholder: 'Ex.: a definir, ou uma faixa aproximada',
      submit: 'Enviar mensagem',
      submitting: 'Abrindo seu e-mail…',
      successTitle: 'Quase lá.',
      successBody: 'Seu cliente de e-mail deve abrir com a mensagem pronta — é só revisar e enviar. Se não abrir, escreva direto para',
      requiredError: 'Preencha nome, e-mail e uma descrição do projeto.',
    },
  },

  footer: {
    tagline: 'Estúdio independente de design e tecnologia digital.',
    networksLabel: 'Redes',
    backToTop: 'Voltar ao topo ↑',
    colophon: 'Hanken Grotesk · Inter · IBM Plex Mono — Next.js · Remotion',
  },

  notFound: {
    badge: 'Erro 404',
    titleLines: ['Esta página', 'não existe.'],
    body: 'O link está quebrado ou a página mudou de lugar. Todo o resto está a um clique.',
    back: '← Voltar ao início',
  },
};

export type Dictionary = typeof ptBR;
