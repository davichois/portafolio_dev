import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

export type Project = {
  slug: string;
  title: string;
  role: string;
  description: string;
  highlights: readonly string[];
  tech: readonly string[];
  github: string;
  live: string;
  featured: boolean;
  year: string;
  image: string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
  // 2026
  {
    slug: "sin-gato-no-hay-liebre",
    title: "Sin Gato No Hay Liebre",
    role: "Full-Stack Developer",
    highlights: [
      "Desarrollé una plataforma de sorteos con suscripciones y tickets para premios mensuales.",
      "Integré una pasarela de pago propia con Yape y Plin.",
      "Automaticé la validación de pagos y activación de suscripciones con n8n.",
      "Implementé flujos seguros para compra de tickets y membresías.",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "n8n",
      "TypeScript",
    ],
    github: "https://github.com/davichois/SGNHL",
    live: "#",
    featured: true,
    year: "2026",
    image: "/images/projects/sgnhl.png",
  },

  // 2025
  {
    slug: "motokarcross-race-management-system",
    title: "Sistema de Gestión de Motokarcross",
    role: "Full-Stack Developer",
    highlights: [
      "Desarrollé un sistema para controlar mangas, competidores y clasificaciones en tiempo real.",
      "Implementé seguimiento de posiciones similar a los sistemas de cronometraje de Fórmula 1.",
      "Construí aplicaciones móviles y web para jueces y organizadores.",
      "Automaticé la sincronización y procesamiento de datos con n8n.",
    ],
    tech: ["Next.js", "Kotlin", "iOS", "Supabase", "PostgreSQL", "n8n"],
    github: "https://github.com/davichois/MTK3",
    live: "#",
    featured: true,
    year: "2025",
    image: "/images/projects/motokarcross.png",
  },

  // 2024
  {
    slug: "bootstrap-sandbox-architecture",
    title: "Bootstrap Sandbox Architecture",
    role: "Full-Stack Developer",
    highlights: [
      "Desarrollé un generador de arquitecturas backend impulsado por IA inspirado en Spring Initializr.",
      "Integré un amplio catálogo de arquitecturas de software para crear proyectos automáticamente.",
      "Transformé los requisitos del usuario en estructuras backend listas para producción.",
      "Implementé un sistema de créditos con pasarela de pago para comprar generaciones.",
      "Tuvo gran impacto académico antes de ser retirado por altos costos de mantenimiento.",
    ],
    tech: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "OpenAI API",
      "Stripe",
    ],
    github: "https://github.com/citseOfficial/bootstrap-sandbox-architecture",
    live: "#",
    featured: true,
    year: "2024",
    image: "/images/projects/bootstrap-sandbox.png",
  },
  {
    slug: "ceis-event-management-app",
    title: "CEIS App",
    role: "Full-Stack Developer",
    highlights: [
      "Desarrollé el sistema interno para el primer hackatón de la región San Martín.",
      "Implementé control de asistencia y registro a simposios.",
      "Construí aplicaciones web y móviles para estudiantes y organizadores.",
      "Gestioné la información del evento con Java y SQL Server.",
    ],
    tech: ["Next.js", "Kotlin", "Java", "SQL Server", "TypeScript"],
    github: "https://github.com/davichois/CEIS_app",
    live: "#",
    featured: false,
    year: "2024",
    image: "/images/projects/ceis.png",
  },

  // 2023
  {
    slug: "kundu-community-app",
    title: "Kundu App",
    role: "Android Developer",
    highlights: [
      "Desarrollé funcionalidades Android para organizar grupos y fomentar la participación.",
      "Implementé chat, cuestionarios y competencias mensuales basadas en asistencia.",
      "Apoyé en el diseño de la base de datos y definición de casos de uso.",
      "Soportó más de 200 usuarios concurrentes durante su despliegue en la universidad.",
    ],
    tech: ["Kotlin", "Android Studio", "Firebase", "MySQL"],
    github: "https://github.com/citseOfficial/Kundu-app",
    live: "#",
    featured: false,
    year: "2023",
    image: "/images/projects/kundu.png",
  },
  {
    slug: "heira-noise-monitoring-app",
    title: "Heira App",
    role: "Full-Stack Developer",
    highlights: [
      "Desarrollé una plataforma para monitorear contaminación sonora.",
      "Integré Mapbox para visualizar zonas con menor nivel de ruido.",
      "Construí aplicaciones móviles y servicios backend para recopilar datos.",
      "Implementé herramientas geográficas para análisis ambiental.",
    ],
    tech: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Kotlin",
      "Android Studio",
      "Mapbox",
    ],
    github: "https://github.com/davichois/heira",
    live: "#",
    featured: false,
    year: "2023",
    image: "/images/projects/heira.png",
  },
  {
    slug: "dino-sql-database-design",
    title: "Dino SQL",
    role: "Database Developer",
    highlights: [
      "Diseñé la base de datos relacional para una startup de delivery.",
      "Creé esquemas normalizados para pedidos, clientes y logística.",
      "Estructuré relaciones escalables para soportar el crecimiento del sistema.",
      "Colaboré en la arquitectura de datos del emprendimiento.",
    ],
    tech: ["SQL", "PostgreSQL", "Database Design"],
    github: "https://github.com/davichois/dino.db",
    live: "#",
    featured: false,
    year: "2023",
    image: "/images/projects/dino-sql.png",
  },

  // 2022
  {
    slug: "hook-sales-distribution-app",
    title: "Hook App",
    role: "Mobile Developer",
    highlights: [
      "Desarrollé una aplicación para toma de pedidos y distribución de productos.",
      "Permití a los repartidores visualizar la ubicación exacta de cada entrega.",
      "Conecté la aplicación móvil con backend en Java y PostgreSQL.",
      "Mejoré la coordinación entre vendedores y repartidores.",
    ],
    tech: ["Kotlin", "Android Studio", "Java", "PostgreSQL"],
    github: "https://github.com/davichois/hookApp",
    live: "#",
    featured: false,
    year: "2022",
    image: "/images/projects/hook.png",
  },

  // 2021
  {
    slug: "devter-code-editor",
    title: "Devter Code",
    role: "Frontend Developer",
    highlights: [
      "Desarrollé un editor de código web inspirado en Visual Studio Code.",
      "Implementé funcionalidades de edición usando JavaScript puro.",
      "Construí un entorno ligero sin depender de frameworks externos.",
      "Fortalecí mis fundamentos de frontend y manipulación del DOM.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/davichois/devter.code",
    live: "#",
    featured: false,
    year: "2021",
    image: "/images/projects/devter-code.png",
  },
];

function attachDescription(core: ProjectCore): Project {
  const description = PROJECT_DESCRIPTIONS[core.slug];
  if (description === undefined) {
    throw new Error(
      `Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`,
    );
  }
  return { ...core, description };
}

export const projects: readonly Project[] =
  projectCoreList.map(attachDescription);

export const getProjectBySlug = (slug: string): Project | null => {
  return projects.find((project) => project.slug === slug) ?? null;
};
