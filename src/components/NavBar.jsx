"use client"

import useUserStore from "@/hooks/useUserStore"
import Link from "next/link"
import ModeToggle from "./ui/darkmode/Dark"
import { cn } from "@/lib/utils"
import Image from "next/image"
export const NavBar = ({ pathname }) => {
  const { isLoggedIn } = useUserStore()

  const isDashboard =
    pathname.pathname.includes("/customer-profile") ||
    pathname.pathname.includes("/admin-profile") ||
    pathname.pathname.includes("/modify-plan") ||
    pathname.pathname.includes("/plans")

  const linkStyle = cn(
    "m-2 p-2 rounded-xl font-bold sm:base dark:text-white hover:bg-yellowLogo transition duration-300 ease-in-out text-blueLogo text-black dark:text-white dark:hover:text-black"
  )

  return (
    <nav className="fixed  z-50 flex px-5 h-20 justify-between items-center max-w-7xl w-[90%] mx-auto bg-white dark:bg-customBlack">
      <div>
        <Link href="/">
          <span className="antialiased font-bold md:text-xl sm:base dark:text-white text-black">
            Costa Tour
          </span>
          {/* <Image src="/imagotipo-costa-tour.png" height={60} width={163} /> */}
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
