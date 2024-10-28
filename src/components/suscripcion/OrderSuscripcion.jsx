"use client"

import { getDateFormatted } from "@/logic/const"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import useUserStore from "@/hooks/useUserStore"
import axios from "axios"
import { BACKEND_SERVER } from "@/env"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Link from "next/link"

export const OrderSuscripcion = ({ id, descripcion, precio }) => {
  const router = useRouter()
  const [checkConditions, setCheckConditions] = useState(false)
  const { user } = useUserStore()

  const createOrder = async () => {
    try {
      const { data } = await axios.post(
        `${BACKEND_SERVER}/subscription/order?userId=${user.userId}&suscripcionId=${id}`,
        {
          successUrl: `${window.location.origin}/suscripcion/success`,
          failureUrl: `${window.location.origin}/suscripcion/failure`,
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
        Resumen de la Orden
      </h1>
      <div className="p-4 space-y-4 h-fit md:grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2 justify-end">
          <h2>Suscripción {descripcion}</h2>
          <div>
            <p>Fecha de inicio: {getDateFormatted(new Date())}</p>
            <p>
              Fecha de vencimiento:{" "}
              {getDateFormatted(new Date().setDate(new Date().getDate() + 30))}
            </p>
          </div>
          <hr />
          <div className="flex justify-between bg-customBlue/40 w-full p-2">
            <h2>Total</h2>
            <p>${precio}</p>
          </div>
        </div>

        <div className="space-y-2 content-end">
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
              Costa TourAcepto los Términos y Condiciones Autorizo a Costa Tour
              a procesar mis datos personales, de acuerdo con el Aviso de
              Privacidad de Costa Tour
            </Label>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <button
              disabled={!checkConditions}
              onClick={createOrder}
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
