"use client"
import React, { useState, useEffect } from "react"
import ChatBot from "react-chatbotify"
import "./style.css"
import { useRouter } from "next/navigation"
const ChatBotCostaTour = () => {
  const [form, setForm] = React.useState({})
  const formStyle = {
    marginTop: 10,
    marginLeft: 20,
    border: "1px solid #491d8d",
    padding: 10,
    borderRadius: 5,
    maxWidth: 300,
  }
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    tourPreference: "",
    specialRequests: "",
  })
  const router = useRouter()
  const handleUserInput = (field, input) => {
    setUserInfo({ ...userInfo, [field]: input })
  }
  const handleRedirectToRegister = () => {
    router.push("/auth/register/turist")
  }
  const handleRedirectToPremiumInfo = () => {
    router.push("/plans/exclusive")
  }
  const handleRedirectToActivityInfo = () => {
    router.push(`/category/activities`)
  }

  const flow = {
    start: {
      message:
        "¡Hola! Bienvenido a Costa Tour, donde te conectamos con las mejores experiencias en Cartagena. ¿En qué puedo ayudarte hoy?",
      options: [
        "🌟 Explorar experiencias y actividades",
        "💼 Información sobre el plan premium",
        "📝 Registrarme como usuario o aliado",
        "🔍 Consultar descuentos y promociones",
        "📞 Contacto y ayuda",
      ],
      function: (params) => {
        handleUserInput("initialChoice", params.userInput)
        if (params.userInput === "📝 Registrarme como usuario o aliado") {
          handleRedirectToRegister()
        }
      },
      path: (params) => {
        switch (params.userInput) {
          case "🌟 Explorar experiencias y actividades":
            return "explore_activities"
          case "💼 Información sobre el plan premium":
            return "premium_info"
          case "📝 Registrarme como usuario o aliado":
            return "redirect_to_register"
          case "🔍 Consultar descuentos y promociones":
            return "discounts_promos"
          case "📞 Contacto y ayuda":
            return "contact_help"
          default:
            return "start"
        }
      },
    },
    premium_info: {
      message:
        "El plan premium de Costa Tour te ofrece acceso exclusivo a experiencias únicas en Cartagena:\n\n" +
        "• Fiestas privadas en bares exclusivos\n" +
        "• Eventos temáticos con DJs y música en vivo\n" +
        "• Tours de bares para conocer la vida nocturna\n" +
        "• Actividades extremas como paracaidismo y jet ski\n" +
        "• Descuentos especiales en restaurantes y hoteles de lujo\n\n" +
        "¿Te gustaría saber más sobre nuestro plan premium?",
      options: ["Sí, quiero más información", "No, volver al menú principal"],
      function: (params) => handleUserInput("premiumChoice", params.userInput),
      path: (params) => {
        if (params.userInput === "Sí, quiero más información") {
          handleRedirectToPremiumInfo()
          return "redirect_to_premium_info"
        } else {
          return "start"
        }
      },
    },
    explore_activities: {
      message:
        "En Costa Tour ofrecemos una amplia gama de experiencias y actividades para que disfrutes al máximo tu visita a Cartagena:\n\n" +
        "• Playas paradisíacas\n" +
        "• Restaurantes de clase mundial\n" +
        "• Alojamientos para todos los gustos\n" +
        "• Sitios turísticos emblemáticos\n\n" +
        "¿Sobre qué tipo de experiencia te gustaría saber más?",
      options: [
        "🏖️ Playas",
        "🍽️ Restaurantes",
        "🏨 Alojamientos",
        "🏛️ Sitios turísticos",
        "Volver al menú principal",
      ],
      function: (params) => handleUserInput("activityChoice", params.userInput),
      path: (params) => {
        switch (params.userInput) {
          case "🏖️ Playas":
            return "beaches_info"
          case "🍽️ Restaurantes":
            return "restaurants_info"
          case "🏨 Alojamientos":
            return "accommodations_info"
          case "🏛️ Sitios turísticos":
            return "tourist_sites_info"
          case "Volver al menú principal":
            return "start"
          default:
            return "explore_activities"
        }
      },
    },
    discounts_promos: {
      message:
        "En Costa Tour, siempre tenemos ofertas especiales para nuestros clientes:\n\n" +
        "• 15% de descuento en tours grupales\n" +
        "• 2x1 en cenas en restaurantes seleccionados\n" +
        "• Noches adicionales gratis en hoteles asociados\n\n" +
        "¿Te gustaría obtener más ayuda o información sobre nuestras promociones?",
      options: ["Sí, quiero más ayuda", "No, volver al menú principal"],
      function: (params) => handleUserInput("promoChoice", params.userInput),
      path: (params) => {
        if (params.userInput === "Sí, quiero más ayuda") {
          return "start"
        } else {
          return "start"
        }
      },
    },
    beaches_info: {
      message:
        "Cartagena cuenta con hermosas playas de arena blanca y aguas cristalinas. Algunas de las más populares son:\n\n" +
        "• Playa Blanca\n" +
        "• Islas del Rosario\n" +
        "• Playa de Bocagrande\n\n" +
        "¿Te gustaría obtener más información sobre las playas de Cartagena?",
      options: ["Sí, más información", "No, volver al menú de actividades"],
      function: (params) => handleUserInput("beachesChoice", params.userInput),
      path: (params) => {
        if (params.userInput === "Sí, más información") {
          handleRedirectToActivityInfo("beaches")
          return "redirect_to_beaches_info"
        } else {
          return "explore_activities"
        }
      },
    },
    restaurants_info: {
      message:
        "La gastronomía de Cartagena es rica y variada. Algunos de los mejores restaurantes incluyen:\n\n" +
        "• Carmen (cocina de autor)\n" +
        "• La Cevichería (mariscos)\n" +
        "• Interno (proyecto social con comida gourmet)\n\n" +
        "¿Quieres descubrir más sobre la escena culinaria de Cartagena?",
      options: ["Sí, más información", "No, volver al menú de actividades"],
      function: (params) =>
        handleUserInput("restaurantsChoice", params.userInput),
      path: (params) => {
        if (params.userInput === "Sí, más información") {
          handleRedirectToActivityInfo("restaurants")
          return "redirect_to_restaurants_info"
        } else {
          return "explore_activities"
        }
      },
    },
    accommodations_info: {
      message:
        "Cartagena ofrece una amplia variedad de alojamientos, desde hostales económicos hasta hoteles de lujo:\n\n" +
        "• Hotel Boutique Casa del Coliseo\n" +
        "• Sofitel Legend Santa Clara\n" +
        "• Casa San Agustín\n\n" +
        "¿Deseas ver más opciones de alojamiento en Cartagena?",
      options: ["Sí, más información", "No, volver al menú de actividades"],
      function: (params) =>
        handleUserInput("accommodationsChoice", params.userInput),
      path: (params) => {
        if (params.userInput === "Sí, más información") {
          handleRedirectToActivityInfo("accommodations")
          return "redirect_to_accommodations_info"
        } else {
          return "explore_activities"
        }
      },
    },
    tourist_sites_info: {
      message:
        "Cartagena está llena de sitios históricos y culturales fascinantes:\n\n" +
        "• Castillo de San Felipe de Barajas\n" +
        "• Ciudad Amurallada\n" +
        "• Palacio de la Inquisición\n\n" +
        "¿Te gustaría explorar más sobre los sitios turísticos de Cartagena?",
      options: ["Sí, más información", "No, volver al menú de actividades"],
      function: (params) =>
        handleUserInput("touristSitesChoice", params.userInput),
      path: (params) => {
        if (params.userInput === "Sí, más información") {
          handleRedirectToActivityInfo("tourist-sites")
          return "redirect_to_tourist_sites_info"
        } else {
          return "explore_activities"
        }
      },
    },
    redirect_to_premium_info: {
      message:
        "Te estamos redirigiendo a la página con información detallada sobre el plan premium...",
      function: () => handleRedirectToPremiumInfo(),
      path: "start",
    },
    redirect_to_register: {
      message: "Te estamos redirigiendo a la página de registro...",
      function: () => handleRedirectToRegister(),
      path: "start",
    },
    redirect_to_beaches_info: {
      message:
        "Te estamos redirigiendo a la página con información detallada sobre las playas de Cartagena...",
      function: () => handleRedirectToActivityInfo("beaches"),
      path: "start",
    },
    redirect_to_restaurants_info: {
      message:
        "Te estamos redirigiendo a la página con información detallada sobre los restaurantes de Cartagena...",
      function: () => handleRedirectToActivityInfo("restaurants"),
      path: "start",
    },
    redirect_to_accommodations_info: {
      message:
        "Te estamos redirigiendo a la página con información detallada sobre alojamientos en Cartagena...",
      function: () => handleRedirectToActivityInfo("accommodations"),
      path: "start",
    },
    redirect_to_tourist_sites_info: {
      message:
        "Te estamos redirigiendo a la página con información detallada sobre los sitios turísticos de Cartagena...",
      function: () => handleRedirectToActivityInfo("tourist-sites"),
      path: "start",
    },
    // ... (El resto de los estados del flujo permanecen sin cambios)
    contact_help: {
      message:
        "Estamos aquí para ayudarte. Nuestro número de atención al cliente es: +57 (5) 123-4567\n\n" +
        "¿En qué más puedo ayudarte?",
      options: [
        "❓ Preguntas frecuentes",
        "📧 Soporte por correo electrónico",
        "🔙 Volver al menú principal",
      ],
      function: (params) => handleUserInput("contactChoice", params.userInput),
      path: (params) => {
        switch (params.userInput) {
          case "❓ Preguntas frecuentes":
            return "faq"
          case "📧 Soporte por correo electrónico":
            return "email_support"
          case "🔙 Volver al menú principal":
            return "start"
          default:
            return "contact_help"
        }
      },
    },
    faq: {
      message: "Aquí tienes algunas preguntas frecuentes. ¿Cuál te interesa?",
      options: [
        "¿Cómo puedo hacer una reserva?",
        "¿Cuáles son las políticas de cancelación?",
        "¿Ofrecen tours personalizados?",
        "🔙 Volver al menú de contacto y ayuda",
      ],
      function: (params) => handleUserInput("faqChoice", params.userInput),
      path: (params) => {
        switch (params.userInput) {
          case "¿Cómo puedo hacer una reserva?":
            return "faq_booking"
          case "¿Cuáles son las políticas de cancelación?":
            return "faq_cancellation"
          case "¿Ofrecen tours personalizados?":
            return "faq_custom_tours"
          case "🔙 Volver al menú de contacto y ayuda":
            return "contact_help"
          default:
            return "faq"
        }
      },
    },
    faq_booking: {
      message:
        "Para hacer una reserva, puedes utilizar nuestra plataforma en línea o contactar directamente a nuestro equipo de atención al cliente. Te recomendamos registrarte primero para obtener los mejores descuentos y ofertas.\n\n¿Necesitas más ayuda?",
      options: ["Sí, tengo otra pregunta", "No, volver al menú principal"],
      function: (params) =>
        handleUserInput("faqBookingChoice", params.userInput),
      path: (params) =>
        params.userInput === "Sí, tengo otra pregunta" ? "faq" : "start",
    },
    faq_cancellation: {
      message:
        "Nuestras políticas de cancelación varían según el tour o actividad. En general, ofrecemos reembolso completo si cancelas con al menos 48 horas de anticipación. Para cancelaciones con menos de 48 horas, se aplica un cargo del 50%. Te recomendamos revisar los términos específicos al momento de hacer tu reserva.\n\n¿Necesitas más ayuda?",
      options: ["Sí, tengo otra pregunta", "No, volver al menú principal"],
      function: (params) =>
        handleUserInput("faqCancellationChoice", params.userInput),
      path: (params) =>
        params.userInput === "Sí, tengo otra pregunta" ? "faq" : "start",
    },
    faq_custom_tours: {
      message:
        "¡Sí! Ofrecemos tours personalizados para adaptarnos a tus preferencias y necesidades específicas. Contáctanos directamente para discutir tus ideas y te ayudaremos a crear una experiencia única en Cartagena.\n\n¿Necesitas más ayuda?",
      options: ["Sí, tengo otra pregunta", "No, volver al menú principal"],
      function: (params) =>
        handleUserInput("faqCustomToursChoice", params.userInput),
      path: (params) =>
        params.userInput === "Sí, tengo otra pregunta" ? "faq" : "start",
    },
    email_support: {
      message:
        "Para recibir soporte por correo electrónico, por favor escribe a support@costatour.com. Nuestro equipo te responderá en un plazo máximo de 24 horas.\n\n¿Necesitas más ayuda?",
      options: ["Sí, tengo otra pregunta", "No, volver al menú principal"],
      function: (params) =>
        handleUserInput("emailSupportChoice", params.userInput),
      path: (params) =>
        params.userInput === "Sí, tengo otra pregunta"
          ? "contact_help"
          : "start",
    },
  }

  return (
    <div>
      <ChatBot
        settings={{
          tooltip: {
            mode: "CLOSE",
            text: "¡Hola! 😊 ¿Cómo puedo ayudarte?",
          },
          footer: {
            text: (
              <span key={2} style={{ fontWeight: "bold" }}>
                {" "}
                Hola
              </span>
            ),
          },
          header: {
            avatar: "/logos/avatar-chat.png",
            title: (
              <span
                style={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                StarklyAI
              </span>
            ),
          },
        }}
        flow={flow}
      />
    </div>
  )
}

export default ChatBotCostaTour
