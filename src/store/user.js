import { fetchProfile, login, logout, registerTurist } from '@/services/auth'
import { create } from 'zustand'

const userInitialState = {
  userId: null,
  dni: "",
  tipoUsuario: "",
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  edad: null,
  email: "",
  avatar: "/files/avatars/avatar-default.png",
  ciudad: {
    id: null,
    name: ""
  },
  estado: {
    id: null,
    name: ""
  },
  pais: {
    id: null,
    name: ""
  },
  intereses: []
}


export const useUserStore = create((set) => ({
  user: userInitialState,
  isLoggedIn: false,
  fetchUserProfile: async () => {
    const { res, status } = await fetchProfile()

    if (status === 200) {
      console.log({ user: res, isLoggedIn: true })
      set({ user: res, isLoggedIn: true })
    }
  },
  signInUser: async (data) => {
    const { res, status } = await login(data)

    if (status === 200) {
      console.log(res)
      set({ user: res, isLoggedIn: true })
      return true
    }

    return false
  },
  signUpTurist: async () => {
    const { res, status } = await registerTurist(data)

    if (status === 200) {
      set({ user: res, isLoggedIn: true })
      return true
    }

    return false
  },
  logoutUser: async () => {
    const { status } = await logout()
    
    if (status === 200) {
      set({ user: userInitialState, isLoggedIn: false })
      return true
    }

    return false
  }
}))