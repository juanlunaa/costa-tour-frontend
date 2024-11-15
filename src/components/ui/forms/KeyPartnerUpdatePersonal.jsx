import clsx from "clsx"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const KeyPartnerUpdatePersonalData = ({ buttonColor }) => {
  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
  const styleInputs = clsx("block w-full")

  return (
    <form className="grid grid-cols-1 gap-4 w-[85%] mt-[2%] mx-auto">
      <h1 className="font-bold mt-12 text-sm sm:text-base md:text-xl lg:text-2xl">
        Información Personal
      </h1>

      <div className="space-y-2">
        <Label htmlFor="nombre" className={styleLabels}>
          Nombre de la Empresa
        </Label>
        <Input
          id="nombre"
          name="nombre"
          className={styleInputs}
          //   {...register("nombre", {
          //     required: {
          //       value: true,
          //       message: "Nombre es requerido",
          //     },
          //   })}
        />
        {/* {errors.nombre && (
          <span className="text-xs text-red-600 font-bold">
            {errors.nombre.message}
          </span>
        )} */}
      </div>

      <div className="space-y-2">
        <Label htmlFor="Nit" className={styleLabels}>
          Nit de la empresa
        </Label>
        <Input
          type="text"
          id="Nit"
          name="Nit"
          className={styleInputs}
          pattern="[0-9]*"
          inputMode="numeric"
          //   {...register("apellido", {
          //     required: {
          //       value: true,
          //       message: "Apellido es requerido",
          //     },
          //   })}
        />
        {/* {errors.apellido && (
          <span className="text-xs text-red-600 font-bold">
            {errors.apellido.message}
          </span>
        )} */}
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefono" className={styleLabels}>
          Telefono
        </Label>
        <Input
          type="tel"
          id="telefono"
          name="telefono"
          className={styleInputs}
          //   {...register("apellido", {
          //     required: {
          //       value: true,
          //       message: "Apellido es requerido",
          //     },
          //   })}
        />
        {/* {errors.apellido && (
          <span className="text-xs text-red-600 font-bold">
            {errors.apellido.message}
          </span>
        )} */}
      </div>

      <div className="space-y-2">
        <Label htmlFor="direccion" className={styleLabels}>
          Dirección
        </Label>
        <Input
          type="text"
          id="direccion"
          name="direccion"
          className={styleInputs}
          //   {...register("apellido", {
          //     required: {
          //       value: true,
          //       message: "Apellido es requerido",
          //     },
          //   })}
        />
        {/* {errors.apellido && (
          <span className="text-xs text-red-600 font-bold">
            {errors.apellido.message}
          </span>
        )} */}
      </div>

      <button
        type="submit"
        className={`${styleLabels} bg-blueProfile w-[50%] sm:w-[40%] mt-5 py-4 dark:text-black`}
      >
        Guardar
      </button>
    </form>
  )
}
