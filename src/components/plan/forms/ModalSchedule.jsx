import { RHFScheduleSelector } from "@/components"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const ModalSchedule = ({ name, control, rules }) => {
  const [isOpen, setIsOpen] = useState(false)
  const stylebtn = cn(
    "w-[95%] text-xs sm:text-lg sm:w-[50%] md:text-xl font-bold mt-5 py-4 h-auto dark:text-black"
  )

  const handleOpenChange = (open) => {
    if (!open) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const closeModal = (e) => {
    e.preventDefault()
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="w-full hover:bg-customBlueInputAuth hover:shadow-customBoxShadow hover:text-black dark:bg-gray-700 dark:hover:bg-customBlueInputAuth"
          onClick={() => setIsOpen(true)}
        >
          Seleccionar horario
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-5xl max-h-[90vh] h-full bg-white dark:bg-customBlack"
        onPointerDownOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center dark:text-white">
            Seleccionar horario
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-[2%] sm:max-h-[calc(90vh-5rem)] max-h-[calc(90vh-5rem)] h-full pr-4">
          <RHFScheduleSelector name={name} control={control} rules={rules} />
        </ScrollArea>
        <DialogFooter className="pt-4">
          <Button
            type="button"
            variant="outline"
            className="hover:bg-customBlueInputAuth hover:shadow-customBoxShadow dark:hover:text-black dark:text-white dark:hover:bg-customBlueInputAuth mr-4"
            onClick={() => setIsOpen(false)}
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
