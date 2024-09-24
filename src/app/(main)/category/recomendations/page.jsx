import { CardPlan } from "@/components";
import { plan } from "@/mocks/plan";

export default function Category() {
  return (
    <div>
      <div className='grid grid-cols-auto-fit gap-8 mt-12'>
        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />

        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />

        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />

        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />
      </div>
    </div>
  )
}