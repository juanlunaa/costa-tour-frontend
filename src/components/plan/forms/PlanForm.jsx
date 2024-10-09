"use client"

import { ImageIcon } from "lucide-react"
import Image from "next/image"
import { useCallback, useId, useState } from "react"
import { IoIosClose } from "react-icons/io"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useController, useForm } from "react-hook-form"
import { FaUpload } from "react-icons/fa"
import { Textarea } from "@/components/ui/textarea"
import MultiCaracterist from "@/components/ui/multi-select/MultiSelect"
import { FiEdit } from "react-icons/fi"
import { MdOutlineCancel } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { BACKEND_SERVER } from "@/env"
import { ErrorMessage } from "@/components"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { createPlan, updatePlan } from "@/services/plan"

const containerStyle = {
  width: "100%",
  height: "100%",
}
const center = {
  lat: 10.378,
  lng: -75.477,
}

export const InputMap = ({ initialMarkerLocation, setInputUbicacion }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD8aMwPr-AAPEW1j9U8ew6mSN05USal5Po",
  })

  const [map, setMap] = useState(null)
  const [markerPosition, setMarkerPosition] = useState(
    {
      lat: initialMarkerLocation?.latitud,
      lng: initialMarkerLocation?.longitud,
    } || null
  )

  const onLoad = useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const placeMarkerAndPanTo = async (event) => {
    const lat = event.latLng.lat()
    const lng = event.latLng.lng()
    setMarkerPosition({ lat, lng })

    const address = await getAddressFromLatLng({ lat, lng })

    setInputUbicacion({ lat, lng, dir: address })
  }

  const getAddressFromLatLng = async ({ lat, lng }) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`

      const res = await fetch(url)

      const resJson = await res.json()

      const address = resJson?.display_name

      return address
    } catch (err) {
      console.error(
        `Error al obtener la direccion con latitud ${lat} y longitud ${lng}`
      )
    }
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={(e) => placeMarkerAndPanTo(e)}
    >
      {markerPosition !== null ? (
        <Marker position={markerPosition}></Marker>
      ) : (
        <></>
      )}
    </GoogleMap>
  ) : (
    <>
      <h1>Hubo un problema al cargar el mapa</h1>
    </>
  )
}

export const PreviewImagesPlan = ({
  initialMiniaturaSelected,
  setInputMiniatura,
  control,
  name,
  rules,
}) => {
  const inputImageId = useId()

  /**
   * Se usa el hook useContoller() para conectarnos con el estado del formulario por medio del control
   *  y el nombre del control que recibe el componente por parametro
   *
   * useController({
   *  name, -> nombre del control al que se quiere acceder
   *  control, -> control del formulario
   *  defaultValue: [], -> valor por defecto de las imagenes (vacio)
   * })
   */
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: [],
  })

  // Se define cual es la miniatura del plan en caso de que este siendo editado
  const formatedMiniaturaSelected = value?.findIndex((img) => {
    return (
      `${BACKEND_SERVER}${img.url}` ===
      `${BACKEND_SERVER}${initialMiniaturaSelected}`
    )
  })

  const [miniatura, setMiniatura] = useState(
    formatedMiniaturaSelected === -1 ? 0 : formatedMiniaturaSelected
  )

  setInputMiniatura(miniatura)

  // Metodo para controlar cuando se suban las imagenes al input
  const handleFileChange = (e) => {
    // Se convierte en un array las imagenes que vienen desde el evento del input
    // para poder itererar sobre ellas
    const newFiles = Array.from(e.target.files)
    // Iteramos sobre las imagenes y transformamos a un array de objetos con el valor del input
    // y la url de la imagen para poder previsualizarla
    // [{ file, preview }]
    const newImages = newFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      isNew: true,
    }))

    // Se actualiza el estado del input con el metodo onChange que nos proporciona el useController
    // para interactuar con el form
    onChange([...value, ...newImages])
    console.log([...value, ...newImages])
  }

  const handleMiniatura = (index) => {
    setMiniatura(index)
    setInputMiniatura(index)
  }

  // Metodo para controlar cuando se elimina una imagen del preview
  const handleRemoveImage = (index) => {
    // Se hace una copia de lo que esta en el estado del form (para este input)
    const newImages = [...value]

    // Se revoca (elimina) la URL que se habia generado para hacer el preview
    URL.revokeObjectURL(newImages[index].preview)

    // Eliminamos la imagen segun el index
    newImages.splice(index, 1)

    // Se actualiza el estado del input
    onChange(newImages)
    if (miniatura === index && miniatura > 0) {
      const newMiniatura = miniatura - 1
      setMiniatura(newMiniatura)
      setInputMiniatura(newMiniatura)
    }
  }

  return (
    <>
      <div>
        <h1>Imagenes del Plan</h1>
        <p>(Max. 4)</p>
      </div>
      <div className="aspect-video bg-muted flex flex-col items-center justify-center relative rounded-lg overflow-hidden">
        {value.length > 0 ? (
          <>
            <Image
              src={
                value[miniatura]?.isNew
                  ? value[miniatura].preview
                  : `${BACKEND_SERVER}${value[miniatura].url}`
              }
              alt={`preview thumbnail`}
              fill
              className="max-h-full max-w-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-white/50 py-1 px-2 rounded-3xl">
              Esta sera la miniatura del plan
            </span>
          </>
        ) : (
          <>
            <ImageIcon className="sm:w-16 sm:h-16 mb-2 w-8 h-8 " />
            <span className="sm:text-base text-xs">
              No hay imágenes cargadas
            </span>
          </>
        )}
      </div>
      <div className="grid grid-cols-4 gap-3">
        {value.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden transition-all hover:scale-105 hover:cursor-pointer"
          >
            <Image
              src={img.isNew ? img.preview : `${BACKEND_SERVER}${img.url}`}
              alt={`Preview ${index}`}
              fill
              className="max-h-full max-w-full object-cover"
              onClick={() => handleMiniatura(index)}
            />
            <span
              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-700"
              onClick={() => handleRemoveImage(index)}
            >
              <IoIosClose />
            </span>
          </div>
        ))}
        {value.length === 0 &&
          Array.from({ length: Math.max(0, 4 - value.length) }).map(
            (_, index) => (
              <div
                key={`empty-${index}`}
                className="aspect-square bg-muted flex items-center justify-center"
              >
                <ImageIcon className="w-8 h-8 text-muted-foreground" />
              </div>
            )
          )}
      </div>
      <Label
        htmlFor={inputImageId}
        className="mx-auto flex gap-2 bg-customBlue text-white p-4 rounded-full cursor-pointer hover:bg-light-blue-800"
      >
        <FaUpload /> <span>Elija sus archivos</span>
      </Label>
      <Input
        id={inputImageId}
        type="file"
        multiple
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      {error && <ErrorMessage message={error.message} />}
    </>
  )
}

export function PlanForm({ plan, closeModal }) {
  const router = useRouter()

  const formDefaultValues = plan
    ? {
        ...plan,
        imagenesFiles: plan.imagenes
          ? plan.imagenes.map((url) => ({ url, isNew: false }))
          : [],
      }
    : {
        caracteristicas: [],
        miniaturaSelect: "",
        latitud: "",
        longitud: "",
        direccion: "",
      }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    control,
  } = useForm({ defaultValues: { ...formDefaultValues } })

  const setInputMiniatura = (miniatura) => {
    setValue("miniaturaSelect", miniatura)
  }

  const setInputUbicacion = ({ lat, lng, dir }) => {
    setValue("latitud", lat)
    setValue("longitud", lng)
    setValue("direccion", dir)
  }

  const setInputCaracteristicas = (caracteristicasSeleccionadas) => {
    setValue("caracteristicas", caracteristicasSeleccionadas)
  }

  const resetForm = () => {
    reset()

    if (!plan) {
      closeModal()
    } else {
      router.push("/category/activities")
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    data.caracteristicas = data.caracteristicas.map((c) => c.value)

    if (data.latitud === "" || data.longitud === "" || data.direccion === "") {
      toast.error("Seleccione una ubicacion")
      return
    }

    if (data.caracteristicas.length < 3) {
      toast.error("Seleccione una por lo menor 3 caracteristicas")
      return
    }

    const formData = new FormData()

    Object.keys(data).forEach((key) => {
      if (key === "imagenesFiles") {
        // Las imagenes que no son nuevas son añadidas a un array (su url de acceso en el servidor)
        // y seran añadidas al campo imagenesExistentes en el formData
        data[key]
          .filter((img) => !img.isNew) // <- Va a filtrar las que no son nuevas
          .forEach((img, index) => {
            formData.append(`imagenesExistentes[${index}]`, img.url)
          })

        // Las imagenes nuevas son añadidas al campo imagenesFiles en el formData (su multipart file)
        data[key]
          .filter((img) => img.isNew)
          .forEach((image, index) => {
            formData.append(`imagenesFiles[${index}]`, image.file)
          })
      } else if (key === "caracteristicas") {
        return
      } else {
        formData.append(key, data[key])
      }
    })

    data.caracteristicas.forEach((caracteristica, index) => {
      formData.append(`caracteristicas[${index}]`, caracteristica)
    })

    // Para ve la info que va en el form data
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`)
    }

    if (!plan) {
      const { status } = await createPlan(formData)

      if (status === 200) {
        toast.success(
          `El plan ${data.nombre} ha sido creado satisfactoriamente`
        )
        resetForm()
      } else {
        toast.error("Ha ocurrido un error al momento de crear el plan :'(")
      }
    }

    if (plan) {
      const { res, status } = await updatePlan({ planId: plan.id, formData })

      if (status === 200) {
        toast.success(
          `El plan ${data.nombre} ha sido actualizado satisfactoriamente`
        )
        router.push("/category/activities")
      } else {
        console.error(res)
        toast.error("Ha ocurrido un error al momento de actualizar el plan :'(")
      }
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="container flex flex-col sm:flex-row gap-6 pt-5 pb-5">
        <div className="flex flex-col items-stretch gap-3 text-center w-full sm:w-1/2">
          {/* Preview imagenes del input */}
          <PreviewImagesPlan
            setInputMiniatura={setInputMiniatura}
            initialMiniaturaSelected={plan?.miniatura}
            control={control}
            name="imagenesFiles"
            rules={{
              validate: (value) => {
                return value.length <= 4 || "No puedes subir más de 4 imágenes"
              },
            }}
          />

          {/* Input de tipo mapa para la ubicacion */}
          <div className="relative aspect-square w-full bg-muted flex items-center justify-center mb-4">
            <InputMap
              setInputUbicacion={setInputUbicacion}
              initialMarkerLocation={plan?.ubicacion}
            />
          </div>
        </div>

        {/* Inputs de texto */}
        <div className=" w-full sm:w-1/2 space-y-4">
          <div>
            <Label>Categoria</Label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("categoria", {
                required: {
                  value: true,
                  message: "Categoria es requerida",
                },
              })}
            >
              <option value="">Selecciona una categoria</option>
              <option value="RESTAURANTE">Restaurantes</option>
              <option value="SITIO_TURISTICO">Sitios Turisticos</option>
              <option value="PLAYA">Playas</option>
              <option value="ALOJAMIENTO">Alojamientos</option>
              <option value="EXTREMO">Extremos</option>
            </select>
            {errors.categoria && (
              <ErrorMessage message={errors.categoria.message} />
            )}
          </div>

          <div>
            <Label htmlFor="name">Nombre del plan</Label>
            <Input
              id="name"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
              })}
            />
            {errors.nombre && <ErrorMessage message={errors.nombre.message} />}
          </div>

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              {...register("descripcion", {
                required: {
                  value: true,
                  message: "Descripcion es requerida",
                },
              })}
            />
            {errors.descripcion && (
              <ErrorMessage message={errors.descripcion.message} />
            )}
          </div>

          <div>
            <Label htmlFor="priceMin">Rango minimo de dinero</Label>
            <Input
              type="number"
              min="1"
              id="priceMin"
              {...register("rangoMinDinero", {
                required: {
                  value: true,
                  message: "Rango minimo de dinero es requerido",
                },
              })}
            />
            {errors.rangoMinDinero && (
              <ErrorMessage message={errors.rangoMinDinero.message} />
            )}
          </div>

          <div>
            <Label htmlFor="priceMax">Rango maximo de dinero</Label>
            <Input
              type="number"
              min="1"
              id="priceMax"
              {...register("rangoMaxDinero", {
                required: {
                  value: true,
                  message: "Rango maximo de dinero es requerido",
                },
                validate: (value) => {
                  const rangoMin = watch("rangoMinDinero")

                  if (rangoMin < value) return true

                  return "El rango maximo no puede ser menor al rango minimo"
                },
              })}
            />
            {errors.rangoMaxDinero && (
              <ErrorMessage message={errors.rangoMaxDinero.message} />
            )}
          </div>

          <div>
            <Label htmlFor="Caracteristicas">Caracteristicas</Label>
            <MultiCaracterist
              setInputCaracteristicas={setInputCaracteristicas}
              initialSelection={plan?.caracteristicas}
            />
          </div>

          <div>
            <h1 className="text-center mt-12">¿Desea guardar los cambios?</h1>
            <div className="btns flex justify-around mt-10">
              <Button
                type="button"
                onClick={() => resetForm()}
                className="sm:w-[40%] sm:text-base w-[45%] text-xs bg-[#37B1E2] hover:bg-[#34c6ffd0] rounded-full"
              >
                <MdOutlineCancel className="mr-1" />
                Cancelar
              </Button>
              <Button
                type="submit"
                className=" sm:w-[40%] sm:text-base w-[45%] text-xs bg-[#37B1E2] hover:bg-[#34c6ffd0] rounded-full"
              >
                <FiEdit className="mr-1" />
                {plan ? "Modificar Plan" : "Agregar Plan"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
