import { useId } from "react"
import { useController } from "react-hook-form"
import Image from "next/image"
import { BACKEND_SERVER } from "@/env"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ErrorMessage } from "@/components"
import { ImageIcon } from "lucide-react"
import { IoIosClose } from "react-icons/io"
import { FaUpload } from "react-icons/fa"

export const ImagesPlan = ({ control, name, rules }) => {
  // Se genera un id unico para conectar el input con el label
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
  })

  /**
   * Metodo para controlar cuando se suban las imagenes al input
   * @param {*} event
   * Las imagenes que vienen en el event se convierten en un array de objetos para
   * poder iterar sobre ellas y mapearlas (generar un preview de las mismas, indicar si son nuevas o no)
   *
   * Se actualiza el estado del input con el metodo onChange que nos proporciona el useController
   */
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files)
    const newImages = newFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      isNew: true,
    }))

    const newState = {
      files: [...value.files, ...newImages],
      miniatura: value.miniatura || 0,
    }
    onChange(newState)
  }

  /**
   * Metodo para controlar cuando se selecciona una imagen del preview
   * @param {*} index
   * Se actualiza el estado (solo la miniatura) del input con el metodo onChange
   * que nos proporciona el useController
   */
  const handleMiniatura = (index) => {
    onChange({ files: value.files, miniatura: index })
  }

  /**
   * Metodo para controlar cuando se elimina una imagen del preview
   * @param {*} index
   * Se hace una copia de lo que esta en el estado del form (para el array de imagenes: files[])
   * Se elimina la URL que se habia generado para hacer el preview
   * Se elimina la imagen del array de imagenes con el index que se recibe por parametro
   * Se actualiza el estado del input con el metodo onChange que nos proporciona el useController
   */
  const handleRemoveImage = (index) => {
    const newImages = [...value.files]
    URL.revokeObjectURL(newImages[index].preview)
    newImages.splice(index, 1)

    const newState = {
      files: newImages,
      miniatura:
        value.miniatura === index || value.miniatura > 0
          ? value.miniaturaSelect - 1
          : value.miniatura,
    }
    onChange(newState)
  }

  return (
    <>
      <div>
        <h1>Imagenes del Plan</h1>
        <p>(Max. 4)</p>
      </div>
      <div className="aspect-video bg-muted flex flex-col items-center justify-center relative rounded-lg overflow-hidden">
        {value?.files.length > 0 ? (
          <>
            <Image
              src={
                value.files[value.miniatura]?.isNew
                  ? value.files[value.miniatura]?.preview
                  : `${BACKEND_SERVER}${value.files[value.miniatura]?.preview}`
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
        {value?.files.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden transition-all hover:scale-105 hover:cursor-pointer"
          >
            <Image
              src={img.isNew ? img.preview : `${BACKEND_SERVER}${img.preview}`}
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
