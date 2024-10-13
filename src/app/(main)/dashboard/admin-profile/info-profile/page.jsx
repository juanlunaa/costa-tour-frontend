import { AdminUpdatePersonalData, ChangePassword } from "@/components"

export default function AdminProfile() {
  return (
    <div className="container flex flex-col justify-center bg-white shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-800">
      <AdminUpdatePersonalData buttonColor="bg-blueProfile hover:bg-[#2e98a6]"/>
      <hr className="dividier mt-10"></hr>
      <ChangePassword buttonColor="bg-blueProfile hover:bg-[#2e98a6]" />
    </div>
  )
}
