import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
export default function ValitateCode() {
  const textShadow = cn(
    "[text-shadow:_0_1px_0_rgb(0_0_0_/_100%),_0_-1px_0_rgb(0_0_0_/_100%),_1px_0_0_rgb(0_0_0_/_100%),_-1px_0_0_rgb(0_0_0_/_100%)]"
  )

  return (
    <div className="w-[85%] mt-[2%] mx-auto">
      <h1 className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl mt-12">
        Validar código promocional
      </h1>
      <form className="mt-4">
        <div className="space-y-2">
          <Label htmlFor="promo-code">Ingresa el código</Label>
          <Input
            id="promo-code"
            placeholder="Ejempo: ABCD1234"
            pattern="[A-Z0-9]{8}"
            title="El código debe tener 8 caracteres alfanuméricos en mayúscula"
          />
        </div>
        <button
          type="submit"
          className="text-sm font-bold md:text-base sm:text-sm bg-blueProfile w-[50%] sm:w-[40%] mt-9 py-4"
        >
          Validar
        </button>
      </form>
    </div>
  )
}
