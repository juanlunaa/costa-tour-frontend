"use client"

import { useUserStore } from '@/context/user'
import Link from 'next/link'

const CategoryBar = ({ pathname }) => {

  const { isLoggedIn } = useUserStore((state) => state)

  const isLinkActive = (href) => {
    return pathname.pathname.includes(href)
  }

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12
    bg-white rounded-full shadow-customBlueShadow
      w-[90%] p-4 flex flex-col gap-6 items-center sm:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8"
    > 
      <Link
        href="/category/activities"
        className={`sm:text-2xl font-volkhov
          ${isLinkActive("/activities")
            ? 'border-b-4 border-[#363636]'
            : 'hover:border-b-4 border-[#363636]'}`}
      >
        Actividades
      </Link>
      { isLoggedIn 
        ? <Link 
            href="/category/recomendations"
            className={`sm:text-2xl font-volkhov
              ${isLinkActive("/recomendations")
              ? 'border-b-4 border-[#363636]'
              : 'hover:border-b-4 border-[#363636]'}`}
          >
        Recomendaciones
      </Link>
        : <></>
      }
      <Link
        href="/category/extreme"
        className={`sm:text-2xl font-volkhov
          ${isLinkActive("/extreme")
          ? 'border-b-4 border-[#363636]'
          : 'hover:border-b-4 border-[#363636]'}`}
      >
        Planes Extremos
      </Link>
    </div>
  )
}

export default CategoryBar;