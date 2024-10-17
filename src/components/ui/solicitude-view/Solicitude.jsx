"use client"

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function SolicitudesAdmin() {
    const [solicitudes, setSolicitudes] = useState([
        { id: '1', asunto: 'Solicitud de Nuevo plan', nombre: 'Hotel Hilton', descripcion: 'Lorem Ipsum es simplemente el texto de relleno.', seleccionada: false, leida: false, fechaEnvio: '2024-10-17 10:30 AM' },
        { id: '2', asunto: 'Solicitud de Nuevo plan', nombre: 'Hotel Hilton', descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas.', seleccionada: false, leida: false, fechaEnvio: '2024-10-17 11:00 AM' },
        { id: '3', asunto: 'Solicitud de Nuevo plan', nombre: 'Hotel Hilton', descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.', seleccionada: false, leida: false, fechaEnvio: '2024-10-17 12:45 PM' },
        { id: '4', asunto: 'Solicitud de Nuevo plan', nombre: 'Hotel Hilton', descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos.', seleccionada: false, leida: false, fechaEnvio: '2024-10-17 01:00 PM' },
    ])

    const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null)

    const handleSeleccion = (id) => {
        setSolicitudes(solicitudes.map(sol =>
            sol.id === id ? { ...sol, seleccionada: !sol.seleccionada } : sol
        ))
    }

    const handleClick = (solicitud) => {
        setSolicitudSeleccionada(solicitud)
        setSolicitudes(solicitudes.map(sol =>
            sol.id === solicitud.id ? { ...sol, leida: true } : sol
        ))
    }

    const handleVolverAtras = () => {
        setSolicitudSeleccionada(null)
    }

    const extraerHora = (fechaEnvio) => {
        const fecha = new Date(fechaEnvio)
        return fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Solicitudes</h1>
            <div className="flex relative">
                <ScrollArea className="h-[600px] w-full rounded-lg border shadow-customBoxShadow">
                    {solicitudes.map((solicitud) => (
                        <div key={solicitud.id}>
                            <div className={`flex items-center gap-2 p-4  border rounded-md  cursor-pointer ${!solicitud.leida ? 'bg-blue-100 dark:backdrop-blur-lg dark:bg-black/60 hover:border-black ' : 'bg-white dark:backdrop-blur-sm dark:bg-gray-900/30 hover:border-gray-400'}`}
                                onClick={() => handleClick(solicitud)}>

                                <Checkbox
                                    checked={solicitud.seleccionada}
                                    onCheckedChange={() => handleSeleccion(solicitud.id)}
                                    onClick={(e) => e.stopPropagation()}
                                    className="dark:border-white "
                                />

                                <div className='flex w-full md:justify-between md:gap-2  flex-col md:flex-row items-start md:items-center '>
                                    <div>
                                        <p className="text-sm text-gray-900 truncate dark:text-white">
                                            {solicitud.nombre}
                                        </p>
                                    </div>

                                    <div>
                                        <p className={`text-xs sm:text-xs md:text-sm font-medium dark:text-white dark:font-bold ${!solicitud.leida ? 'text-blue-600' : 'text-gray-900'} truncate`}>
                                            {solicitud.asunto}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs sm:text-xs md:text-sm text-gray-500 dark:text-white md:truncate w-full md:max-w-[70px] lg:max-w-[200px]">
                                            {solicitud.descripcion}
                                        </p>
                                    </div>

                                    <div className="md:text-right text-xs text-gray-900 dark:text-white md:w-[10%] whitespace-normal min-hf">
                                        {extraerHora(solicitud.fechaEnvio)}
                                    </div>
                                </div>
                            </div>

                            <Separator />
                        </div>
                    ))}
                </ScrollArea>

                {solicitudSeleccionada && (
                    <div className="absolute max-h-[600px] h-full bg-white w-full p-4 border rounded-md dark:bg-gray-800 dark:text-white">
                        <h2 className="text-xl font-semibold mb-2 dark:text-white">{solicitudSeleccionada.asunto}</h2>
                        <p className="text-gray-600 mb-2 dark:text-white">De: {solicitudSeleccionada.nombre}</p>
                        <p className="text-gray-800 mb-4 dark:text-white">{solicitudSeleccionada.descripcion}</p>
                        <p className="text-gray-500 mb-4 dark:text-white">Enviado el: {new Date(solicitudSeleccionada.fechaEnvio).toLocaleString()}</p>
                        <Button onClick={handleVolverAtras}>Volver atrás</Button>
                    </div>
                )}
            </div>
        </div>
    )
}