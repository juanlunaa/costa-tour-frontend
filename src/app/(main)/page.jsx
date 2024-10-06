import Image from "next/image"

import { CarouselPlugin } from "@/components/ui/carousels/Carousel"

export default function Home() {
  return (
    <div>
      <div className="max-w-full">
        <CarouselPlugin className="w-full" />
      </div>
      <div className="relative rounded-t-[45px] bg-white z-20 -top-12 pt-12">
        <h1 className="text-4xl text-center mb-12">Aventuras que te esperan</h1>

        <div className="grid gap-4 grid-cols-3 w-[90%] h-[200px] mx-auto sm:h-[500px] sm:gap-8">
          <div className="grid row-span-2 relative">
            <Image
              src="/home/selfie.webp"
              fill
              alt="Selfie"
              className="rounded-lg object-cover"
            />

            <p className="absolute bottom-2 left-2 text-white font-semibold">
              Selfie
            </p>
          </div>

          <div className="grid row-span-2 relative">
            <Image
              src="/home/pasear.webp"
              fill
              alt="Pasear"
              className="rounded-lg object-cover"
            />

            <p className="absolute bottom-2 left-2 text-white font-semibold">
              Pasear
            </p>
          </div>

          <div className="grid relative row-span-1">
            <Image
              src="/home/recreacion.webp"
              fill
              alt="Recreacion"
              className="rounded-lg object-cover"
            />

            <p className="absolute bottom-2 left-2 text-white font-semibold">
              Recreación
            </p>
          </div>

          <div className="grid relative row-span-1">
            <Image
              src="/home/comida.webp"
              fill
              alt="Comer"
              className="rounded-lg object-cover"
            />

            <p className="absolute bottom-2 left-2 text-white font-semibold">
              Comer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
