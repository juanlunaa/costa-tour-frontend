"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BACKEND_SERVER } from "@/env"
import useUserStore from "@/hooks/useUserStore"
import { formatSrcImage } from "@/lib/utils"
import { getDateFormatted } from "@/logic/const"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function OrderReservaPage({ searchParams }) {
  const router = useRouter()
  const [checkConditions, setCheckConditions] = useState(false)
  const { user } = useUserStore()

  const { planId, planName, planPrice, planThumbnail, fecha, hora, numPeople } =
    searchParams

  const createReserva = async () => {
    if (!user) {
      toast.error("Debes iniciar sesión para continuar")
      return
    }

    if (user?.tipoUsuario !== "TURISTA") {
      toast.error("Debes ser un turista para realizar esta accion")
      return
    }

    try {
      const { data } = await axios.post(
        `${BACKEND_SERVER}/booking/create?turistaDni=${user?.dni}&planExclusiveId=${planId}`,
        {
          fecha: new Date(fecha),
          hora,
          numeroPeople: numPeople,
          successUrl: `${window.location.origin}/reserva/success`,
          failureUrl: `${window.location.origin}/reserva/failure`,
        }
      )

      router.push(data.initPoint)
    } catch (error) {
      console.log(error)
      if (error?.status === 409) {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  return (
    <div className="p-10 md:ring-1 rounded-md md:max-w-3xl md:mx-auto">
      <h1 className="text-center text-4xl mb-12 py-4 rounded-full bg-gradient-to-r from-customBlue/15 to-customOrange/15">
        {planName}
      </h1>
      <div className="p-4 space-y-4 h-fit md:grid grid-cols-2 gap-4">
        <div className="relative flex flex-col space-y-2 justify-around">
          <div>
            <h2 className="text-center">Resumen de la Reserva</h2>
            <p>Fecha: {getDateFormatted(fecha)}</p>
            <p>Hora: {hora}</p>
            <p>Viajeros: {numPeople}</p>
          </div>
          <div className="absolute bottom-0 flex justify-between bg-customBlue/40 w-full p-2 h-[42px] items-center">
            <h2>Total</h2>
            <p>
              $
              {new Intl.NumberFormat("es-ES")
                .format(parseInt(planPrice) * numPeople)
                .replace(/,00/g, "")}
            </p>
          </div>
        </div>

        <div className="space-y-2 content-end">
          <div className="w-full aspect-video relative rounded-md">
            <Image
              src={formatSrcImage(planThumbnail)}
              alt={`Miniatura de ${planName}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex items-start gap-1">
            <Input
              type="checkbox"
              id="check-conditions"
              className="w-4 h-4"
              checked={checkConditions}
              onChange={(e) => setCheckConditions(e.target.checked)}
            />
            <Label htmlFor="check-conditions" className="italic">
              Acepto los Términos y Condiciones Autorizo a Costa Tour a procesar
              mis datos personales, de acuerdo con el Aviso de Privacidad de
              Costa Tour
            </Label>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <button
              disabled={!checkConditions}
              onClick={createReserva}
              className="bg-customBlue/40 rounded-md border border-customBlue hover:bg-customBlue/60 w-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              PAGAR
            </button>
            <button
              onClick={() => router.back()}
              className="bg-customBlue/40 rounded-md border border-customBlue hover:bg-customBlue/60 w-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
