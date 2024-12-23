"use client"

import { BACKEND_SERVER } from "@/env"
import useUserStore from "@/hooks/useUserStore"
import { deletePlan } from "@/services/plan"
import { toggleSavePlanTurist } from "@/services/user"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export const CardPlan = ({
  id,
  nombre,
  miniatura,
  descripcion,
  calificacionPromedio,
  href,
}) => {
  const [isSaved, setIsSaved] = useState()

  const { user, isLoggedIn, addPlanFavorito, removePlanFavorito } =
    useUserStore()

  const descripcionRecortada =
    descripcion.length < 100
      ? descripcion
      : `${descripcion.substring(0, 100)}...`

  useEffect(() => {
    setIsSaved(user?.planesFavoritos?.includes(id))
  }, [user, id])

  const handleClickBookmark = async () => {
    const prevState = isSaved
    setIsSaved(!isSaved)

    const { res, status } = await toggleSavePlanTurist({
      dni: user.dni,
      planId: id,
    })

    if (status === 200) {
      if (res === "added") {
        addPlanFavorito(id)
        console.log("toast")
        toast.info("Favorito añadido satisfactoriamente")
      }

      if (res === "removed") {
        removePlanFavorito(id)
        toast.info("Favorito eliminado satisfactoriamente")
      }
    } else {
      setIsSaved(prevState)
      toast.error("Hubo un problema al agregar el plan a favoritos")
    }
  }

  const handleDeletePlan = async (e) => {
    e.preventDefault()
    const { res, status } = await deletePlan(id)

    if (status === 200) {
      toast.info(res)
    } else {
      toast.error("Hubo un problema al eliminar el plan :(")
    }
  }
  const textShadow = cn(
    "[text-shadow:_0_1px_0_rgb(0_0_0_/_100%),_0_-1px_0_rgb(0_0_0_/_100%),_1px_0_0_rgb(0_0_0_/_100%),_-1px_0_0_rgb(0_0_0_/_100%)]"
  )

  return (
    <div className="lg:w-full md:w-full sm:full w-[90%] flex flex-col items-center">
      <div className="relative w-3/4 h-36 md:w-3/4 md:h-48 lg:w-4/5 lg:h-72">
        <Image
          src={`${BACKEND_SERVER}${miniatura}`}
          fill
          className="object-cover rounded-xl aspect-video hover:scale-105 transition-all shadow-customBoxShadow dark:shadow-customBoxShadowDark"
          alt={nombre}
        />

        <h2
          className={cn(
            "absolute bottom-2 left-2 text-left w-3/4 text-shadow text-white",
            textShadow
          )}
        >
          {nombre}
        </h2>
        <span className="absolute top-2 left-2 py-1 px-3 bg-[#2D3134] text-white text-xs rounded-full">
          {new Number(calificacionPromedio).toFixed(1)}
        </span>
        {isLoggedIn && user?.tipoUsuario === "TURISTA" ? (
          <button
            onClick={handleClickBookmark}
            className="absolute top-2 right-2 text-sm sm:text-md md:text-xl rounded-full text-black bg-white py-2 px-3 hover:bg-[#2e98a6]"
          >
            {isSaved ? (
              <FaBookmark className="text-customBlue" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
        ) : (
          <></>
        )}
      </div>

      <p className="p-3 text-xs sm:text-sm dm:text-dm text-justify sm:text-center max-w-fit w-3/4">
        {descripcionRecortada}
      </p>

      <div className="flex justify-around w-max gap-1 sm:w-full md:justify-center md:gap-2">
        {user?.tipoUsuario === "ADMINISTRADOR" && (
          <Link
            href={`/plans/edit/${id}`}
            className="flex-wrap content-center h-6 px-1 min-w-[max-content] text-xs sm:min-w-0 sm:w-[34%] sm:h-7 sm:flex sm:justify-center sm:content-center sm:py-0 sm:px-0  sm:text-xs md:text-sm md:h-8 md:items-center md:w-[25%] md:justify-around bg-customBlue text-white rounded-full w-full text-center hover:bg-[#2e98a6]"
          >
            Modificar
          </Link>
        )}
        <Link
          href={!href ? `/plans/info/${id}` : href}
          className="flex-wrap content-center h-6 px-1 min-w-[max-content] text-xs sm:min-w-0 sm:w-[34%] sm:h-7 sm:flex sm:justify-center sm:content-center sm:py-0 sm:px-0  sm:text-xs md:text-sm md:h-8 md:items-center md:w-[25%] md:justify-around bg-customBlue text-white rounded-full w-full text-center hover:bg-[#2e98a6]"
        >
          Leer más
        </Link>
        {user?.tipoUsuario === "ADMINISTRADOR" && (
          <button
            onClick={handleDeletePlan}
            className="flex-wrap content-center h-6 px-1 min-w-[max-content] text-xs sm:min-w-0 sm:w-[34%] sm:h-7 sm:justify-center sm:content-center sm:flex sm:py-0 sm:px-0 sm:text-xs sm md:text-sm md:h-8 md:items-center md:w-[25%] md:justify-around bg-customBlue text-white rounded-full w-full text-center hover:bg-[#2e98a6]"
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  )
}
