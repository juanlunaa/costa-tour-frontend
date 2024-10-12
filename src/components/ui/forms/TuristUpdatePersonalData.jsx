"use client"

import { useFormContext } from "react-hook-form"
import useLocationData from "@/hooks/useLocationData"
import useUserStore from "@/hooks/useUserStore"
import clsx from "clsx"
import { updatePersonalDataTurist } from "@/services/user"
import { ErrorMessage, RHFComboboxLocation } from "@/components"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const TuristUpdatePersonalData = () => {
  // Se extrae la info del usuario de la store
  const { user, setUser } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext()

  const { locationData } = useLocationData({
    inputPais: watch("pais"),
    inputEstado: watch("estado"),
  })

  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("text-gray-600 block w-full bg-[#F4F4F5]")

  const onSubmit = handleSubmit(async (data) => {
    // => FALTA VALIDAR SI LA INFO ES IGUAL A LA INICIAL
    // if (JSON.stringify(data) === JSON.stringify(defaultValues)) {
    //   toast.info("No ha ingresado nueva informacion")
    //   return
    // }

    // Se parsea la data al formato que recibe el endpoint
    const updateTuristData = {
      dni: data.dni,
      nombre: data.nombre,
      apellido: data.apellido,
      fechaNacimiento: data.fechaNacimiento,
      idCiudad: Number(data.ciudad),
      intereses: data.intereses,
    }

    const { res, status } = await updatePersonalDataTurist({
      dni: data.dni,
      data: updateTuristData,
    })

    if (status === 200) {
      setUser(res)
      toast.success("Su informacion ha sido actualizada correctamente")
    } else {
      toast.error(
        "Ha ocurrido un error al momento de actualizar si informacion :'("
      )
    }
  })

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-4 w-[85%] mt-[2%] mx-auto"
    >
      <h1 className="font-bold mt-12 text-sm sm:text-base md:text-xl lg:text-2xl">
        Información Personal
      </h1>

      <div className="space-y-2">
        <Label htmlFor="nombre" className={styleLabels}>
          Nombre
        </Label>
        <Input
          id="nombre"
          name="nombre"
          className={styleInputs}
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
          })}
        />
        {errors.nombre && <ErrorMessage message={errors.nombre.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="apellido" className={styleLabels}>
          Apellido
        </Label>
        <Input
          type="text"
          id="apellido"
          name="apellido"
          className={styleInputs}
          {...register("apellido", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
          })}
        />
        {errors.apellido && <ErrorMessage message={errors.apellido.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="dni" className={styleLabels}>
          N° de documento
        </Label>
        <Input
          id="dni"
          name="dni"
          disabled
          className={`${styleInputs} disabled:opacity-100`}
          {...register("dni")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fechaNacimiento" className={styleLabels}>
          Fecha de Nacimiento
        </Label>
        <Input
          id="fechaNacimiento"
          name="fechaNacimiento"
          type="date"
          className={styleInputs}
          {...register("fechaNacimiento", {
            required: {
              value: true,
              message: "Fecha de nacimiento es requerida",
            },
          })}
        />
        {errors.fechaNacimiento && (
          <ErrorMessage message={errors.fechaNacimiento.message} />
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="ciudad" className={styleLabels}>
          Ciudad
        </Label>
        <RHFComboboxLocation
          name="ciudad"
          options={locationData.ciudades}
          placeholderSelect="Selecciona una ciudad"
          notFoundMessage={
            locationData.ciudades.length === 0
              ? "Selecciona un estado"
              : "No se encontraron ciudades"
          }
        />
        {errors.ciudad && <ErrorMessage message={errors.ciudad.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="estado" className={styleLabels}>
          Estado
        </Label>
        <RHFComboboxLocation
          name="estado"
          options={locationData.estados}
          placeholderSelect="Selecciona un estado/provincia"
          notFoundMessage={
            locationData.estados.length === 0
              ? "Selecciona un pais"
              : "No se encontraron estados"
          }
        />
        {errors.estado && <ErrorMessage message={errors.estado.message} />}
      </div>

      <div className="space-y-2">
        <Label htmlFor="pais" className={styleLabels}>
          Pais
        </Label>
        <RHFComboboxLocation
          name="pais"
          options={locationData.paises}
          placeholderSelect="Selecciona un pais"
          notFoundMessage="No se encontraron paises"
        />
        {errors.pais && <ErrorMessage message={errors.pais.message} />}
      </div>

      <button
        type="submit"
        className={`${styleLabels} bg-yellowProfile w-[50%] sm:w-[40%] mt-5 py-4`}
      >
        Guardar
      </button>
    </form>
  )
}
