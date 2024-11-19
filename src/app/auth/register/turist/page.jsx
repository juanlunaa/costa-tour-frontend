"use client"

import { useCallback } from "react"
import { useRouter } from "next/navigation"
import useLocationData from "@/hooks/useLocationData"
import { checkDniAvailability, checkEmailAvailability } from "@/services/auth"
import debounce from "lodash.debounce"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { ErrorMessage, RHFComboboxLocation } from "@/components"
import { useFormContext } from "react-hook-form"
import { AiOutlineIdcard } from "react-icons/ai"
import { CiCalendarDate } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { TiWorld } from "react-icons/ti"

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext()

  const { locationData } = useLocationData({
    inputPais: watch("pais"),
    inputEstado: watch("estado"),
  })

  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    router.push("/auth/register/interests")
  })

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

  const validateDni = useCallback(
    debounce(async (value, resolve) => {
      const isAvailable = await checkDniAvailability(value)
      if (!isAvailable) {
        resolve("Este DNI ya está en uso")
      } else {
        resolve(true)
      }
    }, 500),
    []
  )

  return (
    <>
      <h1 className="font-bold text-2xl text-center">CREAR CUENTA</h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-stretch gap-4 max-w-lg w-[90%] mt-4 mx-auto"
      >
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="relative">
              <Input
                placeholder="Nombre"
                className="bg-customBlueInputAuth dark:bg-background p-3 pl-10 rounded-lg w-full"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                })}
              />
              <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.nombre && <ErrorMessage message={errors.nombre.message} />}
          </div>

          <div>
            <Input
              placeholder="Apellido"
              className="bg-customBlueInputAuth dark:bg-background p-3 rounded-lg w-full"
              {...register("apellido", {
                required: {
                  value: true,
                  message: "Apellido es requerido",
                },
              })}
            />
            {errors.apellido && (
              <ErrorMessage message={errors.apellido.message} />
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                placeholder="N° Identificación"
                className="bg-customBlueInputAuth dark:bg-background p-3 pl-10 rounded-lg w-full"
                {...register("dni", {
                  required: {
                    value: true,
                    message: "DNI es requerido",
                  },
                  validate: (value) =>
                    new Promise((resolve) => {
                      validateDni(value, resolve)
                    }),
                })}
              />

              <AiOutlineIdcard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.dni && <ErrorMessage message={errors.dni.message} />}
          </div>

          <div>
            <div className="relative">
              <Input
                type="date"
                placeholder="Fecha Nacimiento"
                className="bg-customBlueInputAuth dark:bg-background p-3 pl-10 rounded-lg w-full"
                {...register("fechaNacimiento", {
                  required: {
                    value: true,
                    message: "Fecha de nacimiento es requerida",
                  },
                })}
              />

              <CiCalendarDate className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.fechaNacimiento && (
              <ErrorMessage message={errors.fechaNacimiento.message} />
            )}
          </div>

          <div>
            <div className="relative col-span-2">
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
                  validate: (value) =>
                    new Promise((resolve) => {
                      validateUsername(value, resolve)
                    }),
                })}
              />

              <MdOutlineEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>

          <div>
            <div className="relative col-span-2">
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
              <ErrorMessage message={errors.password.message} />
            )}
          </div>

          <div className="col-span-2">
            <div className="relative">
              <RHFComboboxLocation
                name="pais"
                options={locationData.paises}
                placeholderSelect="Selecciona un pais"
                notFoundMessage="No se encontraron paises"
                classname={"pl-10 bg-customBlueInputAuth dark:bg-background"}
              />

              <TiWorld className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.pais && <ErrorMessage message={errors.pais.message} />}
          </div>

          <div>
            <RHFComboboxLocation
              name="estado"
              options={locationData.estados}
              placeholderSelect="Selecciona un estado/provincia"
              notFoundMessage={
                locationData.estados.length === 0
                  ? "Selecciona un pais"
                  : "No se encontraron estados"
              }
              classname={"bg-customBlueInputAuth dark:bg-background"}
            />
            {errors.estado && <ErrorMessage message={errors.estado.message} />}
          </div>

          <div>
            <RHFComboboxLocation
              name="ciudad"
              options={locationData.ciudades}
              placeholderSelect="Selecciona una ciudad"
              notFoundMessage={
                locationData.ciudades.length === 0
                  ? "Selecciona un estado"
                  : "No se encontraron ciudades"
              }
              classname={"bg-customBlueInputAuth dark:bg-background"}
            />
            {errors.ciudad && <ErrorMessage message={errors.ciudad.message} />}
          </div>
        </div>

        <button
          type="submit"
          className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl px-4 py-3 w-36 mx-auto transition-all hover:shadow-customBoxShadow hover:scale-105"
        >
          Registrarse
        </button>
      </form>

      <div className="text-sm mt-4">
        <span>Si ya tienes cuenta, </span>
        <Link href="/auth/login" className="text-customOrange hover:underline">
          ¡inicia sesión aquí!
        </Link>
      </div>
    </>
  )
}
