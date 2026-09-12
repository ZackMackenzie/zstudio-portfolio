/**
 * es — español profesional y neutro. Debe cumplir la misma forma que pt-BR.ts
 * (ver `Dictionary`).
 */
import type { Dictionary, ProjectText, ServiceText, ApplicationText, ExperimentText } from './pt-BR';

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
    title: 'Websites & Landing Pages',
    summary: 'Sitios web y landing pages responsivos y de alta calidad, diseñados para comunicar valor, generar confianza y convertir atención en acción.',
    detail: 'Sitios editoriales, guiados por movimiento y construidos alrededor de una única narrativa — hechos para causar la impresión correcta en los primeros segundos y sostenerse en cualquier pantalla después.',
    capabilities: ['Sitios corporativos', 'Landing pages', 'Sitios para SaaS', 'Sitios para startups', 'Páginas de venta', 'Rediseño de sitios', 'Experiencias responsivas', 'Animaciones a medida'],
  },
  'saas-product': {
    title: 'SaaS & Product Design',
    summary: 'Productos e interfaces digitales intuitivas, diseñadas para hacer que experiencias complejas sean claras, útiles y fáciles de navegar.',
    detail: 'Arquitectura de información, flujos y sistemas de interfaz. El trabajo empieza en el modelo de datos y en las tareas centrales, para que las pantallas posteriores se sientan inevitables.',
    capabilities: ['Landing pages de SaaS', 'Interfaces de aplicación web', 'Dashboards', 'Portales de cliente', 'Flujos de onboarding', 'Páginas de precios', 'Design systems', 'Prototipos interactivos'],
  },
  branding: {
    title: 'Branding & Identidad Visual',
    summary: 'Identidades visuales claras y coherentes, hechas para que los negocios se vean profesionales, memorables y consistentes.',
    detail: 'Identidad pensada primero para pantallas — wordmark, tipografía, color y una firma de movimiento — y luego extraída en guidelines y aplicaciones que un equipo realmente puede usar.',
    capabilities: ['Diseño de logo', 'Identidad de marca', 'Sistemas de color y tipografía', 'Dirección visual', 'Brand guidelines', 'Identidad para redes sociales', 'Materiales de presentación', 'Branding para startups'],
  },
  'social-media': {
    title: 'Diseño para Redes Sociales',
    summary: 'Sistemas visuales consistentes, reconocibles y enfocados en conversión, diseñados para que las marcas destaquen en redes sociales.',
    detail: 'Sistemas de contenido con plantillas y creatividad de campaña que se mantienen fieles a la marca en volumen — layouts programáticos y motion renderizado desde un pipeline repetible.',
    capabilities: ['Identidad visual para redes', 'Posts y carruseles', 'Stories', 'Plantillas editables', 'Creatividades promocionales', 'Campañas de lanzamiento', 'Banners para social', 'Sistemas de contenido recurrente'],
  },
  'creative-video': {
    title: 'Videos Creativos & Motion Design',
    summary: 'Videos de producto premium y experiencias de motion que hacen que los productos digitales sean más fáciles de entender — y más difíciles de ignorar.',
    detail: 'Motion con propósito: transiciones de estado, demos de producto, aperturas de campaña. Renderizado con Remotion, siempre desde un sistema, nunca suelto.',
    capabilities: ['Videos de producto', 'Demos de producto SaaS', 'Videos de showcase de app', 'Videos de lanzamiento', 'Motion graphics', 'Animaciones de UI', 'Videos verticales para Reels/TikTok', 'Diseño de sonido'],
  },
  advertising: {
    title: 'Advertising & Creatividades de Marketing',
    summary: 'Piezas creativas diseñadas para captar atención, comunicar rápido y sostener campañas de marketing.',
    detail: 'Creatividades enfocadas en conversión — pensadas para el feed, probadas en variaciones, listas para escalar campaña.',
    capabilities: ['Creatividades para Meta Ads', 'Creatividades para TikTok Ads', 'Creatividades para YouTube Ads', 'Creatividades de lanzamiento', 'Creatividades para e-commerce', 'Banners promocionales', 'Variaciones de anuncio', 'Landing pages de campaña'],
  },
};

const applications: Record<string, ApplicationText> = {
  'saas-startups': {
    title: 'SaaS & Startups',
    description: 'Para productos digitales que necesitan comunicar valor rápido y escalar sin perder consistencia visual.',
  },
  'local-business': {
    title: 'Negocios Locales',
    description: 'Para negocios locales que quieren una presencia online a la altura de lo que ofrecen en persona.',
  },
  'real-estate': {
    title: 'Real Estate',
    description: 'Para inmobiliarias y agentes que necesitan presentar propiedades con la calidad visual que merecen.',
  },
  'airbnb-hospitality': {
    title: 'Airbnb & Hospitality',
    description: 'Para anfitriones y operaciones de hospedaje que quieren destacar antes de la reserva.',
    highlights: ['Sitios de presentación de propiedades', 'Videos promocionales', 'Presentaciones digitales de la propiedad', 'Piezas visuales para anuncios', 'Landing pages de contacto directo'],
  },
  'digital-products': {
    title: 'Productos Digitales',
    description: 'Para productos digitales — de MVP a plataforma madura — que necesitan una interfaz a la altura de la idea.',
  },
  ecommerce: {
    title: 'E-commerce',
    description: 'Para operaciones de e-commerce que necesitan creatividades y páginas que conviertan visitas en ventas.',
  },
  agencies: {
    title: 'Agencias & Equipos Creativos',
    description: 'Para agencias y equipos creativos que necesitan un socio de producción bajo demanda.',
  },
};

