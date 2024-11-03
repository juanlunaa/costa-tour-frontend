import { cn, formatSrcImage } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const CardReserva = ({
  nombrePlan,
  miniaturaPlan,
  fecha,
  hora,
  estado,
  idPago,
}) => {
  return (
    <div className="relative flex flex-col items-stretch md:flex-row md:flex-wrap gap-2 rounded-md p-2 border bg-card text-card-foreground shadow-sm">
      <div className="relative aspect-video w-full md:w-fit md:h-20 sm:m-auto">
        <Image
          src={formatSrcImage(miniaturaPlan)}
          fill
          className="object-cover rounded-md"
          alt={`Miniatura de ${nombrePlan}`}
        />
      </div>
      <div className="grow">
        <p className="font-bold">{nombrePlan}</p>
        <p>
          <span className="font-bold">Fecha: </span>
          <br className="md:hidden" />
          {fecha}
        </p>
        <p>
          <span className="font-bold">Hora: </span>
          <br className="md:hidden" />
          {hora}
        </p>
      </div>
      <div className="flex flex-col gap-1 justify-between">
        <p className={cn(estado === "CONFIRMADA" && "text-green-600")}>
          {estado}
        </p>
        <Link
          href={`/reserva/success?external_reference=${idPago}`}
          className="p-1 bg-customBlue text-center rounded-md ring-1 ring-blue-900 hover:bg-blue-600"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  )
}

export default CardReserva
