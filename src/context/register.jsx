"use client"

import { createContext, useContext, useState } from "react"

// Se crea un contexto de react para compartir la informacion del registro entre las dos partes que tiene
// Registro de informacion personal y el registro de los intereses del turista
// El que va a mandar la peticion para la creacion del turista va a ser el paso dos, por lo tanto debe tener
// toda la informacion
export const RegisterFormContext = createContext()

export function RegisterFormProvider({ children }) {
  const [formData, setFormData] = useState(undefined)

  const updateFormData = (newData) => {
    setFormData((prevState) => {
      return { ...prevState, ...newData }
    })
  }

  // Se agrega al value la informacion del formulario (formData) para que le paso dos la pueda tener cuando realice la peticion de registro
  // Se agrega al value el metodo updateFormData para que desde las paginas se pueda carga la info al estado "global"
  return (
    <RegisterFormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </RegisterFormContext.Provider>
  )
}

// Se crea un custom hook que permita acceder al contexto desde las paginas, para evitar usar useContext
export const useRegisterFormData = () => {
  return useContext(RegisterFormContext)
}
