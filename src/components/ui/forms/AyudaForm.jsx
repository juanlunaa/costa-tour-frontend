import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "../input"
import clsx from "clsx"
import { Button } from "../button"

export default function HelpForm() {
  const styleLabels = clsx("text-sm mt-4 font-bold md:text-base sm:text-sm")
  const styleInputs = clsx(
    "text-black block w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white h-[50px]"
  )
  const styleInputsSelect = clsx(
    "text-black w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white h-[50px]"
  )
  const styleInputstextarea = clsx(
    "text-black w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white h-[160px]"
  )
  const styleBtn = clsx(
    "w-[45%] font-bold text-lg mt-5 py-4 bg-[#FF8E01] hover:bg-orange-400 focus-visible:outline-[#FF8E01] text-black dark:text-white shadow-customBoxShadow dark:shadow-customBoxShadowDark"
  )

  return (
    <div>
      <div className="container w-[70%] sm:w-[40%] mx-auto my-20">
        <form>
          <div className="space-y-2">
            <Label htmlFor="solicitude" className={styleLabels}>
              Tipo Solicitud
            </Label>
            <Select>
              <SelectTrigger className={styleInputsSelect}>
                <SelectValue placeholder="Seleccionar una opcion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="queja">Queja</SelectItem>
                <SelectItem value="sugerencias">Sugerencias</SelectItem>
                <SelectItem value="felicitaciones">Felicitaciones</SelectItem>
                <SelectItem value="reclamo">Reclamo</SelectItem>
                <SelectItem value="peticion">Peticion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className={styleLabels}>
              Nombre
            </Label>
            <Input type="text" id="name" name="name" className={styleInputs} />
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
            />
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
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={styleLabels}>
              Email
            </Label>
            <Input
              type="text"
              id="email"
              name="email"
              className={styleInputs}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="solicitude" className={styleLabels}>
              Tipo de Identificacion
            </Label>
            <Select>
              <SelectTrigger className={styleInputsSelect}>
                <SelectValue placeholder="Seleccionar una opcion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="c.c">C.C</SelectItem>
                <SelectItem value="c.e">C.E</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dni" className={styleLabels}>
              Documento ID
            </Label>
            <Input type="tel" id="dni" name="dni" className={styleInputs} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback" className={styleLabels}>
              Dejar un comentario
            </Label>
            <Textarea
              id="feedback"
              name="feedback"
              className={styleInputstextarea}
            />
            <span className="flex justify-center">*Máximo 2000 caracteres</span>
          </div>
          <div className="flex justify-around mt-10">
            <Button className={styleBtn}>Cancelar</Button>
            <Button className={styleBtn}>Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
