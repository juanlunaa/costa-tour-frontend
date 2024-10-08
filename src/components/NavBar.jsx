"use client"

import useUserStore from "@/hooks/useUserStore"
import Link from "next/link"
import ModeToggle from "./ui/darkmode/Dark"
import { cn } from "@/lib/utils"
export const NavBar = ({ pathname }) => {
  const { isLoggedIn } = useUserStore()

  const isDashboard =
    pathname.pathname.includes("/customer-profile") ||
    pathname.pathname.includes("/admin-profile") ||
    pathname.pathname.includes("/modify-plan") ||
    pathname.pathname.includes("/plans")

  const linkStyle = cn(
    "m-2 p-2 rounded-xl font-bold sm:base dark:text-white hover:bg-customOrange transition duration-300 ease-in-out",
    isDashboard ? "text-black" : "text-white"
  )

  return (
    <nav
      className={`absolute z-10 flex px-5 h-20 justify-between items-center w-full 
        ${
          isDashboard
            ? "bg-gradient-to-b from-customBlue to-transparent dark:from-black dark:bg-[#202020]"
            : "bg-gradient-to-b from-gray-800/90 to-transparent dark:bg-gradient-to-b"
        }`}
    >
      <div>
        <Link href="/">
          <span
            className={`antialiased font-bold md:text-xl sm:base dark:text-white ${isDashboard ? "text-black" : "text-white"}`}
          >
            Costa Tour
          </span>
        </Link>
      </div>

      <div className="hidden sm:flex sm:items-center">
        <Link className={linkStyle} href="/">
          Inicio
        </Link>
        <Link className={linkStyle} href="/category/activities">
          Categorias
        </Link>
        <Link className={linkStyle} href="#">
          Ayuda
        </Link>

        {isLoggedIn ? (
          <Link
            className={linkStyle}
            href="/dashboard/customer-profile/info-profile"
          >
            Mi cuenta
          </Link>
        ) : (
          <Link className={linkStyle} href="/auth/login">
            Iniciar Sesion
          </Link>
        )}
        <ModeToggle className={linkStyle} />
      </div>
    </nav>
  )
}
