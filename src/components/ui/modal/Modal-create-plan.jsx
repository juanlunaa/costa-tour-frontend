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

export function ModalCreate() {
  const [isOpen, setIsOpen] = useState(false)

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
          className="w-[95%] text-xs sm:text-lg sm:w-[50%] "
          onClick={() => setIsOpen(true)}
        >
          Crear Plan
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[900px] max-h-[90vh] h-full bg-white"
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
      >
        <div className="conten-scroll mt-[2%] sm:max-h-[calc(90vh-5rem)] max-h-[calc(90vh-5rem)] h-full pr-4 overflow-y-auto">
          <DialogTitle className="text-center">Agregar Plan</DialogTitle>
          <PlanForm closeModal={closeModal} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
