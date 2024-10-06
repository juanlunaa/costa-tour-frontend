"use client"

import { useRegisterFormData } from "@/context/register"
import useLocationData from "@/hooks/useLocationData"
import { checkDniAvailability, checkEmailAvailability } from "@/services/auth"
import debounce from "lodash.debounce"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineIdcard } from "react-icons/ai"
import { CiCalendarDate } from "react-icons/ci"
import { FaRegUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { TiWorld } from "react-icons/ti"

export default function Register() {
  const { locationData, locationSelect, handleChange } = useLocationData()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pais: locationSelect.pais,
      estado: locationSelect.estado,
    },
  })

  const { updateFormData } = useRegisterFormData()

  const router = useRouter()

  const onSubmit = handleSubmit((data) => {
    updateFormData(data)
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
              <input
                placeholder="Nombre"
                className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Nombre es requerido",
                  },
                })}
              />
              <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.nombre && (
              <span className="text-xs text-red-600 font-bold">
                {errors.nombre.message}
              </span>
            )}
          </div>

          <div>
            <input
              placeholder="Apellido"
              className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
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

          <div>
            <div className="relative">
              <input
                placeholder="N° Identificación"
                className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
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
            {errors.dni && (
              <span className="text-xs text-red-600 font-bold">
                {errors.dni.message}
              </span>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type="date"
                placeholder="Fecha Nacimiento"
                className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
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
              <span className="text-xs text-red-600 font-bold">
                {errors.fechaNacimiento.message}
              </span>
            )}
          </div>

          <div>
            <div className="relative col-span-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
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
            {errors.email && (
              <span className="text-xs text-red-600 font-bold">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <div className="relative col-span-2">
              <input
                type="password"
                placeholder="Contraseña"
                className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
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

          <div className="col-span-2">
            <div className="relative">
              <select
                name="pais"
                className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
                {...register("pais", {
                  required: {
                    value: true,
                    message: "Pais es requerido",
                  },
                  onChange: (event) => {
                    handleChange(event)
                  },
                })}
              >
                <option value="">Selecciona un pais</option>
                {locationData.paises.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              <TiWorld className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </div>
            {errors.pais && (
              <span className="text-xs text-red-600 font-bold">
                {errors.pais.message}
              </span>
            )}
          </div>

          <div>
            <select
              name="estado"
              className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
              {...register("estado", {
                required: {
                  value: true,
                  message: "Estado es requerido",
                },
                onChange: (event) => {
                  handleChange(event)
                },
              })}
            >
              <option value="">Selecciona un estado</option>
              {locationData.estados.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
            {errors.estado && (
              <span className="text-xs text-red-600 font-bold">
                {errors.estado.message}
              </span>
            )}
          </div>

          <div>
            <select
              className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
              {...register("idCiudad", {
                required: {
                  value: true,
                  message: "Ciudad es requerida",
                },
              })}
            >
              <option value="" default>
                Selecciona una ciudad
              </option>
              {locationData.ciudades.map((c) => (
                <option value={c.id} key={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            {errors.idCiudad && (
              <span className="text-xs text-red-600 font-bold">
                {errors.idCiudad.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl px-4 py-3 w-36 mx-auto"
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
