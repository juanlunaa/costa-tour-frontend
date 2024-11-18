"use client"

import Image from "next/image"
import { BookmarkIcon, StarIcon } from "lucide-react"
import { formatPrice, formatSrcImage } from "@/lib/utils"
import { useRouter } from "next/navigation"
import StaticStarsPercent from "./feedback/StaticStarsPercent"

export const CardRecomendation = ({
  id,
  nombre,
  miniatura,
  rangoMaxDinero,
  calificacionPromedio,
}) => {
  const router = useRouter()
  const nombreRecortado =
    nombre.length < 33 ? nombre : `${nombre.substring(0, 28)}...`

  const handleLink = () => {
    router.push(`/plans/info/${id}`)
  }
  return (
    <div
      onClick={handleLink}
      className="cursor-pointer w-full h-full flex flex-col justify-between overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div>
        <div className="miniatura relative w-full h-40">
          <Image
            src={formatSrcImage(miniatura)}
            alt={`Miniatura ${nombre}`}
            fill
            className="object-cover"
          />
          <span className="absolute top-2 left-2 py-1 px-3 bg-[#2D3134] text-white text-xs rounded-full">
            {new Number(calificacionPromedio).toFixed(1)}
          </span>
          <BookmarkIcon className="absolute top-2 right-2 text-white" />
        </div>
        <h3 className="px-4 pt-4 font-semibold text-lg">{nombreRecortado}</h3>
      </div>
      <div className="flex justify-between items-end p-4">
        <StaticStarsPercent
          value={calificacionPromedio}
          className="h-4 w-4 md:h-4 md:w-4"
        />
        <div className="flex flex-col items-end justify-end">
          <span className="text-xl font-volkhov font-bold text-green-600">
            {rangoMaxDinero === "Gratis"
              ? rangoMaxDinero
              : `$${formatPrice(rangoMaxDinero)}`}
          </span>
          <span className="text-xs text-gray-600"> por persona</span>
        </div>
      </div>
    </div>
  )
}
