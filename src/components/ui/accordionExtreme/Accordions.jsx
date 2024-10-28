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
    <div className="mt-20">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border border-t-gray-700">
          <AccordionTrigger>Encuentro y Recogida</AccordionTrigger>
          <AccordionContent>
            <div>
              <div className="flex gap-2 items-center font-bold">
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
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border border-t-gray-700">
          <AccordionTrigger>Servicios Incluidos</AccordionTrigger>
          <AccordionContent>
            {plan?.serviciosIncluidos.length > 0 ? (
              <ul className="list-disc relative left-8 mt-3">
                {plan?.serviciosIncluidos.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))}
              </ul>
            ) : (
              <p>No hay servicios</p>
            )}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border border-t-gray-700">
          <AccordionTrigger>Que se espera</AccordionTrigger>
          <AccordionContent>
            <p>{plan.expectativa}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border border-t-gray-700">
          <AccordionTrigger>Informacion adicional </AccordionTrigger>
          <AccordionContent>
            {plan?.informacionAdicional.length > 0 ? (
              <ul className="list-disc relative left-8 mt-3">
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

      <div>
        <FeedbackPlan />
      </div>
    </div>
  )
}
