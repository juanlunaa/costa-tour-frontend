"use client"

import { CardPlan } from "@/components"
import { fetchAllPlansExclusives } from "@/services/plan"
import CheckboxGroupDemo from "@/components/ui/checkbox-group/FiltersPlace"
import CurvedSlider from "@/components/ui/slider/sliderNightLife"
import { useEffect, useState } from "react"

export default function NightLifePage() {
  const [plans, setPlanes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const plans = await fetchAllPlansExclusives()
      setPlanes(plans)
    }

    fetchData()
  }, [])

  const nightlifes = plans?.filter((p) => p.categoria === "NIGHTLIFE")
  return (
    <div className="pt-20 relative">
      <div className="relative">
        <div className="h-full py-16 flex justify-center flex-col items-center bg-[linear-gradient(to_right,hsl(0,0%,100%,14%),hsl(197,71%,90%,61%)_25%,hsl(0,0%,100%,14%),hsl(32,71%,90%,61%),hsl(0,0%,100%,14%))]">
          <h1 className="font-anton font-bold text-6xl text-black">
            Discotecas Exclusivas y Gastro Bares
          </h1>
          <p className="text-xl max-w-3xl text-center  text-black mt-12">
            Explora y vive una experiencia nocturna inigualable, donde la alta
            cocina se fusiona con la mejor música y ambiente. Encuentra los
            lugares más selectos para disfrutar, recomendados por expertos
            locales
          </p>
        </div>
        <div>
          <CurvedSlider />
        </div>

        <div className="grid-filter-tabContent flex flex-col items-center sm:items-start sm:flex-row sm:justify-between sm:mt-24 mt-8 sm:gap-1 gap-5 mb-20">
          <div
            className="filter shadow-customBoxShadow rounded-sm sm:max-w-[150px] md:max-w-[200px] max-w-[600px] 
                          w-[90%] sm:ml-[3%] h-fit sm:flex-row dark:bg-gray-800"
          >
            <CheckboxGroupDemo />
          </div>
          <div className=" grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-y-5 gap-y-4 dark:text-white">
            {nightlifes.map((p) => (
              <CardPlan
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                miniatura={p.miniatura}
                descripcion={p.descripcion}
                calificacionPromedio={p.calificacionPromedio}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
