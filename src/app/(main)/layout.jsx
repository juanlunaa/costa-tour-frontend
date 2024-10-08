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

<<<<<<< HEAD

=======
>>>>>>> 80fd81b408f67db8687886d5039eaf9ebdecf204
    return true
  }

  return (
    <main className="min-h-screen relative">
<<<<<<< HEAD
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavBar pathname={{ pathname }} />

        {children}
      </ThemeProvider>
=======
      <NavBar pathname={{ pathname }} />
      {children}
>>>>>>> 80fd81b408f67db8687886d5039eaf9ebdecf204
      {showFooter() ? <Footer /> : <></>}
    </main>
  )
}
