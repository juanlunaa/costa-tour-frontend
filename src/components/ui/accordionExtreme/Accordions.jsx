import { FeedbackPlan } from "@/components/Feedback"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaFlagCheckered } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
export function AccordionInfoPlan({ plan }) {
  return (
    <div className="my-5">
      <Accordion type="multiple">
        <AccordionItem value="item-1" className="border-gray-700">
          <AccordionTrigger className="px-2 hover:bg-customBlueInputAuth dark:hover:bg-background">
            Encuentro y Recogida
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <div className="flex gap-1 items-center font-bold">
              <FiMapPin />
              <span className="text-customBlue"> Lugar de encuentro</span>
            </div>

            <p className="mt-2">
              {plan?.ubicacion.direccion}{" "}
              <a href="#" className="font-bold">
                Ver ubicación
              </a>
            </p>

            <p className="mt-2">Nota: {plan?.notaUbicacion}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-gray-700">
          <AccordionTrigger className="px-2 hover:bg-customBlueInputAuth dark:hover:bg-background">
            Servicios Incluidos
          </AccordionTrigger>
          <AccordionContent className="p-2">
            {plan?.serviciosIncluidos.length > 0 ? (
              <ul className="list-disc relative left-8">
                {plan?.serviciosIncluidos.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))}
              </ul>
            ) : (
              <p>No hay servicios</p>
            )}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-gray-700">
          <AccordionTrigger className="px-2 hover:bg-customBlueInputAuth dark:hover:bg-background">
            Que se espera
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <p>{plan.expectativa}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-gray-700">
          <AccordionTrigger className="px-2 hover:bg-customBlueInputAuth dark:hover:bg-background">
            Informacion adicional{" "}
          </AccordionTrigger>
          <AccordionContent className="p-2">
            {plan?.informacionAdicional.length > 0 ? (
              <ul className="list-disc relative left-8">
                {plan?.informacionAdicional.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            ) : (
              <p>No hay informacion adicional</p>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
