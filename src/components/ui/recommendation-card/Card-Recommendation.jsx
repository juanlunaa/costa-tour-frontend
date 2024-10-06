"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { BookmarkIcon, StarIcon } from "lucide-react"
import Image from "next/image"
const hotels = [
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena1.png?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
  {
    name: "Grand Resort",
    image: "/img-carousel/cartagena2.jpg?height=200&width=300",
    rating: 5,
    reviews: 1024,
    price: 55.0,
  },
  {
    name: "Seaside Inn",
    image: "/img-carousel/cartagena3.jpg?height=200&width=300",
    rating: 3,
    reviews: 302,
    price: 28.5,
  },
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.0,
  },
]

export function CardRecommendation({ title }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full mt-8"
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
        {hotels.map((hotel, index) => (
          <CarouselItem key={index} className="w-1 md:basis-1/3 lg:basis-1/4">
            <Card className=" w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="miniatura relative w-full h-40">
                  <Image
                    src={hotel.image}
                    alt="Image plan"
                    fill
                    className="object-cover"
                  />
                  <BookmarkIcon className="absolute top-2 right-2 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{hotel.name}</h3>

                  <div className="grid grid-cols-2 mt-4">
                    <div className="flex flex-col items-start justify-end">
                      <div>
                        {Array.from({ length: hotel.rating }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className="inline-block w-4 h-4 fill-current text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        {hotel.reviews} reviews
                      </span>
                    </div>

                    <div className="flex flex-col items-end justify-end">
                      <span className="text-2xl font-volkhov font-bold text-green-600">
                        ${hotel.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-600">
                        {" "}
                        por persona
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
