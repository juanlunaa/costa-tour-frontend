import { getDateFormatted } from "@/logic/const"
import { getReservaInfo } from "@/services/plan"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

export default async function SuccessPaymentReservaPage({ searchParams }) {
  const { external_reference } = searchParams

  if (!external_reference) {
    return <div>Es necesario el id de la reserva</div>
  }

  const justPaid = !!searchParams.status

  const { res: reserva, status } = await getReservaInfo(external_reference)

  if (status === 404) {
    notFound()
  }

  if (reserva?.estado === "CANCELADA") {
    redirect(`/reserva/failure?external_reference=${external_reference}`)
  }

  return (
    <div className="p-10 md:ring-1 rounded-md md:max-w-3xl md:mx-auto dark:text-white">
      <h1 className="text-center text-4xl mb-12 py-4 rounded-full bg-gradient-to-r from-customBlue/15 to-customOrange/15">
        Reserva Confirmada
      </h1>

      <h2>Estimado/a {reserva?.turista?.nombre}</h2>
      <br />
      <p className="font-bold">
        Nos complace confirmar su reserva para el {reserva?.fecha} a las{" "}
        {reserva?.hora}. A continuación, encontrará los detalles de su reserva:
      </p>
      <ul>
        <li>
          <span className="font-bold">Fecha:</span>{" "}
          {getDateFormatted(reserva?.fecha)}
        </li>
        <li>
          <span className="font-bold">Hora:</span> {reserva?.hora}
        </li>
        <li>
          <span className="font-bold">Número de personas:</span>{" "}
          {reserva?.cantidadPersonas}
        </li>
        <li>
          <span className="font-bold">Ubicacion:</span>{" "}
          {reserva?.plan?.ubicacion?.direccion}{" "}
          <Link
            href={`https://www.google.com/maps?q=${reserva?.plan?.ubicacion?.latitud},${reserva?.plan?.ubicacion?.longitud}`}
            className="underline hover:text-customBlue"
          >
            Ver en maps
          </Link>
        </li>
      </ul>
      <br />
      <p>
        Por favor, conserve este mensaje como comprobante. Si necesita modificar
        o cancelar su reserva, no dude en contactarnos a través de +57 312
        1234567 o info@costa-tour.com.
      </p>
      <div className="mx-auto w-fit mt-10">
        {justPaid ? (
          <Link
            href="/"
            className="bg-customBlue/40 rounded-md border border-customBlue hover:bg-customBlue/60 w-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Volver al Inicio
          </Link>
        ) : (
          <Link
            href="/dashboard/customer-profile/info-profile"
            className="bg-customBlue/40 rounded-md border border-customBlue hover:bg-customBlue/60 w-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Volver al perfil
          </Link>
        )}
      </div>
    </div>
  )
}
