import Image from "next/image"
import { BookmarkIcon, StarIcon } from "lucide-react"

export const CardRecomendation = ({
  nombre,
  miniatura,
  rating,
  reviews,
  price,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="miniatura relative w-full h-40">
        <Image
          src={miniatura}
          alt={`Miniatura ${nombre}`}
          fill
          className="object-cover"
        />
        <BookmarkIcon className="absolute top-2 right-2 text-white" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{nombre}</h3>

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
            <span className="text-2xl font-volkhov font-bold text-green-600">
              ${price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-600"> por persona</span>
          </div>
        </div>
      </div>
    </div>
  )
}
