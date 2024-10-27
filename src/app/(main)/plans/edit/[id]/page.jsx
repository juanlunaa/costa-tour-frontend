import { PlanForm } from "@/components"
import { BACKEND_SERVER } from "@/env"
import { notFound } from "next/navigation"

async function getPlan(id) {
  const res = await fetch(`${BACKEND_SERVER}/plan/${id}`, {
    method: "GET",
    cache: "no-store",
  })

  if (!res.ok) {
    if (res.status === 404) {
      notFound()
    }
    throw new Error("Failed to fetch plan")
  }

  return res.json()
}

export default async function EditPlan({ params }) {
  console.log(params)
  const { id } = params

  const { plan } = await getPlan(id)
  return (
    <div className="relative pt-28 sm:w-[80%] sm:mx-auto dark:text-white pb-14">
      <div className="pl-4">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <p>Bienvenido Julia</p>
      </div>

      <div className="mx-auto sm:shadow-customBoxShadow mt-10 bg-white px-4 dark:bg-gray-800">
        <PlanForm plan={plan} />
      </div>
    </div>
  )
}
