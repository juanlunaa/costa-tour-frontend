"use client"

import { useUserStore } from "@/context/user"
import Link from "next/link"
import ModeToggle from "../darkmode/Dark"
export const NavBar = ({ pathname }) => {
  const { isLoggedIn } = useUserStore((state) => state)

  const isDashboard = pathname.pathname.includes("/customer-profile") || pathname.pathname.includes("/admin-profile")
    || pathname.pathname.includes("/modify-plan") || pathname.pathname.includes("/info-plan")


<<<<<<< HEAD

  return (
    <nav
      className={`absolute z-10 flex px-5 h-20 justify-between items-center w-full
        ${isDashboard
          ? "bg-gradient-to-b from-customBlue to-transparent dark:from-black dark:bg-[#202020]"
          : "backdrop-blur-xl from-gray-800/90 to-transparent dark:bg-gradient-to-b"}`}
    >
      <div>
        <Link href="/">
          <span className={`antialiased font-bold md:text-xl sm:base dark:text-white ${isDashboard ? "text-black" : "text-black"}`}>Costa Tour</span>
        </Link>
      </div>

      <div className="hidden ml-auto sm:block">
        <Link className={`m-2 p-2 rounded-xl font-bold md:text-xl sm:base dark:text-white hover:bg-customOrange ${isDashboard ? "text-black" : "text-black"}`} href="/">
=======
  return (
    <nav
      className={`absolute z-10 flex px-5 h-20 justify-between items-center w-full
        ${
          isDashboard
            ? "bg-gradient-to-b from-customBlue to-transparent"
            : "bg-gradient-to-b from-gray-800/90 to-transparent"
        }`}
    >
      <div>
        <Link href="/">
          <span
            className={`antialiased font-bold ${isDashboard ? "text-black" : "text-white"}`}
          >
            Costa Tour
          </span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
          href="/"
        >
>>>>>>> 80fd81b408f67db8687886d5039eaf9ebdecf204
          Inicio
        </Link>
        <Link
          className={`m-2 p-2 rounded-xl font-bold md:text-xl sm:base dark:text-white hover:bg-customOrange ${isDashboard ? "text-black" : "text-black"}`}
          href="/category/activities"
        >
          Categorias
        </Link>
        <Link
          className={`m-2 p-2 rounded-xl font-bold md:text-xl sm:base dark:text-white hover:bg-customOrange ${isDashboard ? "text-black" : "text-black"}`}
          href="#"
        >
          Ayuda
        </Link>
<<<<<<< HEAD
        {
          isLoggedIn
            ? <Link
              className={`m-2 p-2 rounded-xl font-bold md:text-xl sm:base dark:text-white hover:bg-customOrange ${isDashboard ? "text-black" : "text-black"}`}
              href="/dashboard/customer-profile/info-profile"
            >
              Mi cuenta
            </Link>
            : <Link
              className={`m-2 p-2 rounded-xl font-bold md:text-xl sm:base dark:text-white hover:bg-customOrange ${isDashboard ? "text-black" : "text-black"}`}
              href="/auth/login"
            >
              Iniciar Sesion
            </Link>
        }
      </div>
      <div>
        <ModeToggle />
=======
        {isLoggedIn ? (
          <Link
            className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
            href="/dashboard/customer-profile/info-profile"
          >
            Mi cuenta
          </Link>
        ) : (
          <Link
            className={`m-2 p-2 rounded-xl font-bold hover:bg-customOrange ${isDashboard ? "text-black" : "text-white"}`}
            href="/auth/login"
          >
            Iniciar Sesion
          </Link>
        )}
>>>>>>> 80fd81b408f67db8687886d5039eaf9ebdecf204
      </div>
    </nav>
  )
}
