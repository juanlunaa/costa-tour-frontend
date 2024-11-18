import Link from "next/link"
import { BsCheckCircle } from "react-icons/bs"

export const CardSuscripcion = ({
  id,
  descripcion,
  precio,
  href,
  caracteristicas,
}) => {
  return (
    <div className="relative w-[95%] bg-transparent rounded-3xl p-8 ring-1 ring-gray-900/10 sm:px-10 py-8 shadow-customBoxShadow dark:shadow-customBoxShadowDark">
      <h3 className="text-base font-semibold leading-3">{descripcion}</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-[#FF8E01] text-5xl font-semibold tracking-tight">
          ${Number(precio).toFixed(0)}
        </span>
      </p>

      <ul
        role="list"
        className="mt-8 space-y-3 text-sm leading-3 sm:mt-6 text-gray-300 "
      >
        {caracteristicas.map((caracteristica, index) => (
          <li
            key={index}
            className="flex gap-x-3 text-sm text-black dark:text-white"
          >
            <BsCheckCircle
              className="text-[#FF8E01] h-6 w-5 flex-none"
              aria-hidden="true"
            />
            {caracteristica}
          </li>
        ))}
      </ul>
      <Link
        href={`/suscripcion/order?id=${id}&descripcion=${descripcion}&precio=${precio}`}
        className="mt-8 block rounded-md bg-[#FF8E01]  hover:bg-orange-400 focus-visible:outline-[#FF8E01] px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10 text-black dark:text-white shadow-customBoxShadow dark:shadow-customBoxShadowDark"
      >
        Suscribirme
      </Link>
    </div>
  )
}
