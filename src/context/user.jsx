"use client"

import { createUserStore } from "@/store/user"
import { createContext, useContext, useEffect, useRef } from "react"
import { useStore } from "zustand"
import Cookies from "js-cookie"

export const UserStoreContext = createContext(undefined)

export function UserStoreProvider({ children }) {
  const userStoreRef = useRef()

  if (!userStoreRef.current) {
    userStoreRef.current = createUserStore()
  }

  const token = Cookies.get("token")

  if (token) {
    userStoreRef.current.getState().fetchUserProfile()
  }

  return (
    <UserStoreContext.Provider value={userStoreRef.current}>
      {children}
    </UserStoreContext.Provider>
  )
}

export const useUserStore = (selector) => {
  const userStoreContext = useContext(UserStoreContext)

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`)
  }

  return useStore(userStoreContext, selector)
}
