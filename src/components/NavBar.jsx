"use client"

import useUserStore from "@/hooks/useUserStore"
import Link from "next/link"
import ModeToggle from "./ui/darkmode/Dark"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useId, useState } from "react"
import { getDashboardByRole } from "@/logic/auth"
import { X, Menu } from "lucide-react"
import { Label } from "./ui/label"
import { useTheme } from "next-themes"
export const NavBar = ({ pathname }) => {
  const { user, isLoggedIn } = useUserStore()
  const [isOpen, setIsOpen] = useState(false)

  const [logo, setLogo] = useState("/logos/imagotipo-costa-tour.png")
  const { theme, systemTheme } = useTheme()

  const menuId = useId()

  const handleLogo = (theme) => {
    if (theme === "dark") {
      setLogo("/logos/imagotipo-costa-tour-dark.png")
    } else {
      setLogo("/logos/imagotipo-costa-tour.png")
    }
  }

  useEffect(() => {
    if (theme === "system") {
      handleLogo(systemTheme)
    } else {
      handleLogo(theme)
    }
  }, [theme, systemTheme])

  const toggleMenu = (e) => {
    console.log(e.target.checked)
    setIsOpen(!isOpen)
  }

  const isDashboard =
    pathname.pathname.includes("/customer-profile") ||
    pathname.pathname.includes("/admin-profile") ||
    pathname.pathname.includes("/modify-plan") ||
    pathname.pathname.includes("/plans")

  const linkStyle = cn(
    "p-2 rounded-xl font-bold sm:base dark:text-white hover:bg-yellowLogo transition duration-300 ease-in-out text-blueLogo text-black dark:text-white dark:hover:text-black"
  )

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Categorias", href: "/category/activities" },
    { name: "Ayuda", href: "#" },
    {
      name: `${isLoggedIn ? "Mi cuenta" : "Iniciar Sesion"}`,
      href: `${isLoggedIn ? `/dashboard/${getDashboardByRole(user.tipoUsuario)}/info-profile` : "/auth/login"}`,
    },
  ]

  return (
    <nav className="fixed z-[1100] top-0 left-0 right-0">
      <div>
        <div className="flex justify-between items-center h-20 w-full px-4 bg-white dark:bg-customBlack border-b border-gray-200">
          <Link href="/">
            <Image src={logo} alt="Costa Tour" width={146} height={65} />
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} className={linkStyle} href={item.href}>
                {item.name}
              </Link>
            ))}

            <ModeToggle className={linkStyle} />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ModeToggle className={linkStyle} />
            <input
              type="checkbox"
              id={menuId}
              onChange={toggleMenu}
              className="hidden"
              checked={isOpen}
            />

            <Label htmlFor={menuId} className="cursor-pointer dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Label>
          </div>
        </div>
        <div
          className={cn(
            "responsive-nav-bar md:hidden overflow-hidden bg-white/90 dark:bg-customBlack/90 text-center",
            isOpen ? "h-40" : "h-0"
          )}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              style={{ "--i": index }}
              className={cn(
                "block py-2 opacity-0 -translate-[50px]",
                isOpen && "opacity-100 translate-y-0 delay-custom",
                linkStyle
              )}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
