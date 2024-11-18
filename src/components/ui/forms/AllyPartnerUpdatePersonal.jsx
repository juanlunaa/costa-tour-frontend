"use client"

import clsx from "clsx"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useUserStore from "@/hooks/useUserStore"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@/components"

export const AllyUpdatePersonalData = () => {
  const { user, setUser } = useUserStore()

  const { userId, nombreEmpresa, nitAliado, direccion, telefono } = user

  const formDefaultValues = {
    nombreEmpresa,
    nit: nitAliado,
    direccion,
    telefono,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: formDefaultValues })

  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("block w-full")

  return (
    <form className="grid grid-cols-1 gap-4 w-[85%] mt-[2%] mx-auto">
      <h1 className="font-bold mt-12 text-sm sm:text-base md:text-xl lg:text-2xl">
        Información Personal
      </h1>

      <div className="space-y-2">
        <Label htmlFor="nombreEmpresa" className={styleLabels}>
          Nombre de la Empresa
        </Label>
        <Input
          id="nombreEmpresa"
          name="nombreEmpresa"
          className={styleInputs}
          {...register("nombreEmpresa", {
            required: {
              value: true,
              message: "Nombre de la empresa es requerido",
            },
          })}
        />
        {errors.nombreEmpresa && (
          <ErrorMessage message={errors.nombreEmpresa.message} />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="nit" className={styleLabels}>
          Nit de la empresa
        </Label>
        <Input
          id="nit"
          name="nit"
          disabled
          className={`${styleInputs} disabled:opacity-60`}
          {...register("nit")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="direccion" className={styleLabels}>
          Dirección
        </Label>
        <Input
          type="text"
          id="direccion"
          name="direccion"
          className={styleInputs}
          {...register("direccion", {
            required: {
              value: true,
              message: "Direccion es requerida",
            },
          })}
        />
        {errors.direccion && (
          <ErrorMessage message={errors.apellido.direccion} />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="telefono" className={styleLabels}>
          Telefono
        </Label>
        <Input
          type="tel"
          id="telefono"
          name="telefono"
          className={styleInputs}
          {...register("telefono", {
            required: {
              value: true,
              message: "Telefono es requerido",
            },
          })}
        />
        {errors.telefono && <ErrorMessage message={errors.telefono.message} />}
      </div>

      <button
        // type="submit"
        onClick={(e) => e.preventDefault()}
        className={`${styleLabels} bg-blueProfile hover:bg-[#2e98a6] w-[50%] sm:w-[40%] mt-5 py-4 dark:text-black`}
      >
        Guardar
      </button>
    </form>
  )
}
