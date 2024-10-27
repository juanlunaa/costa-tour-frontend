export const daysOfWeek = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
  "SABADO",
  "DOMINGO",
]

export const suscripcionesTurista = [
  {
    id: 1, // <- Coincide con el que esta en la bd
    descripcion: "Mensual",
    precio: 29900,
    href: "#",
    caracteristicas: [
      "Acceso a experiencias exclusivas: Disfruta de actividades y eventos que no están disponibles para los usuarios regulares.",
      "Descuentos especiales: Obtén tarifas reducidas en hoteles, restaurantes y planes turísticos aliados.",
      "Fiestas privadas: Entrada a fiestas VIP y eventos nocturnos solo para suscriptores premium.",
      "Actividades extremas: Participa en deportes de aventura y experiencias extremas diseñadas para quienes buscan adrenalina.",
      "Reservas prioritarias: Asegura tu lugar en los eventos y actividades más demandados antes que el público general.",
      "Atención personalizada: Servicio de atención exclusivo de 24 horas  para ayudarte a planificar cada detalle de tu viaje.",
    ],
  },
  {
    id: 2, // <- Coincide con el que esta en la bd
    descripcion: "Anual",
    precio: 299000,
    href: "#",
    caracteristicas: [
      "Acceso a experiencias exclusivas: Disfruta de actividades y eventos que no están disponibles para los usuarios regulares.",
      "Descuentos especiales: Obtén tarifas reducidas en hoteles, restaurantes y planes turísticos aliados.",
      "Fiestas privadas: Entrada a fiestas VIP y eventos nocturnos solo para suscriptores premium.",
      "Actividades extremas: Participa en deportes de aventura y experiencias extremas diseñadas para quienes buscan adrenalina.",
      "Reservas prioritarias: Asegura tu lugar en los eventos y actividades más demandados antes que el público general.",
      "Atención personalizada: Servicio de atención exclusivo de 24 horas  para ayudarte a planificar cada detalle de tu viaje.",
    ],
  },
]

export const getDateFormatted = (date) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }

  return new Date(date).toLocaleDateString("es-ES", options)
}
