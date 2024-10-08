import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const userStore = create(
  // persist(
  (set, get) => ({
    user: null,
    isLoading: true,
    isInitialized: false,
    isLoggedIn: false,
    setUser: (user) => set({ user, isLoggedIn: !!user, isLoading: false }),
    setLoading: (isLoading) => set({ isLoading }),
    setInitialized: (isInitialized) => set({ isInitialized }),
    logout: () => set({ user: null, isLoggedIn: false, isLoading: false }),
    addPlanFavorito: (idPlan) =>
      set({
        user: {
          ...get().user,
          planesFavoritos: [...get().user.planesFavoritos, idPlan],
        },
      }),
    removePlanFavorito: (idPlan) =>
      set({
        user: {
          ...get().user,
          planesFavoritos: get().user.planesFavoritos.filter(
            (pi) => pi !== idPlan
          ),
        },
      }),
  })
  //   {
  //     name: "user-storage",
  //     storage: createJSONStorage(() => sessionStorage),
  //   }
  // )
)
