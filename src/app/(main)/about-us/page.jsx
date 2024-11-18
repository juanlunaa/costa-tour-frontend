import Image from "next/image"
import clsx from "clsx"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobreNosotros() {
  const styleBtn = clsx(
    "w-[45%] font-bold text-xs sm:text-lg mt-5 py-4 bg-[#FF8E01] hover:bg-orange-400 focus-visible:outline-[#FF8E01] text-black dark:text-white shadow-customBoxShadow dark:shadow-customBoxShadowDark"
  )
  return (
    <div className="pt-20">
      <div className="container w-[90%] mx-auto">
        <div className="w-full flex">
          <div className="w-[40%] lg:w-[50%] sm:w-[30%] flex flex-col justify-center items-center">
            <h1 className="font-volkhov font-bold text-sm sm:text-xl md:text-3xl lg:text-5xl text-center my-8">
              Explora Cartagena como nunca antes
            </h1>
            <p className="text-xs sm:text-sm lg:text-xl ">
              En Costa Tour, no solo te mostramos los lugares emblemáticos de
              Cartagena, sino que te conectamos con su esencia. Queremos que
              vivas experiencias inolvidables, desde las calles coloniales de la
              Ciudad Amurallada hasta las playas paradisíacas de Barú.
            </p>
          </div>

          <div className="w-[60%] lg:w-[50%] sm:w-[70%] grid grid-cols-2 border-collapse sm:-mr-6 mb-10">
            <div className="relative h-32 sm:h-52 lg:h-56 lg:w-[60%] w-[70%] ml-[45%] z-10 mt-12 sm:mt-20  animate-ascend delay-200">
              <Image
                src="/explorar/explorar1.png"
                fill
                className="object-cover rounded-3xl border-8 border-white"
              />
            </div>

            <div className="relative h-32 sm:h-60 lg:h-72 lg:w-[75%] w-[85%] mt-2 sm:mt-0 ml-[calc(20%-8px)] animate-ascend delay-300">
              <Image
                src="/explorar/explorar2.png"
                fill
                className="object-cover rounded-3xl border-8 border-white"
              />
            </div>

            <div className="relative h-32 w-[70%] sm:h-44 sm:w-[60%] lg:h-52 lg:w-[50%] lg:ml-[46%] sm:mt-2 ml-[28%] sm:ml-[23%] col-span-2 animate-ascend delay-400 ">
              <Image
                src="/explorar/explorar3.png"
                fill
                className="object-cover rounded-3xl border-8 border-white"
              />
            </div>
          </div>
        </div>

        <div className="flex relative mb-10">
          <div className="relative w-[50%] rounded-full shadow-customBoxShadow sm:w-[55%]">
            <Image
              src="/explorar/viaje1.png"
              width={600}
              height={800}
              className=" w-full h-full object-fill "
            />
          </div>

          <div className="w-[50%] sm:w-[45%] md:w-[50%]">
            <div className="container w-[80%] mx-auto flex flex-col items-center">
              <h1 className="font-volkhov font-bold text-sm sm:text-xl md:text-4xl text-center my-8 md:mt-20 ">
                Planifica tu viaje sin complicaciones
              </h1>

              <p className="w-full text-xs sm:text-sm sm:w-[80%] md:w-[70%] mb-12 mt-5 md:text-base lg:text-xl">
                En Costa Tour, te ayudamos a enfocarte en disfrutar,
                permitiéndote elegir actividades exclusivas y acceder a
                información detallada de los mejores lugares en un solo lugar.
                Además, brindamos soporte continuo para resolver cualquier
                imprevisto de manera rápida y eficiente.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-volkhov font-bold text-sm sm:text-xl md:text-4xl text-center my-8 md:mt-20 ">
            La Historia de Costa Tour
          </h1>
          <div className="w-full flex justify-center">
            <p className="w-full text-xs sm:text-sm sm:w-[80%] md:w-[70%] mb-12 mt-5 md:text-base lg:text-xl">
              Costa Tour nació en 2024 de un grupo de entusiastas del turismo y
              la tecnología, con el objetivo de ofrecer experiencias seguras y
              auténticas en Cartagena. Inspirados por la experiencia de un
              familiar que fue estafado en su primer viaje, creamos una
              plataforma confiable para evitar que otros turistas enfrenten
              problemas similares. Hoy seguimos comprometidos con esa misión,
              trabajando junto a aliados locales para mostrar lo mejor de la
              ciudad.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="relative w-[50%] sm:w-[55%]">
            <Image
              src="/explorar/group.png"
              width={600}
              height={800}
              className=" w-full h-full object-fill "
            />
          </div>
        </div>

        <div className=" w-full flex justify-center mb-12">
          <Button className={` ${styleBtn}`}>
            <Link href="/about-us/unete" className="w-full">
              Se nuestro Aliado
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
