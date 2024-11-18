import { ModalCreate } from "@/components/ui/modal/Modal-create-plan"
import Image from "next/image"
export default function AddSolicitudeNewPlan() {
  return (
    <div className="w-[85%] mt-[2%] mx-auto space-y-4 flex flex-col justify-center h-full">
      <div className="img-create relative sm:w-full w-[150px]  aspect-video">
        <Image
          src="/Crear-Page.png"
          fill
          className="object-contain sm:w-full w-[200px] -left-[11]"
          alt="create-plan"
        />
      </div>
      <div className="flex justify-center mt-[10%] ">
        <ModalCreate buttonColor="bg-blueProfile hover:bg-[#2e98a6]" />
      </div>
    </div>
  )
}
