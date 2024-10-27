import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
export default function ValitateCode() {

    const textShadow = cn(
        "[text-shadow:_0_1px_0_rgb(0_0_0_/_100%),_0_-1px_0_rgb(0_0_0_/_100%),_1px_0_0_rgb(0_0_0_/_100%),_-1px_0_0_rgb(0_0_0_/_100%)]"
    )

    return (
        <div className="container h-full flex items-center bg-white shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-800">
            <div className="container mx-auto h-[350px] flex justify-center ">
                <div className="p-8 max-w-[600px] w-full  h-full rounded-3xl bg-[linear-gradient(to_top_right,hsla(86,66%,50%,14%),hsl(273,40%,53%,31%)_25%,hsl(224,59%,53%,63%),hsl(202,91%,57%,100%))]">
                    <form>
                        <h1 className={cn("font-volkhov font-bold text-base sm:text-2xl md:text-3xl mt-5 text-white", textShadow)}>Validar código promocional</h1>
                        <Input
                            type="text"
                            placeholder="Ingrese el codigo de verificación"
                            className="bg-[#F4F4F5] h-14 text-2xl mt-8"
                        >
                        </Input>
                        <div className="flex justify-center">
                            <Button className="bg-gray-200 text-black text-xl hover:text-white w-[65%] shadow-customBoxShadow mt-20">
                                Validar
                            </Button>
                        </div>

                    </form>
                </div>




            </div>
        </div>

    );

}