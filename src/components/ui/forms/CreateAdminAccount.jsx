"use client"

import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { checkEmailAvailability, registerAdmin } from "@/services/auth"
import { ErrorMessage } from "@/components"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import clsx from "clsx"
import { toast } from "sonner"
import debounce from "lodash.debounce"

export const CreateAdminAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()

  const validateUsername = useCallback(
    debounce(async (value, resolve) => {
      const isAvailable = await checkEmailAvailability(value)
      if (!isAvailable) {
        resolve("Este email ya está en uso")
      } else {
        resolve(true)
      }
    }, 500),
    []
  )

  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("text-gray-600 block w-full bg-[#F4F4F5]")

  const onSubmit = handleSubmit(async (data) => {
    const { confirmPassword, ...adminCreate } = data

    console.log(adminCreate)
    const { status } = await registerAdmin(adminCreate)

    if (status === 201) {
      toast.success("Cuenta creada correctamente")
      reset()
    } else {
      toast.error("Ha ocurrido un error al crear la cuenta :'(")
    }
  })

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 w-[85%] py-[4%] mx-auto"
    >
      <div className="space-y-2">
        <Label htmlFor="nombre" className={styleLabels}>
          Nombre
        </Label>
        <Input
          type="text"
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
        {errors.nombre && <ErrorMessage message={errors.nombre.message} />}
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
        {errors.apellido && <ErrorMessage message={errors.apellido.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={styleLabels}>
          Correo electronico
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          className={styleInputs}
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email no valido",
            },
            validate: (value) =>
              new Promise((resolve) => {
                validateUsername(value, resolve)
              }),
          })}
        />
        {errors.email && <ErrorMessage message={errors.email.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className={styleLabels}>
          Contraseña
        </Label>
        <Input
          type="password"
          id="password"
          name="password"
          className={styleInputs}
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Numero minimo de caracteres es 6",
            },
          })}
        />
        {errors.password && <ErrorMessage message={errors.password.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className={styleLabels}>
          Confirmar Contraseña
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className={styleInputs}
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmacion de contraseña requerida",
            },
            minLength: {
              value: 6,
              message: "Numero minimo de caracteres es 6",
            },
            validate: (value) => {
              const password = watch("password")

              if (password === value) return true

              return "La contraseñas no coinciden"
            },
          })}
        />
        {errors.confirmPassword && (
          <ErrorMessage message={errors.confirmPassword.message} />
        )}
      </div>

      <button
        type="submit"
        className={`${styleLabels} bg-yellowProfile w-[50%] sm:w-[40%] mt-5 py-4`}
      >
        Crear Cuenta
      </button>
    </form>
  )
}
