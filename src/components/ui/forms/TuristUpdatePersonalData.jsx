"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useUserStore } from '@/context/user'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import useLocationData from '@/hooks/useLocationData'
import { useEffect } from 'react'
import { toast } from 'sonner'

export const TuristUpdatePersonalData = () => {
  // Se extrae la info del usuario de la store
  const { user, updateProfileTurist } = useUserStore((state) => state)

  // Se descartan atributos innecesarios para este formulario
  const { avatar, userId, tipoUsuario, edad, ciudad, estado, pais, ...otros } = user

  // Se definin los atributos necesarios para inicializar la informacion del formulario
  const formDefaultValues = {
    ...otros,
    idCiudad: user.ciudad.id,
    estado: user.estado.id,
    pais: user.pais.id
  }

  const { 
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm()

  const { locationData, handleChange, updateLocationSelect } = useLocationData()

  // Cuando la info de la store cargue o cambie, se va a resetar el formulario con la informacion por defecto
  // y se le actualiza las ubicaciones asociadas al usuario para que haga las peticiones
  useEffect(() => {
    reset(formDefaultValues)
    updateLocationSelect({ estado: formDefaultValues.estado, pais: formDefaultValues.pais })
  }, [user])

  /**
   * El objetivo de este useEffect es recargar el formulario una vez se haya pedido la info de los estados y ciudades
   * porque inicialmente siempre se pediran los paises, pero como toca esperar a que cargue la data de la store
   * (que es donde dice a que pais, estado y ciudad esta asociado al usuario) entonces toca hacer un rellamado a la api
   * cuando esta info cargue y toca reiniciar el formulario para que se aplique la seleccion con los selects
   */
  useEffect(() => {
    const prevState = watch()
    reset(prevState)
  }, [locationData])

  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("text-gray-600 block w-full bg-[#F4F4F5]")

  const onSubmit = handleSubmit(async (data) => {
    // Si no se ha modificacido nd no se ejecuta el fecth
    if (JSON.stringify(data) === JSON.stringify(formDefaultValues)) {
      toast.info("No ha ingresado nueva informacion")
      return
    }

    const fetchData = {
      dni: data.dni,
      nombre: data.nombre,
      apellido: data.apellido,
      fechaNacimiento: data.fechaNacimiento,
      idCiudad: Number(data.idCiudad),
      intereses: data.intereses.map(interes => interes.id)
    }

    const success = await updateProfileTurist({ dni: user.dni, data: fetchData })

    if (success) {
      toast.success("Su informacion ha sido actualizada correctamente")
    } else {
      toast.success("Ha ocurrido un error al momento de actualizar si informacion :'(")
    }

  })

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 w-[85%] mt-[2%] mx-auto">
      <h1 className="font-bold mt-12 text-sm sm:text-base md:text-xl lg:text-2xl">Información Personal</h1>

      <div className="space-y-2">
        <Label htmlFor="nombre" className={styleLabels}>Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          className={styleInputs}
          {...register("nombre", { 
            required: {
              value: true,
              message: "Nombre es requerido"
            }
          })}
        />
        { errors.nombre && <span className="text-xs text-red-600 font-bold">{errors.nombre.message}</span> }
      </div>

      <div className="space-y-2">
        <Label htmlFor="apellido" className={styleLabels}>Apellido</Label>
        <Input
          type='text'
          id="apellido"
          name="apellido"
          className={styleInputs}
          {...register("apellido", { 
            required: {
              value: true,
              message: "Apellido es requerido"
            }
          })}
        />
        { errors.apellido && <span className="text-xs text-red-600 font-bold">{errors.apellido.message}</span> }
      </div>

      <div className="space-y-2">
        <Label htmlFor="dni" className={styleLabels}>N° de documento</Label>
        <Input
          id="dni"
          name="dni"
          disabled
          className={`${styleInputs} disabled:opacity-100`}
          {...register("dni") }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fechaNacimiento" className={styleLabels}>Fecha de Nacimiento</Label>
        <Input
          id="fechaNacimiento"
          name="fechaNacimiento"
          type="date"
          className={styleInputs}
          {...register("fechaNacimiento", { 
            required: {
              value: true,
              message: "Fecha de nacimiento es requerida"
            }
          })}
        />
          { errors.fechaNacimiento && <span className="text-xs text-red-600 font-bold">{errors.fechaNacimiento.message}</span> }
      </div>

      <div className="space-y-2">
        <Label htmlFor="ciudad" className={styleLabels}>Ciudad</Label>
        <select
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("idCiudad", { 
            required: {
              value: true,
              message: "Ciudad es requerida"
            }
          })}
        >
          <option value="">
            Selecciona una ciudad
          </option>
          {locationData.ciudades.map((c) => (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        { errors.idCiudad && <span className="text-xs text-red-600 font-bold">{errors.idCiudad.message}</span> }
      </div>

      <div className="space-y-2">
        <Label htmlFor="estado" className={styleLabels}>Estado</Label>
        <select
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("estado", {
            required: {
              value: true,
              message: "Estado es requerido"
            },
            onChange: (event) => {
              setValue("idCiudad", "")
              handleChange(event)
            }
          })}
        >
          <option value="">
            Selecciona un estado
          </option>
          {locationData.estados.map((e) => (
            <option value={e.id} key={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        { errors.estado && <span className="text-xs text-red-600 font-bold">{errors.estado.message}</span> }
      </div>

      <div className="space-y-2">
        <Label htmlFor="pais" className={styleLabels}>Pais</Label>
        <select
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("pais", {
            required: {
              value: true,
              message: "Pais es requerido"
            },
            onChange: (event) => {
              setValue("estado", "")
              setValue("idCiudad", "")
              handleChange(event)
            }
          })}
        >
          <option value="">
            Selecciona un pais
          </option>
          {locationData.paises.map((p) => (
            <option value={p.id} key={p.id}>
              {p.name}
            </option>
          ))}
        </select>
        { errors.pais && <span className="text-xs text-red-600 font-bold">{errors.pais.message}</span> }
      </div>

      <button
        type="submit"
        className={`${styleLabels} bg-blueProfile w-[50%] sm:w-[40%] mt-5 py-4`}
      >
        Guardar
      </button>
    </form>
  )
}
