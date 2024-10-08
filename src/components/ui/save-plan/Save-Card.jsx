import { Card, CardContent } from "@/components/ui/card"
import { BACKEND_SERVER } from "@/env"
import { StarIcon } from "lucide-react"
import Image from "next/image"
import { FaBookmark } from "react-icons/fa"
import { toast } from "sonner"
import { toggleSavePlanTurist } from "@/services/user"

export function SaveCardPlan({
  dni,
  id,
  nombre,
  miniatura,
  precioMax,
  removePlanSaved,
}) {
  const handleRemove = async () => {
    const { res, status } = await toggleSavePlanTurist({
      dni,
      planId: id,
    })

    if (status === 200) {
      if (res === "removed") {
        removePlanSaved(id)
        toast.info("Favorito eliminado satisfactoriamente")
      }
    } else {
      toast.error("Hubo un problema al agregar el plan a favoritos")
    }
  }

  return (
    <>
      <Card className=" w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="miniatura relative w-full aspect-video">
            <Image
              src={`${BACKEND_SERVER}${miniatura}`}
              alt="Image plan"
              fill
              className="object-cover"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 text-xl rounded-full text-black bg-white py-2 px-3"
            >
              <FaBookmark className="text-customBlue" />
            </button>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-lg">{nombre}</h3>

            <div className="grid grid-cols-2 mt-4">
              <div className="flex flex-col items-start justify-end">
                <div>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="inline-block w-4 h-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600">0 reviews</span>
              </div>

              <div className="flex flex-col items-end justify-end">
                <span className="text-xl font-volkhov font-bold text-green-600">
                  ${Math.trunc(precioMax)}
                </span>
                <span className="text-xs text-gray-600"> por persona</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
