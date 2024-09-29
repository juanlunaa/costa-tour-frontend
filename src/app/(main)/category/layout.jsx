"use client"
import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CostaTourLayout({ children }) {
  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname.startsWith(href)
  }
  return (
    <div className="relative">
      <div className="relative w-full h-[20vh] sm:h-[63vh]">
        <Image src="/categoria-banner.webp" alt="Banner Categorias" className="object-cover " fill sizes="100vw" />
      </div>
      <div className="container-main relative flex  flex-col rounded-t-[45px] top-[-50px] bg-white" >
        <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12
        bg-white rounded-full shadow-customBlueShadow
        w-[90%] p-4 flex flex-col gap-4 items-center sm:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8"
        >
          <Link href="/category/activities" className={`${titleFont.className} sm:text-2xl 
            ${isLinkActive('/category/activities')
              ? 'border-b-4 border-[#363636]'
              : 'hover:border-b-4 border-[#363636]'
            }`}>
            Actividades
          </Link>

          <Link href="/category/recomendations" className={`${titleFont.className} sm:text-2xl 
            ${isLinkActive('/category/recomendations')
              ? 'border-b-4 border-[#363636]'
              : 'hover:border-b-4 border-[#363636]'
            }`}>
            Recomendaciones
          </Link>

        
        <Link href="/customer-profile/info-profile">pefil cliente</Link>

       
        </div>

        <div className="container-info-plan mt-[4rem]">{children}</div>
      </div>
    </div>
  )
}
