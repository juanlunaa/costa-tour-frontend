import HelpForm from "@/components/ui/forms/AyudaForm"

export default function Help() {
  return (
    <div className="pt-24">
      <div className="w-[70%] mx-auto">
        <h1 className="text-4xl text-center mb-10">
          Bienvenidos al centro de Peticiones, Quejas, <br /> Reclamos,
          Sugerencias y Denuncias
        </h1>
        <p className="text-xl text-justify">
          En esta sección usted podrá radicar, hacer seguimiento y consultar los
          informes de sus PQRSD. Para el templo del pan es importante atender
          sus requerimientos, solicitudes de información o documentos, calificar
          un servicio, proponer acciones de mejora o elevar una denuncia
          Constitución Política de Colombia y Ley 1755 de 2015.
        </p>
      </div>
      <HelpForm />
    </div>
  )
}
