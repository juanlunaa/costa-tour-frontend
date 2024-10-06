"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/context/user"
import { Badge } from "@/components/ui/badge"
import { BACKEND_SERVER } from "@/env"
import { UserUpdateAvatar } from "@/components"

export default function AdminProfileLayout({ children }) {
    const pathname = usePathname()

    const router = useRouter()
    const numSolicitudes = 5

    const isLinkActive = (href) => {
        return pathname.startsWith(href)
    }

    const { user, logoutUser } = useUserStore((state) => state)

    const handleLogout = async () => {
        const success = await logoutUser()

        if (success) {
            router.push("/")
        }
    }

    return (
        <div className="container max-w-screen-xl pt-28 mb-[8%] px-4 sm:px-8 md:px-16  mx-auto">
            <div>
                <h1 className="text-2xl font-bold">Mi Perfil</h1>
                <p>Bienvenido {user.nombre}</p>
            </div>

            <div className="flex items-stretch justify-between mt-4">
                <div className="profile flex sm:w-[30%] md:w-[25%] flex-col p-[1%] ml-auto bg-white shadow-customBoxShadow">
                    <div className="user-details mt-[10%]">
                        <UserUpdateAvatar srcAvatar={`${BACKEND_SERVER}${user.avatar}`} />
                        {/* <div className="relative h-16 w-16 md:h-32 md:w-32 mx-auto">
                            <Avatar className="h-16 w-16 md:h-32 md:w-32">
                                <AvatarImage src={`${BACKEND_SERVER}${user.avatar}`} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div> */}

                        <div className="username text-center mt-4">
                            <h2 className="text-2xl font-bold" >{user.nombre} {user.apellido}</h2>

                        </div>                        
                    </div>

                    <div className="opcion-profile flex flex-col gap-2 mt-4">

                        <Link href="/dashboard/admin-profile/info-profile" className={`sm:text-xs md:text-sm lg:text-lg lg:pr-[3px] md:pl-3 text-xs flex items-center px-4 font-bold h-16 w-full 
                            ${isLinkActive('/dashboard/admin-profile/info-profile')
                                ? 'bg-yellowProfile'
                                : 'hover:bg-yellowProfile'
                            }`}>
                            Informacion del perfil
                        </Link>
                        <Link href="/dashboard/admin-profile/create-account" className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${isLinkActive('/dashboard/admin-profile/create-account')
                                ? 'bg-yellowProfile'
                                : 'hover:bg-yellowProfile'
                            }`}>
                            Crear cuenta
                        </Link>

                        <Link href="/dashboard/admin-profile/add-new-plan" className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${isLinkActive('/dashboard/admin-profile/add-new-plan')
                                ? 'bg-yellowProfile'
                                : 'hover:bg-yellowProfile'
                            }`}>
                            Agregar planes turisticos
                        </Link>

                        <Link href="/dashboard/admin-profile/statistics" className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center px-4 font-bold h-16 w-full
                            ${isLinkActive('/dashboard/admin-profile/statistics')
                                ? 'bg-yellowProfile'
                                : 'hover:bg-yellowProfile'
                            }`}>
                            Ver estadisticas
                        </Link>

                        <Link href="/dashboard/admin-profile/solicitude" className={`sm:text-xs md:text-sm lg:text-lg text-xs flex items-center justify-between px-4 font-bold h-16 w-full
                            ${isLinkActive('/dashboard/admin-profile/solicitude')
                                ? 'bg-yellowProfile'
                                : 'hover:bg-yellowProfile'
                            }`}>

                            <span>Ver solicitud</span>
                            {numSolicitudes > 0 && (
                                <span className="pointer-events-none">
                                <Badge variant="secondary" className="bg-customBlue text-white">
                                  {numSolicitudes}
                                </Badge>
                              </span>
                            )}
                        </Link>

                        <button onClick={handleLogout} className="sm:text-xs md:text-sm lg:text-lg sm:pl-3 sm:pr-0 pl-3 text-start text-xs font-bold h-16 w-full hover:bg-yellowProfile">
                            Cerrar sesion
                        </button>
                    </div>
                </div>

                <div className="content-profile sm:w-[70%] md:w-[75%] mr-auto">{children}</div>

            </div>
        </div>
    )
}