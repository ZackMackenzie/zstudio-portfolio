/**
 * pt-BR — tradução natural (não literal). Precisa satisfazer o mesmo formato
 * de en.ts (ver `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText } from './en';

const projects: Record<string, ProjectText> = {
  'kroma-ai': {
    title: 'Kroma AI',
    discipline: 'Design de Produto SaaS · Vídeo Cinético · Anúncios de Performance',
    pitch: 'Um command palette não é enfeite aqui — pra um comprador técnico, velocidade é o argumento inteiro.',
    tags: ['Next.js 15', 'Framer Motion', 'Criativos de Anúncio'],
  },
  acompanhai: {
    title: 'AcompanhaAí',
    discipline: 'Design de Produto SaaS · Engenharia de Interface',
    pitch: 'Um produto por assinatura se prova no painel do dia a dia, não na página de vendas — por isso começou por ali.',
    tags: ['Design de Produto', 'Next.js', 'SaaS por Assinatura'],
  },
  'aura-villa': {
    title: 'Aura Villa',
    discipline: 'Web de Hospitalidade · Reserva Direta · Anúncio em Motion',
    pitch: 'Cada real economizado em comissão de plataforma precisava parecer conquistado, não extraído — daí o checkout direto.',
    tags: ['Next.js', 'Checkout Direto', 'Trailer em Motion'],
  },
  'apex-flow': {
    title: 'Apex Flow',
    discipline: 'Otimização de Conversão · Landing Page · Kit de WhatsApp',
    pitch: 'Tabela comparativa converte mais que adjetivo — a página inteira argumenta em números.',
    tags: ['React Ultra-Rápido', 'Tailwind CSS', 'Sistema de Anúncios'],
  },
  'studio-system': {
    title: 'Studio System',
    discipline: 'Criativos para Social · Carrosséis de Instagram · Banners de WhatsApp',
    pitch: 'Um sistema visual só, recortado em todos os formatos que um calendário de tráfego pago realmente usa.',
    tags: ['Motion Design', 'Crescimento Social', 'Identidade de Marca'],
  },
  zstudio: {
    title: 'Zstudio',
    discipline: 'Identidade de Marca · Design System · Este Site',
    pitch: 'A marca do próprio estúdio precisava passar pelo mesmo escrutínio de qualquer cliente — este site é a prova.',
    tags: ['Sistema de Marca', 'Next.js 15', 'Motion Design'],
  },
};

const services: Record<string, ServiceText> = {
  brand: {
    title: 'Marca',
    items: ['Identidade', 'Branding', 'Direção Visual'],
  },
  digital: {
    title: 'Digital',
    items: ['Websites', 'Landing Pages', 'Produtos SaaS', 'Design de UI/UX'],
  },
  content: {
    title: 'Conteúdo',
    items: ['Social Media', 'Criativos para Anúncios', 'Vídeos de Produto', 'Motion Estilo Apple'],
  },
  growth: {
    title: 'Growth',
    items: ['Páginas de Vendas', 'Funis de Afiliados', 'Campanhas Digitais'],
  },
};

export const ptBR: Dictionary = {
  meta: {
    role: 'Estúdio de Design Digital & Tecnologia',
    description:
      'A Zstudio é um estúdio independente que projeta e constrói websites, marcas e produtos digitais para fundadores, empresas e criadores — no Brasil e no exterior.',
    ogTagline: 'Websites, marcas e produtos digitais, construídos com intenção.',
    ogServices: 'Marca · Digital · Conteúdo · Growth',
  },

  header: {
    status: 'Disponível para novos projetos · Q2/Q3',
    bookProject: 'Iniciar um Projeto',
  },

  nav: {
    work: 'Trabalhos',
    services: 'Serviços',
    about: 'Sobre',
    contact: 'Contato',
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  whatsappMessage: 'Olá! Tenho interesse em trabalhar com a Zstudio em um projeto.',

  cta: {
    pricingNote: 'Cada projeto é orçado conforme seus objetivos e prazo — entre em contato e encontramos o melhor formato juntos.',
  },

  hero: {
    eyebrow: 'Design, Tecnologia & Produtos Digitais / 2026',
    lines: ['Websites, marcas e', 'produtos digitais —', 'construídos com intenção.'],
    subcopy:
      'A Zstudio é um estúdio independente que projeta e constrói experiências digitais para fundadores, empresas e marcas no Brasil e no exterior.',
    ctaPrimary: 'Ver trabalhos selecionados',
    ctaSecondary: 'Iniciar um projeto',
    metrics: ['Design + Desenvolvimento, Um Time', 'Estúdio Independente, de Propósito', 'Fuso BR + Global (EST/BRT)'],
  },

  work: {
    label: 'Trabalhos selecionados',
    title: ['Mostruário', 'curado'],
    concept: 'Concept project',
    projects,
  },

  services: {
    label: 'Serviços',
    title: ['Serviço Completo,', 'Por Disciplina'],
    items: services,
  },

  about: {
    label: 'Sobre',
    title: ['Um Estúdio,', 'Toda Disciplina'],
    body: 'A Zstudio atua na interseção entre design, tecnologia e estratégia. Cada projeto passa pelas mesmas mãos — do primeiro wireframe à última linha de código de motion — para que o raciocínio por trás de uma marca e a execução do seu produto nunca se distanciem. Construímos para fundadores e empresas que precisam de mais do que uma interface bonita: um sistema que se sustenta no uso real, em qualquer idioma, em qualquer tela.',
    disciplines: ['Design', 'Tecnologia', 'Estratégia', 'Motion', 'Branding', 'UX'],
  },

  process: {
    label: 'Processo',
    title: ['Como um Projeto', 'Avança'],
    steps: [
      {
        title: 'Discover',
        body: 'Entender o negócio, o público e o que "bem feito" realmente significa para este projeto.',
      },
      {
        title: 'Define',
        body: 'Transformar esse entendimento em escopo, estrutura e um mapa de conteúdo claro — antes de qualquer pixel.',
      },
      {
        title: 'Design',
        body: 'Direção visual, tipografia e layout, testados com conteúdo real, não com texto de preenchimento.',
      },
      {
        title: 'Build',
        body: 'Código em nível de produção — responsivo, acessível, rápido — não um mockup estático fingindo ser produto.',
      },
      {
        title: 'Refine',
        body: 'Refinar motion, performance e casos extremos até a experiência se sustentar no uso real.',
      },
    ],
  },

  contact: {
    label: 'Contato',
    title: ['Tem um Projeto', 'em Mente?'],
    subcopy: 'Conte o que você está construindo — uma marca, um produto ou uma campanha — e retornamos com os próximos passos.',
    whatsapp: 'Fale no WhatsApp',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
  },

  footer: {
    onlineNow: 'Online agora',
    backToTop: 'Voltar ao topo ↑',
    copyright: '© 2026 ZSTUDIO. TODOS OS DIREITOS RESERVADOS. FUSO HORÁRIO COMPATÍVEL (EST / BRT).',
  },

  notFound: {
    badge: 'Erro 404',
    titleLines: ['Esta página', 'não existe.'],
    body: 'O link está quebrado ou a página mudou de lugar. Todo o resto está a um clique.',
    back: '← Voltar ao início',
  },
};
