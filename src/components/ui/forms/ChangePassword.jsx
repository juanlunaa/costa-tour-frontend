"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUserStore } from '@/context/user'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const ChangePassword = ({ buttonColor }) => {
  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("text-gray-600 block w-full bg-[#F4F4F5]")

  const { user, changePassword } = useUserStore((state) => state)

  const formDefaultValues = {
    email: user.email,
    password: "",
    confirmPassword: ""
  }

  const { 
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm()

  useEffect(() => {
    reset(formDefaultValues)
  }, [user])

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)

    const { message, success } = await changePassword({ newPassword: data.password })

    if (success) {
      toast.success(message)
    } else {
      toast.error(message)
    }

    reset(formDefaultValues)
  })


  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 mb-10 mx-auto w-[85%] mt-[2%]">
      <h1 className="font-bold text-2xl mt-12">Seguridad </h1>
      
      <div className="space-y-2">
        <Label htmlFor="email" className={styleLabels}>Correo electronico</Label>
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
        <Label htmlFor="password" className={styleLabels}>Contraseña</Label>
        <Input
          type="password"
          id="password"
          name="password"
          className={styleInputs}
          {...register("password", { 
            required: {
              value: true,
              message: "Contraseña es requerida"
            },
            minLength: {
              value: 6,
              message: "Numero minimo de caracteres es 6"
            }
          })}
        />
        { errors.password && <span className="text-xs text-red-600 font-bold">{errors.password.message}</span> }
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className={styleLabels}>Confirmar Contraseña </Label>
        <Input
          type='password'
          id="confirmPassword"
          name="confirmPassword"
          className={styleInputs}
          {...register("confirmPassword", { 
            required: {
              value: true,
              message: "Confirmacion de contraseña requerida"
            },
            minLength: {
              value: 6,
              message: "Numero minimo de caracteres es 6"
            },
            validate: (value) => {
              const password = watch("password")

              if (password === value) return true
              
              return "La contraseñas no coinciden"
            }
          })}
        />
        { errors.confirmPassword && <span className="text-xs text-red-600 font-bold">{errors.confirmPassword.message}</span> }
      </div>

      <button
        type="submit"
        className={`${styleLabels} ${buttonColor} w-[50%] sm:w-[40%] mt-5 py-4`}
      >
        Guardar
      </button>
  </form>
  )
}