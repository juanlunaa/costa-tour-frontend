"use client"

import { useRegisterFormData } from "@/context/register";
import { useUserStore } from "@/context/user";
import useUtilsData from "@/hooks/useUtilsData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

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
  // Se extrae la data almacendada del paso anterior
  const { formData } = useRegisterFormData()
  const router = useRouter()

  // Si la data del paso anterior esta vacia quiere decir que ese paso no se realizao
  // por lo tanto mandamos al usuario a esa ruta
  useEffect(() => {
    if (!formData || formData === undefined ) {
      // Se da un tiempo a que el componente termine de cargar todo (useEffects y useStates) antes de hacer la redireccion
      // Mientras este tiempo transcurre se mostrara un loading
      setTimeout(() => {
        router.push("/auth/register/turist")
      }, 1000)
    }
  }, [formData, router])

  const { interesesBd } = useUtilsData() // <- Intereses traidos del backend

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      intereses: [],
    },
  })

  // Sacamos de la store el metodo para hacer el registro del usuario
  const signUpTurist = useUserStore(state => state.signUpTurist)

  const onSubmit = handleSubmit(async (data) => {
    const fullData = { ...formData, ...data } // <- Se añaden los intereses a la informacion obtenida en el primer paso
    const success = await signUpTurist(fullData)
    console.log(success)
    if (success) {
      toast.success("Cuenta creada correctamente, por favor inicie sesion")
      router.push("/auth/login")
    }
  })

  // Si la data esta vacia mostramos este componente loading mientras se hace la redireccion al
  // paso 1 del registro
  if (!formData || formData === undefined) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
          <div className="animate-spin h-16 w-16 border-4 border-customBlue border-t-transparent rounded-full mb-4"></div>
          <p className="text-lg text-gray-700">Cargando...</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-between h-full items-center p-8">
      <div className="h-[20%] text-center">
        <h1 className="text-4xl">Escoge tus intereses</h1>
        <p>Selecciona por lo menos 3</p>
      </div>

      <div className="flex items-start flex-wrap gap-4 max-h-[60%] overflow-y-auto py-4">
        {interesesBd.map((interes) => (
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

      <button
        type="submit" 
        disabled={watch("intereses").length < 3}
        className="text-white font-bold bg-gradient-to-r from-customBlue to-customOrange rounded-2xl px-4 py-3 w-44 mx-auto disabled:opacity-70"
      >
        Finalizar registro
      </button>
    </form>
  )
}
