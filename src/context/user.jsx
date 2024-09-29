"use client"

import { useUserStore } from '@/store/user';
import Cookies from 'js-cookie';
import { createContext, useEffect } from 'react'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const fetchUserProfile = useUserStore((state) => state.fetchUserProfile)
  
  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get('token')

      if (token) {
        fetchUserProfile()
      }
    }

    fetchUser()
  }, [fetchUserProfile])

  return (
    <UserContext.Provider value={{fetchUserProfile}}>
      {children}
    </UserContext.Provider>
  )
}