const labItems: Record<string, ExperimentText> = {
  'kinetic-type': {
    title: 'Tipografía Cinética',
    kind: 'Tipografía / Motion',
    note: 'Un reel tipográfico que explora peso, tracking y ritmo en movimiento — renderizado con Remotion.',
  },
  'motion-poster': {
    title: 'Motion Poster',
    kind: 'Motion / Composición',
    note: 'Un estudio de póster en loop: grid, una forma, un acento. Una prueba de cuán poco movimiento todavía se siente vivo.',
  },
  'generative-grids': {
    title: 'Grids Generativos',
    kind: 'Generativo / Código',
    note: 'Composiciones abstractas determinísticas generadas a partir de un string — el sistema detrás de cada visual placeholder de este sitio.',
  },
  'case-teaser': {
    title: 'Apertura de Case',
    kind: 'Motion / Editorial',
    note: 'Un formato corto para abrir un case study con movimiento en vez de un hero estático.',
  },
  'reveal-system': {
    title: 'Sistema de Revelaciones',
    kind: 'Interacción',
    note: 'Las animaciones activadas por scroll usadas en este sitio — máscaras de clip, stagger, parallax; todas conscientes de reduced-motion.',
  },
  'social-render-pipeline': {
    title: 'Pipeline de Render',
    kind: 'Herramientas / Motion',
    note: 'Renderizado en lote de motion para redes a partir de un manifiesto — se cambia el dato, se vuelve a renderizar el conjunto.',
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
    capabilities: 'Capacidades',
    lab: 'Lab',
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
    lines: ['Construyo', 'experiencias', 'digitales.'],
    subcopy: 'Sitios web, marcas y experiencias digitales para empresas, startups y productos digitales — diseñados y desarrollados con tecnología, diseño e IA.',
    scrollCue: 'Trabajos',
    disciplines: ['Web Design', 'Desarrollo', 'UI/UX', 'Landing Pages', 'SaaS', 'Marca', 'Social', 'Motion Design', 'Experiencias Digitales'],
  },

  work: {
    label: 'Trabajos',
    title: ['Trabajos', 'seleccionados'],
    intro: 'Los case studies se publican de forma progresiva. Cada entrada lleva a un desglose completo — desafío, enfoque, diseño, build y motion.',
    openCase: 'Abrir un case →',
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
    applicationsLabel: 'Applications',
    applicationsTitle: ['Aplicaciones', 'por segmento'],
    applicationsIntro: 'El mismo proceso, adaptado a distintos tipos de negocio. Nunca clientes reales — solo dónde encaja mejor el trabajo.',
    applicationsIdealFor: 'Ideal para',
    applications,
  },

  capabilities: {
    label: 'Capacidades',
    title: ['Herramientas', 'y stack'],
    note: 'El stack es un medio, no el objetivo. Cambia cuando aparece una herramienta mejor — lo constante es entregar trabajo con estándar de estudio.',
    groups: [
      { label: 'Diseño', items: ['Figma', 'Design systems', 'Tipografía y layout', 'Dirección de arte', 'Prototipado'] },
      { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'] },
      { label: 'Motion', items: ['Remotion', 'After Effects', 'Animación de scroll', 'Diseño de interacción'] },
      { label: 'IA', items: ['Workflows de LLM', 'Piezas generativas', 'Investigación y síntesis', 'QA automatizado'] },
      { label: 'Entrega', items: ['Export estático', 'Vercel', 'Presupuesto de rendimiento', 'Accesibilidad', 'SEO'] },
    ],
  },

  about: {
    label: 'Sobre',
    quoteLines: ['No solo diseño', 'interfaces —', 'construyo todo.'],
    serifLine: 'Estrategia, diseño, interfaz, desarrollo y movimiento — bajo un único punto de vista.',
    pillars: [
      { label: 'Diseño', body: 'Composición, tipografía y dirección de arte — la parte que la gente siente antes de poder nombrarla.' },
      { label: 'Tecnología', body: 'React y TypeScript en producción. Entrego el producto, no un handoff.' },
      { label: 'IA', body: 'Workflows modernos de IA para avanzar más rápido en investigación, exploración y producción.' },
      { label: 'Dirección', body: 'Un único punto de vista que une estrategia, interfaz, movimiento y lanzamiento.' },
    ],
    selfTaught: 'Autodidacta, y obsesionado con serlo. Aprendo construyendo — llevando un proyecto de principio a fin hasta que funciona, y repitiéndolo con un estándar más alto. El resultado es autonomía: dame una idea y la llevo de una frase a una experiencia en producción.',
    pipelineLabel: 'Cómo fluye el trabajo',
    pipeline: ['Idea', 'Estrategia', 'Diseño', 'Interfaz', 'Build', 'Motion', 'Lanzamiento'],
  },

  lab: {
    label: 'Lab',
    title: ['Experimentos', 'y estudios'],
    intro: 'No todo es un proyecto de cliente. El Lab es donde se prueban motion, sistemas generativos e ideas de interfaz — algunos alimentan el trabajo comercial, otros solo existen.',
    motionTag: 'Motion',
    openCursor: 'Abrir',
    close: 'Cerrar ✕',
    items: labItems,
  },

  contact: {
    label: 'Contacto',
    titleLines: ['Creemos', 'algo.'],
    subcopy: '¿Tienes una idea, un producto o una marca que necesita existir de verdad? Envía la versión cruda — vuelvo con una dirección.',
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
    indexLabel: 'Índice',
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
