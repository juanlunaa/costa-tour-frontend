"use client"

import useUserStore from "@/hooks/useUserStore"
import { cn } from "@/lib/utils"
import { UserRoles } from "@/logic/auth"
import Link from "next/link"

const CategoryBar = ({ pathname }) => {
  const { isLoggedIn, user } = useUserStore()
  const role = user?.tipoUsuario

  const isLinkActive = (href) => {
    return pathname.pathname.includes(href)
  }

  const linkStyles = (href) => {
    const styles = cn(
      "lg:text-xl md:text-base sm:text-sm text-xs font-volkhov",
      isLinkActive(href)
        ? "border-b-2 border-customBlue text-customBlue dark:border-customBlue dark:hover:border-customBlue"
        : "hover:border-b-2 border-black dark:hover:border-white"
    )

    return styles
  }

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 sm:-mt-12 -mt-8 
    bg-white rounded-full shadow-customBlueShadow
      w-[75%] p-4 flex justify-center gap-6 items-center sm:w-[70%] md:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8
      dark:text-white dark:bg-gray-800"
    >
      <Link href="/category/activities" className={linkStyles("/activities")}>
        Actividades
      </Link>
      {isLoggedIn && role === UserRoles.TURISTA ? (
        <Link
          href="/category/recomendations"
          className={linkStyles("/recomendations")}
        >
          Recomendaciones
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
}

export default CategoryBar
