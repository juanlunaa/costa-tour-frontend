import Link from "next/link"

export default function SuccessPaymentSuscripcionPage({ searchParams }) {
  return (
    <div className="mt-32 mb-12 p-10 md:ring-1 rounded-md md:max-w-3xl md:mx-auto">
      <h1 className="text-center text-4xl mb-12 py-4 rounded-full bg-gradient-to-r from-customBlue/15 to-customOrange/15">
        Suscripción Denegada
      </h1>

      <p className="text-center font-bold text-lg">
        Lamentablemente, no hemos podido procesar tu pago, por lo que tu
        suscripción ha sido denegada. Te invitamos a revisar la información de
        tu método de pago y a intentar nuevamente. Si necesitas ayuda, no dudes
        en contactarnos. ¡Estamos aquí para ayudarte!
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
