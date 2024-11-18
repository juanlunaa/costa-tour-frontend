"use client"

import React, { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const lugares = [
  { id: "manga", title: "Manga" },
  { id: "centro-historico", title: "Centro histórico" },
  { id: "bocagrande", title: "Bocagrande" },
  { id: "crespo", title: "Crespo" },
  { id: "el-laguito", title: "El laguito" },
  { id: "la-castellana", title: "La castellana" },
  { id: "la-plazuela", title: "La plazuela" },
]

const CheckboxGroup = ({ filtros, toggleFiltro }) => (
  <div className="space-y-4 p-4 grid sm:grid-cols-1 items-end grid-cols-2 border-t border-t-[#F4F4F5]">
    {lugares.map((item) => (
      <div key={item.id} className="flex items-center space-x-2">
        <Checkbox
          id={item.id}
          checked={filtros.some((values) => values.id === item.id)}
          onCheckedChange={() => toggleFiltro(item)}
        />
        <label
          htmlFor={item.id}
          className="text-xs sm:text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00A0B1]"
        >
          {item.title}
        </label>
      </div>
    ))}
  </div>
)

export default function FiltersPlace({ filtros, toggleFiltro }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <div className="w-full">
      {isSmallScreen ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="pl-3 font-medium">
              Filtrar por lugares
            </AccordionTrigger>
            <AccordionContent>
              <CheckboxGroup filtros={filtros} toggleFiltro={toggleFiltro} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div>
          <h3 className="md:text-base sm:text-sm pl-4 font-medium my-4 ">
            Filtrar por lugares
          </h3>
          <CheckboxGroup filtros={filtros} toggleFiltro={toggleFiltro} />
        </div>
      )}
    </div>
  )
}
