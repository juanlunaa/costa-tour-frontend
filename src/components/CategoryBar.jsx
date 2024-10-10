"use client"

import useUserStore from "@/hooks/useUserStore"
import { UserRoles } from "@/logic/auth"
import Link from "next/link"

const CategoryBar = ({ pathname }) => {
  const { isLoggedIn, user } = useUserStore()
  const role = user?.tipoUsuario

  const isLinkActive = (href) => {
    return pathname.pathname.includes(href)
  }

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 sm:-mt-12 -mt-8 
    bg-white rounded-full shadow-customBlueShadow
      w-[75%] p-4 flex justify-center gap-6 items-center sm:w-[70%] md:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8
      dark:text-white dark:bg-gray-800"
    >
      <Link
        href="/category/activities"
        className={`lg:text-2xl md:text-xl sm:text-base text-xs font-volkhov
          ${
            isLinkActive("/activities")
              ? "border-b-4 border-[#363636] dark:border-white dark:hover:border-white"
              : "hover:border-b-4 border-[#363636] dark:hover:border-white"
          }`}
      >
        Actividades
      </Link>
      {isLoggedIn && role === UserRoles.TURISTA ? (
        <Link
          href="/category/recomendations"
          className={`lg:text-2xl md:text-xl sm:text-base text-xs font-volkhov
              ${
                isLinkActive("/recomendations")
                  ? "border-b-4 border-[#363636] dark:border-white dark:hover:border-white"
                  : "hover:border-b-4 border-[#363636] dark:hover:border-white"
              }`}
        >
          Recomendaciones
        </Link>
      ) : (
        <></>
      )}
      <Link
        href="/category/extreme"
        className={`lg:text-2xl md:text-xl sm:text-base text-xs font-volkhov
          ${
            isLinkActive("/extreme")
              ? "border-b-4 border-[#363636] dark:border-white dark:hover:border-white"
              : "hover:border-b-4 border-[#363636] dark:hover:border-white"
          }`}
      >
        Planes Extremos
      </Link>
    </div>
  )
}

export default CategoryBar
