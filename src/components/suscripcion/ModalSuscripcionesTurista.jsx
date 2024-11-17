"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { CardSuscripcion } from "./CardSuscripcion"

export const ModalSuscripciones = ({ suscripciones }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleCancel = () => {
    setIsOpen(false)
    router.push("/")
  }

  if (!isOpen) return null

  return (
    <div className="relative">
      {/* Fondo oscuro que cubre la pantalla completa */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-md z-[1116]" />

      {/* Caja simulada de modal */}
      <div className="fixed -inset-3 flex items-center justify-center z-[1116] py-20 overflow-y-auto ">
        <div className="rounded-lg shadow-xl max-w-[85%] mx-auto my-auto p-6 bg-white dark:bg-gray-800 dark:shadow-customBoxShadowDark">
          <h2 className="text-5xl font-bold text-center mt-3 text-black dark:text-white">
            Obtén la versión premium <br /> para seguir viendo
          </h2>
          <p className="text-base mt-8 text-center">
            ¡Eleva tu experiencia con nuestro acceso premium! Descubre <br />
            planes exclusivos, actividadesextremas y eventos privados que no
            encontrarás en ningún otro lugar.
            <br />
            Accede a las mejores ofertas y vive Cartagena al máximo. ¡Hazte
            premium ahora y disfruta de lo mejor!
          </p>

          <div className="grid grid-cols-1 gap-y-6 items-center justify-items-center mx-auto mt-10 max-w-lg sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {suscripciones.map((suscripcion) => (
              <CardSuscripcion key={suscripcion.id} {...suscripcion} />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              className="w-[75%] mt-5 block rounded-md bg-[#FF8E01] hover:bg-orange-400 focus-visible:outline-[#FF8E01] text-center text-sm font-semibold sm:mt-2 text-black dark:text-white shadow-customBoxShadow dark:shadow-customBoxShadowDark"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
