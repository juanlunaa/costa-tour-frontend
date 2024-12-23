"use client"

import { GoogleMapStatic, PromotionalCode } from "@/components"
import { FeedbackPlan } from "@/components/Feedback"
import FactsCarousel from "@/components/plan/FactsCarousel"
import ModalComment from "@/components/plan/ModalComment"
import ImageGallery from "@/components/ui/gallery-img/Gallery"
import { CodeProvider } from "@/context/CodeContext"
import { fetchPlanById } from "@/services/plan"
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import { MdStars } from "react-icons/md"

export default function InfoPLan({ params }) {
  const { id } = params
  const [res, setRes] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { res, status } = await fetchPlanById(id)

      if (status === 200) {
        setRes(res)
      }

      if (status === 404) {
        notFound()
      }
    }
    fetchData()
  }, [id])

  if (!res) return null
  const { plan } = res
  const { nombre, descripcion, imagenes, ubicacion, categoria } = plan

  return (
    <div className="flex justify-center pt-16 dark:bg-gray-900">
      <div className="container relative mt-20 w-[80%] mx-auto dark:bg-gray-900">
        <div>
          <h1 className="font-bold text-2xl sm:text-4xl dark:text-white">
            {nombre}
          </h1>
          {(categoria === "RESTAURANTE" || categoria === "ALOJAMIENTO") && (
            <div className="flex items-center gap-1 dark:text-white">
              <span className="text-orange-400">
                <MdStars />
              </span>
              <span>Actividad Aliada</span>
            </div>
          )}
        </div>

        <div>
          <ImageGallery imagenes={imagenes} />
        </div>

        <div className="space-y-10">
          <div>
            <h1 className="font-bold sm:text-xl text-lg mb-2 dark:text-white">
              Descripción
            </h1>
            <p className="sm:text-sm md:text-base text-xs dark:text-white">
              {descripcion}
            </p>
          </div>

          {plan?.hechos.length > 0 && (
            <FactsCarousel facts={plan?.hechos || []} />
          )}

          <div>
            <h1 className="font-bold sm:text-xl text-lg mb-2 dark:text-white">
              Ubicación
            </h1>
            <div className="h-60 sm:h-80 sm:w-3/4 rounded-lg">
              <GoogleMapStatic
                lat={ubicacion.latitud}
                lng={ubicacion.longitud}
              />
            </div>
          </div>

          {(categoria === "RESTAURANTE" || categoria === "ALOJAMIENTO") && (
            <CodeProvider>
              <PromotionalCode planId={plan.id} codigoPlan={res?.codigoPlan} />
            </CodeProvider>
          )}

          <FeedbackPlan
            idPlan={plan?.id}
            namePlan={plan?.nombre}
            thumbnailPlan={plan?.miniatura}
            calificacionPromedio={plan?.calificacionPromedio}
          />
        </div>
      </div>
    </div>
  )
}
