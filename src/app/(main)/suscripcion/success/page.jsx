import { OrderSuscripcion } from "@/components/suscripcion/OrderSuscripcion"
import Link from "next/link"

export default function SuccessPaymentSuscripcionPage({ searchParams }) {
  return (
    <div className="mt-32 mb-12 p-10 md:ring-1 rounded-md md:max-w-3xl md:mx-auto">
      <h1 className="text-center text-4xl mb-12 py-4 rounded-full bg-gradient-to-r from-customBlue/15 to-customOrange/15">
        Suscripción Aprobada
      </h1>

      <p className="text-center font-bold text-lg">
        ¡Felicidades! Tu suscripción ha sido aprobada con éxito. Ahora tienes
        acceso a todas las experiencias exclusivas que hemos preparado para ti.
        Prepárate para explorar lo mejor de Cartagena como nunca antes.
      </p>
      <div className="mx-auto w-fit mt-10">
        <Link
          href="/plans/exclusive"
          className="bg-customBlue/40 rounded-md border border-customBlue hover:bg-customBlue/60 w-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Ver Experiencias Exclusivas
        </Link>
      </div>
    </div>
  )
}
