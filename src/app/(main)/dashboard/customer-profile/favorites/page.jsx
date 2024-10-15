"use client"

import useUserStore from "@/hooks/useUserStore"
import { useEffect, useState } from "react"
import { fetchFavoritePlansByTurist } from "@/services/user"
import { CardPlanSaved } from "@/components"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function CustomerProfile() {
  const { user, removePlanFavorito } = useUserStore()

  const [plansSaved, setPlansSaved] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (user.dni === null || !user.dni) return

      const { res, status } = await fetchFavoritePlansByTurist(user.dni)

      if (status === 200) {
        setPlansSaved(res)
      }
    }
    fetchData()
  }, [user])

  const removePlanSaved = (id) => {
    removePlanFavorito(id)
    setPlansSaved((prevState) => {
      return prevState.filter((p) => p.id !== id)
    })
  }

  return (
    <div className="relative flex w-full h-auto">
      <div className="container relative mx-auto pl-4 sm:pl-6 lg:pl-8 bg-white shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-800">
        <div className="relative mt-12 dark:text-white">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Solo para mí
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg mr-8 text-justify">
            ¡Gracias por guardar tus experiencias favoritas! Ahora puedes
            acceder fácilmente a ellas en tu perfil y planificar tu próxima
            aventura en Cartagena con facilidad.
          </p>
        </div>
        <ScrollArea className="w-full pr-5 h-[590px] mt-12 flex justify-center sm:justify-items-end">
          <div className="grid gap-4 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-auto-fit ">
            {plansSaved.map((p) => (
              <CardPlanSaved
                key={p.id}
                dni={user.dni}
                id={p.id}
                nombre={p.nombre}
                miniatura={p.miniatura}
                precioMax={p.rangoMaxDinero}
                removePlanSaved={removePlanSaved}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
