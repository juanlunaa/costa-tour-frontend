import { useUserStore } from "@/store/user"

export function useUserData() {
  const user = useUserStore(state => state.user)
  const isLoggedIn = useUserStore(state => state.isLoggedIn)
  const fetchUserProfile = useUserStore(state => state.fetchUserProfile)
  const signInUser = useUserStore(state => state.signInUser)
  const signUpUser = useUserStore(state => state.signUpUser)
  const logoutUser = useUserStore(state => state.logoutUser)

  return { user, isLoggedIn, fetchUserProfile, signInUser, signUpUser, logoutUser}
}