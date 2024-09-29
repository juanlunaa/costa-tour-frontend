"use client"

import { textFont, titleFont } from "@/config/fonts"
import { useUserData } from "@/hooks/useUserData"
import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"

export const NavBar = ({ pathname }) => {

  const { isLoggedIn } = useUserData()

  const navbarColors = () => {
    if (pathname.pathname.includes("/customer-profile")) return { bg: "customBlue", txt: "black" }

    return { bg: "gray-800/90", txt: "white" }
  }

  const { bg, txt } = navbarColors()

  return (
    <nav className={`absolute z-10 flex px-5 h-20 justify-between items-center w-full bg-gradient-to-b from-${bg} to-transparent`}>
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold text-${txt}`}>Costa Tour</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link className={`${textFont.className} m-2 p-2 rounded-xl text-${txt} font-bold hover:bg-customOrange`} href="/">
          Inicio
        </Link>
        <Link
          className={`${textFont.className} m-2 p-2 rounded-xl text-${txt} font-bold hover:bg-customOrange`}
          href="/category/activities"
        >
          Categorias
        </Link>
        <Link
          className={`${textFont.className} m-2 p-2 rounded-xl text-${txt} font-bold hover:bg-customOrange`}
          href="#"
        >
          Ayuda
        </Link>
        <Link
          className={`${textFont.className} m-2 p-2 rounded-xl text-${txt} font-bold hover:bg-customOrange`}
          href="/auth/login"
        >
          {isLoggedIn ? "Mi cuenta" : "Iniciar Sesion"}
        </Link>
      </div>
    </nav>
  )
}
