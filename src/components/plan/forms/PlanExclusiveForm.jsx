"use client"

import { Controller, useForm } from "react-hook-form"
import { ImagesPlan } from "./ImagesPlan"
// import InteractiveMap from "./InteractiveMap"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  ErrorMessage,
  RHFDynamicText,
  RHFMultiselect,
  RHFScheduleSelector,
} from "@/components"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MdOutlineCancel } from "react-icons/md"
import { FiEdit, FiPlusCircle } from "react-icons/fi"
import { useEffect, useState } from "react"
import { fetchCharacteristics } from "@/services/utils"
import { ModalSchedule } from "./ModalSchedule"
import dynamic from "next/dynamic"

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false, // Desactiva el SSR para este componente
})

export const PlanExclusiveForm = () => {
  const [caracteristicasBd, setCaracteristicasBd] = useState([])

  const formDefaultValues = {
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: 0,
    imagenes: { files: [], miniaturaSelect: 0 },
    ubicacion: null,
    notaUbicacion: "",
    serviciosIncluidos: ["", ""],
    expectativa: "",
    informacionAdicional: ["", ""],
    disponibilidad: {
      Lunes: [],
      Martes: [],
      Miercoles: ["08:00"],
      Jueves: [],
      Viernes: [],
      Sabado: [],
      Domingo: [],
    },
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
  } = useForm({ defaultValues: formDefaultValues })

  const resetForm = () => {
    reset()

    // if (!plan) {
    //   closeModal()
    // } else {
    //   router.push("/category/activities")
    // }
  }

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
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white active:outline-1"
  )

  return (
    <form className="dark:text-white">
      <div className="container flex flex-col sm:flex-row gap-6 h-fit">
        <div className="flex flex-col items-stretch gap-3 w-full sm:w-1/2">
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
          <div className="relative w-full grow flex items-center justify-center">
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

          <div>
            <Label htmlFor="note">Nota de ubicación</Label>
            <Textarea
              id="note"
              {...register("notaUbicacion")}
              className={styleInputs}
            />
          </div>
        </div>

        {/* Inputs de texto */}
        <div className=" w-full sm:w-1/2 space-y-4">
          <div>
            <Label>Categoria Exclusiva</Label>
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
              <option value="EXTREMO">Extremos</option>
              <option value="PARTY_NIGHT">Party Nights</option>
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
            <Label htmlFor="price">Precio</Label>
            <Input
              type="number"
              min="1"
              id="price"
              {...register("precio", {
                required: {
                  value: true,
                  message: "Precio es requerido",
                },
              })}
              className={styleInputs}
            />
            {errors.rangoMinDinero && (
              <ErrorMessage message={errors.rangoMinDinero.message} />
            )}
          </div>

          <div>
            <Label htmlFor="expectation">¿Qué se espera del plan?</Label>
            <Textarea
              id="expectation"
              {...register("expectativa")}
              className={styleInputs}
            />
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
                    value.length >= 3 ||
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
            <Label>Servicios Incluidos</Label>
            <RHFDynamicText
              name="serviciosIncluidos"
              control={control}
              placeholder="Ingrese un servicio"
              maxFields={10}
              maxFieldsMessage="Solo se pueden agregar 10 servicios"
            />
          </div>

          <div>
            <Label>Informacion Adicional</Label>
            <RHFDynamicText
              name="informacionAdicional"
              control={control}
              placeholder="Añada información adicional"
              maxFields={10}
              maxFieldsMessage="Solo se pueden agregar 10 campos"
            />
          </div>

          <div>
            <ModalSchedule name="disponibilidad" control={control} />
          </div>
        </div>
      </div>
      <div className="sm:max-w-2xl mx-auto">
        <div className="btns flex justify-around mt-10">
          <Button
            type="button"
            onClick={() => resetForm()}
            className="sm:w-[40%] sm:text-base w-[45%] text-xs bg-customBlue hover:hover:bg-light-blue-800 rounded-full dark:text-white"
          >
            <MdOutlineCancel className="mr-1" />
            Cancelar
          </Button>
          <Button
            type="submit"
            className=" sm:w-[40%] sm:text-base w-[45%] text-xs bg-customBlue hover:hover:bg-light-blue-800 rounded-full dark:text-white"
          >
            {/* {plan ? (
                  <>
                    <FiEdit className="mr-1" /> Modificar
                  </>
                ) : ( */}
            <>
              <FiPlusCircle className="mr-1" /> Agregar
            </>
            {/* )} */}
          </Button>
        </div>
      </div>
    </form>
  )
}
