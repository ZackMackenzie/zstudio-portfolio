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
    contact: 'Contato',
    cta: 'Iniciar projeto',
  },
  hero: {
    kicker: 'Estúdio digital de design & tecnologia',
    line1: 'Produtos digitais,',
    line2: 'marcas & experiências.',
    subhead: 'Um estúdio pequeno, projetando em web, produto, marca e motion.',
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
    title: 'Tem um projeto em mente?',
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
    servicesLabel: 'Stack',
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
