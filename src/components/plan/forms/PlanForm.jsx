"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Controller, useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { FiEdit, FiPlusCircle } from "react-icons/fi"
import { MdOutlineCancel } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { ErrorMessage } from "@/components"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { createPlan, updatePlan } from "@/services/plan"
import { ImagesPlan } from "./ImagesPlan"
import { RHFMultiselect } from "@/components"
// import InteractiveMap from "./InteractiveMap"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { fetchCharacteristics } from "@/services/utils"
import clsx from "clsx"
import { cn } from "@/lib/utils"

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false, // Desactiva el SSR para este componente
})

export function PlanForm({ plan, closeModal }) {
  const router = useRouter()

  const [caracteristicasBd, setCaracteristicasBd] = useState([])

  const formDefaultValues = plan
    ? {
        nombre: plan.nombre,
        descripcion: plan.descripcion,
        categoria: plan.categoria,
        gratis: plan.rangoMinDinero === "Gratis",
        rangoMinDinero: parseInt(plan.rangoMinDinero),
        rangoMaxDinero: parseInt(plan.rangoMaxDinero),
        imagenes: {
          files: plan.imagenes
            ? plan.imagenes.map((preview) => ({ preview, isNew: false }))
            : [],
          miniatura:
            plan.imagenes?.length > 0
              ? plan.imagenes.findIndex((img) => img === plan.miniatura)
              : 0,
        },
        ubicacion: plan.ubicacion,
        caracteristicas: plan.caracteristicas
          ? plan.caracteristicas.map((item) => item.id?.toString())
          : [],
      }
    : {
        nombre: "",
        descripcion: "",
        categoria: "",
        gratis: false,
        rangoMinDinero: "",
        rangoMaxDinero: "",
        imagenes: { files: [], miniaturaSelect: 0 },
        ubicacion: null,
        miniaturaSelect: "",
        caracteristicas: [],
      }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    control,
    setValue,
  } = useForm({ defaultValues: { ...formDefaultValues } })

  const isFree = watch("gratis")

  useEffect(() => {
    if (isFree) {
      setValue("rangoMinDinero", "Gratis")
      setValue("rangoMaxDinero", "Gratis")
    }
  }, [isFree, setValue])

  const resetForm = () => {
    reset()

    if (!plan) {
      closeModal()
    } else {
      router.push("/category/activities")
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()

    Object.keys(data).forEach((key) => {
      if (key === "imagenes") {
        // Las imagenes que no son nuevas son añadidas al campo imagenesExistentes en el formData (su url de acceso en el servidor)
        data[key].files
          .filter((img) => !img.isNew) // <- NO NUEVAS
          .forEach((img, index) => {
            formData.append(`imagenesExistentes[${index}]`, img.preview)
          })

        // Las imagenes nuevas son añadidas al campo imagenesFiles en el formData (su multipart file)
        data[key].files
          .filter((img) => img.isNew) // <- NUEVAS
          .forEach((image, index) => {
            formData.append(`imagenesFiles[${index}]`, image.file)
          })

        formData.append("miniaturaSelect", data[key].miniatura)
      } else if (key === "caracteristicas") {
        data[key].forEach((caracteristica, index) => {
          formData.append(`caracteristicas[${index}]`, caracteristica)
        })
      } else if (key === "ubicacion") {
        formData.append("latitud", data[key].latitud)
        formData.append("longitud", data[key].longitud)
        formData.append("direccion", data[key].direccion)
      } else {
        formData.append(key, data[key])
      }
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacteristics()
      setCaracteristicasBd(data)
    }

    fetchData()
  }, [])

  const styleInputs = cn(
    "text-gray-600 block w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white"
  )
  const styleSelect = cn(
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white"
  )

  return (
    <form onSubmit={onSubmit} className="dark:text-white">
      <div className="container flex flex-col sm:flex-row gap-6 pt-5 pb-5">
        <div className="flex flex-col items-stretch gap-3 text-center w-full sm:w-1/2">
          {/* Preview imagenes del input */}
          <ImagesPlan
            control={control}
            name="imagenes"
            rules={{
              validate: (value) => {
                return (
                  value.files.length <= 4 || "No puedes subir más de 4 imágenes"
                )
              },
            }}
          />

          {/* Input de tipo mapa para la ubicacion */}
          <div className="relative aspect-square w-full flex items-center justify-center mb-4">
            <Controller
              name="ubicacion"
              control={control}
              render={({ field: { value, onChange } }) => (
                <InteractiveMap
                  value={value}
                  onChange={(newLocation) => {
                    console.log({ newLocation, value })
                    onChange(newLocation)
                  }}
                />
              )}
            />
          </div>
        </div>

        {/* Inputs de texto */}
        <div className=" w-full sm:w-1/2 space-y-4">
          <div>
            <Label>Categoria</Label>
            <select
              className={`${styleSelect} ${styleInputs}`}
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
              className={styleInputs}
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
              className={styleInputs}
            />
            {errors.descripcion && (
              <ErrorMessage message={errors.descripcion.message} />
            )}
          </div>

          <div>
            <div className="flex flex-row-reverse justify-between mb-1 sm:flex-col sm:gap-4 md:flex-row-reverse">
              <div className="flex items-center gap-1 justify-end">
                <Input
                  id="in-gratis"
                  type="checkbox"
                  className="h-3 w-3"
                  {...register("gratis")}
                />
                <Label htmlFor="in-gratis">El plan es gratis?</Label>
              </div>
              <Label htmlFor="priceMin">Rango minimo de dinero</Label>
            </div>
            <Input
              type={isFree ? "text" : "number"}
              disabled={isFree}
              min="1"
              id="priceMin"
              {...register("rangoMinDinero", {
                required: {
                  value: true,
                  message: "Rango minimo de dinero es requerido",
                },
              })}
              className={styleInputs}
            />
            {errors.rangoMinDinero && (
              <ErrorMessage message={errors.rangoMinDinero.message} />
            )}
          </div>

          <div>
            <Label htmlFor="priceMax">Rango maximo de dinero</Label>

            <Input
              type={isFree ? "text" : "number"}
              disabled={isFree}
              min="1"
              id="priceMax"
              {...register("rangoMaxDinero", {
                required: {
                  value: true,
                  message: "Rango maximo de dinero es requerido",
                },
                validate: (value) => {
                  if (isFree) return true
                  const rangoMin = parseFloat(watch("rangoMinDinero"))
                  const rangoMax = parseFloat(value)

                  if (rangoMin < rangoMax) return true

                  return "El rango máximo no puede ser menor al rango mínimo"
                },
              })}
              className={styleInputs}
            />

            {errors.rangoMaxDinero && (
              <ErrorMessage message={errors.rangoMaxDinero.message} />
            )}
          </div>

          <div>
            <Label htmlFor="Caracteristicas">Caracteristicas</Label>
            <RHFMultiselect
              name={"caracteristicas"}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Caracteristicas son requeridas",
                },
                validate: (value) => {
                  return (
                    value?.length >= 3 ||
                    "Seleccione por lo menos 3 caracteristicas"
                  )
                },
              }}
              options={caracteristicasBd}
              notFoundMessage={"No se encontraron caracteristicas"}
            />
            {errors.caracteristicas && (
              <ErrorMessage message={errors.caracteristicas.message} />
            )}
          </div>

          <div>
            <h1 className="text-center mt-12">¿Desea guardar los cambios?</h1>
            <div className="btns flex justify-around mt-10">
              <Button
                type="button"
                onClick={() => resetForm()}
                className="sm:w-[40%] sm:text-base w-[45%] text-xs bg-[#37B1E2] hover:hover:bg-light-blue-800 rounded-full dark:text-white"
              >
                <MdOutlineCancel className="mr-1" />
                Cancelar
              </Button>
              <Button
                type="submit"
                className=" sm:w-[40%] sm:text-base w-[45%] text-xs bg-[#37B1E2] hover:hover:bg-light-blue-800 rounded-full dark:text-white"
              >
                {plan ? (
                  <>
                    <FiEdit className="mr-1" /> Modificar
                  </>
                ) : (
                  <>
                    <FiPlusCircle className="mr-1" /> Agregar
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
