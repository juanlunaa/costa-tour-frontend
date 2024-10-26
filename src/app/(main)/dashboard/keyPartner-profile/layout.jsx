"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import useUserStore from "@/hooks/useUserStore"
import { Badge } from "@/components/ui/badge"
import { BACKEND_SERVER } from "@/env"
import { Loading, UserUpdateAvatar } from "@/components"
import { logoutUser } from "@/services/auth"

export default function KeyPartherProfileLayout({ children }) {
    const pathname = usePathname()

    //const router = useRouter()
    const numSolicitudes = 5

    const isLinkActive = (href) => {
        return pathname.startsWith(href)
    }

//    const { user, logout } = useUserStore()

    // const handleLogout = async () => {
    //     const { status } = await logoutUser()

    //     if (status === 200) {
    //         logout()
    //         router.push("/")
    //     }
    // }

    // if (!user) {
    //     return <Loading />
    // }

    return (
        <div className="container max-w-screen-xl py-28 px-4 sm:px-8 md:px-16 mx-auto  dark:bg-gray-900">
            <div className="dark:text-white">
                <h1 className="text-2xl font-bold">Mi Perfil</h1>
                <p>Bienvenido adadaad</p>
            </div>

            <div className="flex items-stretch justify-between mt-4">
                <div className="profile flex sm:w-[30%] md:w-[25%] flex-col p-[1%] ml-auto bg-white shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-900 dark:text-white">
                    <div className="user-details mt-[10%]">
                        <UserUpdateAvatar />

                        <div className="username text-center mt-4">
                            <h2 className="text-2xl font-bold">
                                pepe sal
                            </h2>
                        </div>
                    </div>

                    <div className="opcion-profile flex flex-col gap-2 mt-4">
                        <Link
                            href="/dashboard/keyPartner-profile/info-profile"
                            className={`sm:text-xs md:text-sm lg:text-lg lg:pr-[3px] md:pl-3 text-xs flex items-center px-4 font-bold h-16 w-full 
                            ${isLinkActive(
                                "/dashboard/keyPartner-profile/info-profile"
                            )
                                    ? "bg-blueProfile dark:text-black"
                                    : "hover:bg-blueProfile hover:dark:text-black"
                                }`}
                        >
                            Informacion del perfil
                        </Link>
                        <Link
                            href="/dashboard/keyPartner-profile/add-solicitude-plan"
                            className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${isLinkActive(
                                "/dashboard/keyPartner-profile/add-solicitude-plan"
                            )
                                    ? "bg-blueProfile dark:text-black"
                                    : "hover:bg-blueProfile hover:dark:text-black"
                                }`}
                        >
                            Agregar nuevo Plan turistico
                        </Link>

                        <Link
                            href="/dashboard/keyPartner-profile/solicitude"
                            className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${isLinkActive(
                                "/dashboard/keyPartner-profile/solicitude"
                            )
                                    ? "bg-blueProfile dark:text-black"
                                    : "hover:bg-blueProfile hover:dark:text-black"
                                }`}
                        >
                            Ver Solicitudes
                        </Link>

                        <Link
                            href="/dashboard/keyPartner-profile/statistics"
                            className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${isLinkActive(
                                "/dashboard/keyPartner-profile/statistics"
                            )
                                    ? "bg-blueProfile dark:text-black"
                                    : "hover:bg-blueProfile hover:dark:text-black"
                                }`}
                        >
                            Ver estadisticas
                        </Link>

                        <Link
                            href="/dashboard/keyPartner-profile/validate-code-prom"
                            className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center justify-between px-4 font-bold h-16 w-full
                            ${isLinkActive(
                                "/dashboard/keyPartner-profile/validate-code-prom"
                            )
                                    ? "bg-blueProfile dark:text-black"
                                    : "hover:bg-blueProfile hover:dark:text-black"
                                }`}
                        >
                            Validar codigo Promocional
                        </Link>

                        <button
                            //onClick={handleLogout}
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