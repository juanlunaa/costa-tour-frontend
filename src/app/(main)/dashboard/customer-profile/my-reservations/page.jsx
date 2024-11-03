"use client"

import CardReserva from "@/components/reserva/CardReserva"
import { ScrollArea } from "@/components/ui/scroll-area"
import useUserStore from "@/hooks/useUserStore"
import { cn, formatSrcImage } from "@/lib/utils"
import { fetchReservasByTurist } from "@/services/user"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ReservasTurista() {
  const { user } = useUserStore()
  const [reservas, setReservas] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log(user.dni)
      const { res, status } = await fetchReservasByTurist(user.dni)
      if (status === 200) {
        setReservas(res)
      }
    }
    fetchData()
  }, [user])

  return (
    <div className="container mt-12 py-[2%]">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mx-4">
        Mis Reservas
      </h1>
      <ScrollArea className="mt-4 h-[600px]">
        <div className="flex flex-col gap-2 p-4">
          {reservas.map((reserva) => (
            <CardReserva
              key={reserva?.id}
              nombrePlan={reserva?.plan?.nombre}
              miniaturaPlan={reserva?.plan?.miniatura}
              fecha={reserva?.fecha}
              hora={reserva?.hora}
              estado={reserva?.estado}
              idPago={reserva?.idPago}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
