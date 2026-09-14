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
    contact: 'Contacto',
    cta: 'Iniciar proyecto',
  },
  hero: {
    kicker: 'Estudio digital de diseño & tecnología',
    line1: 'Productos digitales,',
    line2: 'marcas & experiencias.',
    subhead: 'Un estudio pequeño, diseñando en web, producto, marca y motion.',
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
    title: '¿Tienes un proyecto en mente?',
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
    servicesLabel: 'Stack',
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
