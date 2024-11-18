import React from "react"
import { SiGmail } from "react-icons/si"
import { FaSquareWhatsapp } from "react-icons/fa6"

const data = [
  {
    number: 1,
    title: "Regístrate sin costo",
    description: "Llena un formulario rápido y fácil",
  },
  {
    number: 2,
    title: "Completa tu información",
    description: (
      <>
        Proporciona los detalle de la empresa y
        <br />
        valida tu registro
      </>
    ),
  },

  {
    number: 3,
    title: "Sube tus planes",
    description: "Añade tus planes incluyendo los premium ",
  },
  {
    number: 4,
    title: "Comienza a ganar",
    description: (
      <>
        Recibe turistas y genera ingresos
        <br />
        con cada plan seleccionado.
      </>
    ),
  },

  {
    number: 5,
    title: "Canales de atención",
    description: (
      <>
        <div className="flex items-center space-x-2 ">
          <SiGmail className="text-[#EA4335] text-2xl" />
          <span>Costatour@gmail.com</span>
        </div>
        <br />
        <div className="flex items-center space-x-2">
          <FaSquareWhatsapp className="text-green-500 text-2xl" />
          <span>+56 301-2821-067</span>
        </div>
      </>
    ),
  },
]

const VerticalSteps = () => {
  return (
    <div className="relative flex flex-col items-start mt-10 w-full sm:w-[60%]">
      {data.map((item, index) => (
        <div key={item.number} className="flex items-center mb-10 last:mb-0">
          {/* Círculo numerado */}
          <div className="relative flex items-center justify-center w-12 h-12 bg-[#FFA432] text-white font-bold rounded-full text-2xl z-[1]">
            {item.number}
          </div>
          {/* Línea entre círculos */}
          <div className="absolute w-1 h-[82%] bg-gray-300 dark:bg-white left-[23px] top-10 -z-[0]"></div>

          {/* Contenido: título y descripción */}
          <div className="ml-6">
            <h3 className="text-base sm:text-xl font-bold text-black dark:text-white">
              {item.title}
            </h3>
            <p className=" text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VerticalSteps
