"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlanForm } from "@/components"
import clsx from "clsx"
import { IoCreateOutline } from "react-icons/io5"
import { ScrollArea } from "../scroll-area"
import { cn } from "@/lib/utils"

export function ModalCreate({ buttonColor }) {
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
        <button
          className={cn(
            `${buttonColor} flex justify-center gap-1 w-[50%] sm:w-[40%] mt-5 py-4 text-sm md:text-base font-bold dark:text-black`
          )}
          onClick={() => setIsOpen(true)}
        >
          <IoCreateOutline className="w-6 h-6" />
          Crear Plan
        </button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-5xl max-h-[90vh] h-full bg-white dark:bg-customBlack"
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center dark:text-white">
            Agregar Plan
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-[2%] sm:max-h-[calc(90vh-5rem)] max-h-[calc(90vh-5rem)] h-full pr-4">
          <PlanForm closeModal={closeModal} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
