import CategoryBar from "@/components/ui/nav-bar/CategoryBar"
import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export default function CostaTourLayout({ children }) {
  return (
    <div className="relative">
      <div className="relative w-full h-[20vh] sm:h-[63vh]">
        <Image src="/categoria-banner.webp" alt="Banner Categorias" className="object-cover " fill sizes="100vw" />
      </div>
      <div className="container-main relative flex  flex-col rounded-t-[45px] top-[-50px] bg-white" >
        <CategoryBar />

        <div className="container-info-plan mt-[4rem]">{children}</div>
      </div>
    </div>
  )
}
