"use client"
import { CarouselHome } from "@/components"
import ChatBotCostaTour from "@/components/ChatBot/page"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { StarIcon } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [rating, setRating] = useState(0)
  return (
    <div className="dark:bg-gray-900">
      <div className="max-w-full">
        <CarouselHome className="w-full" />
      </div>
      <div className="relative rounded-t-[45px] bg-white z-20 -top-12 pt-12 dark:bg-gray-900">
        <h1 className="text-4xl text-center mb-12 text-black dark:text-white">
          Aventuras que te esperan
        </h1>

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

        <div className="grid gap-4 grid-cols-2 w-[90%] h-[200px] mx-auto sm:h-[500px] sm:gap-8 mt-20">
          <div className="relative grid grid-cols-2 gap-5 items-center">

            <div className="relative h-[100%] w-full">
              <Image
                src="/home/aventura2.png"
                fill
                alt="Comer"
                className="rounded-lg object-cover aspect-video"
              />
            </div>



            <div className="relative h-[80%] w-full">
              <Image
                src="/home/Aventura1.png"
                fill
                alt="Comer"
                className="rounded-lg object-cover aspect-video"
              />

            </div>
          </div>

          <div>
            <h1 className="font-volkhov font-bold text-5xl pt-28">
              Descubre tu próxima aventura
            </h1>
            <p className="text-base mt-6">
              ¿Listo para explorar Cartagena como nunca antes? Nuestras
              recomendaciones están hechas a la medida de tus intereses.
              Desde joyas ocultas hasta experiencias auténticas, aquí encontrarás
              los mejores planes seleccionados por locales expertos. ¡No dejes que
              lo mejor de la ciudad te pase de largo!
            </p>

            <div className="w-full mt-6">
              <Button className="bg-[#37B1E2] h-12 w-[30%]">Explora ahora</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-col-1 w-[90%] h-[200px] mx-auto sm:h-[900px] mt-12">
          <span className="text-center font-mulish text-[#37B1E2] text-lg ">Testimonios</span>
          <h1 className="font-bold font-volkhov text-6xl text-center">¿Qué dicen ellos <br /> de nosotros?</h1>
          <div className="grid grid-cols-3 gap-20 w-full h-[43rem]">

            <div className="relative h-[500px] w-full grid grid-cols-1 justify-items-center gap-2">
              <div className="relative h-80 w-60 ">
                <Image
                  src="/home/nosotros1.png"
                  fill
                  alt="Comer"
                  className="rounded-lg relative object-cover aspect-video"
                />
              </div>
              <div className="mt-2 text-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className={`inline-block md:w-11 md:h-11 sm:w-8 sm:h-8 w-6 h-6 fill-current 
                                ${i < rating ? "text-yellow-400" : "text-gray-400"} cursor-pointer`}
                  />
                ))}
              </div>

              <p className="text-base text-center">
                "¡Increíble experiencia! La plataforma de guías turísticas en Cartagena
                superó todas mis expectativas. Desde la facilidad de uso hasta las descripciones
                detallada de los destinos. ¡Gracias por hacer de mi viaje a Cartagena una aventura
                inolvidable!"
              </p>
              <span className="font-bold text-2xl text-center">Alejandro García</span>
              <span className="text-lg text-orange-600 text-center">España</span>
            </div>

            <div className="relative h-[500px] w-full grid grid-cols-1 justify-items-center  gap-2">
              <div className="relative h-80 w-60">

                <Image
                  src="/home/nosotros2.png"
                  fill
                  alt="Comer"
                  className="rounded-lg object-cover aspect-video"
                />
              </div>
              <div className="mt-2 text-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className={`inline-block md:w-11 md:h-11 sm:w-8 sm:h-8 w-6 h-6 fill-current 
                                ${i < rating ? "text-yellow-400" : "text-gray-400"} cursor-pointer`}
                  />
                ))}
              </div>
              <p className="text-base text-center">
                "Fue fácil de usar y me ayudó a descubrir lugares impresionantes que de otro modo no
                habría encontrado. ¡Altamente recomendado!"
              </p>
              <span className="font-bold text-2xl text-center">Olivia Arango</span>
              <span className="text-lg text-orange-600 text-center">Puerto Rico</span>
            </div>

            <div className="relative h-[500px] w-full grid grid-cols-1 justify-items-center  gap-2">
              <div className="relative h-80 w-60">
                <Image
                  src="/home/nosotros3.png"
                  fill
                  alt="Comer"
                  className="rounded-lg object-cover aspect-video"
                />
              </div>
              <div className="mt-2 text-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className={`inline-block md:w-11 md:h-11 sm:w-8 sm:h-8 w-6 h-6 fill-current 
                                ${i < rating ? "text-yellow-400" : "text-gray-400"} cursor-pointer`}
                  />
                ))}
              </div>
              <p className="text-base text-center">
                "Fue fácil de usar y me ayudó a descubrir lugares impresionantes que de otro modo no
                habría encontrado. ¡Altamente recomendado!"
              </p>
              <span className="font-bold text-2xl text-center">Olivia Arango</span>
              <span className="text-lg text-orange-600 text-center">Puerto Rico</span>



            </div>

          </div>
        </div>


        <ChatBotCostaTour />
      </div>
    </div>
  )
}
