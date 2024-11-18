import { ChangePassword } from "@/components"
import { AllyUpdatePersonalData } from "@/components/ui/forms/AllyPartnerUpdatePersonal"

export default function infoProfile() {
  return (
    <div className="container flex flex-col justify-center">
      <AllyUpdatePersonalData />
      <hr className="dividier mt-10"></hr>
      <ChangePassword buttonColor="bg-blueProfile hover:bg-[#2e98a6]" />
    </div>
  )
}
