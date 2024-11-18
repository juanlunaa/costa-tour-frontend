import InfoCard from "@/components/CardUneteNosotros"
import VerticalSteps from "@/components/NumberList"
import Image from "next/image"

export default function Unete() {
  return (
    <div className="pt-[4.9rem]">
      <div className="flex relative">
        <div className="w-[36%] sm:w-[45%] md:w-[50%]">
          <div className="container w-[80%] mx-auto flex flex-col items-center">
            <h1 className="font-volkhov font-bold text-sm sm:text-xl md:text-4xl text-center my-8 md:mt-20 ">
              Forma parte de nuestra red de aliados en <b />
              <p className="text-[#F5A200] font-volkhov">Costa Tour</p>
            </h1>

            <p className="w-full text-xs sm:text-sm sm:w-[80%] md:w-[60%] mb-12 mt-5 md:text-base">
              Únete a Costa Tour y expande tu negocio ofreciendo experiencias
              inolvidables a los viajeros en Cartagena y sus alrededores.
              ¡Empieza hoy mismo y conecta con turistas de todo el mundo!
            </p>
          </div>
        </div>

        <div className="relative w-[64%] rounded-full shadow-customBoxShadow sm:w-[55%]">
          <Image
            src="/aliados.png"
            width={600}
            height={800}
            className=" w-full h-full object-fill "
          />
        </div>
      </div>
      <div className="w-full  bg-[linear-gradient(to_bottom_right,hsl(264,69%,31%,20%)_25%,hsl(183,71.31%,53.53%,42%),hsl(197.19,74.67%,55.1%,53%))]">
        <div className="container mx-auto w-[90%] pb-10 ">
          <h1 className="font-volkhov font-bold text-sm sm:text-xl md:text-4xl text-center pt-10 ">
            ¿Por qué unirte a Costa tour?
          </h1>

          <p className="text-xl text-center my-5">
            Haz crecer tu empresa al formar parte de una plataforma dedicada a
            promocionar
            <br />
            lo mejor del turismo local Cartagenero.
          </p>

          <InfoCard />
        </div>
      </div>

      <div className="container mx-auto w-[90%] flex">
        <div className="w-full">
          <h1 className="font-volkhov font-bold text-sm sm:text-xl md:text-4xl my-8">
            ¿Cómo empezar?
          </h1>

          <p className="text-base sm:text-xl ">
            Sigue estos simples pasos para unirte a Costa Tour y comenzar a
            generar ingresos con tu negocio
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 items-center mb-10">
            <VerticalSteps />

            <div className="relative w-[40%] drop-shadow-2xl dark: mb-10">
              <Image
                src="/cardsimg/socio.png"
                width={600}
                height={800}
                className=" w-full h-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
