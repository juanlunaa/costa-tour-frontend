"use client"

import { BACKEND_SERVER } from "@/env"
import useUserStore from "@/hooks/useUserStore"
import { toggleSavePlanTurist } from "@/services/user"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { toast } from "sonner"

export const CardPlan = ({ id, nombre, miniatura, descripcion }) => {
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
  

  return (
    <div className="lg:w-full md:w-full sm:full w-[90%] flex flex-col items-center">
      <div className="relative w-3/4 h-36 md:w-3/4 md:h-48 lg:w-4/5 lg:h-72">
        <Image
          src={`${BACKEND_SERVER}${miniatura}`}
          fill
          className="object-cover rounded-xl aspect-video"
          alt={nombre}
        />

        <h2 className="absolute bottom-2 left-2 text-left w-3/4 text-shadow text-white">{nombre}</h2>
        <span className="absolute top-2 left-2 py-1 px-3 bg-[#2D3134] text-white text-xs rounded-full">
          4.0
        </span>
        {isLoggedIn && (
          <button
            onClick={handleClickBookmark}
            className="absolute top-2 right-2 text-sm sm:text-md md:text-xl rounded-full text-black bg-white py-2 px-3"
          >
            {isSaved ? (
              <FaBookmark className="text-customBlue" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
        )}
      </div>

      <p className="p-3 text-xs sm:text-sm dm:text-dm text-justify sm:text-center max-w-fit w-3/4">
        {descripcionRecortada}
      </p>

      <div className="flex justify-around w-max gap-1 sm:w-full md:justify-center md:gap-2">
        {user?.tipoUsuario === "ADMINISTRADOR" && (
          <Link
            href="#"
            className="flex-wrap content-center h-6 px-1 min-w-[max-content] text-xs sm:min-w-0 sm:w-[34%] sm:h-7 sm:flex sm:justify-center sm:content-center sm:py-0 sm:px-0  sm:text-xs md:text-sm md:h-8 md:items-center md:w-[25%] md:justify-around bg-customBlue text-white rounded-full w-full text-center"
          >
            Modificar
          </Link>
        )}
        <Link
          href={`/plans/info/${id}`}
          className="flex-wrap content-center h-6 px-1 min-w-[max-content] text-xs sm:min-w-0 sm:w-[34%] sm:h-7 sm:flex sm:justify-center sm:content-center sm:py-0 sm:px-0  sm:text-xs md:text-sm md:h-8 md:items-center md:w-[25%] md:justify-around bg-customBlue text-white rounded-full w-full text-center"
        >
          Leer más
        </Link>
        {user?.tipoUsuario === "ADMINISTRADOR" && (
          <Link
            href="#"
            className="flex-wrap content-center h-6 px-1 min-w-[max-content] text-xs sm:min-w-0 sm:w-[34%] sm:h-7 sm:justify-center sm:content-center sm:flex sm:py-0 sm:px-0 sm:text-xs sm md:text-sm md:h-8 md:items-center md:w-[25%] md:justify-around bg-customBlue text-white rounded-full w-full text-center"
          >
            Eliminar
          </Link>
        )}
      </div>
    </div>   
  )
}
