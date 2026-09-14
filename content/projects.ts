import type { Locale } from '@/lib/i18n/types';

export interface ProjectCopy {
  title: string;
  tagline: string;
  role: string;
  context: string;
  challenge: string;
  solution: string;
  process?: string;
  result?: string;
}

export interface Project {
  slug: string;
  year: number;
  size: 'xl' | 'md';
  audiovisual?: boolean;
  serviceIndices: number[];
  tech: string[];
  visual: number;
  copy: Record<Locale, ProjectCopy>;
}

export const projects: Project[] = [
  {
    slug: 'lumen',
    year: 2025,
    size: 'xl',
    serviceIndices: [0, 1],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    visual: 1,
    copy: {
      en: {
        title: 'Lumen',
        tagline: 'A SaaS analytics product, designed and shipped end to end.',
        role: 'Product design, front-end engineering',
        context:
          'A concept SaaS dashboard for teams tracking product analytics — built to test our own system for shipping design and code together, fast.',
        challenge:
          'Analytics tools tend to bury the one number that matters under twelve that don’t. We wanted a dashboard that reads in three seconds, not three minutes.',
        solution:
          'A dark, high-contrast interface built around one hierarchy: today’s number, this week’s trend, and everything else one click away. Marketing site and product share the same design tokens and type system.',
        process:
          'Wireframed the information hierarchy first, in text, before any visual design — then built the interface directly in code with Tailwind and Framer Motion, iterating in the browser instead of in Figma.',
      },
      pt: {
        title: 'Lumen',
        tagline: 'Um produto SaaS de analytics, projetado e construído do início ao fim.',
        role: 'Product design, engenharia front-end',
        context:
          'Um dashboard SaaS conceitual para times que acompanham métricas de produto — construído para testar nosso próprio sistema de entregar design e código juntos, rápido.',
        challenge:
          'Ferramentas de analytics costumam esconder o único número que importa sob outros doze que não importam. Queríamos um dashboard que se lê em três segundos, não três minutos.',
        solution:
          'Uma interface escura e de alto contraste construída em torno de uma hierarquia só: o número de hoje, a tendência da semana e tudo mais a um clique. Site institucional e produto compartilham os mesmos tokens de design e sistema tipográfico.',
        process:
          'Desenhamos a hierarquia de informação primeiro, em texto, antes de qualquer design visual — depois construímos a interface direto em código com Tailwind e Framer Motion, iterando no navegador em vez do Figma.',
      },
      es: {
        title: 'Lumen',
        tagline: 'Un producto SaaS de analítica, diseñado y construido de punta a punta.',
        role: 'Product design, ingeniería front-end',
        context:
          'Un dashboard SaaS conceptual para equipos que siguen métricas de producto — construido para probar nuestro propio sistema de entregar diseño y código juntos, rápido.',
        challenge:
          'Las herramientas de analítica suelen esconder el único número que importa bajo otros doce que no. Queríamos un dashboard que se lea en tres segundos, no en tres minutos.',
        solution:
          'Una interfaz oscura y de alto contraste construida sobre una sola jerarquía: el número de hoy, la tendencia de la semana y todo lo demás a un clic. El sitio y el producto comparten los mismos tokens de diseño y sistema tipográfico.',
        process:
          'Definimos la jerarquía de información primero, en texto, antes de cualquier diseño visual — luego construimos la interfaz directo en código con Tailwind y Framer Motion, iterando en el navegador en vez de en Figma.',
      },
    },
  },
  {
    slug: 'aura-villa',
    year: 2025,
    size: 'md',
    serviceIndices: [7, 0],
    tech: ['Next.js', 'Cal.com', 'Stripe'],
    visual: 2,
    copy: {
      en: {
        title: 'Aura Villa',
        tagline: 'A direct-booking site for a fictional short-term rental.',
        role: 'Web design, booking flow',
        context:
          'A concept direct-booking site for a single high-end villa listing — built to explore what an Airbnb listing looks like when it owns its own booking flow instead of renting one.',
        challenge:
          'Marketplace listings all look the same because the format forces them to. A property with a strong identity needs a site that feels like the villa, not like a template.',
        solution:
          'A single-property site built around large photography, a persistent availability bar, and a two-step booking flow — no marketplace chrome, no competing listings on the page.',
      },
      pt: {
        title: 'Aura Villa',
        tagline: 'Um site de reserva direta para um aluguel de temporada fictício.',
        role: 'Web design, fluxo de reserva',
        context:
          'Um site conceitual de reserva direta para uma única villa de alto padrão — feito para explorar como fica um anúncio de Airbnb quando ele tem seu próprio fluxo de reserva, em vez de alugar um.',
        challenge:
          'Anúncios de marketplace são todos parecidos porque o formato obriga. Um imóvel com identidade forte precisa de um site que pareça a villa, não um template.',
        solution:
          'Um site de propriedade única, construído em torno de fotografia grande, uma barra de disponibilidade fixa e um fluxo de reserva em duas etapas — sem interface de marketplace, sem anúncios concorrentes na mesma página.',
      },
      es: {
        title: 'Aura Villa',
        tagline: 'Un sitio de reserva directa para un alquiler de temporada ficticio.',
        role: 'Web design, flujo de reserva',
        context:
          'Un sitio conceptual de reserva directa para una única villa de alta gama — hecho para explorar cómo se ve un anuncio de Airbnb cuando tiene su propio flujo de reserva, en vez de alquilar uno.',
        challenge:
          'Los anuncios de marketplace se parecen todos porque el formato los obliga. Una propiedad con identidad fuerte necesita un sitio que se sienta como la villa, no como una plantilla.',
        solution:
          'Un sitio de propiedad única, construido sobre fotografía grande, una barra de disponibilidad fija y un flujo de reserva en dos pasos — sin interfaz de marketplace, sin anuncios competidores en la misma página.',
      },
    },
  },
  {
    slug: 'kroma',
    year: 2024,
    size: 'md',
    serviceIndices: [8],
    tech: ['Figma', 'Type design', 'Motion guidelines'],
    visual: 3,
    copy: {
      en: {
        title: 'Kroma',
        tagline: 'A brand identity for a fictional spatial-audio product.',
        role: 'Identity, design system',
        context:
          'A concept identity built for a fictional spatial-audio brand — a stress test for building a full system (mark, type, color, motion) instead of a one-off logo.',
        challenge:
          'A sound brand needed a visual identity that felt like it moved, without relying on an actual product to animate.',
        solution:
          'A geometric wordmark built on a rotating radial grid, a two-weight type system, and a motion guideline defining exactly how the mark behaves in six seconds or less — documented like a product spec, not a mood board.',
      },
      pt: {
        title: 'Kroma',
        tagline: 'Uma identidade de marca para um produto fictício de áudio espacial.',
        role: 'Identidade, design system',
        context:
          'Uma identidade conceitual construída para uma marca fictícia de áudio espacial — um teste de estresse para construir um sistema completo (marca, tipografia, cor, motion) em vez de um logo avulso.',
        challenge:
          'Uma marca de som precisava de uma identidade visual que parecesse ter movimento, sem depender de um produto real para animar.',
        solution:
          'Um wordmark geométrico construído sobre uma grade radial rotativa, um sistema tipográfico de dois pesos e uma diretriz de motion definindo exatamente como a marca se comporta em seis segundos ou menos — documentado como um spec de produto, não um mood board.',
      },
      es: {
        title: 'Kroma',
        tagline: 'Una identidad de marca para un producto ficticio de audio espacial.',
        role: 'Identidad, design system',
        context:
          'Una identidad conceptual construida para una marca ficticia de audio espacial — una prueba de estrés para construir un sistema completo (marca, tipografía, color, motion) en vez de un logo suelto.',
        challenge:
          'Una marca de sonido necesitaba una identidad visual que se sintiera en movimiento, sin depender de un producto real para animarla.',
        solution:
          'Un wordmark geométrico construido sobre una grilla radial giratoria, un sistema tipográfico de dos pesos y una guía de motion que define exactamente cómo se comporta la marca en seis segundos o menos — documentada como un spec de producto, no un mood board.',
      },
    },
  },
  {
    slug: 'apex',
    year: 2025,
    size: 'xl',
    audiovisual: true,
    serviceIndices: [4, 3],
    tech: ['Remotion', 'Motion design', 'Sound design'],
    visual: 4,
    copy: {
      en: {
        title: 'Apex',
        tagline: 'A keynote-style product film, built entirely in code.',
        role: 'Motion design, Remotion engineering',
        context:
          'A concept product-launch film for a fictional hardware device, built to prove out our Remotion pipeline for cinematic, code-driven motion.',
        challenge:
          'Apple-style product films look expensive because they usually are — full 3D pipelines, render farms, weeks of post. We wanted the same feeling from a system we could version, template, and reuse.',
        solution:
          'A full film built with Remotion: every frame is React, every transition is a spring, every asset is code — meaning the exact same pipeline renders a 16:9 keynote cut and a 9:16 social cut from one source of truth.',
        process:
          'Storyboarded beats in text first, built each scene as an isolated composition, then assembled and timed the full sequence — the same component library now backs every video on this site.',
      },
      pt: {
        title: 'Apex',
        tagline: 'Um filme de produto estilo keynote, feito inteiramente em código.',
        role: 'Motion design, engenharia Remotion',
        context:
          'Um filme conceitual de lançamento de produto para um dispositivo fictício, feito para validar nosso pipeline em Remotion para motion cinematográfico guiado por código.',
        challenge:
          'Filmes de produto estilo Apple parecem caros porque, normalmente, são — pipeline 3D completo, render farm, semanas de pós-produção. Queríamos a mesma sensação a partir de um sistema versionável, templável e reutilizável.',
        solution:
          'Um filme inteiro feito com Remotion: cada frame é React, cada transição é uma spring, cada asset é código — o que significa que o mesmo pipeline renderiza um corte 16:9 para keynote e um corte 9:16 para redes sociais a partir de uma única fonte.',
        process:
          'Roteirizamos os momentos em texto primeiro, construímos cada cena como uma composição isolada, depois montamos e cronometramos a sequência completa — a mesma biblioteca de componentes hoje sustenta todo vídeo deste site.',
      },
      es: {
        title: 'Apex',
        tagline: 'Un film de producto estilo keynote, hecho enteramente en código.',
        role: 'Motion design, ingeniería Remotion',
        context:
          'Un film conceptual de lanzamiento de producto para un dispositivo ficticio, hecho para validar nuestro pipeline en Remotion para motion cinematográfico guiado por código.',
        challenge:
          'Los films de producto estilo Apple parecen caros porque normalmente lo son — pipeline 3D completo, render farm, semanas de posproducción. Queríamos la misma sensación desde un sistema versionable, templable y reutilizable.',
        solution:
          'Un film completo hecho con Remotion: cada frame es React, cada transición es un spring, cada asset es código — lo que significa que el mismo pipeline renderiza un corte 16:9 para keynote y un corte 9:16 para redes sociales desde una sola fuente.',
        process:
          'Guionizamos los momentos en texto primero, construimos cada escena como una composición aislada, y luego ensamblamos y cronometramos la secuencia completa — la misma librería de componentes hoy sostiene cada video de este sitio.',
      },
    },
  },
  {
    slug: 'northbound',
    year: 2024,
    size: 'xl',
    serviceIndices: [6],
    tech: ['Next.js', 'Analytics', 'A/B testing'],
    visual: 5,
    copy: {
      en: {
        title: 'Northbound',
        tagline: 'An affiliate bridge page engineered around one click.',
        role: 'Landing page design, conversion engineering',
        context:
          'A concept affiliate funnel for a fictional budgeting app — one page, one decision, built to isolate exactly what makes a bridge page convert.',
        challenge:
          'Affiliate pages usually try to do three jobs at once — inform, persuade, and rank for SEO — and end up doing none of them well.',
        solution:
          'A single-purpose page: one promise above the fold, proof directly beneath it, and one button repeated exactly three times — no navigation, no exit points, no competing calls to action.',
      },
      pt: {
        title: 'Northbound',
        tagline: 'Uma página ponte de afiliado desenhada em torno de um único clique.',
        role: 'Design de landing page, engenharia de conversão',
        context:
          'Um funil de afiliado conceitual para um app fictício de orçamento pessoal — uma página, uma decisão, feita para isolar exatamente o que faz uma bridge page converter.',
        challenge:
          'Páginas de afiliado costumam tentar fazer três trabalhos ao mesmo tempo — informar, convencer e rankear no SEO — e acabam não fazendo nenhum bem.',
        solution:
          'Uma página de propósito único: uma promessa logo no topo, prova logo abaixo, e um único botão repetido exatamente três vezes — sem navegação, sem pontos de saída, sem chamadas concorrentes.',
      },
      es: {
        title: 'Northbound',
        tagline: 'Una página puente de afiliado diseñada alrededor de un solo clic.',
        role: 'Diseño de landing page, ingeniería de conversión',
        context:
          'Un embudo de afiliado conceptual para una app ficticia de presupuesto personal — una página, una decisión, hecha para aislar exactamente qué hace convertir a una bridge page.',
        challenge:
          'Las páginas de afiliado suelen intentar hacer tres trabajos a la vez — informar, persuadir y rankear en SEO — y terminan sin hacer ninguno bien.',
        solution:
          'Una página de propósito único: una promesa justo arriba del pliegue, prueba justo debajo, y un solo botón repetido exactamente tres veces — sin navegación, sin puntos de salida, sin llamadas competidoras.',
      },
    },
  },
  {
    slug: 'studio-system',
    year: 2025,
    size: 'md',
    serviceIndices: [2, 5],
    tech: ['Figma', 'Remotion', 'Meta Ads Manager'],
    visual: 6,
    copy: {
      en: {
        title: 'Studio System',
        tagline: 'A reusable ad-creative system for SaaS performance marketing.',
        role: 'Art direction, creative templates',
        context:
          'A concept creative system for paid social — one visual language expressed across a static carousel, a motion ad, and a story format.',
        challenge:
          'Performance teams burn hours rebuilding creative from scratch every sprint, which is how brand consistency quietly disappears.',
        solution:
          'A token-driven template system — swap copy, product screen, and one accent color, and the format updates itself across every placement, in and out of Remotion.',
      },
      pt: {
        title: 'Studio System',
        tagline: 'Um sistema reutilizável de criativos para performance em SaaS.',
        role: 'Direção de arte, templates de criativos',
        context:
          'Um sistema criativo conceitual para social pago — uma única linguagem visual expressa em um carrossel estático, um anúncio em motion e um formato de story.',
        challenge:
          'Times de performance perdem horas reconstruindo criativos do zero a cada sprint, e é assim que a consistência de marca desaparece silenciosamente.',
        solution:
          'Um sistema de templates guiado por tokens — troque o texto, a tela do produto e uma cor de destaque, e o formato se atualiza sozinho em cada posicionamento, dentro e fora do Remotion.',
      },
      es: {
        title: 'Studio System',
        tagline: 'Un sistema reutilizable de creatividades para performance en SaaS.',
        role: 'Dirección de arte, plantillas de creatividades',
        context:
          'Un sistema creativo conceptual para social pago — un único lenguaje visual expresado en un carrusel estático, un anuncio en motion y un formato de story.',
        challenge:
          'Los equipos de performance pierden horas reconstruyendo creatividades desde cero cada sprint, y así es como la consistencia de marca desaparece en silencio.',
        solution:
          'Un sistema de plantillas guiado por tokens — cambia el texto, la pantalla de producto y un color de acento, y el formato se actualiza solo en cada posicionamiento, dentro y fuera de Remotion.',
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
