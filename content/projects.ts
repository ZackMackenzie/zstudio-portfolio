import type { Locale } from '@/lib/i18n/types';

export interface ProjectCopy {
  title: string;
  tagline: string;
  role: string;
  concept: string;
  direction: string;
  interfaceNote?: string;
  motionNote?: string;
  development: string;
  result?: string;
}

export interface Project {
  slug: string;
  year: number;
  size: 'xl' | 'md';
  audiovisual?: boolean;
  /** Indices into services.categories: 0 Digital, 1 Brand, 2 Motion, 3 Growth. */
  categoryIndices: number[];
  tech: string[];
  visual: number;
  copy: Record<Locale, ProjectCopy>;
}

export const projects: Project[] = [
  {
    slug: 'meridian',
    year: 2025,
    size: 'xl',
    categoryIndices: [0, 1],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    visual: 1,
    copy: {
      en: {
        title: 'Meridian',
        tagline: 'An AI-native analytics platform, designed and shipped end to end.',
        role: 'Product design, front-end engineering',
        concept:
          "A concept SaaS product for teams who don't want another dashboard — Meridian reads the data and tells you what changed and why, in a sentence, before you ever open a chart.",
        direction:
          'Dark, single-priority interface: one number, one trend, one AI-written summary above the fold. Everything else is one click away, never competing for attention.',
        interfaceNote:
          'A command palette (⌘K) for every action, an AI summary card that reads like a message, and a chart that only appears once you ask a follow-up question.',
        development:
          'Built in Next.js and TypeScript with the App Router; the marketing site and the product share one design-token system, so switching between them feels like one product, not two.',
        result:
          'The benchmark we designed toward: an operator understanding "what changed since yesterday" in under five seconds, with zero dashboard navigation.',
      },
      pt: {
        title: 'Meridian',
        tagline: 'Uma plataforma de analytics nativa em IA, projetada e construída do início ao fim.',
        role: 'Product design, engenharia front-end',
        concept:
          'Um produto SaaS conceitual para times que não querem mais um dashboard — o Meridian lê os dados e diz o que mudou e por quê, em uma frase, antes de você abrir qualquer gráfico.',
        direction:
          'Interface escura, de prioridade única: um número, uma tendência, um resumo escrito por IA logo no topo. Tudo o mais fica a um clique, sem competir por atenção.',
        interfaceNote:
          'Um command palette (⌘K) para cada ação, um card de resumo por IA que se lê como uma mensagem, e um gráfico que só aparece quando você faz uma pergunta de acompanhamento.',
        development:
          'Construído em Next.js e TypeScript com App Router; o site institucional e o produto compartilham um único sistema de tokens de design, então transitar entre eles parece um produto só, não dois.',
        result:
          'O objetivo que buscamos: um operador entender "o que mudou desde ontem" em menos de cinco segundos, sem navegar por nenhum dashboard.',
      },
      es: {
        title: 'Meridian',
        tagline: 'Una plataforma de analítica nativa en IA, diseñada y construida de punta a punta.',
        role: 'Product design, ingeniería front-end',
        concept:
          'Un producto SaaS conceptual para equipos que no quieren otro dashboard — Meridian lee los datos y dice qué cambió y por qué, en una frase, antes de abrir cualquier gráfico.',
        direction:
          'Interfaz oscura, de prioridad única: un número, una tendencia, un resumen escrito por IA justo arriba. Todo lo demás está a un clic, sin competir por atención.',
        interfaceNote:
          'Un command palette (⌘K) para cada acción, una tarjeta de resumen por IA que se lee como un mensaje, y un gráfico que solo aparece al hacer una pregunta de seguimiento.',
        development:
          'Construido en Next.js y TypeScript con App Router; el sitio y el producto comparten un solo sistema de tokens de diseño, así que pasar de uno a otro se siente como un solo producto.',
        result:
          'El objetivo que buscamos: que un operador entienda "qué cambió desde ayer" en menos de cinco segundos, sin navegar ningún dashboard.',
      },
    },
  },
  {
    slug: 'northbank',
    year: 2025,
    size: 'md',
    categoryIndices: [0, 1],
    tech: ['Next.js', 'TypeScript', 'Stripe'],
    visual: 2,
    copy: {
      en: {
        title: 'Northbank',
        tagline: 'A digital banking product for small teams that move fast.',
        role: 'Product design, front-end engineering',
        concept:
          'A concept banking dashboard for small businesses — cards, transfers, and spend insight in one place, built to feel closer to a well-made consumer app than enterprise banking software.',
        direction:
          'Card-first layout, generous spacing, a single accent color reserved for anything that moves money — everything else stays quiet and legible.',
        interfaceNote:
          'A live balance card, a categorized transaction feed, and a spend-insight panel that surfaces one anomaly at a time instead of a wall of charts.',
        development:
          'Next.js and TypeScript, with a component library built around real data states — loading, empty, and error treated as first-class screens, not afterthoughts.',
        result:
          'The target we built toward: a new-user setup-to-first-transfer flow short enough to complete before a coffee finishes brewing.',
      },
      pt: {
        title: 'Northbank',
        tagline: 'Um produto de banco digital para times pequenos que andam rápido.',
        role: 'Product design, engenharia front-end',
        concept:
          'Um dashboard bancário conceitual para pequenas empresas — cartões, transferências e visão de gastos em um só lugar, feito para parecer mais um app de consumo bem-feito do que um software bancário corporativo.',
        direction:
          'Layout construído em torno de cartões, espaçamento generoso, uma única cor de destaque reservada para tudo que movimenta dinheiro — o resto fica discreto e legível.',
        interfaceNote:
          'Um card de saldo ao vivo, um feed de transações categorizado e um painel de insights que mostra uma anomalia por vez, em vez de uma parede de gráficos.',
        development:
          'Next.js e TypeScript, com uma biblioteca de componentes construída em torno de estados reais de dado — carregando, vazio e erro tratados como telas de primeira classe, não um detalhe.',
        result:
          'O objetivo que buscamos: um fluxo de configuração até a primeira transferência rápido o suficiente para terminar antes do café coar.',
      },
      es: {
        title: 'Northbank',
        tagline: 'Un producto de banca digital para equipos pequeños que se mueven rápido.',
        role: 'Product design, ingeniería front-end',
        concept:
          'Un dashboard bancario conceptual para pequeñas empresas — tarjetas, transferencias y visión de gastos en un solo lugar, hecho para sentirse más como una app de consumo bien hecha que como software bancario corporativo.',
        direction:
          'Diseño basado en tarjetas, espaciado generoso, un solo color de acento reservado para todo lo que mueve dinero — el resto se mantiene discreto y legible.',
        interfaceNote:
          'Una tarjeta de saldo en vivo, un feed de transacciones categorizado, y un panel de insights que muestra una anomalía a la vez en lugar de un muro de gráficos.',
        development:
          'Next.js y TypeScript, con una librería de componentes construida sobre estados reales de datos — carga, vacío y error tratados como pantallas de primera clase.',
        result:
          'El objetivo que buscamos: un flujo de configuración hasta la primera transferencia lo bastante corto para completarse antes de que el café termine de prepararse.',
      },
    },
  },
  {
    slug: 'aurelia',
    year: 2025,
    size: 'md',
    categoryIndices: [0, 1],
    tech: ['Next.js', 'Cal.com', 'Stripe'],
    visual: 3,
    copy: {
      en: {
        title: 'Aurelia',
        tagline: 'A boutique hotel brand and direct-booking experience.',
        role: 'Web design, brand direction, booking flow',
        concept:
          "A concept identity and direct-booking site for a fictional boutique hotel — built to explore what a property looks like when it owns its booking flow instead of renting one from a marketplace.",
        direction:
          'Large-format photography-led layout, a persistent availability bar, and near-silent UI chrome — the room and the view stay the subject at all times.',
        interfaceNote:
          'A two-step booking flow (dates → confirmation) with no marketplace comparison shelf, no competing listings, no upsell interstitials.',
        development:
          'Static-first Next.js pages for speed, with a lightweight booking flow wired for a real payments and calendar provider.',
        result:
          'The benchmark we designed toward: availability to confirmed booking in under 60 seconds, on a phone, in direct sunlight.',
      },
      pt: {
        title: 'Aurelia',
        tagline: 'Uma marca de hotel boutique e uma experiência de reserva direta.',
        role: 'Web design, direção de marca, fluxo de reserva',
        concept:
          'Uma identidade e um site de reserva direta conceituais para um hotel boutique fictício — feitos para explorar como fica uma propriedade quando ela tem seu próprio fluxo de reserva, em vez de alugar um de um marketplace.',
        direction:
          'Layout guiado por fotografia em grande formato, uma barra de disponibilidade fixa e uma interface quase silenciosa — o quarto e a vista continuam sendo o assunto o tempo todo.',
        interfaceNote:
          'Um fluxo de reserva em duas etapas (datas → confirmação), sem prateleira de comparação de marketplace, sem anúncios concorrentes, sem interstitials de upsell.',
        development:
          'Páginas Next.js estáticas por padrão, priorizando velocidade, com um fluxo de reserva leve preparado para um provedor real de pagamento e calendário.',
        result:
          'O objetivo que buscamos: de disponibilidade a reserva confirmada em menos de 60 segundos, no celular, sob luz direta do sol.',
      },
      es: {
        title: 'Aurelia',
        tagline: 'Una marca de hotel boutique y una experiencia de reserva directa.',
        role: 'Web design, dirección de marca, flujo de reserva',
        concept:
          'Una identidad y un sitio de reserva directa conceptuales para un hotel boutique ficticio — hechos para explorar cómo se ve una propiedad cuando tiene su propio flujo de reserva, en vez de alquilar uno de un marketplace.',
        direction:
          'Diseño guiado por fotografía a gran formato, una barra de disponibilidad fija, y una interfaz casi silenciosa — la habitación y la vista siguen siendo el tema todo el tiempo.',
        interfaceNote:
          'Un flujo de reserva en dos pasos (fechas → confirmación), sin estante de comparación de marketplace, sin anuncios competidores, sin interstitials de upsell.',
        development:
          'Páginas Next.js estáticas por defecto para velocidad, con un flujo de reserva liviano preparado para un proveedor real de pagos y calendario.',
        result:
          'El objetivo que buscamos: de disponibilidad a reserva confirmada en menos de 60 segundos, desde el celular, bajo luz solar directa.',
      },
    },
  },
  {
    slug: 'apex',
    year: 2025,
    size: 'xl',
    audiovisual: true,
    categoryIndices: [2, 0],
    tech: ['Remotion', 'Motion design', 'Sound design'],
    visual: 4,
    copy: {
      en: {
        title: 'Apex',
        tagline: 'A keynote-style product film, built entirely in code.',
        role: 'Motion design, Remotion engineering',
        concept:
          'A concept product-launch film for a fictional hardware device, built to prove out a Remotion pipeline for cinematic, code-driven motion.',
        direction:
          'Apple-style product films look expensive because they usually are — full 3D pipelines, render farms, weeks of post. We wanted the same feeling from a system we could version, template, and reuse.',
        motionNote:
          'Every frame is React, every transition is a spring, every asset is code — the same pipeline renders a 16:9 keynote cut and a 9:16 social cut from one source of truth.',
        development:
          'Storyboarded beats in text first, built each scene as an isolated Remotion composition, then assembled and timed the full sequence — the same component library now backs every video on this site.',
        result:
          'The target we built toward: a full product film, re-editable and re-brandable in code, in under a day.',
      },
      pt: {
        title: 'Apex',
        tagline: 'Um filme de produto estilo keynote, feito inteiramente em código.',
        role: 'Motion design, engenharia Remotion',
        concept:
          'Um filme conceitual de lançamento de produto para um dispositivo fictício, feito para validar um pipeline em Remotion para motion cinematográfico guiado por código.',
        direction:
          'Filmes de produto estilo Apple parecem caros porque, normalmente, são — pipeline 3D completo, render farm, semanas de pós-produção. Queríamos a mesma sensação a partir de um sistema versionável, templável e reutilizável.',
        motionNote:
          'Cada frame é React, cada transição é uma spring, cada asset é código — o mesmo pipeline renderiza um corte 16:9 para keynote e um corte 9:16 para redes sociais a partir de uma única fonte.',
        development:
          'Roteirizamos os momentos em texto primeiro, construímos cada cena como uma composição isolada no Remotion, depois montamos e cronometramos a sequência completa — a mesma biblioteca de componentes hoje sustenta todo vídeo deste site.',
        result:
          'O objetivo que buscamos: um filme de produto completo, reeditável e re-marcável em código, em menos de um dia.',
      },
      es: {
        title: 'Apex',
        tagline: 'Un film de producto estilo keynote, hecho enteramente en código.',
        role: 'Motion design, ingeniería Remotion',
        concept:
          'Un film conceptual de lanzamiento de producto para un dispositivo ficticio, hecho para validar un pipeline en Remotion para motion cinematográfico guiado por código.',
        direction:
          'Los films de producto estilo Apple parecen caros porque normalmente lo son — pipeline 3D completo, render farm, semanas de posproducción. Queríamos la misma sensación desde un sistema versionable, templable y reutilizable.',
        motionNote:
          'Cada frame es React, cada transición es un spring, cada asset es código — el mismo pipeline renderiza un corte 16:9 para keynote y un corte 9:16 para redes sociales desde una sola fuente.',
        development:
          'Guionizamos los momentos en texto primero, construimos cada escena como una composición aislada en Remotion, y luego ensamblamos y cronometramos la secuencia completa — la misma librería de componentes hoy sostiene cada video de este sitio.',
        result:
          'El objetivo que buscamos: un film de producto completo, reeditable y re-marcable en código, en menos de un día.',
      },
    },
  },
  {
    slug: 'halcyon',
    year: 2025,
    size: 'xl',
    categoryIndices: [0, 3],
    tech: ['Next.js', 'Mapbox', 'TypeScript'],
    visual: 5,
    copy: {
      en: {
        title: 'Halcyon',
        tagline: 'A property discovery platform built around one clean search.',
        role: 'Product design, front-end engineering',
        concept:
          'A concept real-estate platform — built to answer one question fast: which of these places is actually worth a visit, without twenty open filters.',
        direction:
          'Map and list stay in constant sync, photography leads every card, and filtering happens progressively instead of through a wall of checkboxes up front.',
        interfaceNote:
          'A split map/list view, a saved-search system, and a property page built around a photo sequence instead of a spec sheet.',
        development:
          'Next.js with a map layer built for large result sets — virtualized lists and clustered pins so performance holds at scale, not just in the demo.',
        result:
          'The benchmark we designed toward: first search to a shortlist of three saved properties in under two minutes.',
      },
      pt: {
        title: 'Halcyon',
        tagline: 'Uma plataforma de busca de imóveis construída em torno de uma busca limpa.',
        role: 'Product design, engenharia front-end',
        concept:
          'Uma plataforma imobiliária conceitual — feita para responder uma pergunta rápido: qual desses imóveis realmente vale uma visita, sem vinte filtros abertos.',
        direction:
          'Mapa e lista ficam sempre sincronizados, a fotografia lidera cada card, e a filtragem acontece progressivamente em vez de uma parede de checkboxes logo de início.',
        interfaceNote:
          'Uma visão dividida entre mapa e lista, um sistema de buscas salvas, e uma página de imóvel construída em torno de uma sequência de fotos, não uma ficha técnica.',
        development:
          'Next.js com uma camada de mapa construída para grandes volumes de resultado — listas virtualizadas e pins agrupados para que a performance se sustente em escala, não só na demo.',
        result:
          'O objetivo que buscamos: da primeira busca a uma shortlist de três imóveis salvos em menos de dois minutos.',
      },
      es: {
        title: 'Halcyon',
        tagline: 'Una plataforma de búsqueda de propiedades construida en torno a una búsqueda limpia.',
        role: 'Product design, ingeniería front-end',
        concept:
          'Una plataforma inmobiliaria conceptual — hecha para responder una pregunta rápido: cuál de estos lugares realmente vale una visita, sin veinte filtros abiertos.',
        direction:
          'Mapa y lista se mantienen siempre sincronizados, la fotografía lidera cada tarjeta, y el filtrado ocurre progresivamente en vez de un muro de checkboxes al inicio.',
        interfaceNote:
          'Una vista dividida entre mapa y lista, un sistema de búsquedas guardadas, y una página de propiedad construida sobre una secuencia de fotos, no una ficha técnica.',
        development:
          'Next.js con una capa de mapa construida para grandes volúmenes de resultados — listas virtualizadas y pines agrupados para que el rendimiento se sostenga a escala.',
        result:
          'El objetivo que buscamos: de la primera búsqueda a una lista corta de tres propiedades guardadas en menos de dos minutos.',
      },
    },
  },
  {
    slug: 'noir-maison',
    year: 2024,
    size: 'md',
    categoryIndices: [1, 2],
    tech: ['Figma', 'Type design', 'Motion guidelines'],
    visual: 6,
    copy: {
      en: {
        title: 'Noir Maison',
        tagline: 'A fashion house identity, built as a full system.',
        role: 'Identity, design system, motion guidelines',
        concept:
          'A concept identity for a fictional fashion house — a stress test for building a complete system (mark, type, motion, application) instead of a one-off logo.',
        direction:
          'A geometric monogram built on a rotating grid, a two-weight type system, and a motion guideline defining exactly how the mark behaves in six seconds or less.',
        interfaceNote:
          'Applications across packaging, a lookbook site, and social formats — one system, expressed consistently everywhere it shows up.',
        motionNote:
          'A short brand-motion guideline: how the monogram assembles, holds, and releases, documented like a product spec, not a mood board.',
        development:
          'Identity system built in Figma with documented tokens, then ported directly into the same design-token pipeline used across every Z.studio web build.',
        result:
          'The benchmark we designed toward: a mark recognizable at 16px in a browser tab and at billboard scale, without alteration.',
      },
      pt: {
        title: 'Noir Maison',
        tagline: 'Uma identidade de grife de moda, construída como um sistema completo.',
        role: 'Identidade, design system, diretrizes de motion',
        concept:
          'Uma identidade conceitual para uma grife de moda fictícia — um teste de estresse para construir um sistema completo (marca, tipografia, motion, aplicação) em vez de um logo avulso.',
        direction:
          'Um monograma geométrico construído sobre uma grade rotativa, um sistema tipográfico de dois pesos, e uma diretriz de motion definindo exatamente como a marca se comporta em seis segundos ou menos.',
        interfaceNote:
          'Aplicações em embalagem, um site de lookbook e formatos de redes sociais — um único sistema, expresso de forma consistente em qualquer lugar que apareça.',
        motionNote:
          'Uma diretriz curta de motion de marca: como o monograma se monta, se sustenta e se libera, documentado como um spec de produto, não um mood board.',
        development:
          'Sistema de identidade construído no Figma com tokens documentados, depois portado diretamente para o mesmo pipeline de tokens de design usado em toda construção web da Z.studio.',
        result:
          'O objetivo que buscamos: uma marca reconhecível em 16px numa aba de navegador e em escala de outdoor, sem alteração.',
      },
      es: {
        title: 'Noir Maison',
        tagline: 'Una identidad de casa de moda, construida como un sistema completo.',
        role: 'Identidad, design system, guías de motion',
        concept:
          'Una identidad conceptual para una casa de moda ficticia — una prueba de estrés para construir un sistema completo (marca, tipografía, motion, aplicación) en vez de un logo suelto.',
        direction:
          'Un monograma geométrico construido sobre una grilla giratoria, un sistema tipográfico de dos pesos, y una guía de motion que define exactamente cómo se comporta la marca en seis segundos o menos.',
        interfaceNote:
          'Aplicaciones en empaque, un sitio de lookbook y formatos de redes sociales — un solo sistema, expresado consistentemente en cualquier lugar donde aparezca.',
        motionNote:
          'Una guía corta de motion de marca: cómo el monograma se arma, se sostiene y se libera, documentada como un spec de producto, no un mood board.',
        development:
          'Sistema de identidad construido en Figma con tokens documentados, luego llevado directamente al mismo pipeline de tokens de diseño usado en cada construcción web de Z.studio.',
        result:
          'El objetivo que buscamos: una marca reconocible a 16px en una pestaña de navegador y a escala de valla publicitaria, sin alteración.',
      },
    },
  },
  {
    slug: 'lumiere',
    year: 2024,
    size: 'md',
    categoryIndices: [0, 1],
    tech: ['Next.js', 'Shopify', 'Stripe'],
    visual: 7,
    copy: {
      en: {
        title: 'Lumière',
        tagline: 'A headless storefront for a luxury goods brand.',
        role: 'Product design, front-end engineering',
        concept:
          'A concept e-commerce build for a fictional luxury goods brand — fast, editorial, and built to make ten products feel like a collection, not a catalog.',
        direction:
          'Large product photography, restrained UI chrome, and a checkout that stays visually consistent with the storefront instead of dropping into a generic template.',
        interfaceNote:
          'A product page built around a single hero shot and progressive detail, a persistent minimal cart, and a three-step checkout.',
        development:
          'Next.js on a headless commerce backend, with images and checkout optimized specifically for mobile conversion.',
        result: 'The target we built toward: a product page loading and becoming interactive in under one second on mobile.',
      },
      pt: {
        title: 'Lumière',
        tagline: 'Uma loja headless para uma marca de luxo.',
        role: 'Product design, engenharia front-end',
        concept:
          'Uma construção de e-commerce conceitual para uma marca de bens de luxo fictícia — rápida, editorial, e feita para que dez produtos pareçam uma coleção, não um catálogo.',
        direction:
          'Fotografia de produto em grande escala, interface contida, e um checkout que permanece visualmente consistente com a loja em vez de cair num template genérico.',
        interfaceNote:
          'Uma página de produto construída em torno de uma foto principal e detalhe progressivo, um carrinho mínimo persistente, e um checkout em três etapas.',
        development:
          'Next.js sobre um backend de comércio headless, com imagens e checkout otimizados especificamente para conversão mobile.',
        result: 'O objetivo que buscamos: uma página de produto carregando e ficando interativa em menos de um segundo no celular.',
      },
      es: {
        title: 'Lumière',
        tagline: 'Una tienda headless para una marca de lujo.',
        role: 'Product design, ingeniería front-end',
        concept:
          'Una construcción de e-commerce conceptual para una marca de bienes de lujo ficticia — rápida, editorial, y hecha para que diez productos se sientan como una colección, no un catálogo.',
        direction:
          'Fotografía de producto a gran escala, interfaz contenida, y un checkout que permanece visualmente consistente con la tienda en vez de caer en una plantilla genérica.',
        interfaceNote:
          'Una página de producto construida sobre una foto principal y detalle progresivo, un carrito mínimo persistente, y un checkout en tres pasos.',
        development:
          'Next.js sobre un backend de comercio headless, con imágenes y checkout optimizados específicamente para conversión móvil.',
        result: 'El objetivo que buscamos: una página de producto cargando y volviéndose interactiva en menos de un segundo en móvil.',
      },
    },
  },
  {
    slug: 'fluxpoint',
    year: 2025,
    size: 'xl',
    categoryIndices: [0, 3],
    tech: ['Next.js', 'TypeScript', 'Radix UI'],
    visual: 8,
    copy: {
      en: {
        title: 'Fluxpoint',
        tagline: 'An operations platform for distributed teams.',
        role: 'Product design, front-end engineering',
        concept:
          'A concept B2B operations tool — the kind of internal software teams actually enjoy using, built to prove that "enterprise" doesn’t have to mean "ugly."',
        direction:
          'A dense but calm interface: real information hierarchy instead of decoration, keyboard-first navigation, and a command palette as the primary way to move.',
        interfaceNote:
          'A kanban-style workflow view, a command palette (⌘K) for every action, and settings screens treated with the same care as the primary product surface.',
        development:
          'Next.js and TypeScript, built with the same component and token system as the rest of the Z.studio work — proof the system scales from marketing site to dense internal tool.',
        result: 'The benchmark we designed toward: every primary action reachable from the keyboard in two keystrokes or fewer.',
      },
      pt: {
        title: 'Fluxpoint',
        tagline: 'Uma plataforma de operações para times distribuídos.',
        role: 'Product design, engenharia front-end',
        concept:
          'Uma ferramenta de operações B2B conceitual — o tipo de software interno que os times realmente gostam de usar, feita para provar que "enterprise" não precisa significar "feio".',
        direction:
          'Uma interface densa mas calma: hierarquia de informação real em vez de decoração, navegação orientada a teclado, e um command palette como forma principal de se mover.',
        interfaceNote:
          'Uma visão de fluxo estilo kanban, um command palette (⌘K) para cada ação, e telas de configuração tratadas com o mesmo cuidado que a superfície principal do produto.',
        development:
          'Next.js e TypeScript, construído com o mesmo sistema de componentes e tokens do resto do trabalho da Z.studio — prova de que o sistema escala do site institucional até a ferramenta interna mais densa.',
        result: 'O objetivo que buscamos: toda ação primária alcançável pelo teclado em dois toques ou menos.',
      },
      es: {
        title: 'Fluxpoint',
        tagline: 'Una plataforma de operaciones para equipos distribuidos.',
        role: 'Product design, ingeniería front-end',
        concept:
          'Una herramienta de operaciones B2B conceptual — el tipo de software interno que los equipos realmente disfrutan usar, hecha para probar que "enterprise" no tiene que significar "feo".',
        direction:
          'Una interfaz densa pero calma: jerarquía de información real en vez de decoración, navegación orientada a teclado, y un command palette como forma principal de moverse.',
        interfaceNote:
          'Una vista de flujo estilo kanban, un command palette (⌘K) para cada acción, y pantallas de configuración tratadas con el mismo cuidado que la superficie principal del producto.',
        development:
          'Next.js y TypeScript, construido con el mismo sistema de componentes y tokens que el resto del trabajo de Z.studio — prueba de que el sistema escala desde el sitio hasta la herramienta interna más densa.',
        result: 'El objetivo que buscamos: cada acción primaria alcanzable desde el teclado en dos pulsaciones o menos.',
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
