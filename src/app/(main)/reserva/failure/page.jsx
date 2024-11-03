import { getReservaInfo } from "@/services/plan"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

export default async function FailurePaymentReservaPage({ searchParams }) {
  const { external_reference } = searchParams

  if (!external_reference) {
    return <div>Es necesario el id de la reserva</div>
  }

  const { res: reserva, status } = await getReservaInfo(external_reference)

  if (status === 404) {
    notFound()
  }

  if (reserva?.estado === "CONFIRMADA") {
    redirect(`/reserva/success?external_reference=${external_reference}`)
  }

  return (
    <div className="p-10 md:ring-1 rounded-md md:max-w-3xl md:mx-auto dark:text-white">
      <h1 className="text-center text-4xl mb-12 py-4 rounded-full bg-gradient-to-r from-customBlue/15 to-customOrange/15">
        Reserva Cancelada
      </h1>

      <h2>Estimado/a {reserva?.turista?.nombre}</h2>
      <br />
      <p>
        Lamentamos informarte que el pago de tu reserva no se ha podido procesar
        exitosamente, y como resultado, la reserva ha sido{" "}
        <span className="font-bold">{reserva?.estado}</span>. Te invitamos a
        verificar la información de pago y a intentarlo nuevamente para asegurar
        tu lugar.
        <br />
        Si tienes alguna pregunta o necesitas asistencia para completar el
        proceso de pago, no dudes en contactarnos. Estamos aquí para ayudarte y
        asegurarnos de que tu experiencia sea lo más cómoda posible.
        <br />
        Gracias por tu comprensión y esperamos poder ayudarte con una nueva
        reserva pronto.
      </p>
      <div className="mx-auto w-fit mt-10">
        <Link
          href="/"
          className="bg-customBlue/40 rounded-md border border-customBlue hover:bg-customBlue/60 w-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
