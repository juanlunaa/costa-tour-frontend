"use client"

import { Label } from "../label"
import { Input } from "../input"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import debounce from "lodash.debounce"
import { checkEmailAvailability, registerAlly } from "@/services/auth"
import { ErrorMessage } from "@/components"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function FormCreateKeyPartner() {
  const [checkConditions, setCheckConditions] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const inputStyle = cn("bg-customBlueInputAuth dark:bg-background")

  const validateEmail = useCallback(
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

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const { res, status } = await registerAlly(data)

    if (status === 201) {
      toast.success("Cuenta creada correctamente, por favor inicie sesion")
      router.push("/auth/login")
    } else {
      toast.error("Ha ocurrido un error, por favor intenta mas tarde :'c")
    }
  })

  return (
    <div className="relative z-10 rounded-3xl bg-white dark:bg-customBlack shadow-customBoxShadow p-10 w-[90%] md:w-3/5 mb-12 space-y-8">
      <div>
        <h1 className="font-bold text-xl mb-2">
          Conviertete en Key Partner de CostaTour
        </h1>
        <p>
          Regístrate y empieza a compartir tus planes y servicios con miles de
          turistas. ¡Haz crecer tu negocio hoy mismo!
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-2">
          <div className="space-y-1">
            <Label htmlFor="nombre-empresa">Nombre de la empresa</Label>
            <Input
              id="nombre-empresa"
              className={inputStyle}
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

          <div className="space-y-1">
            <Label htmlFor="nit">NIT de la empresa</Label>
            <Input
              id="nit"
              className={inputStyle}
              {...register("nitAliado", {
                required: {
                  value: true,
                  message: "NIT es requerido",
                },
              })}
            />

            {errors.nit && <ErrorMessage message={errors.nit.message} />}
          </div>

          <div className="space-y-1">
            <Label htmlFor="direccion">Dirección de la empresa</Label>
            <Input
              id="direccion"
              className={inputStyle}
              {...register("direccion", {
                required: {
                  value: true,
                  message: "Dirección es requerida",
                },
              })}
            />
            {errors.direccion && (
              <ErrorMessage message={errors.direccion.message} />
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="telefono">Télefono</Label>
            <Input
              type="tel"
              id="telefono"
              className={inputStyle}
              {...register("telefono", {
                required: {
                  value: true,
                  message: "Télefono es requerido",
                },
              })}
            />

            {errors.telefono && (
              <ErrorMessage message={errors.telefono.message} />
            )}
          </div>

          <div className="space-y-1 md:col-span-2">
            <Label htmlFor="email"> Correo Electrónico</Label>
            <Input
              type="email"
              id="email"
              className={inputStyle}
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
                    validateEmail(value, resolve)
                  }),
              })}
            />

            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>

          <div className="space-y-1 md:col-span-2 md:row-start-4">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              id="password"
              className={inputStyle}
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
              <ErrorMessage message={errors.password.message} />
            )}
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl mb-2">Términos y condiciones</h1>

          <div className="flex gap-1 items-center">
            <Input
              type="checkbox"
              id="check-conditions"
              className="w-4 h-4"
              checked={checkConditions}
              onChange={(e) => setCheckConditions(e.target.checked)}
            />
            <Label htmlFor="check-conditions" className="text-sm italic">
              He leído y acepto los{" "}
              <Link href="#" className="text-customOrange hover:underline">
                términos y condiciones
              </Link>{" "}
              del Key Partner y la política de privacidad.
            </Label>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={!checkConditions}
            className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl px-4 py-3 w-44 mx-auto disabled:opacity-70 transition-all hover:shadow-customBoxShadow hover:scale-105"
          >
            Crear Cuenta
          </button>
        </div>
      </form>
    </div>
  )
}
