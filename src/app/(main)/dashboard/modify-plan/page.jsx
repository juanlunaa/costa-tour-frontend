import { PlanForm } from "@/components"
import { notFound } from "next/navigation"

async function getPlan(id) {
  const res = await fetch(`${process.env.BACKEND_URL}/plan/${id}`)

  if (!res.ok) {
    if (res.status === 404) {
      notFound()
    }
    throw new Error("Failed to fetch plan")
  }

  return res.json()
}

export default async function EditPlan({ params }) {
  const { id } = params

  try {
    const plan = await getPlan(id)
    return (
      <div className="relative top-24 sm:w-[80%] sm:mx-auto">
        <div className="pl-4">
          <h1 className="text-2xl font-bold">Mi Perfil</h1>
          <p>Bienvenido Julia</p>
        </div>

        <div className="mx-auto sm:shadow-customBoxShadow my-10 bg-white px-4">
          <PlanForm />
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}
