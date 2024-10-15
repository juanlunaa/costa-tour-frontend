"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlanForm } from "@/components"
import clsx from "clsx"
import { IoCreateOutline } from "react-icons/io5";

export function ModalCreate({buttonColor}) {
  const [isOpen, setIsOpen] = useState(false)
  const stylebtn = clsx("w-[95%] text-xs sm:text-lg sm:w-[50%] md:text-xl font-bold mt-5 py-4 h-auto dark:text-black")

  const handleOpenChange = (open) => {
    if (!open) {
      if (
        confirm(
          "¿Estás seguro de que quieres cerrar? Los cambios no guardados se perderán."
        )
      ) {
        setIsOpen(false)
      }
    } else {
      setIsOpen(true)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${stylebtn}  ${buttonColor} items-stretch`} 
          onClick={() => setIsOpen(true)}
        ><IoCreateOutline className="w-6 h-6" />
          Crear Plan
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[900px] max-h-[90vh] h-full bg-white dark:bg-gray-800"
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
      >
        <div className="conten-scroll mt-[2%] sm:max-h-[calc(90vh-5rem)] max-h-[calc(90vh-5rem)] h-full pr-4 overflow-y-auto">
          <DialogTitle className="text-center dark:text-white">Agregar Plan</DialogTitle>
          <PlanForm closeModal={closeModal} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
