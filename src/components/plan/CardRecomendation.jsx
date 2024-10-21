import Image from "next/image"
import { BookmarkIcon, StarIcon } from "lucide-react"
import { formatSrcImage } from "@/lib/utils"

export const CardRecomendation = ({
  nombre,
  miniatura,
  rating,
  reviews,
  rangoMaxDinero,
}) => {
  const nombreRecortado =
    nombre.length < 33 ? nombre : `${nombre.substring(0, 28)}...`

  console.log(nombre.length)
  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <div>
        <div className="miniatura relative w-full h-40">
          <Image
            src={formatSrcImage(miniatura)}
            alt={`Miniatura ${nombre}`}
            fill
            className="object-cover"
          />
          <BookmarkIcon className="absolute top-2 right-2 text-white" />
        </div>
        <h3 className="px-4 pt-4 font-semibold text-lg">{nombreRecortado}</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 mt-4">
          <div className="flex flex-col items-start justify-end">
            <div>
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="inline-block w-4 h-4 fill-current text-yellow-400"
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">{reviews} reviews</span>
          </div>

          <div className="flex flex-col items-end justify-end">
            <span className="text-xl font-volkhov font-bold text-green-600">
              ${Number(rangoMaxDinero).toFixed(0)}
            </span>
            <span className="text-xs text-gray-600"> por persona</span>
          </div>
        </div>
      </div>
    </div>
  )
}
