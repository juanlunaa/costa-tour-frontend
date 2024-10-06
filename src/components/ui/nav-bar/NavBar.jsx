"use client"

import { useUserStore } from "@/context/user"
import Link from "next/link"

export const NavBar = ({ pathname }) => {

  const { isLoggedIn } = useUserStore((state) => state)

  const isDashboard = pathname.pathname.includes("/customer-profile") || pathname.pathname.includes("/admin-profile") || pathname.pathname.includes("/modify-plan")
  

  return (
    <nav
      className={`absolute z-10 flex px-5 h-20 justify-between items-center w-full
        ${isDashboard
          ? "bg-gradient-to-b from-customBlue to-transparent"
          : "bg-gradient-to-b from-gray-800/90 to-transparent"}`}
    >
      <div>
        <Link href="/">
          <span className={`antialiased font-bold ${isDashboard ? "text-black" : "text-white"}`}>Costa Tour</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`} href="/">
          Inicio
        </Link>
        <Link
          className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
          href="/category/activities"
        >
          Categorias
        </Link>
        <Link
          className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
          href="#"
        >
          Ayuda
        </Link>
          {
          isLoggedIn
            ? <Link
                className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
                href="/dashboard/customer-profile/info-profile"
              >
                Mi cuenta
              </Link>
            : <Link
                className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
                href="/auth/login"
              >
                Iniciar Sesion
              </Link>
          }
      </div>
    </nav>
  )
}
