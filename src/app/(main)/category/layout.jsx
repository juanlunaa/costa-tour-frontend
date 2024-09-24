import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/fonts";

export default function CostaTourLayout({ children }) {
  return (
    <div className="relative">
      <div className='relative w-full h-[20vh] sm:h-[70vh]'>
        <Image
          src='/categoria-banner.webp'
          alt='Banner Categorias'
          className='object-cover'
          fill
          sizes='100vw'
        />
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 -mt-12
        bg-white rounded-full shadow-customBlueShadow
        w-[90%] p-4 flex flex-col gap-4 items-center sm:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8'>
        <Link
          href='/category/activities'
          className={`${titleFont.className} sm:text-2xl`}
        >
          Actividades
        </Link>
        <Link
          href='/category/recomendations'
          className={`${titleFont.className} sm:text-2xl`}
        >
          Recomendaciones
        </Link>
      </div>

      <div className="mt-24">
        {children}
      </div>
    </div>
  )
}