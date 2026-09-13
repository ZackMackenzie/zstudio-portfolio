/**
 * pt-BR — tradução natural (não literal). Precisa satisfazer o mesmo formato
 * de en.ts (ver `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText } from './en';

const projects: Record<string, ProjectText> = {
  'aura-stays': {
    title: 'Aura Stays',
    category: 'Web de Hospitalidade & Vídeo estilo Apple',
    tags: ['Reserva Direta', 'Vídeo Motion', 'Kit de Anúncios Social'],
    summary:
      'Uma página de reserva direta e um teaser cinematográfico feitos para tirar reservas das plataformas e trazer pro próprio site do anfitrião.',
    overview: {
      body: 'Anfitriões de Airbnb perdem 15–20% em taxas de plataforma. O Aura Stays combina uma página de reserva direta com um teaser em vídeo curto, estilo Apple, feito para redes sociais — pra o hóspede reservar direto com o anfitrião, não pelo marketplace.',
      meta: [
        { label: 'Escopo', value: 'Página de reserva + teaser em vídeo' },
        { label: 'Papel', value: 'Design + Motion + Build' },
        { label: 'Formato', value: 'Web + vídeo de 0:30' },
        { label: 'Ano', value: '2026' },
      ],
    },
    design: {
      body: 'Uma página de imóvel limpa — galeria, selo de reserva direta, checagem instantânea de datas — ao lado de um teaser cinematográfico feito para Reels e Stories.',
      media: [{ alt: 'Aura Stays — página de reserva direta' }, { alt: 'Aura Stays — teaser em vídeo' }],
    },
    result: {
      body: 'Projeto proprietário do estúdio — desenvolvido para demonstrar design de conversão em reserva direta e domínio de motion em formato curto.',
    },
    technologies: {
      groups: [
        { label: 'Web', items: ['Next.js', 'Tailwind CSS'] },
        { label: 'Motion', items: ['Framer Motion', 'Remotion'] },
        { label: 'Design', items: ['Figma'] },
      ],
    },
  },
  'kroma-ai': {
    title: 'Kroma AI',
    category: 'Web SaaS & Vídeo de Produto estilo Apple',
    tags: ['Next.js 15', 'Framer Motion', 'Criativos de Anúncio SaaS'],
    summary: 'Um dashboard escuro, pronto pra investidor, com command palette e um teaser de lançamento feito pra uma rodada de captação.',
    overview: {
      body: 'Fundadores de SaaS levantando investimento ou brigando por assinantes precisam de um produto que já pareça o líder de mercado. O Kroma AI combina um dashboard denso em dados com um teaser de lançamento estilo keynote.',
      meta: [
        { label: 'Escopo', value: 'UI de produto + vídeo de lançamento' },
        { label: 'Papel', value: 'Design + Frontend + Motion' },
        { label: 'Formato', value: 'Web app + vídeo de 0:30' },
        { label: 'Ano', value: '2026' },
      ],
    },
    design: {
      body: 'Um dashboard escuro com métricas ao vivo, uma command palette (⌘K) e um teaser de tipografia cinética feito para a landing de lançamento e mídia paga.',
      media: [{ alt: 'Kroma AI — visão geral do dashboard' }, { alt: 'Kroma AI — command palette' }],
    },
    result: {
      body: 'Projeto proprietário do estúdio — desenvolvido para demonstrar arquitetura de design, código de produção e rigor tipográfico.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS'] },
        { label: 'Motion', items: ['Framer Motion'] },
        { label: 'Design', items: ['Figma'] },
      ],
    },
  },
  'apex-flow': {
    title: 'Apex Flow',
    category: 'Funis de Conversão & Criativo de Performance',
    tags: ['Bridge de Afiliado', 'Velocidade Sub-segundo', 'Kits de WhatsApp'],
    summary: 'Uma bridge page sub-segundo feita pra aquecer tráfego frio e dobrar o CTR antes da oferta.',
    overview: {
      body: 'Media buyers precisam de bridge pages que carregam na hora e constroem confiança em segundos. O Apex Flow usa urgência, prova social e uma tabela comparativa enxuta pra mover o tráfego do anúncio até a oferta sem fricção.',
      meta: [
        { label: 'Escopo', value: 'Bridge page + kit de anúncios' },
        { label: 'Papel', value: 'Design + Frontend' },
        { label: 'Foco', value: 'Velocidade, confiança, CTR' },
        { label: 'Ano', value: '2026' },
      ],
    },
    design: {
      body: 'Uma página mobile-first de alto contraste — contagem regressiva, selos de confiança, uma comparação em duas colunas, um único CTA.',
      media: [{ alt: 'Apex Flow — bridge page' }],
    },
    result: {
      body: 'Projeto proprietário do estúdio — desenvolvido para demonstrar arquitetura de design, código de produção e rigor tipográfico.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js export estático', 'Tailwind CSS'] },
        { label: 'Performance', items: ['Carregamento sub-segundo', 'Orçamento de Core Web Vitals'] },
      ],
    },
  },
  'studio-creatives': {
    title: 'Studio Creatives',
    category: 'Anúncios em Motion, Carrosséis & Banners de WhatsApp',
    tags: ['Criativos para Social', 'Sistema de Carrossel', 'Banners de WhatsApp'],
    summary: 'Um sistema modular de criativos — carrosséis, anúncios em story e banners de WhatsApp — feito pra manter campanhas pagas com volume.',
    overview: {
      body: 'Escalar tráfego pago exige um fluxo constante de criativos on-brand. O Studio Creatives transforma regras de marca em templates — slides de carrossel, anúncios em story e banners promocionais de WhatsApp — renderizados de forma programática.',
      meta: [
        { label: 'Escopo', value: 'Sistema de templates + pacote de criativos' },
        { label: 'Papel', value: 'Design + Motion + Ferramentas' },
        { label: 'Saída', value: 'Criativos estáticos + animados' },
        { label: 'Ano', value: '2026' },
      ],
    },
    design: {
      body: 'Um grid bento de formatos prontos pra rodar: um slide de carrossel quadrado e um banner promocional de WhatsApp — um sistema visual, todos os canais.',
      media: [{ alt: 'Studio Creatives — slide de carrossel' }, { alt: 'Studio Creatives — banner de WhatsApp' }],
    },
    result: {
      body: 'Projeto proprietário do estúdio — desenvolvido para demonstrar arquitetura de design, código de produção e rigor tipográfico.',
    },
    technologies: {
      groups: [
        { label: 'Motion', items: ['Remotion', 'Framer Motion'] },
        { label: 'Design', items: ['Figma', 'Layout programático'] },
      ],
    },
  },
};

const services: Record<string, ServiceText> = {
  'web-dev': {
    title: 'Desenvolvimento Web & Landing Pages',
    summary: 'Sites em Next.js/React, páginas de marketing SaaS, páginas de reserva direta pro Airbnb e funis de afiliado de alta velocidade.',
  },
  'motion-video': {
    title: 'Motion & Vídeos estilo Apple',
    summary: 'Reels de tipografia cinética, teasers de produto em 3D/UI e vídeos de lançamento estilo keynote.',
  },
  'social-ads': {
    title: 'Criativos de Social & Mídia Paga',
    summary: 'Criativos de alto CTR pra Meta/LinkedIn, sistemas de carrossel educativo e anúncios em motion pra stories.',
  },
  'brand-assets': {
    title: 'Ativos de Marca & Kits de Mensagem',
    summary: 'Banners promocionais de WhatsApp, decks de vendas e sistemas de identidade de lançamento.',
  },
};

export const ptBR: Dictionary = {
  meta: {
    role: 'Estúdio Criativo & Engenharia de Design',
    description:
      'A Zstudio é um estúdio criativo independente que constrói sites de alta conversão, vídeos de produto estilo Apple e criativos para mídia paga, para startups, marcas de hospitalidade e media buyers.',
    ogTagline: 'Construímos a máquina de conversão completa.',
    ogServices: 'Web · Motion · Anúncios · Marca',
  },

  header: {
    status: 'Disponível para novos projetos',
    bookProject: 'Agendar Projeto',
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  cta: {
    pricingNote: 'Cada projeto é orçado conforme seus objetivos e prazo — entre em contato e encontramos o melhor formato juntos.',
  },

  hero: {
    lines: ['Sites de alta conversão,', 'vídeos estilo Apple', 'e criativos que geram receita.'],
    subcopy:
      'De landing pages SaaS e showcases de Airbnb de luxo a funis de afiliado virais e vídeos de lançamento de produto. Feito para conversão máxima.',
    ctaPrimary: 'Ver trabalhos selecionados',
    ctaSecondary: 'Iniciar um projeto',
  },

  work: {
    label: 'Trabalhos selecionados',
    title: ['Mostruário', 'curado'],
    concept: 'Concept project',
    back: '← Trabalhos selecionados',
    nextProject: 'Próximo projeto',
    headings: {
      overview: 'Visão geral',
      design: 'Design',
      result: 'Resultado',
      technologies: 'Stack',
    },
    projects,
  },

  services: {
    label: 'Capacidades',
    title: ['O que', 'construímos'],
    items: services,
  },

  guarantees: {
    items: ['⚡ Entrega em 7 dias', '🌍 Fuso horário compatível (EST/BRT)', '🚀 Performance 99+'],
  },

  footer: {
    titleLines: ['Pronto para lançar algo', 'excepcional?'],
    whatsapp: 'Fale no WhatsApp',
    copyEmail: 'Copiar e-mail',
    copied: 'Copiado!',
    onlineNow: 'Online agora',
    baseLocation: 'São Paulo · UTC-3',
    backToTop: 'Voltar ao topo ↑',
  },

  notFound: {
    badge: 'Erro 404',
    titleLines: ['Esta página', 'não existe.'],
    body: 'O link está quebrado ou a página mudou de lugar. Todo o resto está a um clique.',
    back: '← Voltar ao início',
  },
};
