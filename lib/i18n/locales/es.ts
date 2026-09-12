/**
 * es — español profesional y neutro. Debe cumplir la misma forma que pt-BR.ts
 * (ver `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText } from './pt-BR';

const projects: Record<string, ProjectText> = {
  'saas-product-platform': {
    title: 'Plataforma de Producto',
    discipline: 'SaaS / Diseño de Producto / Desarrollo',
    tags: ['Diseño de Producto', 'UI/UX', 'Frontend', 'Design System'],
    summary:
      'Diseño y desarrollo de extremo a extremo de una plataforma SaaS — desde la arquitectura de información y el design system hasta un frontend React en producción.',
    overview: {
      body: 'Una superficie de producto completa diseñada y construida como un sistema: una librería de componentes, un lenguaje de diseño documentado y un frontend conectado a datos reales. El objetivo era una plataforma capaz de crecer sin que la UI se descontrole.',
      meta: [
        { label: 'Alcance', value: 'Design system, UI de producto, frontend' },
        { label: 'Rol', value: 'Diseño + Desarrollo' },
        { label: 'Plazo', value: 'Concept project' },
        { label: 'Año', value: '2026' },
      ],
    },
    challenge: {
      body: 'La mayoría de los productos en etapa temprana acumulan pantallas más rápido de lo que acumulan estructura. El brief era definir la estructura primero — tokens, primitivas, patrones — para que cada nueva funcionalidad encaje en un sistema en vez de ampliar el área de decisiones.',
    },
    approach: {
      body: 'Partir del modelo de datos y de las tareas principales, no de las pantallas. Diseñar el sistema a la vista, en código, para que diseño e implementación nunca diverjan.',
      steps: [
        'Mapear los objetos centrales y las tres o cuatro tareas que más importan',
        'Definir tokens: color, tipografía, espaciado, movimiento',
        'Construir primitivas y patrones como una librería documentada',
        'Armar pantallas a partir de la librería — nunca a medida',
      ],
    },
    design: {
      body: 'Un lenguaje de interfaz contenido: un acento, controles de densidad generosos y una escala tipográfica que se sostiene desde tablas densas hasta superficies de marketing.',
      media: [{ alt: 'Sistema de interfaz — visión general' }, { alt: 'Estados de componentes' }],
    },
    development: {
      body: 'React y TypeScript, con una capa de tokens que mapea 1:1 con los archivos de diseño. La API de componentes es pequeña a propósito — la mayoría de las pantallas son composición, no configuración.',
      media: [{ alt: 'Arquitectura de frontend' }],
    },
    motion: {
      body: 'Aquí el movimiento es funcional: transiciones de estado, actualizaciones optimistas y movimiento de foco. Nada se repite en loop, nada decora.',
    },
    result: {
      body: 'Este es un concept project, sin cliente real — pensado para mostrar el proceso y el nivel de ejecución. Pantallas, motion y código siguen ampliándose.',
    },
    technologies: {
      groups: [
        { label: 'Diseño', items: ['Figma', 'Design tokens', 'Escala tipográfica variable'] },
        { label: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'] },
        { label: 'Herramientas', items: ['Storybook', 'Vercel', 'QA asistido por IA'] },
      ],
    },
  },
  'brand-identity-system': {
    title: 'Sistema de Identidad',
    discipline: 'Marca / Dirección de Arte / Web',
    tags: ['Identidad Visual', 'Dirección de Arte', 'Web Design', 'Motion'],
    summary:
      'Una identidad visual hecha para vivir en todas partes — wordmark, sistema tipográfico, lenguaje de movimiento y un sitio que entrega la marca en vez de describirla.',
    overview: {
      body: 'Trabajo de identidad que trata el sitio web como el artefacto principal. La marca se define por cómo se mueve y compone en pantalla, y luego se extrae en aplicaciones estáticas.',
      meta: [
        { label: 'Alcance', value: 'Wordmark, tipografía, color, motion, sitio' },
        { label: 'Rol', value: 'Dirección de Arte + Diseño + Build' },
        { label: 'Entregables', value: 'Guidelines, sitio web, kit de social' },
        { label: 'Año', value: '2026' },
      ],
    },
    challenge: {
      body: 'Un logo es fácil de hacer y fácil de ignorar. El problema difícil es un sistema con suficientes reglas para ser reconocible y suficiente margen para que otras personas lo usen sin que se desarme.',
    },
    approach: {
      body: 'Diseñar el conjunto mínimo de decisiones que hace que todo lo demás se sienta inevitable.',
      steps: ['Definir la voz tipográfica', 'Fijar la lógica de grid y espaciado', 'Definir una firma de movimiento', 'Documentar con ejemplos reales, no muestras'],
    },
    design: {
      body: 'Un wordmark grotesco y confiado, un grid editorial estricto y una única firma de movimiento que se repite en cada punto de contacto.',
      media: [{ alt: 'Estudios de wordmark' }, { alt: 'Layouts editoriales' }],
    },
    motion: {
      body: 'Una revelación, una transición, un loop — aplicados de forma consistente para que el movimiento sea parte de la identidad y no un efecto.',
    },
    gallery: {
      media: [{ alt: 'Aplicación — póster' }, { alt: 'Aplicación — social' }, { alt: 'Aplicación — web' }],
    },
    result: {
      body: 'Este es un concept project, sin cliente real — pensado para mostrar el proceso y el nivel de ejecución. Guidelines y aplicaciones siguen ampliándose.',
    },
    technologies: {
      groups: [
        { label: 'Diseño', items: ['Figma', 'Herramientas de type design'] },
        { label: 'Motion', items: ['Remotion', 'After Effects'] },
        { label: 'Web', items: ['Next.js', 'Framer Motion'] },
      ],
    },
  },
  'landing-page-conversion': {
    title: 'Página de Lanzamiento',
    discipline: 'Landing Page / Copy / Build',
    tags: ['Landing Page', 'Narrativa', 'Frontend', 'Motion'],
    summary:
      'Una experiencia de lanzamiento de página única — estructura narrativa, motion a medida y un build estático rápido, diseñado para los primeros diez segundos.',
    overview: {
      body: 'Una landing de lanzamiento es un cortometraje con una llamada a la acción. Esta se construyó alrededor de una única columna narrativa, usando el movimiento para controlar el ritmo en vez de decorar secciones.',
      meta: [
        { label: 'Alcance', value: 'Narrativa, diseño, copy, build' },
        { label: 'Rol', value: 'Diseño + Desarrollo' },
        { label: 'Foco', value: 'Primera impresión, rendimiento, claridad' },
        { label: 'Año', value: '2026' },
      ],
    },
    challenge: {
      body: 'La página tiene que hacer tres cosas a la vez en pocos segundos: transmitir calidad, explicar la oferta y dejar claro el siguiente paso — con conexión lenta, en un móvil.',
    },
    approach: {
      body: 'Escribir el argumento primero. Diseñar para el argumento. Construirlo como HTML estático que pinta al instante.',
      steps: ['Redactar la narrativa en frases simples', 'Hacer el storyboard del scroll', 'Diseñar cada momento', 'Publicar estático, medir Core Web Vitals'],
    },
    design: {
      body: 'Tipografía grande, espacio en blanco deliberado, una idea por viewport. El diseño nunca compite con el mensaje.',
      media: [{ alt: 'Storyboard de scroll' }],
    },
    development: {
      body: 'Exportado de forma estática, imágenes pre-optimizadas, motion detrás de reduced-motion. La meta es un first paint de menos de un segundo y layout shift casi nulo.',
      media: [{ alt: 'Perfil de rendimiento' }],
    },
    motion: {
      body: 'Revelaciones ligadas al scroll que marcan el ritmo del argumento, más un momento de firma en la oferta.',
    },
    result: {
      body: 'Este es un concept project, sin cliente real — pensado para mostrar el proceso y el nivel de ejecución. El copy final y los números de rendimiento se siguen refinando.',
    },
    technologies: {
      groups: [
        { label: 'Frontend', items: ['Next.js export estático', 'Tailwind', 'Framer Motion'] },
        { label: 'Rendimiento', items: ['AVIF/WebP', 'Media lazy', 'Presupuesto de Lighthouse'] },
      ],
    },
  },
  'social-creative-system': {
    title: 'Sistema Creativo',
    discipline: 'Social / Motion / Templates',
    tags: ['Social', 'Motion Design', 'Templates', 'Dirección de Arte'],
    summary:
      'Un sistema con plantillas para contenido de redes sociales — layouts programáticos y motion renderizado con Remotion que mantiene el feed consistente en volumen.',
    overview: {
      body: 'Producir contenido de social a mano no escala y se desvía de la marca rápido. Este sistema convierte las reglas de marca en plantillas y renderiza motion de forma programática.',
      meta: [
        { label: 'Alcance', value: 'Sistema de plantillas, motion, pipeline de render' },
        { label: 'Rol', value: 'Diseño + Motion + Herramientas' },
        { label: 'Salida', value: 'Posts estáticos + video renderizado' },
        { label: 'Año', value: '2026' },
      ],
    },
    challenge: {
      body: 'Mantener un feed con aspecto de una sola mano mientras se produce suficiente volumen para importar — entre formatos, en una fracción del tiempo.',
    },
    approach: {
      body: 'Codificar la lógica de layout. Alimentarla con contenido. Renderizar.',
      steps: ['Definir un grid que funcione en 1:1, 4:5 y 9:16', 'Construir plantillas de layout como componentes', 'Componer el motion en Remotion', 'Renderizar en lote a partir de un manifiesto'],
    },
    motion: {
      body: 'Cada clip es una composición de Remotion guiada por datos — se cambia el copy y las props, y se vuelve a renderizar el conjunto.',
    },
    gallery: {
      media: [{ alt: 'Plantilla — cuadrada' }, { alt: 'Plantilla — retrato' }, { alt: 'Plantilla — story' }],
    },
    result: {
      body: 'Este es un concept project, sin cliente real — pensado para mostrar el proceso y el nivel de ejecución. Los conjuntos renderizados se siguen ampliando.',
    },
    technologies: {
      groups: [
        { label: 'Motion', items: ['Remotion', 'React'] },
        { label: 'Diseño', items: ['Figma', 'Layout programático'] },
        { label: 'Pipeline', items: ['Script de render en Node', 'Borradores de copy con IA'] },
      ],
    },
  },
};

const services: Record<string, ServiceText> = {
  websites: {
    title: 'Websites',
    summary: 'Sitios rápidos y enfocados, hechos para la primera impresión correcta.',
  },
  'landing-pages': {
    title: 'Landing Pages',
    summary: 'Páginas de conversión construidas alrededor de un solo mensaje.',
  },
  'saas-product': {
    title: 'SaaS & Product Design',
    summary: 'Diseño y desarrollo de producto digital, del flujo a la interfaz.',
  },
  branding: {
    title: 'Branding',
    summary: 'Identidad visual y verbal para marcas que necesitan ser recordadas.',
  },
  'social-media': {
    title: 'Social Media',
    summary: 'Creatividades y plantillas que mantienen el feed consistente en volumen.',
  },
  'motion-video': {
    title: 'Motion & Video',
    summary: 'Video y motion que hacen los productos más fáciles de entender.',
  },
  advertising: {
    title: 'Advertising',
    summary: 'Creatividades de campaña para performance, probadas en variaciones.',
  },
};

export const es: Dictionary = {
  meta: {
    role: 'Estudio de diseño y tecnología digital',
    description:
      'Zstudio es un estudio digital independiente que crea sitios web, marcas y experiencias digitales para empresas, startups y productos digitales — diseñados y desarrollados con tecnología, diseño e IA.',
    ogTagline: 'Construyo experiencias digitales.',
    ogServices: 'Web · Producto · Marca · Motion · IA',
  },

  nav: {
    work: 'Trabajos',
    services: 'Servicios',
    about: 'Sobre',
    contact: 'Contacto',
    menu: 'Menú',
    close: 'Cerrar',
    menuAria: 'Menú de navegación',
    portfolioBadge: 'Portafolio — 2026',
    skipToContent: 'Saltar al contenido',
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  cta: {
    startProject: 'Iniciar un proyecto',
    pricingNote: 'Cada proyecto se adapta a sus objetivos, alcance y complejidad. Contáctanos para definir el enfoque ideal.',
  },

  hero: {
    eyebrow: 'Estudio de diseño y tecnología digital',
    lines: ['Experiencias digitales', 'hechas para', 'destacar.'],
    subcopy: 'Sitios web, productos, marcas y experiencias digitales — construidos para lo que tu proyecto necesita.',
  },

  work: {
    label: 'Trabajos',
    title: ['Trabajos', 'seleccionados'],
    concept: 'Concept project',
    back: '← Trabajos',
    nextProject: 'Próximo proyecto',
    viewCursor: 'Ver',
    nextCursor: 'Siguiente',
    motionStudyAlt: 'Estudio de motion',
    headings: {
      overview: 'Visión general',
      challenge: 'Desafío',
      approach: 'Enfoque',
      design: 'Diseño',
      development: 'Desarrollo',
      motion: 'Motion',
      result: 'Resultado final',
      gallery: 'Galería',
      technologies: 'Tecnologías',
    },
    projects,
  },

  services: {
    label: 'Servicios',
    title: ['Qué', 'hacemos'],
    items: services,
    combineNote: 'Un proyecto puede combinar diseño, desarrollo, branding, motion y lo que más necesite.',
  },

  about: {
    label: 'Sobre',
    quoteLines: ['No solo diseño', 'interfaces —', 'construyo todo.'],
    serifLine: 'Cada proyecto pide una combinación distinta de disciplinas — Zstudio la arma.',
    capabilities: ['Diseño', 'Desarrollo', 'Motion', 'IA'],
    note: 'El stack cambia cuando aparece una herramienta mejor — el estándar de estudio no.',
  },

  contact: {
    label: 'Contacto',
    kicker: '¿Tienes un proyecto en mente?',
    titleLines: ['Creemos', 'algo increíble, juntos.'],
    emailCursor: 'Email',
    chatCursor: 'Chatear',
    whatsapp: 'WhatsApp',
    statusLabel: 'Estado',
    baseLabel: 'Base',
    localTimeLabel: 'Hora local',
    socialLabel: 'Redes',
    availability: 'Disponible para proyectos seleccionados — 2026',
    baseLocation: 'Remoto / Brasil',
    linktreeLabel: 'Linktree',
    form: {
      intro: 'O completa el formulario — respondo por email.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@empresa.com',
      company: 'Empresa o proyecto',
      companyPlaceholder: 'Opcional',
      service: 'Servicio de interés',
      serviceOptional: 'Selecciona (opcional)',
      description: 'Descripción del proyecto',
      descriptionPlaceholder: 'Cuéntame un poco sobre la idea, el objetivo y cualquier referencia que ayude.',
      budget: 'Rango de presupuesto',
      budgetOptional: 'Opcional',
      budgetPlaceholder: 'Ej.: a definir, o un rango aproximado',
      submit: 'Enviar mensaje',
      submitting: 'Abriendo tu email…',
      successTitle: 'Casi listo.',
      successBody: 'Tu cliente de email debería abrirse con el mensaje listo — solo revisa y envía. Si no se abre, escribe directamente a',
      requiredError: 'Completa nombre, email y una descripción del proyecto.',
    },
  },

  footer: {
    tagline: 'Estudio independiente de diseño y tecnología digital.',
    networksLabel: 'Redes',
    backToTop: 'Volver arriba ↑',
    colophon: 'Hanken Grotesk · Inter · IBM Plex Mono — Next.js · Remotion',
  },

  notFound: {
    badge: 'Error 404',
    titleLines: ['Esta página', 'no existe.'],
    body: 'El enlace está roto o la página se movió. Todo lo demás está a un clic.',
    back: '← Volver al inicio',
  },
};
