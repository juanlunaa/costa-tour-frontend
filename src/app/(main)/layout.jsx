"use client"
import { ThemeProvider } from "@/components/theme-provider"
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
    <main className="min-h-screen relative max-w-7xl w-[90%] mx-auto dark:bg-gray-900">
      <NavBar pathname={{ pathname }}/>
      {children}
      {showFooter() ? <Footer className="" /> : <></>}
    </main>
  )
}
