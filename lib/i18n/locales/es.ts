import type { Dictionary } from '../types';

const es: Dictionary = {
  meta: {
    title: 'Z.studio — Estudio Digital de Diseño & Tecnología',
    description:
      'Z.studio diseña y construye sitios web, productos SaaS, identidad de marca y motion para empresas que quieren parecer que van en serio.',
  },
  nav: {
    work: 'Trabajos',
    services: 'Servicios',
    about: 'Nosotros',
    contact: 'Contacto',
    cta: 'Iniciar proyecto',
  },
  hero: {
    kicker: 'Diseño, ingeniería & motion — un solo estudio',
    line1: 'Creamos cosas digitales',
    line2: 'con intención.',
    subhead:
      'Z.studio diseña y construye de punta a punta — desde la identidad de marca hasta el producto en producción, pasando por el motion y los anuncios que lo venden. Un equipo, un solo sistema, no tres proveedores distintos.',
    chips: ['Sitios web', 'SaaS / Producto', 'Identidad de Marca', 'Motion / Film', 'Creatividad & Ads', 'Embudos'],
    ctaPrimary: 'Iniciar proyecto',
    ctaSecondary: 'Ver trabajos',
    scroll: 'Desplázate',
  },
  work: {
    kicker: 'Trabajos seleccionados',
    title: 'Trabajos',
    intro:
      'Z.studio Concepts — proyectos propios, construidos con el mismo rigor y el mismo sistema que usamos con clientes. Sin atajos.',
    concept: 'Z.studio Concept',
    viewCase: 'Ver caso',
    allProjects: 'Todos los proyectos',
    role: 'Rol',
    year: 'Año',
  },
  services: {
    kicker: 'Qué hacemos',
    title: 'Servicios',
    intro: 'Cuatro disciplinas, un solo estudio. El alcance se define proyecto a proyecto — sin paquetes cerrados.',
    cta: '¿No encuentras exactamente lo que necesitas? Escríbenos igual.',
    categories: [
      {
        index: '01',
        label: 'Digital',
        description: 'Productos digitales rápidos y precisos — hechos para convertir, no solo para existir.',
        items: ['Sitios web', 'SaaS', 'Landing Pages'],
      },
      {
        index: '02',
        label: 'Marca',
        description: 'Sistema de marca, no solo un logo — identidad que se sostiene en cualquier superficie.',
        items: ['Identidad de Marca', 'Design Systems', 'Dirección de Arte'],
      },
      {
        index: '03',
        label: 'Motion',
        description: 'Motion que explica, vende y se queda — desde el micro-detalle de UI hasta el film completo.',
        items: ['Films de Producto', 'Motion Graphics', 'Remotion'],
      },
      {
        index: '04',
        label: 'Growth',
        description: 'Creatividad de performance y páginas diseñadas en torno a un objetivo: el próximo clic.',
        items: ['Ads', 'Sistemas Creativos', 'Embudos', 'Conversión'],
      },
    ],
  },
  about: {
    kicker: 'Nosotros',
    title: 'Un estudio pequeño, hecho para hacerlo todo bien.',
    paragraphs: [
      'Z.studio es un estudio digital pequeño, que trabaja diseño, ingeniería y motion — no un equipo generalista que hace un poco de todo.',
      'Trabajamos como un solo equipo en diseño, código y motion, para que el sitio, el producto y el contenido de una marca compartan un solo sistema — en vez de tres proveedores distintos.',
      'Cada proyecto de esta página fue diseñado y construido por nosotros, para nosotros — prueba de cómo trabajamos, antes de que nos contrates para hacerlo por tu marca.',
    ],
    stack: [
      { label: 'Diseño', items: ['UI/UX', 'Dirección de Arte', 'Design Systems'] },
      { label: 'Ingeniería', items: ['Next.js', 'React', 'TypeScript', 'Performance'] },
      { label: 'Motion', items: ['Remotion', 'Motion Graphics', '3D'] },
      { label: 'Growth', items: ['Estrategia Creativa', 'Embudos', 'Conversión', 'Ads'] },
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: 'Iniciar proyecto',
    intro: 'Cuéntanos qué estás construyendo. Respondemos dentro de un día hábil.',
    formName: 'Nombre',
    formEmail: 'Email',
    formCompany: 'Empresa / Marca',
    formCompanyOptional: '(opcional)',
    formType: 'Tipo de proyecto',
    formTypeOptions: [
      'Sitio web',
      'Producto SaaS',
      'Identidad de Marca',
      'Motion / Film',
      'Creatividad & Ads',
      'Otro',
    ],
    formMessage: 'Mensaje',
    formMessagePlaceholder: '¿Qué estás construyendo y cómo se ve el éxito para este proyecto?',
    formSubmit: 'Enviar mensaje',
    formSubmitting: 'Enviando…',
    formSuccess: 'Mensaje enviado. Te contactaremos pronto.',
    formError: 'Algo salió mal. Intenta de nuevo o escríbenos directamente.',
    directLabel: 'O escribe directamente a',
  },
  footer: {
    tagline: 'Un estudio digital pequeño — diseño, ingeniería y motion.',
    rights: 'Todos los derechos reservados.',
    back: 'Volver arriba',
  },
  notFound: {
    kicker: '404',
    title: 'Esta página no existe.',
    body: 'La página que buscas fue movida, renombrada o nunca existió.',
    cta: 'Volver al inicio',
  },
  caseStudy: {
    overview: 'Resumen',
    category: 'Categoría',
    servicesLabel: 'Capacidades',
    year: 'Año',
    concept: 'Concepto',
    direction: 'Dirección',
    interface: 'Interfaz',
    motion: 'Motion',
    development: 'Desarrollo',
    result: 'Resultado',
    noResult:
      'Un Z.studio Concept — un proyecto propio, no un trabajo para cliente. Los objetivos de abajo son el brief que nos propusimos, no resultados reportados.',
    next: 'Siguiente proyecto',
    back: 'Todos los trabajos',
  },
};

export default es;
