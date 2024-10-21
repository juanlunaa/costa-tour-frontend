"use client"

import { textFont, titleFont } from "@/config/fonts"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export const Footer = () => {
  const [logo, setLogo] = useState("/logos/isotipo-costa-tour.png")

  const { theme, systemTheme } = useTheme()

  const handleLogo = (theme) => {
    if (theme === "dark") {
      setLogo("/logos/isotipo-costa-tour-dark.png")
    } else {
      setLogo("/logos/isotipo-costa-tour.png")
    }
  }

  useEffect(() => {
    if (theme === "system") {
      handleLogo(systemTheme)
    } else {
      handleLogo(theme)
    }
  }, [theme, systemTheme])

  const stylelinks =
    "text-wrap md:text-xl sm:text-base text-base dark:text-white"
  const stylelinstext =
    "text-wrap md:text-base sm:text-sm text-base dark:text-white"
  return (
    <div className="py-10 flex flex-col gap-4 text-center items-center sm:flex-row sm:justify-center bg-gradient-to-b from-customBlue to-white dark:fr dark:from-black dark:bg-[#202020]">
      <Image src={logo} width={122} height={164} alt="Isotipo Costa Tour" />

      <div className="w-[25%] flex flex-col flex-wrap content-center gap-2">
        <h1 className={`${titleFont.className} ${stylelinks} font-bold`}>
          Compañia
        </h1>
        <Link
          href="#"
          className={`${textFont.className} ${stylelinstext} w-max`}
        >
          Sobre nosotros
        </Link>
      </div>

      <div className="w-[25%] flex flex-col flex-wrap content-center">
        <h1 className={`${titleFont.className} ${stylelinks} font-bold`}>
          Contáctanos
        </h1>
        <Link
          href="#"
          className={`${textFont.className} ${stylelinstext} w-max`}
        >
          Centro de Ayuda
        </Link>

        <Link
          href="#"
          className={`${textFont.className} ${stylelinstext} w-max`}
        >
          Email corporativo
        </Link>
      </div>

      <div className="flex flex-wrap content-center text-center mb-[13px] flex-col gap-2 w-[25%]">
        <h1 className={`${titleFont.className} ${stylelinks} font-bold`}>
          Síguenos
        </h1>
        <div className="flex justify-around gap-6">
          <Link
            href="#"
            className="text-blue-800 sm:text-xl md:text-2xl text-xl"
          >
            <FaFacebook />
          </Link>

          <Link
            href="#"
            className="text-blue-400 sm:text-xl md:text-2xl text-xl"
          >
            <FaTwitter />
          </Link>

          <Link
            href="#"
            className="text-[#C23772] sm:text-xl md:text-2xl text-xl"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  )
}
