import { AdminUpdatePersonalData, ChangePassword } from '@/components'

export default function AdminProfile() {
  return (
    <div className="container flex flex-col justify-center bg-white shadow-customBoxShadow">
      <AdminUpdatePersonalData />
      <hr className='dividier mt-10'></hr>
      <ChangePassword buttonColor="bg-yellowProfile" />
    </div>
  )
}
