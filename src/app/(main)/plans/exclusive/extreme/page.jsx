import LayoutExclusive from "../layout"
import { CardExtreme } from "@/components/plan/CardBannerExtreme"
import { fetchAllPlans, fetchAllPlansExclusives } from "@/services/plan"
import CheckboxGroupDemo from "@/components/ui/checkbox-group/Checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CardPlan } from "@/components"
import clsx from "clsx"
export default async function ExtremePage() {
  const extremeBanner = (
    <img
      src="/banner-extremo.png"
      className="h-auto max-h-[75vh] w-full"
    />
  )
  const plans = await fetchAllPlansExclusives()
  console.log(plans)
  const validPlans = Array.isArray(plans) ? plans : []
  const textShadow = clsx(
    "[text-shadow:_0_3px_0_rgb(255_255_255_/_100%),_0_-3px_0_rgb(255_255_255_/_100%),_3px_0_0_rgb(255_255_255_/_100%),_-3px_0_0_rgb(255_255_255_/_100%)]"
  )
  const extremos = validPlans?.filter((p) => p.categoria === "EXTREMO")
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
        <div
          className="filter shadow-customBoxShadow rounded-sm sm:max-w-[150px] md:max-w-[200px] max-w-[600px] 
                          w-[90%] sm:ml-[3%] h-fit sm:flex-row dark:bg-gray-800"
        >
          <CheckboxGroupDemo />
        </div>
        {/* <ScrollArea className="relative h-[700px] sm:mr-1  md:mr-5 overflow-auto"> */}
        <div className="flex justify-end">
          <div className=" grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-y-5 gap-y-4 dark:text-white">
            {extremos.map((p) => (
              <CardPlan
                key={p.id}
                id={p.id}
                nombre={p.nombre}
                miniatura={p.miniatura}
                descripcion={p.descripcion}
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
