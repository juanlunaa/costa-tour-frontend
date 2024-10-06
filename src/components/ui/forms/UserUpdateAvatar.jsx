import { useId } from "react"
import { IoIosClose, IoIosCheckmark, IoIosBook } from "react-icons/io"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useForm } from "react-hook-form"
import clsx from "clsx"

export const UserUpdateAvatar = ({ srcAvatar }) => {
  const prevAvatar = srcAvatar
  const inputId = useId()


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm()

  const avatarInput = watch("avatar")
  const isNewAvatarLoad = avatarInput !== undefined && avatarInput?.length !== 0

  const onSubmit = handleSubmit((data) => {
    const { length, ...other } = data.avatar
    
    console.log(other.src)
    // setTimeout(() => reset(), [500])
  })

  return (
    <form onSubmit={onSubmit} className="relative h-16 w-16 md:h-32 md:w-32 mx-auto">
      <label 
        htmlFor={inputId}
        className={`absolute bottom-1 left-2 z-10 bg-customOrange p-1 rounded-full hover:cursor-pointer hover:bg-orange-700
          ${isNewAvatarLoad && "hidden"}
        `}
      >
        <IoIosBook />
      </label>

      <input
        type="file"
        id={inputId}
        className="hidden"
        {...register("avatar")}
      />

      <Avatar className="h-16 w-16 md:h-32 md:w-32">
        <AvatarImage src={srcAvatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <button
        type="submit"
        className={`absolute bottom-1 left-2 z-10 bg-customOrange p-1 rounded-full hover:cursor-pointer hover:bg-orange-700
          ${!isNewAvatarLoad && "hidden"}
        `}
      >
        <IoIosCheckmark />
      </button>

      <button
        type="reset"
        onClick={() => reset()}
        className={`absolute bottom-1 right-2 z-10 bg-customOrange p-1 rounded-full hover:cursor-pointer hover:bg-orange-700
          ${!isNewAvatarLoad && "hidden"}
        `}
      >
        <IoIosClose />
      </button>
    </form>
  )
}
