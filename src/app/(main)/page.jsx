"use client"
import { CarouselHome } from "@/components"
import ChatBotCostaTour from "@/components/ChatBot/page"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import FeedbackTop from "@/components/FeedbackTop"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="max-w-full">
          <CarouselHome className="w-full" />
        </div>
        <div className="relative rounded-t-[45px] bg-white z-20 -top-12 pt-12 dark:bg-gray-900">
          <h1 className="font-volkhov font-bold text-4xl md:text-5xl mb-5 text-center text-black dark:text-white">
            Aventuras que te esperan
          </h1>

          <div className="grid gap-4 grid-cols-3 w-[90%] h-[200px] mx-auto sm:h-[500px] sm:gap-8">
            <div className="grid row-span-2 relative">
              <Image
                src="/home/selfie.webp"
                fill
                alt="Selfie"
                className="rounded-lg object-cover shadow-customBoxShadow dark:shadow-customBoxShadowDark"
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
                className="rounded-lg object-cover shadow-customBoxShadow dark:shadow-customBoxShadowDark"
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
                className="rounded-lg object-cover shadow-customBoxShadow dark:shadow-customBoxShadowDark"
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
                className="rounded-lg object-cover shadow-customBoxShadow dark:shadow-customBoxShadowDark"
              />

              <p className="absolute bottom-2 left-2 text-white font-semibold">
                Comer
              </p>
            </div>
          </div>

          <div className=" relative grid gap-4 sm:grid-cols-1 md:grid-cols-2 w-[90%] h-[200px] mx-auto sm:h-[500px] sm:gap-8 sm:mt-20">
            <div className="section-1-home h-96 max-w-96 w-full absolute -right-0 -top-72 -z-50"></div>
            <div className="relative grid grid-cols-2 gap-5 items-center w-full h-auto sm:h-[390px] md:h-full">
              <div className="relative h-[100%] w-full">
                <Image
                  src="/home/aventura2.png"
                  fill
                  alt="Comer"
                  className="rounded-lg object-cover aspect-video shadow-customBoxShadow dark:shadow-customBoxShadowDark"
                />
              </div>

              <div className="relative h-[80%] w-full">
                <Image
                  src="/home/Aventura1.png"
                  fill
                  alt="Comer"
                  className="rounded-lg object-cover aspect-video shadow-customBoxShadow dark:shadow-customBoxShadowDark"
                />
              </div>
            </div>

            <div>
              <h1 className="font-volkhov font-bold text-4xl md:text-5xl md:pt-28 pt-2 text-center">
                Descubre tu próxima aventura
              </h1>
              <p className="text-base mt-6">
                ¿Listo para explorar Cartagena como nunca antes? Nuestras
                recomendaciones están hechas a la medida de tus intereses. Desde
                joyas ocultas hasta experiencias auténticas, aquí encontrarás
                los mejores planes seleccionados por locales expertos. ¡No dejes
                que lo mejor de la ciudad te pase de largo!
              </p>

              <div className="w-full mt-6">
                <Button className="bg-[#37B1E2] h-12 w-[30%] shadow-customBoxShadow dark:shadow-customBoxShadowDark">
                  <Link href="/category/activities">Explora ahora</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative grid grid-col-1 w-[90%] h-auto mx-auto mt-40 sm:mt-52 md:mt-12">
            <div className="section-3-home h-96 max-w-96 w-full absolute -left-0 -top-72 -z-50 "></div>
            <span className="text-center font-mulish text-[#37B1E2] text-2xl mt-10">
              Testimonios
            </span>
            <h1 className="font-bold font-volkhov text-4xl my-8 sm:text-6xl text-center">
              ¿Qué dicen ellos <br /> de nosotros?
            </h1>
            <FeedbackTop />
          </div>
        </div>
      </div>
      <ChatBotCostaTour />
    </>
  )
}
