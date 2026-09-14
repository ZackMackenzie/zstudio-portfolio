import type { Dictionary } from '../types';

const pt: Dictionary = {
  meta: {
    title: 'Z.studio — Estúdio Digital de Design & Tecnologia',
    description:
      'A Z.studio projeta e constrói sites, produtos SaaS, identidade de marca e motion para empresas que querem parecer que levam isso a sério.',
  },
  nav: {
    work: 'Trabalhos',
    services: 'Serviços',
    about: 'Sobre',
    contact: 'Contato',
    cta: 'Iniciar projeto',
  },
  hero: {
    kicker: 'Design, engenharia & motion — um único estúdio',
    line1: 'Criamos coisas digitais',
    line2: 'com intenção.',
    subhead:
      'A Z.studio projeta e constrói do início ao fim — da identidade de marca ao produto no ar, passando pelo motion e pelos anúncios que vendem tudo isso. Um time, um sistema só, não três fornecedores diferentes.',
    chips: ['Websites', 'SaaS / Produto', 'Identidade de Marca', 'Motion / Filme', 'Criativo & Ads', 'Funis'],
    ctaPrimary: 'Iniciar projeto',
    ctaSecondary: 'Ver trabalhos',
    scroll: 'Rolar',
  },
  work: {
    kicker: 'Trabalhos selecionados',
    title: 'Trabalhos',
    intro:
      'Z.studio Concepts — projetos autorais, construídos com o mesmo rigor e o mesmo sistema que usamos com clientes. Sem atalhos.',
    concept: 'Z.studio Concept',
    viewCase: 'Ver case',
    allProjects: 'Todos os projetos',
    role: 'Atuação',
    year: 'Ano',
  },
  services: {
    kicker: 'O que fazemos',
    title: 'Serviços',
    intro: 'Quatro frentes, um único estúdio. Escopo definido projeto a projeto — sem pacote fechado, sem enrolação.',
    cta: 'Não achou exatamente o que precisa? Fale com a gente mesmo assim.',
    categories: [
      {
        index: '01',
        label: 'Digital',
        description: 'Produtos digitais rápidos e precisos — feitos para converter, não só para existir.',
        items: ['Websites', 'SaaS', 'Landing Pages'],
      },
      {
        index: '02',
        label: 'Marca',
        description: 'Sistema de marca, não só um logo — identidade que se sustenta em qualquer superfície.',
        items: ['Identidade de Marca', 'Design Systems', 'Direção de Arte'],
      },
      {
        index: '03',
        label: 'Motion',
        description: 'Motion que explica, vende e fica na cabeça — do micro-detalhe de UI ao filme completo.',
        items: ['Filmes de Produto', 'Motion Graphics', 'Remotion'],
      },
      {
        index: '04',
        label: 'Growth',
        description: 'Criativo de performance e páginas desenhadas em torno de um objetivo: o próximo clique.',
        items: ['Ads', 'Sistemas Criativos', 'Funis', 'Conversão'],
      },
    ],
  },
  about: {
    kicker: 'Sobre',
    title: 'Um estúdio pequeno, feito para fazer tudo bem-feito.',
    paragraphs: [
      'A Z.studio é um estúdio digital pequeno, que atua em design, engenharia e motion — não um time generalista que faz um pouco de tudo.',
      'Trabalhamos como um único time em design, código e motion, para que o site, o produto e o conteúdo de uma marca sigam um único sistema — em vez de três fornecedores diferentes.',
      'Todo projeto desta página foi projetado e construído por nós, para nós — prova de como trabalhamos, antes de você nos contratar para fazer isso pela sua marca.',
    ],
    stack: [
      { label: 'Design', items: ['UI/UX', 'Direção de Arte', 'Design Systems'] },
      { label: 'Engenharia', items: ['Next.js', 'React', 'TypeScript', 'Performance'] },
      { label: 'Motion', items: ['Remotion', 'Motion Graphics', '3D'] },
      { label: 'Growth', items: ['Estratégia Criativa', 'Funis', 'Conversão', 'Ads'] },
    ],
  },
  contact: {
    kicker: 'Contato',
    title: 'Iniciar projeto',
    intro: 'Conte o que você está construindo. Respondemos em até um dia útil.',
    formName: 'Nome',
    formEmail: 'E-mail',
    formCompany: 'Empresa / Marca',
    formCompanyOptional: '(opcional)',
    formType: 'Tipo de projeto',
    formTypeOptions: [
      'Website',
      'Produto SaaS',
      'Identidade de Marca',
      'Motion / Filme',
      'Criativo & Ads',
      'Outro',
    ],
    formMessage: 'Mensagem',
    formMessagePlaceholder: 'O que você está construindo, e como seria o sucesso desse projeto?',
    formSubmit: 'Enviar mensagem',
    formSubmitting: 'Enviando…',
    formSuccess: 'Mensagem enviada. Retornamos em breve.',
    formError: 'Algo deu errado. Tente novamente ou escreva direto para o nosso e-mail.',
    directLabel: 'Ou escreva direto para',
  },
  footer: {
    tagline: 'Um estúdio digital pequeno — design, engenharia e motion.',
    rights: 'Todos os direitos reservados.',
    back: 'Voltar ao topo',
  },
  notFound: {
    kicker: '404',
    title: 'Essa página não existe.',
    body: 'A página que você procura foi movida, renomeada ou nunca existiu.',
    cta: 'Voltar ao início',
  },
  caseStudy: {
    overview: 'Visão geral',
    category: 'Categoria',
    servicesLabel: 'Capacidades',
    year: 'Ano',
    concept: 'Conceito',
    direction: 'Direção',
    interface: 'Interface',
    motion: 'Motion',
    development: 'Desenvolvimento',
    result: 'Resultado',
    noResult:
      'Um Z.studio Concept — um projeto autoral, não um trabalho para cliente. Os objetivos abaixo são o briefing que criamos para nós mesmos, não resultados reportados.',
    next: 'Próximo projeto',
    back: 'Todos os trabalhos',
  },
};

export default pt;
