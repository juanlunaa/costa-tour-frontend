"use client"

import { useId } from "react"
import { useForm } from "react-hook-form"
import useUserStore from "@/hooks/useUserStore"
import usePreviewAvatar from "@/hooks/usePreviewAvatar"
import { toast } from "sonner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoIosClose, IoIosCheckmark } from "react-icons/io"
import { MdEdit } from "react-icons/md"
import { updateAvatar } from "@/services/user"

export const UserUpdateAvatar = ({ srcAvatar }) => {
  const { user, setUser } = useUserStore()

  const inputId = useId()

  const { register, handleSubmit, watch, reset } = useForm()

  const avatarInput = watch("avatar")
  const isNewAvatarLoad = avatarInput !== undefined && avatarInput?.length !== 0

  const { previewSrc, resetPreview } = usePreviewAvatar({
    inputFile: avatarInput,
  })

  const resetImage = () => {
    reset()
    resetPreview()
  }

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()
    formData.append("userId", user.userId)
    formData.append("avatar", data.avatar[0])

    const { res, status } = await updateAvatar(formData)

    if (status === 200) {
      setUser({ ...user, avatar: res.avatar })
      toast.success("Su avatar ha sido actualizado correctamente")
    } else {
      toast.success(
        "Ha ocurrido un error al momento de actualizar su avatar :'("
      )
    }
    resetImage()
  })

  return (
    <form
      onSubmit={onSubmit}
      className="relative h-16 w-16 md:h-32 md:w-32 mx-auto"
    >
      <label
        htmlFor={inputId}
        className={`absolute bottom-0 right-0 sm:right-1 z-10 bg-yellowProfile text-white border-2 border-white p-1 sm:p-2 rounded-full hover:cursor-pointer hover:bg-orange-700
          ${isNewAvatarLoad && "hidden"}
        `}
      >
        <MdEdit />
      </label>

      <input
        type="file"
        id={inputId}
        className="hidden"
        {...register("avatar")}
      />

      <Avatar className="h-16 w-16 md:h-32 md:w-32">
        <AvatarImage src={previewSrc ? previewSrc : srcAvatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <button
        type="submit"
        className={`absolute bottom-0 left-0 sm:left-1 z-10 bg-yellowProfile text-white border-2 border-white p-1 sm:p-2 rounded-full hover:cursor-pointer hover:bg-orange-700
          ${!isNewAvatarLoad && "hidden"}
        `}
      >
        <IoIosCheckmark />
      </button>

      <button
        type="reset"
        onClick={() => resetImage()}
        className={`absolute bottom-0 right-0 sm:right-1 z-10 bg-yellowProfile text-white border-2 border-white p-1 sm:p-2 rounded-full hover:cursor-pointer hover:bg-orange-700
          ${!isNewAvatarLoad && "hidden"}
        `}
      >
        <IoIosClose />
      </button>
    </form>
  )
}
