"use client"

import useUserStore from "@/hooks/useUserStore"
import { PlayCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ModalSuscripciones } from "@/components"
import { suscripcionesTurista } from "@/logic/const"
import { toast } from "sonner"

const ExclusivePlansPage = () => {
  const router = useRouter()
  const { user } = useUserStore()

  const [modalSuscription, setModalSuscription] = useState(false)

  const handleUserExclusive = (exclusiveCategory) => {
    const href = `/plans/exclusive/${exclusiveCategory}`

    if (user) {
      if (user?.tipoUsuario !== "ADMINISTRADOR") {
        if (user?.exclusivo) {
          router.push(href)
        } else {
          setModalSuscription(true)
        }
      } else {
        router.push(href)
      }
    } else {
      toast("Debes iniciar sesión para acceder a nuestros planes exclusivos", {
        action: {
          label: "Ir",
          onClick: () => router.push("/auth/login"),
        },
      })
    }
  }

  return (
    <div className="pt-20">
      <div className="section-1-exclusive w-full sm:flex p-10">
        <div className="my-auto sm:w-[50%]">
          <h1 class="text-5xl text-wrap text-center mb-4">
            Experiencias{" "}
            <span class="span-title text-yellowLogo">Exclusivas</span> Fiestas y
            Aventuras
          </h1>

          <p className="text-justify">
            ¡Bienvenido a la sección de experiencias exclusivas de Costa Tour!
            Aquí encontrarás las fiestas más electrizantes en las mejores
            discotecas de Cartagena y actividades extremas que elevarán tu
            adrenalina al máximo. Prepárate para vivir momentos únicos que no
            encontrarás en ningún otro lugar.
          </p>
        </div>
        <div className="sm:w-[50%] grid grid-cols-2 border-collapse sm:-mr-6">
          <div className="relative h-72 w-[85%] ml-[35%] z-10">
            <Image
              src="/exclusive/sec-1-1.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad Flyboard"
            />
          </div>

          <div className="relative h-56 w-[70%] ml-[calc(20%-8px)] mt-8">
            <Image
              src="/exclusive/sec-1-2.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad discobar"
            />
          </div>

          <div className="relative h-44 w-[60%] -mt-2 ml-[20%]">
            <Image
              src="/exclusive/sec-1-3.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad discobar"
            />
          </div>

          <div className="relative h-48 w-[100%] -mt-10 -ml-[calc(20%+8px)]">
            <Image
              src="/exclusive/sec-1-4.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad jetsky"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse sm:flex-row gap-4 p-10 my-20">
        <div className="sm:w-[50%] grid grid-cols-2 border-collapse sm:-mr-6">
          <div className="relative h-72 w-[85%] ml-auto">
            <Image
              src="/exclusive/sec-2-1.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad jetsky"
            />
          </div>

          <div className="relative h-52 w-[85%] mr-auto -mt-12">
            <Image
              src="/exclusive/sec-2-2.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad gusano"
            />
          </div>

          <div className="relative h-72 w-[85%] ml-auto">
            <Image
              src="/exclusive/sec-2-3.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad wakeboard"
            />
          </div>

          <div className="relative h-96 w-[85%] mr-auto -mt-32">
            <Image
              src="/exclusive/sec-2-4.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad paracaidismo"
            />
          </div>
        </div>
        <div className="my-auto sm:w-[50%]">
          <h1 class="text-7xl font-bold text-wrap text-left mb-4">
            Actividades <span class="span-title text-customBlue">Extremas</span>
          </h1>

          <p className="text-justify mb-4">
            ¡Bienvenido a la sección de experiencias exclusivas de Costa Tour!
            Aquí encontrarás las fiestas más electrizantes en las mejores
            discotecas de Cartagena y actividades extremas que elevarán tu
            adrenalina al máximo. Prepárate para vivir momentos únicos que no
            encontrarás en ningún otro lugar.
          </p>
          <button
            onClick={() => handleUserExclusive("extreme")}
            className="flex gap-2 items-center w-fit rounded-full py-1 px-6 border border-customBlue hover:bg-blue-200"
          >
            Ver mas
            <PlayCircle className="text-customBlue" />
          </button>
        </div>
      </div>

      <div className="relative section-3-exclusive w-full sm:flex p-10">
        <div className="my-auto sm:w-[50%]">
          <h1 class="text-5xl text-wrap text-center mb-4">
            ¿Quieres disfrutar de las mejores fiestas y bares de Cartagena?
          </h1>

          <p className="text-justify mb-4">
            Déjanos llevarte a un nivel superior con una ubicación VIP
            exclusiva. Estarás rodeado del mejor ambiente, pero en un lugar
            privilegiado, con vistas increíbles y acceso preferencial a las
            fiestas más top de la ciudad. ¡Haz clic aquí y prepárate para vivir
            la noche como nunca antes!
          </p>

          <button
            onClick={() => handleUserExclusive("extreme")}
            className="flex gap-2 items-center w-fit rounded-full py-1 px-6 border border-yellowLogo hover:bg-orange-200"
          >
            Ver mas
            <PlayCircle className="text-yellowLogo" />
          </button>
        </div>
        <div className="sm:w-[50%] grid grid-cols-2 grid-rows-2 gap-2">
          <div className="relative h-80 w-[45%] col-span-2 ml-[calc(10%+36px)]">
            <Image
              src="/exclusive/sec-3-1.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad Flyboard"
            />
          </div>

          <div className="relative h-52 w-[80%] row-start-2 -mt-6 z-10 ml-[calc(10%+40px)]">
            <Image
              src="/exclusive/sec-3-2.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad discobar"
            />
          </div>

          <div className="relative h-80 w-[90%] row-start-2 -ml-[calc(10%)] -mt-32">
            <Image
              src="/exclusive/sec-1-2.jpg"
              fill
              className="object-cover rounded-3xl border-8 border-white"
              alt="Actividad discobar"
            />
          </div>
        </div>
      </div>
      {modalSuscription && (
        <ModalSuscripciones suscripciones={suscripcionesTurista} />
      )}
    </div>
  )
}

export default ExclusivePlansPage
