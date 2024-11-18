import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"

const partesDelDia = [
  {
    id: "filter-ex-01-01",
    title: "Por la mañana",
    descripcion: "Empieza antes de 12pm",
    value: "11:00",
  },
  {
    id: "filter-ex-01-02",
    title: "Por la tarde",
    descripcion: "Empieza desde las 12pm",
    value: "12:00",
  },
  {
    id: "filter-ex-01-03",
    title: "Por la noche",
    descripcion: "Empieza depues de 5pm",
    value: "17:00",
  },
]

const duracion = [
  {
    id: "filter-ex-02-01",
    title: "Hasta 1 hora",
    value: "1",
  },
  {
    id: "filter-ex-02-02",
    title: "De 1 a 4 horas",
    value: "4",
  },
]

const caracteristicaAventura = [
  {
    id: "filter-ex-03-01",
    title: "Terrestres",
    value: "Terrestre",
  },
  {
    id: "filter-ex-03-02",
    title: "Acuáticas",
    value: "Acuatico",
  },
  {
    id: "filter-ex-03-03",
    title: "Aereas",
    value: "Aereo",
  },
]

const FiltersExtreme = ({ filtros, toggleFiltro }) => {
  return (
    <div className="ml-[3%] shadow-customBoxShadow rounded-sm sm:max-w-[150px] md:max-w-[220px] max-w-[600px] w-[90%] dark:bg-gray-800">
      <h1 className="p-4">Filtrar por</h1>
      <hr />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4 text-left text-sm md:text-base">
            Partes del Dia
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            {partesDelDia.map((item) => (
              <div key={item.id}>
                <div className="flex items-center space-x-2">
                  <Input
                    id={item.id}
                    type="checkbox"
                    className="h-4 w-4"
                    onChange={() => toggleFiltro("partesDelDia", item)}
                    checked={filtros.partesDelDia.some(
                      (values) => values.id === item.id
                    )}
                  />
                  <label
                    htmlFor={item.id}
                    className="text-xs sm:text-xs md:text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.title}
                  </label>
                </div>
                <span className="ml-6 text-xs">{item.descripcion}</span>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4 text-left text-sm md:text-base">
            Duración
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            {duracion.map((item) => (
              <div key={item.id}>
                <div className="flex items-center space-x-2">
                  <Checkbox id={item.id} />
                  <label
                    htmlFor={item.id}
                    className="text-xs sm:text-xs md:text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.title}
                  </label>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4 text-left text-sm md:text-base">
            Categoría de Aventura
          </AccordionTrigger>
          <AccordionContent className="p-4 space-y-4">
            {caracteristicaAventura.map((item) => (
              <div key={item.id}>
                <div className="flex items-center space-x-2">
                  <Input
                    id={item.id}
                    type="checkbox"
                    className="h-4 w-4"
                    onChange={() =>
                      toggleFiltro("caracteristicaAventura", item)
                    }
                    checked={filtros.caracteristicaAventura.some(
                      (values) => values.id === item.id
                    )}
                  />
                  <label
                    htmlFor={item.id}
                    className="text-xs sm:text-xs md:text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.title}
                  </label>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FiltersExtreme
