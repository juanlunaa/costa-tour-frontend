"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import useUserStore from "@/hooks/useUserStore"
import { Badge } from "@/components/ui/badge"
import { BACKEND_SERVER } from "@/env"
import { UserUpdateAvatar } from "@/components"
import { logoutUser } from "@/services/auth"

export default function AdminProfileLayout({ children }) {
  const pathname = usePathname()

  const router = useRouter()
  const numSolicitudes = 5

  const isLinkActive = (href) => {
    return pathname.startsWith(href)
  }

  const { user, logout } = useUserStore()

  const handleLogout = async () => {
    const { status } = await logoutUser()

    if (status === 200) {
      router.push("/")
      // Se da un tiempo a que se haga la redireccion para actualizar el estado
      setTimeout(
        () => logout(), // <- afecta al estado global del usuario
        [500]
      )
    }
  }

  return (
    <div className="container max-w-screen-xl py-28 px-4 sm:px-8 md:px-16 mx-auto  dark:bg-gray-900">
      <div className="dark:text-white">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <p>Bienvenido {user.nombre}</p>
      </div>

      <div className="flex items-stretch justify-between mt-4">
        <div className="profile flex sm:w-[30%] md:w-[25%] flex-col p-[1%] ml-auto bg-white shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-900 dark:text-white">
          <div className="user-details mt-[10%]">
            <UserUpdateAvatar srcAvatar={`${BACKEND_SERVER}${user.avatar}`} />

            <div className="username text-center mt-4">
              <h2 className="text-2xl font-bold">
                {user.nombre} {user.apellido}
              </h2>
            </div>
          </div>

          <div className="opcion-profile flex flex-col gap-2 mt-4">
            <Link
              href="/dashboard/admin-profile/info-profile"
              className={`sm:text-xs md:text-sm lg:text-lg lg:pr-[3px] md:pl-3 text-xs flex items-center px-4 font-bold h-16 w-full 
                            ${
                              isLinkActive(
                                "/dashboard/admin-profile/info-profile"
                              )
                                ? "bg-blueProfile dark:text-black"
                                : "hover:bg-blueProfile hover:dark:text-black"
                            }`}
            >
              Informacion del perfil
            </Link>
            <Link
              href="/dashboard/admin-profile/create-account"
              className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${
                              isLinkActive(
                                "/dashboard/admin-profile/create-account"
                              )
                                ? "bg-blueProfile dark:text-black"
                                : "hover:bg-blueProfile hover:dark:text-black"
                            }`}
            >
              Crear cuenta
            </Link>

            <Link
              href="/dashboard/admin-profile/add-new-plan"
              className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${
                              isLinkActive(
                                "/dashboard/admin-profile/add-new-plan"
                              )
                                ? "bg-blueProfile dark:text-black"
                                : "hover:bg-blueProfile hover:dark:text-black"
                            }`}
            >
              Agregar planes turisticos
            </Link>

            <Link
              href="/dashboard/admin-profile/statistics"
              className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${
                              isLinkActive(
                                "/dashboard/admin-profile/statistics"
                              )
                                ? "bg-blueProfile dark:text-black"
                                : "hover:bg-blueProfile hover:dark:text-black"
                            }`}
            >
              Ver estadisticas
            </Link>

            <Link
              href="/dashboard/admin-profile/solicitude"
              className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center justify-between px-4 font-bold h-16 w-full
                            ${
                              isLinkActive(
                                "/dashboard/admin-profile/solicitude"
                              )
                                ? "bg-blueProfile dark:text-black"
                                : "hover:bg-blueProfile hover:dark:text-black"
                            }`}
            >
              <span>Ver solicitud</span>
              {numSolicitudes > 0 && (
                <span className="pointer-events-none">
                  <Badge
                    variant="secondary"
                    className="bg-customBlue text-white"
                  >
                    {numSolicitudes}
                  </Badge>
                </span>
              )}
            </Link>

            <button
              onClick={handleLogout}
              className="sm:text-xs md:text-sm lg:text-lg sm:pl-3 sm:pr-0 pl-3 text-start text-xs font-bold h-16 w-full hover:bg-blueProfile dark:hover:text-black"
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
