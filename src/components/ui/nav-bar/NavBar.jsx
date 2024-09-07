import { textFont, titleFont } from "@/config/fonts"
import Link from "next/link"

export const NavBar = () => {
  return(
    <nav className="absolute z-10 flex px-5 h-16 justify-between items-center w-full sm:bg-gradient-to-b from-gray-800/90 to-transparent" >
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold text-white`}>Costa Tour</span>
        </Link>
      </div>

      <div className='hidden sm:block'>
        <Link className={`${textFont.className} m-2 p-2 rounded-xl text-white hover:bg-customOrange`} href='/'>Inicio</Link>
        <Link className={`${textFont.className} m-2 p-2 rounded-xl text-white hover:bg-customOrange`} href='/category'>Categorias</Link>
        <Link className={`${textFont.className} m-2 p-2 rounded-xl text-white hover:bg-customOrange`} href='/auth/login'>Inicio de Sesion</Link>
      </div>

    </nav>
  )
}