import {
  DynamicText,
  PlanExclusiveForm,
  PlanForm,
  ScheduleSelector,
} from "@/components"
import { Label } from "@/components/ui/label"
import { BACKEND_SERVER } from "@/env"
import { notFound } from "next/navigation"

export default function AddPlan() {
  return (
    <div className="container relative pt-28 sm:w-[80%] sm:mx-auto">
      <div className="pl-4">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <p>Bienvenida Jullieth</p>
      </div>

      <div className="mx-auto sm:shadow-customBoxShadow my-10 p-4 dark:bg-gray-800">
        {/* <PlanForm /> */}
        <PlanExclusiveForm />
        {/* <div className="w-96">
          <Label>Informacion adicional</Label>
          <DynamicText />
        </div> */}
        {/* <div className="w-96">
          <Label>Horarios</Label>
          <ScheduleSelector />
        </div> */}
      </div>
    </div>
  )
}
