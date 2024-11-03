"use client"

import { CodeContext, CodeProvider } from "@/context/CodeContext"
import useUserStore from "@/hooks/useUserStore"
import { getDateFormatted } from "@/logic/const"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"
import { toast } from "sonner"

export const PromotionalCode = ({ planId, codigoPlan }) => {
  const { codeInfo, loadCode } = useContext(CodeContext)
  const { user } = useUserStore()

  useEffect(() => {
    console.log({ codigoPlan })
    if (codigoPlan) {
      loadCode(codigoPlan)
    }
  }, [])

  const hasUser = !!user
  if (user?.tipoUsuario === "TURISTA" || !hasUser) {
    return (
      <div>
        <h1 className="font-bold sm:text-xl text-lg py-5 dark:text-white">
          Código Promocional
        </h1>
        {codeInfo?.codigo ? (
          <Code />
        ) : (
          <NoCode
            hasUser={hasUser}
            userRole={user?.tipoUsuario}
            turistDni={user?.dni}
            planId={planId}
          />
        )}
      </div>
    )
  } else {
    return null
  }
}

const NoCode = ({ hasUser, userRole, turistDni, planId }) => {
  const router = useRouter()

  const { createCode } = useContext(CodeContext)

  const handleGetCode = async () => {
    if (hasUser) {
      if (userRole === "TURISTA") {
        await createCode({ turistDni, planId })
        toast.success("Código generado con éxito")
      }
    } else {
      toast("Debes iniciar sesión para obtener un código promocional", {
        action: {
          label: "Ir",
          onClick: () => router.push("/auth/login"),
        },
      })
    }
  }

  return (
    <div>
      <p className="dark:text-white">
        Esta actividad es ofrecida por uno de nuestros aliados. Obtén un código
        promocional que podrás redimir al momento de presentarte en la
        actividad.
      </p>
      <button
        onClick={handleGetCode}
        className="bg-yellowLogo py-2 px-4 rounded-md ring-1 ring-customOrange mt-5 hover:bg-yellow-700"
      >
        Obtener codigo
      </button>
    </div>
  )
}

const Code = () => {
  const { codeInfo, cancelCode } = useContext(CodeContext)

  const handleCancelCode = async () => {
    await cancelCode()
    toast.info("Código cancelado")
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl dark:text-white">
        {codeInfo.codigo}{" "}
      </h1>
      <span className="dark:text-white">
        Fecha de generacion:{" "}
        {getDateFormatted(new Date(codeInfo.fechaGeneracion))}
      </span>
      <p className="text-justify dark:text-white">
        Tu código promocional ha sido generado con éxito y tiene una validez de
        1 día a partir de su emisión. Recuerda que este código es personal e
        intransferible, por lo que te recomendamos no compartirlo con nadie.
        Preséntalo al llegar a la actividad y disfruta de los beneficios
        exclusivos de esta experiencia ofrecida por uno de nuestros aliados.
      </p>
      <button
        onClick={handleCancelCode}
        className="bg-yellowLogo py-2 px-4 rounded-md ring-1 ring-customOrange mt-5 hover:bg-yellow-700"
      >
        Cancelar Código
      </button>
    </div>
  )
}
