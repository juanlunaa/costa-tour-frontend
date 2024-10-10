"use client"

import { FormProvider, useForm } from "react-hook-form"

export default function RegisterLayout({ children }) {
  const defaultValues = {
    nombre: "",
    apellido: "",
    dni: "",
    fechaNacimiento: "",
    email: "",
    password: "",
    pais: "",
    estado: "",
    ciudad: "",
    intereses: [],
  }

  const methods = useForm({ defaultValues })

  return <FormProvider {...methods}>{children}</FormProvider>
}
