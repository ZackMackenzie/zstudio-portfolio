/**
 * pt-BR — tradução natural (não literal). Precisa satisfazer o mesmo formato
 * de en.ts (ver `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText } from './en';

const projects: Record<string, ProjectText> = {
  'aura-villa': {
    title: 'Aura Villa',
    discipline: 'Web de Hospitalidade · Reserva Direta · Anúncio em Motion',
    pitch:
      'Site de reserva direta e vídeo viral para redes sociais de uma propriedade Airbnb arquitetônica, cortando as taxas da plataforma.',
    tags: ['Next.js', 'Checkout Direto', 'Trailer em Motion'],
  },
  'kroma-ai': {
    title: 'Kroma AI',
    discipline: 'Design de Produto SaaS · Vídeo Cinético · Anúncios de Performance',
    pitch:
      'Experiência de lançamento SaaS de alto ticket, com um dashboard interativo em dark mode e um teaser de produto de 30s estilo keynote.',
    tags: ['Next.js 15', 'Framer Motion', 'Criativos de Anúncio'],
  },
  'apex-flow': {
    title: 'Apex Flow',
    discipline: 'Otimização de Conversão · Landing Page · Kit de WhatsApp',
    pitch:
      'Landing page de presell de afiliado sub-segundo, com gatilhos psicológicos de conversão, matriz comparativa e kit de lançamento via WhatsApp.',
    tags: ['React Ultra-Rápido', 'Tailwind CSS', 'Sistema de Anúncios'],
  },
  'studio-system': {
    title: 'Studio System',
    discipline: 'Criativos para Social · Carrosséis de Instagram · Banners de WhatsApp',
    pitch: 'Uma máquina completa de volume criativo para marcas escalando tráfego pago e redes sociais.',
    tags: ['Motion Design', 'Crescimento Social', 'Identidade de Marca'],
  },
};

const services: Record<string, ServiceText> = {
  'web-dev': {
    title: 'Arquitetura Web',
    items: ['Sites SaaS', 'Reserva Direta pro Airbnb', 'Engines de Afiliado', 'React/Next.js sob medida'],
  },
  'motion-video': {
    title: 'Motion & Vídeo',
    items: ['Motion estilo Keynote da Apple', 'Teasers de Funcionalidade em UI', 'Reels de Tipografia Cinética'],
  },
  'social-ads': {
    title: 'Criativo de Performance',
    items: ['Anúncios Meta & LinkedIn', 'Carrosséis de Alta Retenção', 'Kits Promocionais de WhatsApp'],
  },
  'brand-assets': {
    title: 'Marca & Estratégia',
    items: ['Identidade Visual', 'Design Tokens', 'Design Systems em Figma'],
  },
};

export const ptBR: Dictionary = {
  meta: {
    role: 'Engenharia Criativa & Sistemas Digitais',
    description:
      'A Zstudio é um estúdio independente que cria experiências web de alta conversão, teasers cinematográficos de produto e sistemas de criativos de performance para marcas e fundadores globais.',
    ogTagline: 'Construímos produtos digitais que chamam atenção.',
    ogServices: 'Web · Motion · Anúncios · Marca',
  },

  header: {
    status: 'Disponível para novos projetos · Q2/Q3',
    bookProject: 'Iniciar um Projeto',
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  whatsappMessage: 'Olá! Tenho interesse em trabalhar com a Zstudio em um projeto.',

  cta: {
    pricingNote: 'Cada projeto é orçado conforme seus objetivos e prazo — entre em contato e encontramos o melhor formato juntos.',
  },

  hero: {
    eyebrow: 'Engenharia Criativa & Sistemas Digitais / 2026',
    lines: ['Criamos produtos digitais,', 'vídeos estilo Apple e', 'sites de alta performance.'],
    subcopy:
      'Um estúdio independente que cria experiências web de alta conversão, teasers cinematográficos de produto e sistemas de criativos de performance para marcas e fundadores globais.',
    ctaPrimary: 'Ver trabalhos selecionados',
    ctaSecondary: 'Iniciar um projeto',
    metrics: ['Entrega em 7 dias', 'Velocidade sub-segundo', 'Fuso horário global (EST/BRT)'],
  },

  work: {
    label: 'Trabalhos selecionados',
    title: ['Mostruário', 'curado'],
    concept: 'Concept project',
    projects,
  },

  services: {
    label: 'Capacidades',
    title: ['Matriz de', 'Capacidades'],
    items: services,
  },

  footer: {
    titleLines: ['Vamos construir algo', 'inesquecível.'],
    whatsapp: 'Fale no WhatsApp',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
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
