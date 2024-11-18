"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel"
import ChartBar from "@/components/Charts/ChartBar"
import ChartPie from "@/components/Charts/ChartPie"
import ChartBarTop from "./Charts/ChartBarTop"
import ChartBarGroup from "./Charts/ChartBarGroup"
import ChartLine from "@/components/Charts/ChartLine"

export default function CarouselStatisticAdmin() {
  return (
    <>
      <Carousel>
        <CarouselContent className="bg-[#F4F4F4]">
          <CarouselItem>
            <h1 className="my-10 text-center font-bold text-2xl">
              Estadística Sobre Los Comentarios de Usuarios
            </h1>

            <div className="grid grid-cols-2 gap-4 w-[95%] mx-auto my-5">
              <div className="col-span-1">
                <ChartBar />
              </div>

              <div className="col-span-1">
                <ChartPie />
              </div>

              <div className="col-span-2">
                <ChartLine />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <h1 className="my-10 text-center font-bold text-2xl">
              Estadística Sobre las Visitas de los Usuarios
            </h1>
            <div className="grid grid-cols-1 grid-rows-2 gap-16 w-[95%] mx-auto my-5">
              <div>
                <ChartBarTop />
              </div>

              <div>
                <ChartBarGroup />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-between items-center w-[95%] rounded-md shadow-customBoxShadow p-4 my-10 mx-auto">
          <h1 className="">Estadisticas</h1>
          <div className="space-x-2">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </div>
      </Carousel>
    </>
  )
}
