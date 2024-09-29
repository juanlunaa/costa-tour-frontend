"use client"

import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation';
import Link from "next/link"
import { textFont, titleFont } from "@/config/fonts"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { useUserData } from "@/hooks/useUserData";

export default function Login() {
  const { register, handleSubmit } = useForm()

  const { signInUser } = useUserData()

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const success = await signInUser(data)
    
    if (success) {
      router.push("/customer-profile/info-profile")
    }
  })

  return (
    <>
      <h1 className={`${titleFont.className} font-bold text-2xl text-center`}>INICIO DE SESIÓN</h1>
      <form
        className="flex flex-col items-center gap-4 w-full mt-4"
        onSubmit={onSubmit}
      >
        <div className="relative w-2/3">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            {...register("email", { required: true })}
          />
          <MdOutlineEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
        </div>

        <div className="relative w-2/3">
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-[#D1EEF2] p-3 rounded-lg pl-10 w-full placeholder:text-black/60"
            {...register("password", { required: true })}
          />
          <RiLockPasswordLine className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
        </div>
        <Link href="#" className={`${textFont.className} text-sm -mt-2`}>
          ¿Olvidó su contraseña?
        </Link>

        <button
          type="submit"
          className={`${textFont.className} bg-gradient-to-r from-customBlue to-customOrange rounded-lg px-4 py-2 text-white font-bold`}
        >
          Iniciar sesión
        </button>
      </form>

      <div className={`${textFont.className} text-sm mt-4 text-center`}>
        <span>Si aún no te has registrado, </span>
        <Link href="/auth/register" className="text-customOrange hover:underline">
          ¡únete aquí y comienza esta emocionante aventura!
        </Link>
      </div>
    </>
  )
}
