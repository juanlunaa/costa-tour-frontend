"use client"

import { useRouter } from 'next/navigation';
import { useUserData } from "@/hooks/useUserData"
import Image from 'next/image';

const Dashboard = () => {
  const router = useRouter()

  const { user, fetchUserProfile, logoutUser } = useUserData()

  const handleLogout = async () => {
    const success = await logoutUser()
    
    if (success) {
      router.push("/")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}${user.avatar}`}
            alt="Profile"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            {user.nombre} {user.apellido}
          </h2>
          <p className="text-gray-500 mb-6">{user.email}</p>

          <button 
            onClick={fetchUserProfile}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Obtener perfil
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;