"use client"

import CategoryBar from "@/components/CategoryBar"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function CostaTourLayout({ children }) {
  const pathname = usePathname()

  return (
    <div className="relative dark:bg-gray-900">
      <div className="relative w-full h-[30vh] sm:h-[63vh]">
        <Image
          src="/categoria-banner.webp"
          alt="Banner Categorias"
          className="object-cover "
          fill
          sizes="100vw"
        />
      </div>
      <div className="container-main relative flex  flex-col rounded-t-[45px] top-[-50px] bg-white dark:bg-gray-900 dark:text-white">
        <CategoryBar pathname={{ pathname }} />
        <div className="container-info-plan sm:mt-[7rem] mt-20 dark:bg-gray-900 min-h-[30vh]">
          {children}
        </div>
      </div>
    </div>
  )
}
