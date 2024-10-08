import { userStore } from "@/store/user"

export default function useUserStore() {
  const user = userStore((state) => state.user)
  const isLoading = userStore((state) => state.isLoading)
  const isInitialized = userStore((state) => state.isInitialized)
  const isLoggedIn = userStore((state) => state.isLoggedIn)
  const setUser = userStore((state) => state.setUser)
  const logout = userStore((state) => state.logout)
  const removePlanFavorito = userStore((state) => state.removePlanFavorito)

  return {
    user,
    isLoading,
    isInitialized,
    isLoggedIn,
    setUser,
    logout,
    removePlanFavorito,
  }
}
