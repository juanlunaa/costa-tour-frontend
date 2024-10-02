"use client"

import { useRegisterFormData } from "@/context/register";
import { useUserStore } from "@/context/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

// const interests = [
//   { "id": 1, "palabraClave": "Comida de Mar" },
//   { "id": 2, "palabraClave": "Mariscos" },
//   { "id": 3, "palabraClave": "Comida Típica" },
//   { "id": 4, "palabraClave": "Ambiente Caribeño" },
//   { "id": 5, "palabraClave": "Rooftop" },
//   { "id": 6, "palabraClave": "Atención al Cliente" },
//   { "id": 7, "palabraClave": "Cultura Local" },
//   { "id": 8, "palabraClave": "Naturaleza" },
//   { "id": 9, "palabraClave": "Turismo Aventura" },
//   { "id": 10, "palabraClave": "Eventos Culturales" },
//   { "id": 11, "palabraClave": "Deportes" },
//   { "id": 12, "palabraClave": "Vida Nocturna" },
//   { "id": 13, "palabraClave": "Gastronomía Internacional" },
//   { "id": 14, "palabraClave": "Historia" },
//   { "id": 15, "palabraClave": "Música en Vivo" },
//   { "id": 16, "palabraClave": "Arte y Artesanía" },
//   { "id": 17, "palabraClave": "Fotografía" },
//   { "id": 18, "palabraClave": "Caminatas" },
//   { "id": 19, "palabraClave": "Viajes Culturales" },
//   { "id": 20, "palabraClave": "Spa y Bienestar" },
//   { "id": 21, "palabraClave": "Familiar" },
//   { "id": 22, "palabraClave": "Escapadas de Fin de Semana" },
//   { "id": 23, "palabraClave": "Deportes Acuáticos" },
//   { "id": 24, "palabraClave": "Excursiones" },
//   { "id": 25, "palabraClave": "Talleres Creativos" },
//   { "id": 26, "palabraClave": "Cocina en Vivo" },
//   { "id": 27, "palabraClave": "Turismo Responsable" },
//   { "id": 28, "palabraClave": "Actividades en Grupo" },
//   { "id": 29, "palabraClave": "Rutas Gastronómicas" },
//   { "id": 30, "palabraClave": "Turismo de Naturaleza" },
//   { "id": 31, "palabraClave": "Ciclismo" },
//   { "id": 32, "palabraClave": "Paseos en Barco" },
//   { "id": 33, "palabraClave": "Trekking" },
//   { "id": 34, "palabraClave": "Escultura" },
//   { "id": 35, "palabraClave": "Observación de Aves" },
//   { "id": 36, "palabraClave": "Cerveza Artesanal" },
//   { "id": 37, "palabraClave": "Catas de Vino" },
//   { "id": 38, "palabraClave": "Turismo de Salud" },
//   { "id": 39, "palabraClave": "Cultura Popular" },
//   { "id": 40, "palabraClave": "Bailes Típicos" },
//   { "id": 41, "palabraClave": "Jardinería" },
//   { "id": 42, "palabraClave": "Mascotas" },
//   { "id": 43, "palabraClave": "Cine y Series" },
//   { "id": 44, "palabraClave": "Literatura" },
//   { "id": 45, "palabraClave": "Cocina Internacional" },
//   { "id": 46, "palabraClave": "Voluntariado" },
//   { "id": 47, "palabraClave": "Estilo de Vida Saludable" },
//   { "id": 48, "palabraClave": "Fotografía de Naturaleza" },
//   { "id": 49, "palabraClave": "Viajes de Aventura" },
//   { "id": 50, "palabraClave": "Cultura de Cafés" }
// ]

export default function RegisterInterest() {
  const router = useRouter()

  // Se piden los intereses almacenados en la bd al backend
  const [intereses, setIntereses] = useState([])

  useEffect(() => {
    const fecthIntereses = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/interest/all`)
      if (res.status === 200) {
        const data = await res.json()
        setIntereses(data)
      }
    }
    fecthIntereses()
  }, [])

  const { control, handleSubmit } = useForm({
    defaultValues: {
      intereses: [],
    },
  })

  // Extraemos la data almacendada del paso anterior
  const { formData } = useRegisterFormData()

  // Metodo que hace la peticion al backend para la creacion del usuario
  const signUpTurist = useUserStore(state => state.signUpTurist)

  const onSubmit = handleSubmit(async (data) => {
    const fullData = { ...formData, ...data }

    const success = await signUpTurist(fullData)

    if (success) {
      router.push("/")
    }
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-between h-full items-center p-8">
      <div className="h-[20%] text-center">
        <h1 className="text-4xl">Escoge tus intereses</h1>
        <p>Description</p>
      </div>

      <div className="flex items-start flex-wrap gap-4 max-h-[60%] overflow-y-auto py-4">
        {intereses.map((interes) => (
          <div key={interes.id}>
            <Controller
              name="intereses"
              control={control}
              render={({ field: { onChange, value } }) => (
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
              )}
            />
            <label
              htmlFor={`check-${interes.id}`}
              className="cursor-pointer px-4 py-2 rounded-full transition-colors duration-300 bg-gray-200 
                peer-checked:bg-customYellow/50"
            >
              {interes.palabraClave}
            </label>
          </div>
        ))}
      </div>

      <button type="submit" 
        className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl px-4 py-3 w-44 mx-auto"
      >
        Finalizar registro
      </button>
    </form>
  )
}
