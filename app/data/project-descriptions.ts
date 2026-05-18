export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
  "sin-gato-no-hay-liebre":
    "Plataforma de sorteos y suscripciones con tickets digitales, integración de pagos con Yape y Plin, y automatización de procesos con n8n.",

  "motokarcross-race-management-system":
    "Sistema de control de carreras en tiempo real para gestionar mangas, competidores y posiciones, similar a los sistemas de cronometraje de Fórmula 1.",

  "bootstrap-sandbox-architecture":
    "Generador de arquitecturas backend impulsado por inteligencia artificial que transforma requisitos en proyectos Java estructurados y listos para producción.",

  "ceis-event-management-app":
    "Sistema interno para el primer hackatón de San Martín con control de asistencia, registro a simposios y aplicaciones web y móviles.",

  "kundu-community-app":
    "Aplicación comunitaria para organizar grupos, compartir recursos, chatear y fomentar la participación mediante asistencia y cuestionarios.",

  "heira-noise-monitoring-app":
    "Plataforma de monitoreo de contaminación sonora con visualización geográfica mediante Mapbox y recolección de datos desde dispositivos móviles.",

  "dino-sql-database-design":
    "Diseño de base de datos relacional para una startup de delivery, estructurada para soportar pedidos, clientes y operaciones logísticas.",

  "hook-sales-distribution-app":
    "Aplicación móvil para toma de pedidos y distribución, conectando vendedores y repartidores con seguimiento preciso de entregas.",

  "devter-code-editor":
    "Editor de código en el navegador inspirado en Visual Studio Code, desarrollado con JavaScript puro y tecnologías web nativas.",
};

export function getProjectDescription(slug: string): string | undefined {
  return PROJECT_DESCRIPTIONS[slug];
}
