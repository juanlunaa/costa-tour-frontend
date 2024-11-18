"use client"

import { AccordionInfoPlan } from "@/components/ui/accordionExtreme/Accordions"
import ImageGallery from "@/components/ui/gallery-img/Gallery"
import { fetchPlanExclusiveById } from "@/services/plan"
import { notFound, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { MdStars } from "react-icons/md"
import { RHFDatePickerCustomDays } from "@/components/RHF/RHFDatePickerCustomDays"
import { RHFCombobox } from "@/components/RHF/RHFCombobox"
import { RHFContPeople } from "@/components/RHF/RHFContPeople"
import { getDayWeek } from "@/lib/utils"
import { FeedbackPlan } from "@/components/Feedback"

export default function InfoExtreme({ params }) {
  const { id } = params
  const [plan, setPlan] = useState(null)

  const router = useRouter()

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: { fecha: null, hora: "", numPersonas: 1 },
  })

  useEffect(() => {
    const fetchData = async () => {
      const { res, status } = await fetchPlanExclusiveById(id)

      if (status === 200) {
        setPlan(res)
      }

      if (status === 404) {
        notFound()
      }
    }
    fetchData()
  }, [id])

  if (!plan) return null

  const { nombre, descripcion, precio, imagenes } = plan

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    router.push(
      `/reserva/order?fecha=${data.fecha}&hora=${data.hora}&numPeople=${data.numPersonas}&planId=${id}&planName=${nombre}&planPrice=${precio}&planThumbnail=${plan?.miniatura}`
    )
  })

  return (
    <div className="flex justify-center pt-16 dark:bg-gray-900">
      <div className="container relative mt-20 w-[80%] mx-auto dark:bg-gray-900">
        <div>
          <h1 className="font-volkhov font-bold text-2xl sm:text-4xl dark:text-white">
            {nombre}
          </h1>
          <div className="flex items-center gap-1">
            <span className="text-orange-400">
              <MdStars />
            </span>
            <span className="text-gray-800">Actividad verificada</span>
          </div>
        </div>
        <div>
          <ImageGallery imagenes={imagenes} />
        </div>

        <div className="flex flex-col justify-center items-center md:items-start md:flex-row md:justify-between ">
          <div className="w-full md:w-[55%] ">
            <h1 className="font-bold text-lg">Descripcion</h1>
            <p className="w-full max-w-lg mt-4 font-mulish text-sm sm:text-base">
              {descripcion}
            </p>
          </div>
          <div className="shadow-customBoxShadow flex flex-col w-[65%] md:w-[35%] h-auto gap-y-6 px-5 py-8 mt-12 sm:mt-0">
            <span className="font-volkhov font-bold text-lg sm:text-xl md:text-2xl ">
              Desde ${precio}
            </span>

            <form onSubmit={onSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2 flex-col lg:flex-row">
                <RHFDatePickerCustomDays
                  name="fecha"
                  control={control}
                  options={plan?.disponibilidad.map((d) => d.dia)}
                  placeholderSelect={"Selecciona una fecha"}
                  setValue={setValue}
                />

                <RHFContPeople
                  name="numPersonas"
                  control={control}
                  placeholderSelect={"Selecciona el numero de personas"}
                />
              </div>

              <div className="col-span-4 row-start-2">
                <RHFCombobox
                  name="hora"
                  control={control}
                  options={
                    !watch("fecha")
                      ? []
                      : plan?.disponibilidad
                          .find((d) => d.dia === getDayWeek(watch("fecha")))
                          ?.horas.map((h) => ({
                            id: h,
                            label: h,
                          }))
                  }
                  placeholderSelect={"Selecciona una hora"}
                  notFoundMessage={"No hay horas disponibles"}
                />
              </div>

              <div className="flex justify-center col-span-4 row-start-3">
                <button
                  type="submit"
                  className="bg-[#37B1E2] text-white hover:bg-[#2ea7c5] w-[85%] lg:w-3/5 h-10 rounded-full text-xs sm:text-sm md:text-md"
                >
                  Reserva ahora
                </button>
              </div>
            </form>
          </div>
        </div>

        <AccordionInfoPlan plan={plan} />

        <FeedbackPlan
          idPlan={plan?.id}
          namePlan={plan?.name}
          thumbnailPlan={plan?.miniatura}
          calificacionPromedio={plan?.calificacionPromedio}
        />
      </div>
    </div>
  )
}
