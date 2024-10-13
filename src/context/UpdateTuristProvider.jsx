"use client"

import useUserStore from "@/hooks/useUserStore"
import { useForm, FormProvider } from "react-hook-form"

export function UpdateTuristProvider({ children }) {
  const { user } = useUserStore()

  const defaultValues = user
    ? {
        nombre: user.nombre,
        apellido: user.apellido,
        dni: user.dni,
        fechaNacimiento: user.fechaNacimiento,
        pais: user.pais.id?.toString(),
        estado: user.estado.id?.toString(),
        ciudad: user.ciudad.id?.toString(),
        intereses: user.intereses.map((interes) => interes.id?.toString()),
      }
    : {
        nombre: "",
        apellido: "",
        dni: "",
        fechaNacimiento: "",
        pais: "",
        estado: "",
        ciudad: "",
        intereses: [],
      }

  const methods = useForm({ defaultValues })

  return <FormProvider {...methods}>{children}</FormProvider>
}
