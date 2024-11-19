"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { useState } from "react"
import { UserRoles } from "@/logic/auth"
import useUserStore from "@/hooks/useUserStore"
import { login } from "@/services/auth"
import { Input } from "@/components/ui/input"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [error, setError] = useState()

  const { setUser } = useUserStore()

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const { res, status } = await login(data)

    if (status === 200) {
      setError()

      setUser(res)

      const { tipoUsuario: role } = res

      if (role === UserRoles.TURISTA) {
        router.push("/dashboard/customer-profile/info-profile")
      } else if (role === UserRoles.ADMINISTRADOR) {
        router.push("/dashboard/admin-profile/info-profile")
      } else if (role === UserRoles.ALIADO) {
        router.push("/dashboard/ally-profile/info-profile")
      }
    }

    if (status === 401 || status === 404) {
      console.log(res)
      setError(res)
    }
  })

  return (
    <>
      <h1 className="font-bold text-2xl text-center mb-6">INICIO DE SESIÓN</h1>

      <form
        className="flex flex-col items-stretch gap-4 max-w-lg w-[90%] mt-4 mx-auto"
        onSubmit={onSubmit}
      >
        {error && (
          <div className="w-full bg-red-600 h-12 text-white font-bold flex items-center justify-center p-3 rounded-lg">
            <span>{error}</span>
          </div>
        )}
        <div>
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              className="bg-customBlueInputAuth dark:bg-background p-3 pl-10 rounded-lg w-full"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email es requerido",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email no valido",
                },
              })}
            />
            <MdOutlineEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>
          {errors.email && (
            <span className="text-xs text-red-600 font-bold">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Contraseña"
              className="bg-customBlueInputAuth dark:bg-background p-3 pl-10 rounded-lg w-full"
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
            <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>
          {errors.password && (
            <span className="text-xs text-red-600 font-bold">
              {errors.password.message}
            </span>
          )}
        </div>
        <Link href="#" className="text-sm -mt-2">
          ¿Olvidó su contraseña?
        </Link>

        <button
          type="submit"
          className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl mt-8 px-4 py-3 w-36 mx-auto transition-all hover:shadow-customBoxShadow hover:scale-105"
        >
          Iniciar sesión
        </button>
      </form>

      <div className="text-sm mt-4 text-center">
        <span>Si aún no te has registrado, </span>
        <Link
          href="/auth/register/turist"
          className="text-customOrange hover:underline"
        >
          ¡únete aquí y comienza esta emocionante aventura!
        </Link>
      </div>
    </>
  )
}
