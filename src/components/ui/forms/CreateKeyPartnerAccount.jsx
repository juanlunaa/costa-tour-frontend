import { Combobox, Multiselect } from "@/components"
import { MultiselectCombobox } from "@/components/MultiSelectPartner"
import { Label } from "../label"
import { Input } from "../input"
import { BsCheckCircle } from "react-icons/bs"
import { Checkbox } from "../checkbox"
import { Button } from "../button"
export default function FormCreateKeyPartner() {
  return (
    <div className="rounded-3xl bg-white shadow-customBoxShadow p-10 w-3/5 mb-12">
      <form>
        <h1 className="font-volkhov font-bold text-xl">
          Se nuestro aliado de actividades
        </h1>
        <div className="w-full">
          <div className="flex flex-col gap-y-2 mt-5">
            <Label>¿Qué tipo de actividades ofreces?</Label>
            <MultiselectCombobox />
          </div>
          <div className="flex flex-col gap-y-2 mt-5">
            <Label>¿En qué Lugares ofreces tus actividades?</Label>
            <MultiselectCombobox />
          </div>
        </div>

        <div className="flex justify-between gap-2 gap-y-3 mt-5">
          <div className="w-full">
            <Label htmlFor="name">Nombre de la empresa</Label>
            <Input type="text" id="name" name="name" />
          </div>
          <div className="w-full">
            <Label htmlFor="NIT">NIT de la empresa</Label>
            <Input type="text" id="NIT" name="NIT" />
          </div>
        </div>

        <div className="flex justify-between gap-2 gap-y-3 mt-5">
          <div className="w-full">
            <Label htmlFor="direccion">Dirección de la empresa</Label>
            <Input type="text" id="direccion" name="direccion" />
          </div>

          <div className="w-full">
            <Label htmlFor="telefono">Télefono</Label>
            <Input type="tel" id="telefono" name="telefono" />
          </div>
        </div>

        <div className="mt-5">
          <Label htmlFor="email"> Correo Electrónico</Label>
          <Input type="text" id="email" name="email" />
        </div>

        <div className="mt-5">
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" id="password" name="password" />
        </div>

        <ul
          role="list"
          className="mt-5 space-y-2 text-sm leading-3 text-gray-300"
        >
          <li className="text-sm text-gray-600">
            <span className="flex gap-x-3 items-center">
              <BsCheckCircle /> Incluye un dígito {"("}1234{")"} y un carácter
              especial {"("}#%!.^{")"}
            </span>
          </li>
          <li className="text-sm text-gray-600">
            <span className="flex items-center gap-x-3">
              <BsCheckCircle />
              Entre 8 y 30 caracteres
            </span>
          </li>
        </ul>

        <h1 className="font-volkhov font-bold text-xl mt-5">
          Términos y condiciones
        </h1>
        <div className="mt-5 flex items-center">
          <Checkbox className="mr-2" />
          <a href="#" className="text-sm">
            He leído y acepto los términos y condiciones del aliado y la
            política de privacidad.
          </a>
        </div>

        <div className="w-[90%] flex justify-end">
          <Button className="rounded-md mt-5 w-[40%] bg-[#FF8E01] text-white hover:bg-orange-400 focus-visible:outline-[#FF8E01] text-center text-base font-semibold shadow-customBoxShadow">
            Crear Cuenta
          </Button>
        </div>
      </form>
    </div>
  )
}
