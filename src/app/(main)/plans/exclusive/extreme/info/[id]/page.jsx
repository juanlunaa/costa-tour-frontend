import { ComboboxHour } from "@/components/ComboboxHour"
import { AccordionInfoPlan } from "@/components/ui/accordionExtreme/Accordions"
import { ContPerson } from "@/components/ui/contPerson/NumberPeople"
import ImageGallery from "@/components/ui/gallery-img/Gallery"
import { DatePickerDemo } from "@/components/ui/toggleCalendar/dateCalendar"
import { fetchPlanExclusiveById } from "@/services/plan"
import { notFound } from "next/navigation"
import { MdStars } from "react-icons/md"

export default async function infoExtreme({ params }) {
  const { id } = params

  const { res, status } = await fetchPlanExclusiveById(id)

  if (status === 404) {
    notFound()
  }

  const plan = res
  console.log(plan)
  const { nombre, descripcion, precio, imagenes } = plan

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

            <div className="flex flex-wrap justify-around gap-1 gap-y-6  lg:flex-nowrap">
              <DatePickerDemo
                availableDays={["Tuesday", "Wednesday"]}
                className="w-5"
              />
              <ContPerson />
            </div>

            <div className="flex justify-center">
              <ComboboxHour hours={plan?.disponibilidad[0].horas} />
            </div>

            <div className="flex justify-center">
              <button className="bg-[#37B1E2] text-white hover:bg-[#2ea7c5] w-[85%] lg:w-3/5 h-10 rounded-full text-xs sm:text-sm md:text-md">
                Reserva ahora
              </button>
            </div>
          </div>
        </div>

        <AccordionInfoPlan plan={plan} />
      </div>
    </div>
  )
}
