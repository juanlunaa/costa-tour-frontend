"use client"

import { CarouselRecomendation } from "@/components"
import useUserStore from "@/hooks/useUserStore"
import { fetchRecomendations } from "@/services/plan"
import { useEffect, useState } from "react"

export default function Recomendation() {
  const [recomendations, setRecomendations] = useState([])
  const { user } = useUserStore()
  useEffect(() => {
    const getRecomendations = async () => {
      if (user?.dni) {
        const data = await fetchRecomendations(user.dni)
        setRecomendations(Array.isArray(data) ? data : [])
      }
    }

    getRecomendations()
  }, [user.dni])

  return (
    <div className="flex justify-center">
      <div className="carousel-recomendation container sm:mt-8 md:mt-14 font-bold">
        <h1 className="text-lg sm:text-xl md:text-2xl">
          Recomendaciones Personalizadas{" "}
        </h1>

        <hr className="mt-8 w-full"></hr>

        <CarouselRecomendation
          title="Restaurantes"
          planes={recomendations?.filter((p) => p.categoria === "RESTAURANTE")}
        />
        <CarouselRecomendation
          title="Sitios Turisticos"
          planes={recomendations?.filter(
            (p) => p.categoria === "SITIO_TURISTICO"
          )}
        />
        <CarouselRecomendation
          title="Playas"
          planes={recomendations?.filter((p) => p.categoria === "PLAYA")}
        />
        <CarouselRecomendation
          title="Alojamientos"
          planes={recomendations?.filter((p) => p.categoria === "ALOJAMIENTO")}
        />
      </div>
    </div>
  )
}
