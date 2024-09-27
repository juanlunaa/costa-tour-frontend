"use client";
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
const hotels = [
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena1.png?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.00
  },
  {
    name: "Grand Resort",
    image: "/img-carousel/cartagena2.jpg?height=200&width=300",
    rating: 5,
    reviews: 1024,
    price: 55.00
  },
  {
    name: "Seaside Inn",
    image: "/img-carousel/cartagena3.jpg?height=200&width=300",
    rating: 3,
    reviews: 302,
    price: 28.50
  },
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.00
  },
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.00
  },
  {
    name: "Hotel las Américas",
    image: "/img-carousel/cartagena-sunset.jpg?height=200&width=300",
    rating: 4,
    reviews: 584,
    price: 35.00
  }
]

export function CardRecommendation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full  mt-8"
    >
      <CarouselContent>
        {hotels.map((hotel, index) => (
          <CarouselItem key={index} className="w-1 md:basis-1/3 lg:basis-1/4">
            <Card className=" w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
              <CardContent className="p-0">
                <div className=" miniatura relative">
                  <img
                    src={hotel.image}
                    className="w-full h-40 object-cover"
                  />
                  <BookmarkIcon className="absolute top-2 right-2 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{hotel.name}</h3>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: hotel.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{hotel.reviews} reviews</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-green-600">${hotel.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-600"> por person</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" relative btns-control w-[14%] h-[50px] -translate-y-[23rem] left-[80%]">
        <CarouselPrevious className="absolute left-0  w-14 h-14 shadow-[0_0_10px_rgba(255,255,0,0.5)] hover:bg-[#FFDA32] active:hover:bg-[#FFDA32]" />
        <CarouselNext className="absolute right-0  w-14 h-14 shadow-[0_0_10px_rgba(255,255,0,0.5)] hover:bg-[#FFDA32] active:hover:bg-[#FFDA32]" />
      </div>
    </Carousel>
  )
}