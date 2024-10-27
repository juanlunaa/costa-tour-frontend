"use client"

import { BACKEND_SERVER } from "@/env"
import axios from "axios"
import { createContext, useState } from "react"

export const CodeContext = createContext()

export const CodeProvider = ({ children }) => {
  const [codeInfo, setCodeInfo] = useState(null)

  const loadCode = (codeInfoExists) => {
    setCodeInfo(codeInfoExists)
  }

  const createCode = async ({ turistDni, planId }) => {
    try {
      const { data } = await axios.post(
        `${BACKEND_SERVER}/code-plan/create?dniTurista=${turistDni}&planId=${planId}`
      )

      setCodeInfo(data)
    } catch (error) {
      console.error(error)
    }
  }

  const cancelCode = async () => {
    try {
      await axios.post(
        `${BACKEND_SERVER}/code-plan/process?codigo=${codeInfo.codigo}&accion=CANCELAR`
      )
      setCodeInfo(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <CodeContext.Provider
      value={{ codeInfo, createCode, cancelCode, loadCode }}
    >
      {children}
    </CodeContext.Provider>
  )
}
