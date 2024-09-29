"use client"

import { textFont, titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaMapMarkerAlt } from "react-icons/fa";
import { useUserData } from "@/hooks/useUserData"
import { useRouter } from "next/navigation"

export default function CustomerProfileLayout({ children }) {
    const pathname = usePathname()

    const router = useRouter()

    const isLinkActive = (href) => {
        return pathname.startsWith(href)
    }

    const { user, logoutUser } = useUserData()
    
    const handleLogout = async () => {
        const success = await logoutUser()
        
        if (success) {
          router.push("/")
        }
      }
      
    return (
        <div className="pt-28">
            <div className="container-main mb-[8%]">
                <div className="container flex flex-col mx-auto p-[3%]">
                    <h1 className={`${titleFont.className} text-2xl font-bold`}>Mi Perfil</h1>
                    <p className={`${textFont.className}`}>Bienvenido { user.nombre }</p>
                </div>
                <div className="flex justify-center">
                    <div className="container flex justify-between">

                        <div className="profile flex w-1/4 flex-col p-[1%] ml-auto bg-white shadow-customBoxShadow">
                            <div className="user-details mt-[10%]">
                                <div className="miniature flex justify-center">
                                    <Avatar>
                                        <AvatarImage src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}${user.avatar}`}/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>

                                <div className="username text-center mt-4">
                                    <h2 className={`${textFont.className} text-2xl font-bold`} >{user.nombre} {user.apellido}</h2>

                                </div>
                                <div className="pais flex flex-row items-center justify-center space-x-1 text-[#00A0B1] mt-4">
                                    <FaMapMarkerAlt className="text-sm" />
                                    <p className={`${textFont.className}`}>{user.ciudad.name}</p>
                                </div>
                            </div>

                            <div className="opcion-profile flex flex-col mt-4">

                                <Link href="/customer-profile/info-profile" className={`${textFont.className} sm:text-lg flex items-center text-center justify-start pl-6 font-bold h-16
                            ${isLinkActive('/customer-profile/info-profile')
                                        ? 'bg-blueProfile'
                                        : 'hover:bg-blueProfile'
                                    }`}>
                                    Informacion del perfil
                                </Link>
                                <Link href="/customer-profile/favorites" className={`${textFont.className} sm:text-lg flex items-center justify-start pl-6 font-bold h-16 mt-2 
                            ${isLinkActive('/customer-profile/favorites')
                                        ? 'bg-blueProfile'
                                        : 'hover:bg-blueProfile'
                                    }`}>
                                    Guardados
                                </Link>
                            </div>

                            <div className="exit">
                                <button onClick={handleLogout} className={`${textFont.className} sm:text-lg flex items-center text-center font-bold justify-start pl-6 h-16 mt-2 hover:bg-blueProfile`}>
                                    Cerrar sesion
                                </button>
                            </div>
                        </div>


                        <div className="content-profile w-[70%] mr-auto">{children}</div>

                    </div>
                </div>


            </div>

        </div>

    )
}