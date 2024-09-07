"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function AuthLayout ({ children }) {

  const pathname = usePathname();

  const orientacion = pathname === '/auth/login' ? 'sm:flex-row' : 'sm:flex-row-reverse';

  return(
    <main className={`sm:flex ${orientacion} sm:min-h-screen`}>
      <div className='relative h-40 w-full sm:w-1/2 sm:min-h-screen'>
        <Image
          src='/auth-image.webp'
          objectFit='cover'
          layout='fill'
          alt='Cartagena'
        />

        <Link href='/' className='absolute top-2 left-2'>
          <IoMdArrowBack className='text-3xl sm:text-5xl' />
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center sm:w-1/2 pt-12 sm:pt-0'>
        {children}
      </div>
    </main>
  )
}