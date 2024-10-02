"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMdArrowBack } from "react-icons/io"

export default function AuthLayout({ children }) {
  const pathname = usePathname()

  // true (esta en login) la imagen va a la izquierda, false (esta en register) la imagen va a la derecha
  let orientation = pathname === "/auth/login"

  // Si esta en el registro de intereses los estilos del layout deben cambiar para que la page se vea como el mockup
  const isInterestsPage = pathname === "/auth/register/interests"

  // Si esta en el registro de intereses la orientacion ser undefined porque la imagen va a cubrir todo el fondo
  if (isInterestsPage) {
    orientation = undefined
  }

  return (
    <main className={clsx(
      "relative w-full",
      orientation !== undefined && "sm:flex sm:min-h-screen", // <- Estilos para cuando se este en /login o /register/turist
      orientation ? "sm:flex-row" : "sm:flex-row-reverse" //  <- Estilos para cambiar la orientacion de la imagen
    )}>

      {/* Si esta en el registro de intereses el boton de volver al incio no debe mostrarse */}
      {!isInterestsPage && (
        <Link href="/" className="absolute top-2 left-2 z-10">
          <IoMdArrowBack className="text-3xl sm:text-5xl" />
        </Link>
      )}
      
      <div className={clsx(
        "relative",
        orientation !== undefined && "h-40 w-full sm:w-1/2 sm:min-h-screen", // <- Estilos para cuando se este en /login o /register/turist
        isInterestsPage && "h-dvh w-full" // <- Estilos para cuando se este en /register/insterests
      )}>

        <Image src="/auth-image.webp" fill alt="Cartagena" className="object-cover inset-0"/>

        {/* Si esta en el registro de intereses se le va a sobreponer este div a la imagen para que
        se vea oscura y se asemeje al mockup */}
        {isInterestsPage && <div className="absolute inset-0 bg-black opacity-60"></div>}

      </div>

      <div className={clsx(
        orientation !== undefined && "flex flex-col items-center justify-center sm:w-1/2 pt-12 sm:pt-0", // <- Estilos para cuando se este en /login o /register/turist
        isInterestsPage && "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[45px] w-[90%] h-[80%] max-w-5xl" // <- Estilos para cuando se este en /register/insterests
      )}>

        {children}

      </div>

    </main>
  )
}
