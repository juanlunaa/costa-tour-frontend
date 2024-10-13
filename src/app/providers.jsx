"use client"

import { useEffect } from "react"
import { userStore } from "../store/user"
import { initializeAuth } from "../lib/auth"
import Cookies from "js-cookie"
import { ThemeProvider } from "@/components/theme-provider"
import { Loading } from "@/components"

export function Providers({ children }) {
  const isLoading = userStore((state) => state.isLoading)
  const isInitialized = userStore((state) => state.isInitialized)

  const token = Cookies.get("token")

  useEffect(() => {
    if (!isInitialized) {
      initializeAuth({ token })
    }
  }, [isInitialized])

  if (isLoading) return <Loading />

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
