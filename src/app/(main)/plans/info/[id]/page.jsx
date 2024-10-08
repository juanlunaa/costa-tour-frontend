import { FeedbackPlan } from "@/components/Feedback"
import ImageGallery from "@/components/ui/gallery-img/Gallery"
import { MapStatic } from "@/components/ui/mapview/Map"
import { fetchPlanById } from "@/services/plan"
import { notFound } from "next/navigation"

export default async function InfoPLan({ params }) {
  const { id } = params

  const { res, status } = await fetchPlanById(id)

  if (status === 404) {
    notFound()
  }

  const plan = res

  return (
    <div className="flex justify-center pt-16 dark:bg-gray-900">
      <div className="container relative mt-20 w-[80%] mx-auto dark:bg-gray-900">
        <div>
          <h1 className="font-volkhov font-bold text-2xl sm:text-4xl dark:text-white">
            {plan.nombre}
          </h1>
        </div>

        <div>
          <ImageGallery imagenes={plan.imagenes} />
        </div>

        <div>
          <h1 className="font-volkhov font-bold sm:text-xl text-lg pb-3 dark:text-white">
            Descripción
          </h1>
          <p className="sm:text-sm md:text-base text-xs dark:text-white">
            {plan.descripcion}
          </p>
        </div>

        <div>
          <h1 className="font-volkhov font-bold sm:text-xl text-lg py-5 dark:text-white">
            Ubicación
          </h1>
          <div className="h-60 sm:h-80 sm:w-3/4 rounded-lg">
            <MapStatic
              lat={plan.ubicacion.latitud}
              lng={plan.ubicacion.longitud}
              address={plan.ubicacion.direccion}
            />
          </div>
        </div>

        <div>
          <FeedbackPlan />
        </div>
      </div>
    </div>
  )
}
