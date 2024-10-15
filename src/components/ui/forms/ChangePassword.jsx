"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import clsx from "clsx"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { toast } from "sonner"
import useUserStore from "@/hooks/useUserStore"
import { updateCredentials } from "@/services/user"

export const ChangePassword = ({ buttonColor }) => {
  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx(
    "text-gray-600 block w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white"
  )
  const stylebtn = clsx(
    "w-[50%] sm:w-[40%] text-xs sm:text-sm md:text-base font-bold mt-5 py-4 dark:text-black"
  )

  const { user } = useUserStore()

  const formDefaultValues = {
    email: user.email,
    password: "",
    confirmPassword: "",
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm()

  useEffect(() => {
    reset(formDefaultValues)
  }, [user])

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    const { res, success } = await updateCredentials({
      userId: user.userId,
      data: { newPassword: data.password },
    })

    if (success) {
      toast.success(res)
    } else {
      toast.error(res)
    }

    reset(formDefaultValues)
  })

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 mb-10 mx-auto w-[85%] mt-[2%] dark:text-white"
    >
      <h1 className="font-bold text-2xl mt-12">Seguridad </h1>

      <div className="space-y-2">
        <Label htmlFor="email" className={styleLabels}>
          Correo electronico
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          disabled
          className={`${styleInputs} disabled:opacity-100`}
          {...register("email")}
        />
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
        {errors.password && (
          <span className="text-xs text-red-600 font-bold">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className={styleLabels}>
          Confirmar Contraseña{" "}
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
          <span className="text-xs text-red-600 font-bold">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button type="submit" className={`${stylebtn} ${buttonColor}`}>
        Guardar
      </button>
    </form>
  )
}
