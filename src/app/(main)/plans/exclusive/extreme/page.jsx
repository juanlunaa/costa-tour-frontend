"use client"

import LayoutExclusive from "../layout"
import { CardExtreme } from "@/components/plan/CardBannerExtreme"
import { fetchAllPlans, fetchAllPlansExclusives } from "@/services/plan"
import CheckboxGroupDemo from "@/components/ui/checkbox-group/FiltersPlace"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CardPlan } from "@/components"
import clsx from "clsx"
import { useEffect, useState } from "react"
import FiltersExtreme from "@/components/plan/FiltersExtreme"

export default function ExtremePage() {
  const extremeBanner = (
    <img src="/banner-extremo.png" className="h-auto max-h-[75vh] w-full" />
  )

  const [plans, setPlanes] = useState([])

  const [filtros, setFiltros] = useState({
    partesDelDia: [],
    caracteristicaAventura: [],
  })

  const toggleFiltro = (filtroTipo, opcion) => {
    setFiltros((prev) => {
      const isSelect = prev[filtroTipo].some((item) => item.id === opcion.id)

      return {
        ...prev,
        [filtroTipo]: isSelect
          ? prev[filtroTipo].filter((item) => item.id !== opcion.id)
          : [...prev[filtroTipo], opcion],
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const plans = await fetchAllPlansExclusives()
      setPlanes(plans)
    }

    fetchData()
  }, [])
  const textShadow = clsx(
    "[text-shadow:_0_3px_0_rgb(255_255_255_/_100%),_0_-3px_0_rgb(255_255_255_/_100%),_3px_0_0_rgb(255_255_255_/_100%),_-3px_0_0_rgb(255_255_255_/_100%)]"
  )
  const extremos = plans?.filter((p) => p.categoria === "EXTREMO")

  const filtrarPorParteDelDia = (planes, filtro) => {
    if (filtro.length === 0) return planes

    return planes.filter((plan) => {
      // Verifico la horas de disponibilidad
      return plan.disponibilidad.some((dia) => {
        return dia.horas.some((hora) => {
          const horaPlan = parseInt(hora.split(":")[0], 10)

          // Verificar si alguna de las partes del día coincide con la hora del plan
          return filtro.some((values) => {
            const valorParte = parseInt(values.value.split(":")[0], 10)

            if (values.title.includes("mañana")) {
              // Empieza antes de las 12pm
              return horaPlan < valorParte
            } else if (values.title.includes("tarde")) {
              // Empieza desde las 12pm
              return horaPlan >= valorParte && horaPlan < 17
            } else if (values.title.includes("noche")) {
              // Empieza después de las 5pm
              return horaPlan >= valorParte
            }

            return false
          })
        })
      })
    })
  }

  const filtrarPorAventura = (planes, filtro) => {
    if (filtro.length === 0) return planes

    return planes.filter((plan) =>
      filtro.some((values) =>
        plan.caracteristicas.some((c) => c.caracteristica === values.value)
      )
    )
  }

  const filtrarPlanes = (planes) => {
    let resultado = [...planes]

    if (filtros.partesDelDia.length > 0) {
      resultado = filtrarPorParteDelDia(resultado, filtros.partesDelDia)
    }

    if (filtros.caracteristicaAventura.length > 0) {
      resultado = filtrarPorAventura(resultado, filtros.caracteristicaAventura)
    }

    return resultado
  }

  const planesFiltrados = filtrarPlanes(extremos)

  return (
    <div className="pt-20 mb-12 relative">
      <div className="relative">
        <LayoutExclusive banner={extremeBanner}>
          <div className="flex justify-end w-full gap-2 absolute transform -translate-y-1/2 top-[65%] h-[120px] right-4 sm:right-8 sm:h-36 md:right-12 md:h-44 lg:h-64">
            <CardExtreme
              image="/parapente.png"
              title="Parapente"
              className="rotate-3"
            />

            <CardExtreme
              image="/playboard.png"
              title="Playboard"
              className="-rotate-6"
            />

            <CardExtreme
              image="/jetsky.png"
              title="Jestsky"
              className="rotate-2"
            />
          </div>
        </LayoutExclusive>

        <div className="absolute transform -translate-y-1/2 top-[45%] left-5 sm:left-7 md:left-9 lg:left-11">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-wider"
            style={{ fontFamily: "fantasy" }}
          >
            <span className={`text-blue-800 font-anton italic ${textShadow}`}>
              COSTA
              <br />
              TOUR
            </span>
          </h1>
        </div>

        <div className="absolute transform -translate-y-1/2 top-[80%] left-3 sm:left-5 md:left-7 lg:left-9 text-center">
          <h1 className="text-[0.48rem] sm:text-sm md:text-base lg:text-xl font-black text-white">
            <span className="text-gray-200">
              La aventura te espera: vive <br />
              experiencias únicas que solo
              <br />
              encontrarás aquí
            </span>
          </h1>
        </div>
      </div>

      <div className="grid-filter-tabContent flex flex-col items-center sm:items-start sm:flex-row sm:justify-between sm:mt-24 mt-8 sm:gap-1 gap-5">
        <FiltersExtreme filtros={filtros} toggleFiltro={toggleFiltro} />
        {/* <div
          className="filter shadow-customBoxShadow rounded-sm sm:max-w-[150px] md:max-w-[200px] max-w-[600px] 
                          w-[90%] sm:ml-[3%] h-fit sm:flex-row dark:bg-gray-800"
        >
          <CheckboxGroupDemo />
        </div> */}
        {/* <ScrollArea className="relative h-[700px] sm:mr-1  md:mr-5 overflow-auto"> */}
        <div className="flex justify-end">
          <div className=" grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-y-5 gap-y-4 dark:text-white">
            {planesFiltrados.map((p) => (
              <CardPlan
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                miniatura={p.miniatura}
                descripcion={p.descripcion}
                calificacionPromedio={p.calificacionPromedio}
                href={`/plans/exclusive/extreme/info/${p.id}`}
              />
            ))}
          </div>
        </div>
        {/* </ScrollArea> */}
      </div>
    </div>
  )
}
