import { ChangePassword, TuristUpdatePersonalData } from '@/components'

export default function CustomerProfile() {

  return (
    <div className="container flex flex-col justify-center bg-white shadow-customBoxShadow">
        <TuristUpdatePersonalData/>
        <hr className='dividier my-10'></hr>
        <ChangePassword/>
    </div>
    )
}