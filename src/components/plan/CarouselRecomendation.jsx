import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardRecomendation } from "./CardRecomendation"

export const CarouselRecomendation = ({ title, planes }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full mt-8 px-2 lg:px-5"
    >
      <div className="flex justify-between items-center mb-2">
        <p className="rounded-full w-40 py-2 text-center bg-customBlue text-white">
          {title}
        </p>

        <div className="flex gap-2">
          <CarouselPrevious className="static w-14 h-14 shadow-[0_0_10px_rgba(255,255,0,0.5)] hover:bg-customYellow active:hover:bg-customYellow" />
          <CarouselNext className="static w-14 h-14 shadow-[0_0_10px_rgba(255,255,0,0.5)] hover:bg-customYellow active:hover:bg-customYellow" />
        </div>
      </div>
      <CarouselContent>
        {planes.map((plan, index) => (
          <CarouselItem key={index} className="w-1 md:basis-1/3 lg:basis-1/4">
            <CardRecomendation {...plan} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
