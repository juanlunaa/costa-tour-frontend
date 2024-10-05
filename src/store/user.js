import { fetchProfile, login, logout, registerTurist } from '@/services/auth'
import { fetchFavoritePlansByTurist, toggleSavePlanTurist, updateCredentials, updatePersonalDataAdmin, updatePersonalDataTurist } from '@/services/user'
import { createStore } from 'zustand'

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

export const defaultInitState = {
  user : userInitialState,
  isLoggedIn: false
}


export const createUserStore = (initialState = defaultInitState) => {
  return createStore()((set, get) => ({
    ...initialState,
    fetchUserProfile: async () => {
      const { res, status } = await fetchProfile()
  
      if (status === 200) {
        set(state => ({ ...state, user: res, isLoggedIn: true }))
      }
    },
    signInUser: async (data) => {
      const { res, status } = await login(data)
  
      if (status === 200) {
        set(state => ({ ...state, user: res, isLoggedIn: true }))
        return { status, role: res.tipoUsuario }
      }

      return { status }
    },
    logoutUser: async () => {
      const { status } = await logout()
      
      if (status === 200) {
        set(state => ({ ...state, user: userInitialState, isLoggedIn: false }))
        return true
      }
  
      return false
    },
    changePassword: async (data) => {
      const { res, status } = await updateCredentials({ userId: get().user.userId, data })

      if (status === 200) {
        return { message: "Contraseña actualizada correctamente", success: true }
      }

      return { message: res, success: false }
    },
    signUpTurist: async (data) => {
      const { res, status } = await registerTurist(data)
  
      if (status === 201) {
        // set(state => ({ ...state, user: res, isLoggedIn: true }))
        return true
      }
  
      return false
    },
    updateProfileTurist: async ({ dni, data }) => {
      const { res, status } = await updatePersonalDataTurist({ dni, data })

      if (status === 200) {
        set(state => ({ ...state, user: res, isLoggedIn: true }))
        return true
      }
      
      return false
    },
    toggleSavePlan: async (planId) => {
      const { res, status } = await toggleSavePlanTurist({ dni: get().user.dni, planId })

      if (status === 200) {
        const prevUser = get().user

        if (res === "added") {
          prevUser.planesFavoritos = [...prevUser.planesFavoritos, planId]

          set(state => ({ ...state, user: prevUser }))

          return { res: "Favorito añadido satisfactoriamente", status }
        }


        if (res === "removed") {
          prevUser.planesFavoritos = prevUser.planesFavoritos.filter(pi => pi !== planId)

          set(state => ({ ...state, user: prevUser }))

          return { res: "Favorito eliminado satisfactoriamente", status }
        }
      }
      return { res, status }
    },
    getFavoritePlansTurist: async (dni) => {
      return await fetchFavoritePlansByTurist(dni)
    },
    updateProfileAdmin: async ({ userId, data }) => {
      const { res, status } = await updatePersonalDataAdmin({ userId, data })

      if (status === 200) {
        set(state => ({ ...state, user: res, isLoggedIn: true }))
        return true
      }
      
      return false
    },
  }))
}
  