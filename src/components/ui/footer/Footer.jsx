import { textFont, titleFont } from "@/config/fonts";
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='py-10 flex justify-around items-center bg-gradient-to-b from-customBlueFooter to-white'>
      <Image
        src='/logo.png'
        width={200}
        height={200}
        alt='Logo Costa Tour'
      />

      <div className='w-32'>
        <h1 className={`${titleFont.className} font-bold`}>Compañia</h1>
        <Link href='#' className={`${textFont.className} text-wrap text-sm`}>Conviértete en un guía turistico para nosotros</Link>
      </div>

      <div>
        <h1 className={`${titleFont.className} font-bold`}>Contáctanos</h1>
        <Link href='#' className={`${textFont.className} text-wrap text-sm`}>Centro de Ayuda</Link>
        <br />
        <Link href='#' className={`${textFont.className} text-wrap text-sm`}>Email corporativo</Link>
      </div>

      <div>
        <h1 className={`${titleFont.className} font-bold`}>Síguenos</h1>
        <div className='flex justify-between'>
          <Link
            href='#'
            className="text-blue-800"
          >
            <FaFacebook />
          </Link>

          <Link
            href='#'
            className="text-blue-400"
          >
            <FaTwitter />
          </Link>

          <Link
            href='#'
            className="text-[#C23772]"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  )
}