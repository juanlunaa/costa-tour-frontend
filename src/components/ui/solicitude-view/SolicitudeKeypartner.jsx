"use client"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import ModalDetailSolicitudeKP from "../modal/ModalDetailSolicitudeKP"
export function SolicitudeKeyPartner() {

    const [solicitudeState, setSolicitudeState] = useState([
        {
            id: "1",
            nombre: "Hotel Hilton",
            review: "La solicitud ha sido aprobada sin ninguna observación.",
            stado: "Aprobado",
            seleccionada: false,
            leida: false,
            fecha: "2024-10-17 10:30 AM",
        },
        {
            id: "2",
            nombre: "Hotel Caribe",
            review: "La solicitud fue rechazada debido a inconsistencias en la información proporcionada. Por favor, verifica y envíala de nuevo.",
            stado: "Rechazado",
            seleccionada: false,
            leida: false,
            fecha: "2024-10-18 09:00 AM",
        },
        {
            id: "3",
            nombre: "Hotel Las Americas",
            review: "La solicitud está pendiente de aprobación, estamos revisando la información enviada.",
            stado: "Pendiente",
            seleccionada: false,
            leida: false,
            fecha: "2024-10-19 02:00 PM",
        },
    ]);

    const handleRead = (id) => {
        setSolicitudeState((prevState) =>
            prevState.map((solicitud) =>
                solicitud.id === id ? { ...solicitud, leida: true } : solicitud
            )
        );
    };
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleCloseModal = () => {
        setModalOpen(false);
    };
   
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Solicitudes</h1>
            <div className="flex relative">
                <ScrollArea className="h-[600px] bg-transparent w-full ">
                    <div className="flex flex-col bg-transparent">
                        {solicitudeState.map((solicitud) => {
                            const bgColorState =
                                solicitud.stado === "Aprobado"
                                    ? "bg-[#6CEA68]"
                                    : solicitud.stado === "Rechazado"
                                        ? "bg-[#FF7777]"
                                        : "bg-yellow-600";
                            return (
                                <div key={solicitud.id} className="p-4">
                                    <div
                                        className={`flex flex-col gap-2 p-4  border rounded-md shadow-customBoxShadow ${!solicitud.leida
                                            ? "bg-blue-100 dark:backdrop-blur-lg dark:bg-black/60 hover:border-black "
                                            : "bg-white dark:backdrop-blur-sm dark:bg-gray-900/30 hover:border-gray-400"}`}>

                                        <div className="flex justify-between items-center">
                                            <span>Nombre del plan: </span>
                                            <span className="w-[22%] text-center">{solicitud.nombre}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>Estado de aprovacion:</span>

                                            <span className={`rounded-full w-[22%] flex justify-center items-center h-8 ${bgColorState}`}>
                                                {solicitud.stado}
                                            </span>

                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span>Detalles de aprobacion</span>
                                            <ModalDetailSolicitudeKP
                                                title={solicitud.stado}
                                                review={solicitud.review}
                                                read={() => handleRead(solicitud.id)}
                                                
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </ScrollArea>
            </div>
        </div>




    );


}