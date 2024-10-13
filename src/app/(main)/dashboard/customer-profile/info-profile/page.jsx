import { ChangePassword, TuristUpdatePersonalData } from "@/components"
import { UpdateTuristProvider } from "@/context/UpdateTuristProvider"

export default function CustomerProfile() {
  return (
    <div className="container flex flex-col justify-center bg-white shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-800">
      <UpdateTuristProvider>
        <TuristUpdatePersonalData />
      </UpdateTuristProvider>
      <hr className="dividier my-10"></hr>
      <ChangePassword buttonColor="bg-yellowProfile hover:bg-[#e48a22]" />
    </div>
  )
}
