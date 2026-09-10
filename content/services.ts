export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    summary: 'Sites, landing pages e experiências digitais.',
    detail:
      'Sites editoriais, conduzidos por movimento e construídos em torno de uma única narrativa — feitos para causar a impressão certa nos primeiros segundos e se sustentar em qualquer tela depois disso.',
    deliverables: ['Sites institucionais', 'Landing pages', 'Experiências interativas', 'Design systems'],
  },
  {
    id: 'development',
    title: 'Desenvolvimento',
    summary: 'Aplicações web modernas e produtos SaaS.',
    detail:
      'Front-ends de produção em React e TypeScript. Bibliotecas de componentes, sites de marketing estáticos e rápidos, e UI de produto ligada a dados reais — engenharia, não gambiarra.',
    deliverables: ['Builds React / Next.js', 'Bibliotecas de componentes', 'Front-ends de SaaS', 'Trabalho de performance'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    summary: 'Interfaces, sistemas e experiências de produto.',
    detail:
      'Arquitetura de informação, fluxos e sistemas de interface. O trabalho começa no modelo de dados e nas tarefas centrais, para que as telas que vêm depois pareçam inevitáveis.',
    deliverables: ['UX de produto', 'Design systems', 'Fluxos e protótipos', 'Auditorias de interface'],
  },
  {
    id: 'brand-design',
    title: 'Marca & Design',
    summary: 'Identidades visuais, design digital e direção criativa.',
    detail:
      'Identidade pensada primeiro para telas — wordmark, tipografia, cor e uma assinatura de movimento — depois extraída em guidelines e aplicações que um time consegue de fato usar.',
    deliverables: ['Identidade visual', 'Sistemas de tipo e cor', 'Direção de arte', 'Guidelines'],
  },
  {
    id: 'social-creative',
    title: 'Social & Criativo',
    summary: 'Conteúdo social, campanhas e criativos digitais.',
    detail:
      'Sistemas de conteúdo templatizados e criativo de campanha que permanecem fiéis à marca em escala — layouts programáticos e motion renderizado a partir de um pipeline repetível.',
    deliverables: ['Sistemas de conteúdo', 'Criativo de campanha', 'Templates de motion', 'Variações de anúncio'],
  },
  {
    id: 'ai-production',
    title: 'Produção com IA',
    summary: 'Workflows modernos de IA em todo o processo.',
    detail:
      'IA usada de propósito para acelerar pesquisa, exploração, redação e geração de assets, além de QA — para que mais do cronograma vá para julgamento e ofício. O resultado é medido por padrão de estúdio, não de IA.',
    deliverables: ['Iteração mais rápida', 'Pesquisa e síntese', 'Geração de assets', 'QA automatizado'],
  },
];
