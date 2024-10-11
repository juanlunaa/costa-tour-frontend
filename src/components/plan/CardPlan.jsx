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
    <div className="lg:w-full md:w-full sm:full flex flex-col items-center">
      <div className="relative w-3/4 h-36 md:w-3/4 md:h-48 lg:w-4/5 lg:h-72">
        <Image
          src={`${BACKEND_SERVER}${miniatura}`}
          fill
          className="object-cover rounded-xl aspect-video"
          alt={nombre}
        />

        <h2 className="absolute bottom-2 left-2 text-white">{nombre}</h2>
        <span className="absolute top-2 left-2 py-1 px-3 bg-[#2D3134] text-white text-xs rounded-full">
          4.0
        </span>
        {isLoggedIn && (
          <button
            onClick={handleClickBookmark}
            className="absolute top-2 right-2 text-xl rounded-full text-black bg-white py-2 px-3"
          >
            {isSaved ? (
              <FaBookmark className="text-customBlue" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
        )}
      </div>

      <p className="p-3 text-xs sm:text-sm dm:text-dm text-center max-w-fit">
        {descripcionRecortada}
      </p>

      <div className="flex gap-2">
        {user?.tipoUsuario === "ADMINISTRADOR" && (
          <Link
            href="#"
            className="py-1 px-4 bg-customBlue text-white rounded-full"
          >
            Modificar
          </Link>
        )}
        <Link
          href={`/plans/info/${id}`}
          className="py-1 px-4 bg-customBlue text-white rounded-full"
        >
          Leer más
        </Link>
        {user?.tipoUsuario === "ADMINISTRADOR" && (
          <Link
            href="#"
            className="py-1 px-4 bg-customBlue text-white rounded-full"
          >
            Eliminar
          </Link>
        )}
      </div>
    </div>
  )
}
