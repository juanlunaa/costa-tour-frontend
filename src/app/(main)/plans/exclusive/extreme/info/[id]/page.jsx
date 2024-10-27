import { ComboboxHour } from "@/components/ComboboxHour"
import { AccordionInfoPlan } from "@/components/ui/accordionExtreme/Accordions"
import { ContPerson } from "@/components/ui/contPerson/NumberPeople"
import ImageGallery from "@/components/ui/gallery-img/Gallery"
import { DatePickerDemo } from "@/components/ui/toggleCalendar/dateCalendar"
import { fetchPlanExclusiveById } from "@/services/plan"
import { notFound } from "next/navigation"
import { MdStars } from "react-icons/md"
import ModalAutoPay from "@/components/ui/modal/ModalAuto"

export default async function infoExtreme({ params }) {
  const { id } = params

  const { res, status } = await fetchPlanExclusiveById(id)

  if (status === 404) {
    notFound()
  }

  const plan = res
  console.log(plan)
  const { nombre, imagenes } = plan

  return (
    <div className="flex justify-center pt-16 dark:bg-gray-900">
      <ModalAutoPay />

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
              ¡Descubre la adrenalina sobre ruedas con nuestra emocionante
              excursión en cuatrimotos! Recorre los senderos menos transitados
              de Cartagena, donde la naturaleza se une con la aventura. Siente
              la emoción de conducir una potente cuatrimoto mientras atraviesas
              caminos de tierra, arenas doradas y exuberantes paisajes
              tropicales.Esta experiencia es perfecta para quienes buscan una
              dosis de aventura y emoción. Bajo la guía de expertos locales,
              vivirás momentos inolvidables, con paradas estratégicas en puntos
              panorámicos donde podrás admirar vistas impresionantes de la costa
              caribeña. Ya sea que seas un conductor experimentado o un
              principiante, te aseguramos una aventura segura y llena de
              diversión.
              <p className="font-bold mt-4">Disfruta de:</p>
              <ul className="list-disc relative left-8">
                <li>Cuatrimoto individual o compartida</li>
                <li>Equipo de seguridad completo</li>
                <li>Guías profesionales</li>
              </ul>
            </p>
          </div>
          <div className="shadow-customBoxShadow flex flex-col w-[65%] md:w-[35%] h-auto gap-y-6 px-5 py-8 mt-12 sm:mt-0">
            <span className="font-volkhov font-bold text-lg sm:text-xl md:text-2xl ">
              Desde $480.000
            </span>

            <div className="flex flex-wrap justify-around gap-1 gap-y-6  lg:flex-nowrap">
              <DatePickerDemo
                availableDays={["Tuesday", "Wednesday"]}
                className="w-5"
              />
              <ContPerson />
            </div>

            <div className="flex justify-center">
              <ComboboxHour />
            </div>

            <div className="flex justify-center">
              <button className="bg-[#37B1E2] text-white hover:bg-[#2ea7c5] w-[85%] lg:w-3/5 h-10 rounded-full text-xs sm:text-sm md:text-md">
                Reserva ahora
              </button>
            </div>
          </div>
        </div>

        <AccordionInfoPlan />
      </div>
    </div>
  )
}
