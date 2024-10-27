"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const CarouselHome = () => {
  const images = [
    "/img-carousel/carrusel-image-1.png",
    "/img-carousel/carrusel-image-2.webp",
    "/img-carousel/carrusel-image-3.jpg",
  ]

  const textShadow = cn(
    "[text-shadow:_0_1px_0_rgb(0_0_0_/_100%),_0_-1px_0_rgb(0_0_0_/_100%),_1px_0_0_rgb(0_0_0_/_100%),_-1px_0_0_rgb(0_0_0_/_100%)]"
  )

  return (
    <Carousel className="w-full max-w-full pt-20">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[500px]">
              <div className="absolute left-20 top-16 z-20">
                <h1
                  className={cn(
                    "text-xl sm:text-4xl font-bold text-white mb-6",
                    textShadow
                  )}
                >
                  Destinos Populares
                </h1>
                <p
                  className={cn(
                    "sm:text-xl max-w-sm text-white font-bold",
                    textShadow
                  )}
                >
                  Descubre nuestras experiencias únicas y crea recuerdos
                  inolvidables en cada rincón que visites.
                </p>
              </div>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselThumbnails images={images} />
      <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 text-white" />
      <CarouselNext className="absolute top-1/2 -translate-y-1/2 text-white" />
    </Carousel>
  )
}

const CarouselThumbnails = ({ images }) => {
  const { jumpTo } = useCarousel()

  return (
    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative h-24 w-16 sm:h-36 sm:w-28 transition-all cursor-pointer shadow-customBoxShadow hover:scale-105"
          onClick={() => jumpTo(index)}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill
            priority
            className="object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  )
}
