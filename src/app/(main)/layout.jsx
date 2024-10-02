"use client"

import { Footer, NavBar } from "@/components"
import { usePathname } from "next/navigation"

export default function CostaTourLayout({ children }) {

  const pathname = usePathname()
  
  const showFooter = () => {
    if (pathname.includes("/customer-profile")) return false
    if (pathname.includes("/admin-profile")) return false
    
    return true
  }

  return (
    <main className="min-h-screen relative">
      <NavBar pathname={{pathname}}/>
      {children}
      { showFooter() ? <Footer /> : <></> }
    </main>
  )
}
