"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaMapMarkerAlt } from "react-icons/fa"
import { useRouter } from "next/navigation"
import useUserStore from "@/hooks/useUserStore"
import { logoutUser } from "@/services/auth"
import { Loading, UserUpdateAvatar } from "@/components"
import { BACKEND_SERVER } from "@/env"
import { useState } from "react"

export default function CustomerProfileLayout({ children }) {
  const pathname = usePathname()

  const router = useRouter()

  const isLinkActive = (href) => {
    return pathname.startsWith(href)
  }

  const { user, logout } = useUserStore()

  const handleLogout = async () => {
    const { status } = await logoutUser()

    if (status === 200) {
      logout()
      router.push("/")
    }
  }

  if (!user) {
    return <Loading />
  }

  const { nombre, apellido, avatar, ciudad } = user

  return (
    <div className="container max-w-screen-xl pt-28 mb-[8%] px-4 sm:px-8 md:px-16  mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <p>Bienvenido {nombre}</p>
      </div>

      <div className="flex justify-between mt-4">
        <div className="profile flex sm:w-[30%] md:w-[25%] flex-col p-[1%] ml-auto bg-white shadow-customBoxShadow">
          <div className="user-details mt-[10%]">
            <UserUpdateAvatar srcAvatar={`${BACKEND_SERVER}${avatar}`} />

            <div className="username text-center mt-4">
              <h2 className="text-2xl font-bold">
                {nombre} {apellido}
              </h2>
            </div>
            <div className="pais flex flex-row items-center justify-center space-x-1 text-[#00A0B1] mt-4">
              <FaMapMarkerAlt className="text-sm" />
              <p>{ciudad?.name}</p>
            </div>
          </div>

          <div className="opcion-profile flex flex-col gap-2 mt-4">
            <Link
              href="/dashboard/customer-profile/info-profile"
              className={`sm:text-xs md:text-sm lg:text-lg lg:pr-[3px] md:pl-3 text-xs flex items-center px-4 font-bold h-16 w-full 
                            ${
                              isLinkActive(
                                "/dashboard/customer-profile/info-profile"
                              )
                                ? "bg-yellowProfile"
                                : "hover:bg-yellowProfile"
                            }`}
            >
              Informacion del perfil
            </Link>
            <Link
              href="/dashboard/customer-profile/favorites"
              className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${
                              isLinkActive(
                                "/dashboard/customer-profile/favorites"
                              )
                                ? "bg-yellowProfile"
                                : "hover:bg-yellowProfile"
                            }`}
            >
              Guardados
            </Link>
            <button
              onClick={handleLogout}
              className="sm:text-xs md:text-sm lg:text-lg sm:pl-3 sm:pr-0 pl-3 text-start text-xs font-bold h-16 w-full hover:bg-yellowProfile"
            >
              Cerrar sesion
            </button>
          </div>
        </div>

        <div className="content-profile sm:w-[70%] md:w-[75%] mr-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
