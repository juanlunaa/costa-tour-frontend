"use client"

import { titleFont, textFont } from "@/config/fonts"
import useLocationData from "@/hooks/useLocationData"
import { registerTurist } from "@/services/auth"
import Link from "next/link"
import { useForm } from "react-hook-form"
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
  } = useForm()

  const { locationData, locationSelect, handleChange } = useLocationData()

  const onSubmit = handleSubmit(async (data) => {
    const newData = { ...data, intereses: [1, 2, 3] }
    
    const { res, status } = await registerTurist(newData)

    if (status === 200) {
      router.push("/dashboard")
    }
  })

  return (
    <>
      <h1 className={`${titleFont.className} font-bold text-2xl text-center`}>CREAR CUENTA</h1>

      <form onSubmit={onSubmit} className="flex flex-col items-center gap-4 w-[90%] mt-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative">
            <input
              placeholder="Nombre"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
              {...register("nombre", { required: true })}
            />

            <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <input
            placeholder="Apellido"
            className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
            {...register("apellido", { required: true })}
          />

          <div className="relative">
            <input
              placeholder="N° Identificación"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
              {...register("dni", { required: true })}
            />

            <AiOutlineIdcard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative">
            <input
              type="date"
              placeholder="Fecha Nacimiento"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
              {...register("fechaNacimiento", { required: true })}
            />

            <CiCalendarDate className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative col-span-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
              {...register("email", { required: true })}
            />

            <MdOutlineEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative col-span-2">
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
              {...register("password", { required: true })}
            />

            <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative col-span-2">
            <select
              name="pais"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
              value={locationSelect.pais}
              onChange={handleChange}
            >
              <option value="0">Selecciona un pais</option>
              {locationData.paises.map((p) => (
                <option value={p.id} key={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <TiWorld className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <select
            name="estado"
            className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
            value={locationSelect.estado}
            onChange={handleChange}
          >
            <option value="0">Selecciona un estado</option>
            {locationData.estados.map((e) => (
              <option value={e.id} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          <select
            className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
            {...register("idCiudad", { required: true })}
          >
            <option value="0" default>
              Selecciona una ciudad
            </option>
            {locationData.ciudades.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`${textFont.className} bg-gradient-to-r from-customBlue to-customOrange rounded-lg px-4 py-2 text-white font-bold`}
        >
          Registrarse
        </button>
      </form>

      <div className={`${textFont.className} text-sm mt-4`}>
        <span>Si ya tienes cuenta, </span>
        <Link href="/auth/login" className="text-customOrange hover:underline">
          ¡inicia sesión aquí!
        </Link>
      </div>
    </>
  )
}
