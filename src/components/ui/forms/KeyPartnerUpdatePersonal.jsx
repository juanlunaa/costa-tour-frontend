import clsx from "clsx"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useUserStore from "@/hooks/useUserStore"
export const KeyPartnerUpdatePersonalData = ({ buttonColor }) => {
  const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm")
  const styleInputs = clsx(
    "text-gray-600 block w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white"
  )
  const stylebtn = clsx(
    "w-[50%] sm:w-[40%] text-xs sm:text-sm md:text-base font-bold mt-5 py-4 dark:text-black"
  )
  return (
    <form className="grid grid-cols-1 gap-4 mx-auto w-[85%] mt-[2%] dark:text-white">
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

      <button type="submit" className={`${stylebtn}  ${buttonColor}`}>
        Guardar
      </button>
    </form>
  )
}
