"use client"

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { StarIcon } from "lucide-react"
import { DatePicker } from "../DatePicker"
import { Textarea } from "../ui/textarea"
import Image from "next/image"
import { formatSrcImage } from "@/lib/utils"
import { Controller, useForm } from "react-hook-form"
import useUserStore from "@/hooks/useUserStore"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { set } from "date-fns"
import { saveFeedback } from "@/services/plan"

const ModalComment = ({ idPlan, thumbnailPlan, namePlan, addComment }) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [confirmFeedback, setConfirmFeedback] = useState(false)

  const { user } = useUserStore()
  const { register, control, handleSubmit, reset } = useForm()

  const hasUser = !!user

  const onSubmit = handleSubmit(async (data) => {
    const newData = { ...data, idPlan, dniTurista: user?.dni }

    const { res, status } = await saveFeedback(newData)

    if (status === 200) {
      addComment(res)
      toast.success("Su comentario ha sido guardado")
    } else {
      toast.error(res)
    }

    reset()
    setOpen(false)
    console.log(newData)
  })

  if (hasUser && user?.tipoUsuario !== "TURISTA") return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild> */}
      <button
        onClick={() => {
          if (!hasUser) {
            setOpen(false)
            toast("Debes iniciar sesión para comentar", {
              action: {
                label: "Iniciar Sesión",
                onClick: () => router.push("/auth/login"),
              },
            })
            return
          }

          setOpen(true)
        }}
        className="text-white font-bold bg-customBlue py-2 px-4 rounded-full ring-1 ring-blue-800 mt-5 hover:bg-blue-700"
      >
        Escribir un Comentario
      </button>
      {/* </DialogTrigger> */}
      <DialogContent
        className="max-h-dvh sm:max-w-[720px] overflow-auto"
        onInteractOutside={(event) => event.preventDefault()}
      >
        <form onSubmit={onSubmit}>
          {/* <ScrollArea className="h-dvh p-2 md:h-fit"> */}
          <DialogHeader>
            <DialogTitle className="text-center md:text-2xl">
              Cuéntanos: ¿Cómo te fue en tu visita?
            </DialogTitle>
            <DialogDescription className="text-center">
              Tu opinión es importante para nosotros. ¡Compártela!
            </DialogDescription>
          </DialogHeader>
          <div className="md:grid grid-cols-2 gap-4 p-2">
            {/* Info del plan */}
            <div className="space-y-2">
              <div className="relative aspect-square rounded-md">
                <Image
                  src={formatSrcImage(thumbnailPlan)}
                  alt={`Miniatura de ${namePlan}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="font-bold sm:text-xl">{namePlan}</p>
            </div>
            {/* Inputs del comentario */}
            <div className="space-y-2">
              <div>
                <Label>¿Cómo calificarías tu experiencia?</Label>
                <Controller
                  name="calificacion"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={(e) => {
                            e.preventDefault()
                            onChange(star)
                          }}
                          className="text-2xl text-yellow-400"
                        >
                          {star <= value ? (
                            <StarIcon className="fill-current" />
                          ) : (
                            <StarIcon />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                />
              </div>

              <div>
                <Label>¿Cuándo asististe?</Label>
                <br />
                <Controller
                  name="fechaAsistencia"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <DatePicker
                      value={value}
                      onChange={onChange}
                      disabled={(date) => date > new Date()}
                      className="z-[1200]"
                    />
                  )}
                />
              </div>

              <div>
                <Label>Escribe tu opinión</Label>
                <Textarea
                  placeholder="Cuentanos tu experiencia aqui"
                  {...register("comentario")}
                />
              </div>

              <div className="flex gap-1">
                <Input
                  type="checkbox"
                  id="confirmFeedback"
                  className="w-4 h-4"
                  value={confirmFeedback}
                  onChange={(e) => setConfirmFeedback(e.target.checked)}
                />
                <Label htmlFor="confirmFeedback" className="text-xs italic">
                  Certifico que esta reseña se basa únicamente en mi experiencia
                  personal y representa mi opinión sincera del lugar. No he
                  recibido compensación alguna ni incentivos por parte del
                  establecimiento para escribir esta opinión. Entiendo que mi
                  comentario será visible para otros usuarios y me comprometo a
                  ser honesto, respetuoso y objetivo para ayudar a futuros
                  visitantes a tomar decisiones informadas.
                </Label>
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2 md:gap-0 md:space-y-0">
            <DialogClose asChild>
              <button
                type="reset"
                onClick={() => {
                  reset()
                }}
                className="text-white font-bold bg-customBlue py-2 px-4 rounded-full ring-1 ring-blue-800 hover:bg-blue-700"
              >
                Cancelar
              </button>
            </DialogClose>
            <button
              type="submit"
              className="text-white font-bold bg-customBlue py-2 px-4 rounded-full ring-1 ring-blue-800 hover:bg-blue-700 disabled:opacity-50"
              disabled={!confirmFeedback}
            >
              Enviar Opinión
            </button>
          </DialogFooter>
          {/* </ScrollArea> */}
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalComment
