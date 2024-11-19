"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Controller, useFormContext } from "react-hook-form"
import useUtilsData from "@/hooks/useUtilsData"
import { registerTurist } from "@/services/auth"
import { toast } from "sonner"

export default function RegisterInterest() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext()
  const router = useRouter()

  useEffect(() => {
    if (watch("dni") === "") {
      router.push("/auth/register/turist")
    }
  }, [])

  const { interesesBd } = useUtilsData() // <- Intereses traidos del backend

  const onSubmit = handleSubmit(async (data) => {
    const { pais, estado, ciudad, ...rest } = data
    const registerTuristData = {
      ...rest,
      idCiudad: ciudad,
    }
    const { status } = await registerTurist(registerTuristData)

    if (status === 201) {
      toast.success("Cuenta creada correctamente, por favor inicie sesion")
      router.push("/auth/login")
    } else {
      toast.error("Ha ocurrido un error, por favor intenta mas tarde")
    }
  })

  // Si la data esta vacia mostramos este componente loading mientras se hace la redireccion al
  // paso 1 del registro
  if (watch("dni") === "") {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="animate-spin h-16 w-16 border-4 border-customBlue border-t-transparent rounded-full mb-4"></div>
        <p className="text-lg text-gray-700">Cargando...</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-between h-full items-center p-8 dark:bg-customBlack"
    >
      <div className="h-[20%] text-center">
        <h1 className="text-4xl">Escoge tus intereses</h1>
        <p>Selecciona por lo menos 3</p>
      </div>
      <Controller
        name="intereses"
        control={control}
        rules={{
          required: { value: true, message: "Selecciona al menos 3 intereses" },
          validate: (value) =>
            value.length >= 3 || "Selecciona al menos 3 intereses",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <div className="flex items-start flex-wrap gap-4 max-h-[60%] overflow-y-auto py-4">
              {interesesBd.map((interes) => (
                <div key={interes.id}>
                  <input
                    type="checkbox"
                    id={`check-${interes.id}`}
                    className="hidden peer"
                    onChange={() => {
                      const newValue = value.includes(interes.id)
                        ? value.filter((id) => id !== interes.id)
                        : [...value, interes.id]

                      onChange(newValue)
                    }}
                    checked={value.includes(interes.id)}
                  />
                  <label
                    htmlFor={`check-${interes.id}`}
                    className="cursor-pointer px-4 py-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 
                peer-checked:bg-customYellow/50 dark:peer-checked:bg-background"
                  >
                    {interes.label}
                  </label>
                </div>
              ))}
            </div>
          )
        }}
      />
      <button
        type="submit"
        disabled={watch("intereses").length < 3}
        className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl px-4 py-3 w-44 mx-auto disabled:opacity-70 transition-all hover:shadow-customBoxShadow hover:scale-105"
      >
        Finalizar registro
      </button>
    </form>
  )
}
