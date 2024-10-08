import { userStore } from "@/store/user"
import { fetchProfile } from "@/services/auth"

export async function initializeAuth({ token }) {
  const { user, setUser, setLoading, setInitialized } = userStore.getState()

  if (!token) {
    setInitialized(true)
    setLoading(false)
    return null
  }

  if (user) {
    setInitialized(true)
    setLoading(false)
    return user
  }

  setLoading(true)
  try {
    const { res, status } = await fetchProfile()
    if (status === 200 && res) {
      setUser(res)
      setInitialized(true)
      return res
    }
  } catch (error) {
    console.error("Error al verificar autenticacion")
  } finally {
    setLoading(false)
    setInitialized(true)
  }

  return null
}
