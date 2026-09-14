import type { Locale } from '@/lib/i18n/types';

export type ServiceSlug = 'websites' | 'saas' | 'brand' | 'motion' | 'creative' | 'funnels';

export interface ServiceCopy {
  serviceLabel: string;
  serviceLine: string;
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

export interface Service {
  slug: ServiceSlug;
  index: string;
  year: number;
  audiovisual?: boolean;
  tech: string[];
  visual: number;
  copy: Record<Locale, ServiceCopy>;
}

export const services: Service[] = [
  {
    slug: 'websites',
    index: '01',
    year: 2025,
    tech: ['Next.js', 'Cal.com', 'Stripe'],
    visual: 1,
    copy: {
      en: {
        serviceLabel: 'Websites',
        serviceLine: 'Premium sites, built for speed and story.',
        title: 'Aurelia',
        tagline: 'A boutique hotel brand and direct-booking experience.',
        role: 'Web design, brand direction, booking flow',
        concept:
          'A concept identity and direct-booking site for a fictional boutique hotel — built to explore what a property looks like when it owns its booking flow instead of renting one from a marketplace.',
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
        serviceLabel: 'Websites',
        serviceLine: 'Sites premium, feitos para velocidade e narrativa.',
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
        serviceLabel: 'Sitios web',
        serviceLine: 'Sitios premium, hechos para velocidad y narrativa.',
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
    slug: 'saas',
    index: '02',
    year: 2025,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    visual: 2,
    copy: {
      en: {
        serviceLabel: 'SaaS / Product',
        serviceLine: 'Full products — landing, dashboard, and everything between.',
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
        serviceLabel: 'SaaS / Produto',
        serviceLine: 'Produto completo — landing, dashboard e tudo entre os dois.',
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
        serviceLabel: 'SaaS / Producto',
        serviceLine: 'Producto completo — landing, dashboard y todo lo demás.',
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
    slug: 'brand',
    index: '03',
    year: 2024,
    tech: ['Figma', 'Type design', 'Motion guidelines'],
    visual: 3,
    copy: {
      en: {
        serviceLabel: 'Brand Identity',
        serviceLine: 'Identity systems that hold up everywhere.',
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
        serviceLabel: 'Identidade de Marca',
        serviceLine: 'Sistemas de marca que se sustentam em qualquer lugar.',
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
        serviceLabel: 'Identidad de Marca',
        serviceLine: 'Sistemas de marca que se sostienen en cualquier lugar.',
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
    slug: 'motion',
    index: '04',
    year: 2025,
    audiovisual: true,
    tech: ['Remotion', 'Motion design', 'Sound design'],
    visual: 4,
    copy: {
      en: {
        serviceLabel: 'Motion / Film',
        serviceLine: 'Cinematic product films, built entirely in code.',
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
        serviceLabel: 'Motion / Filme',
        serviceLine: 'Filmes de produto cinematográficos, feitos inteiramente em código.',
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
        serviceLabel: 'Motion / Film',
        serviceLine: 'Films de producto cinematográficos, hechos enteramente en código.',
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
    slug: 'creative',
    index: '05',
    year: 2025,
    tech: ['Remotion', 'Figma', 'Meta Ads Manager'],
    visual: 5,
    copy: {
      en: {
        serviceLabel: 'Creative & Ads',
        serviceLine: "Performance creative that doesn't look like an ad.",
        title: 'Verve',
        tagline: 'A paid-social creative system for a DTC launch.',
        role: 'Art direction, performance creative',
        concept:
          'A concept ad campaign for a fictional sparkling-energy drink launching on paid social — built to prove creative can be scroll-stopping and systematized, not redesigned from scratch for every placement.',
        direction:
          'One visual language — a repeating diagonal motif and a single hero product shot — expressed across every format instead of starting over for each one.',
        interfaceNote:
          'A feed square, a vertical story cut, and a 4-panel carousel — one file structure, three aspect ratios, zero redesign between them.',
        motionNote:
          'A 6-second motion cut of the same hero shot for paid social, rendered through the same Remotion pipeline behind Apex and every other video on this site.',
        development:
          'Static creatives built as token-driven templates — swap the copy, the product shot, and one accent color, and every format updates itself.',
        result:
          'The benchmark we designed toward: a full 5-format launch kit — static, carousel, story, and motion — produced from one template in a single day.',
      },
      pt: {
        serviceLabel: 'Criativo & Ads',
        serviceLine: 'Criativo de performance que não parece um anúncio.',
        title: 'Verve',
        tagline: 'Um sistema de criativos para social pago, de um lançamento DTC.',
        role: 'Direção de arte, criativos de performance',
        concept:
          'Uma campanha conceitual para uma bebida energética fictícia lançando em social pago — feita para provar que criativo pode parar o scroll e ainda ser sistematizado, sem redesenhar do zero a cada formato.',
        direction:
          'Uma única linguagem visual — um motivo diagonal repetido e uma foto de produto principal — expressa em cada formato, em vez de recomeçar em cada um.',
        interfaceNote:
          'Um quadrado de feed, um corte vertical de story, e um carrossel de 4 painéis — uma única estrutura de arquivo, três proporções, zero redesenho entre elas.',
        motionNote:
          'Um corte de motion de 6 segundos da mesma foto principal para social pago, renderizado no mesmo pipeline Remotion por trás do Apex e de todo vídeo deste site.',
        development:
          'Criativos estáticos construídos como templates guiados por tokens — troque o texto, a foto do produto e uma cor de destaque, e cada formato se atualiza sozinho.',
        result:
          'O objetivo que buscamos: um kit de lançamento completo com 5 formatos — estático, carrossel, story e motion — produzido a partir de um template em um único dia.',
      },
      es: {
        serviceLabel: 'Creatividad & Ads',
        serviceLine: 'Creatividad de performance que no parece un anuncio.',
        title: 'Verve',
        tagline: 'Un sistema de creatividades para social pago, de un lanzamiento DTC.',
        role: 'Dirección de arte, creatividades de performance',
        concept:
          'Una campaña conceptual para una bebida energética ficticia lanzando en social pago — hecha para probar que la creatividad puede detener el scroll y aun así estar sistematizada, sin rediseñar desde cero cada formato.',
        direction:
          'Un solo lenguaje visual — un motivo diagonal repetido y una foto de producto principal — expresado en cada formato, en vez de empezar de nuevo en cada uno.',
        interfaceNote:
          'Un cuadrado de feed, un corte vertical de story, y un carrusel de 4 paneles — una sola estructura de archivo, tres proporciones, cero rediseño entre ellas.',
        motionNote:
          'Un corte de motion de 6 segundos de la misma foto principal para social pago, renderizado en el mismo pipeline de Remotion detrás de Apex y cada video de este sitio.',
        development:
          'Creatividades estáticas construidas como plantillas guiadas por tokens — cambia el texto, la foto del producto y un color de acento, y cada formato se actualiza solo.',
        result:
          'El objetivo que buscamos: un kit de lanzamiento completo de 5 formatos — estático, carrusel, story y motion — producido desde una plantilla en un solo día.',
      },
    },
  },
  {
    slug: 'funnels',
    index: '06',
    year: 2025,
    tech: ['Next.js', 'Analytics', 'A/B testing'],
    visual: 6,
    copy: {
      en: {
        serviceLabel: 'Funnels',
        serviceLine: 'One path, one decision, built to convert.',
        title: 'Ascent',
        tagline: 'A complete acquisition funnel, from ad to conversion.',
        role: 'Landing page design, conversion engineering',
        concept:
          'A concept funnel for a fictional cohort-based course — one path from ad click to enrollment, with every step justified by what it removes, not what it adds.',
        direction:
          'A single scroll-driven page: one promise above the fold, proof directly beneath it, one price, one deadline, and one button repeated exactly three times.',
        interfaceNote:
          'Ad creative → landing hero → offer stack → countdown CTA → confirmation — five screens, one continuous decision, no exit points.',
        development:
          'A Next.js landing page instrumented for real analytics events at every step, so the funnel is measurable from day one, not just well designed.',
        result:
          'The benchmark we designed toward: a paid-click to completed-checkout path with zero required scrolling back up.',
      },
      pt: {
        serviceLabel: 'Funis',
        serviceLine: 'Um caminho, uma decisão, feito para converter.',
        title: 'Ascent',
        tagline: 'Um funil de aquisição completo, do anúncio à conversão.',
        role: 'Design de landing page, engenharia de conversão',
        concept:
          'Um funil conceitual para um curso fictício em formato de turma — um único caminho do clique no anúncio até a matrícula, com cada etapa justificada pelo que ela remove, não pelo que adiciona.',
        direction:
          'Uma única página guiada por scroll: uma promessa logo no topo, prova logo abaixo, um preço, um prazo, e um botão repetido exatamente três vezes.',
        interfaceNote:
          'Criativo do anúncio → hero da landing → stack da oferta → CTA com contagem regressiva → confirmação — cinco telas, uma única decisão contínua, sem pontos de saída.',
        development:
          'Uma landing page em Next.js instrumentada com eventos de analytics reais em cada etapa, para que o funil seja mensurável desde o dia um, não só bem desenhado.',
        result:
          'O objetivo que buscamos: um caminho do clique pago até o checkout concluído sem precisar rolar de volta para cima em nenhum momento.',
      },
      es: {
        serviceLabel: 'Embudos',
        serviceLine: 'Un camino, una decisión, hecho para convertir.',
        title: 'Ascent',
        tagline: 'Un embudo de adquisición completo, del anuncio a la conversión.',
        role: 'Diseño de landing page, ingeniería de conversión',
        concept:
          'Un embudo conceptual para un curso ficticio en formato de cohorte — un solo camino desde el clic en el anuncio hasta la inscripción, con cada paso justificado por lo que elimina, no por lo que agrega.',
        direction:
          'Una sola página guiada por scroll: una promesa justo arriba, prueba justo debajo, un precio, un plazo, y un botón repetido exactamente tres veces.',
        interfaceNote:
          'Creatividad del anuncio → hero de landing → stack de oferta → CTA con cuenta regresiva → confirmación — cinco pantallas, una sola decisión continua, sin puntos de salida.',
        development:
          'Una landing page en Next.js instrumentada con eventos de analítica reales en cada paso, para que el embudo sea medible desde el día uno, no solo bien diseñado.',
        result:
          'El objetivo que buscamos: un camino del clic pagado hasta el checkout completado sin necesidad de volver a subir en la página.',
      },
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
