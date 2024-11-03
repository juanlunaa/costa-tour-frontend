"use client"
import { Footer, NavBar } from "@/components"
import { usePathname } from "next/navigation"

export default function CostaTourLayout({ children }) {
  const pathname = usePathname()

  const showFooter = () => {
    if (pathname.includes("/customer-profile")) return false
    if (pathname.includes("/admin-profile")) return false
    if (pathname.includes("/dashboard")) return false
    if (pathname.includes("/edit")) return false
    return true
  }

  return (
    <main className="min-h-dvh grid grid-rows-[1fr_auto] relative max-w-[83rem]  w-[100%] mx-auto shadow-customBoxShadowMain dark:bg-gray-900">
      <NavBar pathname={{ pathname }} />
      <section>{children}</section>
      {showFooter() ? <Footer className="" /> : <></>}
    </main>
  )
}
