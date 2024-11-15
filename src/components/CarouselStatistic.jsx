"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    useCarousel,
} from "@/components/ui/carousel"
import ChartBar from "@/components/Charts/ChartBar";
import ChartPie from "@/components/Charts/ChartPie";
import ChartBarTop from "./Charts/ChartBarTop";
import ChartBarGroup from "./Charts/ChartBarGroup";
import ChartLine from "@/components/Charts/ChartLine";


export default function CarouselStatisticAdmin() {
    return (
        <>
            <Carousel>
                <CarouselContent className="bg-[#F4F4F4]">
                    <CarouselItem>

                        <h1 className="mb-10 pt-10 text-center font-volkhov font-bold text-2xl">
                            Estadística Sobre Los Comentarios de Usuarios
                        </h1>

                        <div className="grid grid-cols-2  gap-4  sm:px-3">

                            <div className="col-span-1  bg-transparent">
                                <ChartBar />
                            </div>

                            <div className="col-span-1  bg-transparent">
                                <ChartPie />
                            </div>

                            <div className="p-14 w-[100%] col-span-2 bg-transparent">
                                <ChartLine />
                            </div>

                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <h1 className="mb-10 pt-10 text-center font-volkhov font-bold text-2xl">
                        Estadística Sobre las Visitas de los Usuarios 

                        </h1>
                        <div className="grid grid-cols-1 grid-rows-2 gap-16 px-4">

                            <div>
                                <ChartBarTop />
                            </div>

                            <div>
                                <ChartBarGroup />
                            </div>

                        </div>
                    </CarouselItem>

                </CarouselContent>
                <div className="relative">
                    <CarouselPrevious className="top-[0.9rem] right-0 left-[85%]" />
                    <CarouselNext className="top-[0.9rem] right-[5%] " />
                </div>

            </Carousel>
        </>

    );
}