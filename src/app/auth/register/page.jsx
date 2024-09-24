import Link from "next/link"
import { titleFont, textFont } from "@/config/fonts"
import { FaRegUser } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { AiOutlineIdcard } from "react-icons/ai"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { CiCalendarDate } from "react-icons/ci"
import { TiWorld } from "react-icons/ti"

export default function Register() {
  return (
    <>
      <h1 className={`${titleFont.className} font-bold text-2xl text-center`}>CREAR CUENTA</h1>

      <form action="" className="flex flex-col items-center gap-4 w-[90%] mt-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative">
            <input
              placeholder="Nombre"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <FaRegUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <input placeholder="Apellido" className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60" />

          <div className="relative">
            <input
              type="email"
              placeholder="Tipo Documento"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <AiOutlineIdcard className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <input
            placeholder="N° Identificación"
            className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
          />

          <div className="relative col-span-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <MdOutlineEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative col-span-2">
            <input
              type="password"
              placeholder="Contraseña"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Telefono"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <IoPhonePortraitOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Fecha Nacimiento"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <CiCalendarDate className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <div className="relative col-span-2">
            <input
              type="email"
              placeholder="Pais"
              className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            />

            <TiWorld className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
          </div>

          <input
            placeholder="Estado/Departamento"
            className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60"
          />

          <input placeholder="Ciudad" className="bg-[#D1EEF2] p-3 rounded-lg w-full placeholder:text-black/60" />
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
