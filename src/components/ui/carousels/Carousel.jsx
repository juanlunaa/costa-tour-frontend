"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  const images = [
    "/img-carousel/cartagena1.png",
    "/img-carousel/cartagena2.jpg",
    "/img-carousel/cartagena3.jpg",
    "/img-carousel/cartagena-sunset.jpg",
  ]
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on("select", onSelect)
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi])

  const scrollTo = (index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[500px]">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
