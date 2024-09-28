"use client"

import { titleFont } from '@/config/fonts';
import { useUserData } from '@/hooks/useUserData';
import Link from 'next/link';

const CategoryBar = () => {

  const { isLoggedIn } = useUserData()

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-12
    bg-white rounded-full shadow-customBlueShadow
      w-[90%] p-4 flex flex-col gap-4 items-center sm:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8"
    >
      <Link href="/category/activities" className={`${titleFont.className} sm:text-2xl`}>
        Actividades
      </Link>
      { isLoggedIn 
        ? <Link href="/category/recomendations" className={`${titleFont.className} sm:text-2xl`}>
        Recomendaciones
      </Link>
        : <></>
      }
    </div>
  );
};

export default CategoryBar;