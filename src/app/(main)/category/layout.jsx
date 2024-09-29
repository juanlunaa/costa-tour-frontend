"use client"

import CategoryBar from "@/components/ui/nav-bar/CategoryBar"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function CostaTourLayout({ children }) {

  const pathname = usePathname()

  return (
    <div className="relative">
      <div className="relative w-full h-[20vh] sm:h-[63vh]">
        <Image src="/categoria-banner.webp" alt="Banner Categorias" className="object-cover " fill sizes="100vw" />
      </div>
      <div className="container-main relative flex  flex-col rounded-t-[45px] top-[-50px] bg-white" >
        <CategoryBar pathname={{ pathname }} />

        <div className="container-info-plan mt-[4rem]">{children}</div>
      </div>
    </div>
  )
}
