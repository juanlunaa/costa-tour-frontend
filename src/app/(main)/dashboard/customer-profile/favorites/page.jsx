import { SaveCardPlan } from "@/components/ui/save-plan/Save-Card"

export default function CustomerProfile() {

    return (
        <div className="relative flex w-full h-auto">
            <div className="container relative mx-auto pl-4 sm:pl-6 lg:pl-8 bg-white shadow-customBoxShadow">
                <div className="relative mt-12">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Solo para mí</h1>
                    <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg mr-8 text-justify">¡Gracias por guardar tus 
                        experiencias favoritas! Ahora puedes acceder fácilmente a ellas
                        en tu perfil y planificar tu próxima aventura en Cartagena con facilidad.</p>
                </div>
                <div className="w-full pr-5 overflow-y-scroll h-[590px] mt-12">
                    <div className="grid gap-4 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3 ">

                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />
                        <SaveCardPlan />

                    </div>





                </div>



            </div>

        </div>
    )

}