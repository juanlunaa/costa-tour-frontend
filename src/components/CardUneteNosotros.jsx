import React from "react"

function InfoCard({ imageUrl, title, description }) {
  return (
    <div className=" bg-white max-w-64 sm:max-w-64 md:max-w-72 rounded-xl overflow-hidden flex flex-col items-center justify-center hover:scale-105 transition-all shadow-customBoxShadow dark:shadow-customBoxShadowDark">
      <div className="relative bg-[#FEF7F4] rounded-full w-40 h-40 flex items-center justify-center">
        <img className="w-24 h-24 object-cover" src={imageUrl} alt={title} />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-base md:text-xl mb-2 ">{title}</div>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
    </div>
  )
}

export default function InfoList() {
  const list = [
    {
      id: 1,
      imageUrl: "/cardsimg/card1.png",
      title: "Aumenta tu visibilidad",
      description:
        "Podrás mostrar tus servicios a una audiencia amplia y destacar tus ofertas únicas, aumentando tu presencia en el mercado turístico local.",
    },
    {
      id: 2,
      imageUrl: "/cardsimg/card2.png",
      title: "Ofertas únicas",
      description:
        "Desde actividades extremas como parapente, surf, tours culturales, hasta experiencias gastronómicas. Lo que sea, lo tendrás.",
    },
    {
      id: 3,
      imageUrl: "/cardsimg/card3.png",
      title: "Gestión sencilla y rápida",
      description:
        "Nuestra plataforma te permite gestionar fácilmente tus planes básicos y premium. manteniéndote siempre al día con tus actividades.",
    },
    {
      id: 4,
      imageUrl: "/cardsimg/card4.png",
      title: "Siempre a tu lado",
      description:
        "Te ofrecemos soporte  para ayudarte en cada paso del camino. Estamos aquí para que tú puedas enfocarte en lo que mejor haces: crear experiencias inolvidables para los turistas.",
    },
  ]

  return (
    <div className=" py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {list.map((List) => (
          <InfoCard
            key={List.id}
            imageUrl={List.imageUrl}
            title={List.title}
            description={List.description}
          />
        ))}
      </div>
    </div>
  )
}
