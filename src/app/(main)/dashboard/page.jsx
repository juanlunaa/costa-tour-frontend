"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Dashboard = () => {
  const server = process.env.NEXT_PUBLIC_BACKEND_SERVER

  const router = useRouter()

  const [user, setUser] = useState({
    userId: 0,
    dni: "",
    tipoUsuario: "",
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    edad: 0,
    email: "",
    avatar: "",
    ciudad: {
      id: 0,
      name: ""
    },
    estado: {
      id: 0,
      name: ""
    },
    pais: {
      id: 0,
      name: ""
    },
    intereses: [
      {
        id: 0,
        interes: ""
      }
    ]
  })

  const getProfile = async () => {
    const res = await fetch(`${server}/user/profile`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })

    const resJson = await res.json()

    setUser(resJson)
  }

  const logoutProfile = async () => {
    const res = await fetch(`${server}/user/logout`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
    router.push("/auth/login")
    const resJson = await res.json()
  }

  return (
    <div className="flex flex-col items-center">
      <h1>Dashboard</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button onClick={getProfile}>Obtener perfil</button>

      <button onClick={logoutProfile}>Cerrar sesion</button>      
    </div>
  );
};

export default Dashboard;