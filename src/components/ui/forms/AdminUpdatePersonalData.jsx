"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserStore } from "@/context/user"
import clsx from "clsx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const AdminUpdatePersonalData = () => {
  const { user, updateProfileAdmin } = useUserStore((state) => state)

  const { userId, nombre, apellido } = user

  const formDefaultValues = { nombre, apellido }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: formDefaultValues })

  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("text-gray-600 block w-full bg-[#F4F4F5]")

  useEffect(() => {
    reset(formDefaultValues)
  }, [user])

  const onSubmit = handleSubmit(async (data) => {
    if (JSON.stringify(data) === JSON.stringify(formDefaultValues)) {
      toast.info("No ha ingresado nueva informacion")
      return
    }

    const success = await updateProfileAdmin({ userId, data })

    if (success) {
      toast.success("Su informacion ha sido actualizada correctamente")
    } else {
      toast.error(
        "Ha ocurrido un error al momento de actualizar si informacion :'("
      )
    }

    console.log(data)
  })

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 mx-auto w-[85%] mt-[2%]"
    >
      <h1 className="font-bold mt-12 text-sm sm:text-base md:text-xl lg:text-2xl">
        Información Personal
      </h1>

      <div className="space-y-2">
        <Label htmlFor="nombre" className={styleLabels}>
          Nombre
        </Label>
        <Input
          id="nombre"
          name="nombre"
          className={styleInputs}
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
          })}
        />
        {errors.nombre && (
          <span className="text-xs text-red-600 font-bold">
            {errors.nombre.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="apellido" className={styleLabels}>
          Apellido
        </Label>
        <Input
          type="text"
          id="apellido"
          name="apellido"
          className={styleInputs}
          {...register("apellido", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
          })}
        />
        {errors.apellido && (
          <span className="text-xs text-red-600 font-bold">
            {errors.apellido.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`${styleLabels} bg-yellowProfile w-[50%] sm:w-[40%] mt-5 py-4`}
      >
        Guardar
      </button>
    </form>
  )
}
