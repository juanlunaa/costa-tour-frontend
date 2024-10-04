import { ModalCreate } from "@/components/ui/modal/Modal-create-plan"
import Image from "next/image"
export default function AddPlan() {
  return (
    <div className="relative flex justify-center h-full">
      <div className="container bg-white shadow-customBoxShadow flex sm:justify-center items-center">
        <div className="relative space-y-4 mx-auto w-[85%] mt-[4%] ">
          <div className="img-create relative sm:w-full w-[150px]  aspect-video">
            <Image
              src="/Crear-page.png"
              fill
              className="object-contain sm:w-full w-[200px] -left-[11]"
            />
          </div>
          <div className="flex justify-center mt-[10%] ">
            <ModalCreate/>
          </div>

        </div>
      </div>

    </div>
  )
}