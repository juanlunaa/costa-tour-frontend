"use client"

import { ErrorMessage } from "@/components"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BACKEND_SERVER } from "@/env"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
export default function ValitateCode() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await axios.post(
        `${BACKEND_SERVER}/code-plan/process?codigo=${data.code}&valorConsumido=${data.valor}&accion=USAR`
      )

      toast.success("Código validado correctamente")

      reset()
    } catch (error) {
      if (error.status === 404) {
        toast.info("Código no encontrado")
        return
      }

      if (error.status === 400) {
        toast.info("Código ya utilizado")
        return
      }

      toast.error("Error al validar el código :'c")
    }
  })

  return (
    <div className="w-[85%] mt-[2%] mx-auto">
      <h1 className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl mt-12">
        Validar código promocional
      </h1>
      <form onSubmit={onSubmit} className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="promo-code">Ingresa el código</Label>
          <Input
            id="promo-code"
            placeholder="Ejempo: ABCD1234"
            pattern="[A-Z0-9]{8}"
            title="El código debe tener 8 caracteres alfanuméricos en mayúscula"
            {...register("code", {
              required: {
                value: true,
                message: "El código es requerido",
              },
            })}
          />
          {errors.code && <ErrorMessage message={errors.code.message} />}
        </div>

        <div className="space-y-2">
          <Label htmlFor="promo-code">
            Ingresa el valor consumido por el turista
          </Label>
          <Input
            id="promo-code"
            type="number"
            min="1"
            placeholder="100.000"
            title="Valor de la cuenta del turista en el establecimiento"
            {...register("valor", {
              required: {
                value: true,
                message: "El valor consumido es requerido",
              },
            })}
          />
          {errors.valor && <ErrorMessage message={errors.valor.message} />}
        </div>
        <button
          type="submit"
          className="text-sm font-bold md:text-base sm:text-sm bg-blueProfile hover:bg-[#2e98a6] w-[50%] sm:w-[40%] mt-9 py-4"
        >
          Validar
        </button>
      </form>
    </div>
  )
}
