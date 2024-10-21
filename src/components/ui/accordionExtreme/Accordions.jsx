import { FeedbackPlan } from "@/components/Feedback";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaFlagCheckered } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
export function AccordionInfoPlan() {
    return (
        <div className="mt-20">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border border-t-gray-700">
                    <AccordionTrigger>Encuentro y Recogida</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            <div className="flex gap-2 items-center font-bold">
                                <FiMapPin /><span className="text-customBlue"> Lugar de encuentro</span>

                            </div>

                            <p className="mt-2">
                                NUEVO HOSPITAL DE BOCAGRANDE <br />
                                Cl. 5 #6-49, Castillogrande, Cartagena de Indias, Provincia de Cartagena,
                                Bolívar, Colombia. <a href="#" className="font-bold">Ver ubicación</a>
                            </p>

                            <p className="mt-2">
                                nota: La recogida es 30 minutos antes de la hora de inicio del tour. Detrás de este
                                hospital, uno de nuestros empleados lo esperará. Tenga en cuenta que esta es una
                                experiencia compartida. Todas las conjeturas deben estar en el punto de encuentro
                                antes de que comience el recorrido. No podemos tener otros invitados esperando.
                            </p>
                            <div className="flex gap-2 items-center font-bold mt-2">
                                <FaFlagCheckered /><span className="text-customBlue"> Lugar de Finalizcion</span>

                            </div>

                            <p className="mt-2">
                                NUEVO HOSPITAL DE BOCAGRANDE
                                Cl. 5 #6-49, Castillogrande, Cartagena de Indias, Provincia de Cartagena,
                                Bolívar, Colombia. <a href="#" className="font-bold"> Ver ubicación</a>
                            </p>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-t-gray-700">
                    <AccordionTrigger>Servicios Incluidos</AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc relative left-8 mt-3">
                            <li>Cuatrimoto individual o compartida</li>
                            <li>Equipo de seguridad completo</li>
                            <li>Guías profesionales</li>
                            <li>Recorrido por playas y senderos naturales</li>
                            <li>Pausa para fotos en lugares icónicos</li>
                        </ul>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-t-gray-700">
                    <AccordionTrigger>Que se espera</AccordionTrigger>
                    <AccordionContent>
                        <p>
                            Paseo en 3 playas en la pintoresca Zona Norte de Cartagena
                            Duración: 2 horas
                        </p>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-t-gray-700">
                    <AccordionTrigger>Informacion adicional </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc relative left-8 mt-3">
                            <li>Edades: de 16 a 100, máx. de 15 por grupo</li>
                            <li>Duración: 2h 30m</li>
                            <li>Horario de inicio: consultar disponibilidad</li>
                            <li>Entrada para dispositivos móviles</li>
                            <li>Se recibirá una confirmación al momento de la reservación</li>
                            <li>No es recomendable para viajeros con problemas de espalda</li>
                            <li>No es recomendado para viajeras embarazadas</li>
                            <li>No apto para personas con problemas cardíacos o afecciones médicas graves</li>
                            <li>Puede participar la mayoría de los viajeros</li>
                            <li>Debe tener 16 años para conducir</li>
                            <li>Esta experiencia requiere buen clima. Si se cancela por mal tiempo, se le ofrecerá otra fecha o un reembolso total.</li>
                            <li>Este tour/Esta actividad puede tener 15 viajeros como máximo</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div>
                <FeedbackPlan />
            </div>


        </div>



    );
}
