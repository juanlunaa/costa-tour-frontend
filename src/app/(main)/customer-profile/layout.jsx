"use client"
import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaMapMarkerAlt } from "react-icons/fa";

export default function CustomerProfileLayout({ children }) {
    const pathname = usePathname();
    const isLinkActive = (href) => {
        return pathname.startsWith(href)
    }
    return (
        <div className="relative">
            <div className="relative w-full h-[20vh] sm:h-[63vh]">
                <Image src="/customer/banner-customer.png" alt="Banner Categorias" className="object-fill " fill sizes="100vw" />
            </div>

            <div className="container-main mb-[8%]">
                <div className="container flex  flex-col ml-auto mr-auto p-[3%]">
                    <h1> Mi Perfil</h1>
                    <p>Bienvenido Rodrido.</p>
                </div>
                <div className="relative flex justify-center">
                    <div className="container flex justify-between">

                        <div className="profile flex w-1/4 flex-col p-[1%] ml-auto bg-white shadow-customBoxShadow">
                            <div className="user-details mt-[10%]">
                                <div className="miniature flex justify-center">
                                    <Avatar>
                                        <AvatarImage src="/categoria-banner.webp"/>
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>

                                <div className="username text-center mt-4">
                                    <h2 className={`${titleFont.className}`} >Rodrigo Goes</h2>

                                </div>
                                <div className="pais flex flex-row items-center justify-center space-x-1 text-[#00A0B1] mt-4">
                                    <FaMapMarkerAlt className="text-sm" />
                                    <p className={`${titleFont.className}`}>Madrid</p>
                                </div>
                            </div>

                            <div className="opcion-profile flex flex-col mt-4">

                                <Link href="/customer-profile/info-profile" className={`${titleFont.className} sm:text-lg flex items-center text-center justify-center h-16
                            ${isLinkActive('/customer-profile/info-profile')
                                        ? 'bg-[#F0C240]'
                                        : 'hover:bg-[#F0C240]'
                                    }`}>
                                    Informacion del perfil
                                </Link>
                                <Link href="/customer-profile/favorites" className={`${titleFont.className} sm:text-lg flex items-center justify-center h-16 mt-2 
                            ${isLinkActive('/customer-profile/favorites')
                                        ? 'bg-[#F0C240]'
                                        : 'hover:bg-[#F0C240]'
                                    }`}>
                                    Guardados
                                </Link>
                            </div>

                            <div className="exit">
                                <Link href="/" className={`${titleFont.className} sm:text-lg flex items-center text-center justify-center h-16 mt-2 hover:bg-[#F0C240]`}>
                                    Cerrar sesion
                                </Link>
                            </div>
                        </div>


                        <div className="content-profile w-[70%] mr-auto">{children}</div>

                    </div>
                </div>


            </div>

        </div>

    )
}