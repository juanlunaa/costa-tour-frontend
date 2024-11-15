import { ChangePassword } from "@/components"
import { KeyPartnerUpdatePersonalData } from "@/components/ui/forms/KeyPartnerUpdatePersonal"

export default function infoProfile() {
  return (
    <div className="container flex flex-col justify-center">
      <KeyPartnerUpdatePersonalData />
      <hr className="dividier mt-10"></hr>
    </div>
  )
}
