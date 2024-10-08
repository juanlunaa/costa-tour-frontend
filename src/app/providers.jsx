"use client"

import { useEffect } from "react"
import { userStore } from "../store/user"
import { initializeAuth } from "../lib/auth"
import Cookies from "js-cookie"

export function Providers({ children }) {
  const isLoading = userStore((state) => state.isLoading)
  const isInitialized = userStore((state) => state.isInitialized)

  const token = Cookies.get("token")

  useEffect(() => {
    if (!isInitialized) {
      initializeAuth({ token })
    }
  }, [isInitialized])

  if (isLoading)
    return (
      <div className="absolute flex flex-col items-center justify-center h-full w-full">
        <div className="animate-spin h-16 w-16 border-4 border-customBlue border-t-transparent rounded-full mb-4"></div>
        <p className="text-lg text-gray-700">Cargando...</p>
      </div>
    )

  return children
}
