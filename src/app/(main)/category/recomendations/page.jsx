import { CarouselRecomendation } from "@/components"

const planes = [
  {
    nombre: "Hotel las Américas",
    miniatura: "/img-carousel/cartagena1.png?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
  {
    nombre: "Grand Resort",
    miniatura: "/img-carousel/cartagena2.jpg?height=200&width=300",
    rating: 5,
    reviews: 1024,
    price: 55.0,
  },
  {
    nombre: "Seaside Inn",
    miniatura: "/img-carousel/cartagena3.jpg?height=200&width=300",
    rating: 3,
    reviews: 302,
    price: 28.5,
  },
  {
    nombre: "Hotel las Américas",
    miniatura: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
  {
    nombre: "Hotel las Américas",
    miniatura: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
  {
    nombre: "Hotel las Américas",
    miniatura: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
]

export default function Recomendation() {
  return (
    <div className="flex justify-center">
      <div className="carousel-recomendation container mt-24 font-bold">
        <h1 className="text-2xl">Recomendaciones Personalizadas </h1>

        <hr className="mt-8 w-full"></hr>

        <CarouselRecomendation title="Restaurantes" planes={planes} />
        <CarouselRecomendation title="Playas" planes={planes} />
        <CarouselRecomendation title="Sitios Turisticos" planes={planes} />
        <CarouselRecomendation title="Alojamientos" planes={planes} />
        <CarouselRecomendation title="Extremos" planes={planes} />
      </div>
    </div>
  )
}
