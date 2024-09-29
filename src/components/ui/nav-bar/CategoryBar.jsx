"use client"

import { titleFont } from '@/config/fonts'
import { useUserData } from '@/hooks/useUserData'
import Link from 'next/link'

const CategoryBar = ({ pathname }) => {

  const { isLoggedIn } = useUserData()

  console.log(pathname)

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12
    bg-white rounded-full shadow-customBlueShadow
      w-[90%] p-4 flex flex-col gap-6 items-center sm:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8"
    > 
      <Link
        href="/category/activities"
        className={`${titleFont.className} sm:text-2xl ${pathname.pathname.includes("/activities") ? "underline" : ""}`}
      >
        Actividades
      </Link>
      { isLoggedIn 
        ? <Link 
            href="/category/recomendations"
            className={`${titleFont.className} sm:text-2xl ${pathname.pathname.includes("/recomendations") ? "underline" : ""}`}
          >
        Recomendaciones
      </Link>
        : <></>
      }
      <Link
        href="/category/extreme"
        className={`${titleFont.className} sm:text-2xl ${pathname.pathname.includes("/extreme") ? "underline" : ""}`}
      >
        Planes Extremos
      </Link>
    </div>
  )
}

export default CategoryBar;