import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatSrcImage } from "@/lib/utils"
import StaticStars from "./StaticStars"
import { BsCheckAll } from "react-icons/bs"
import { IoTrash } from "react-icons/io5"
import axios from "axios"
import { BACKEND_SERVER } from "@/env"
import { toast } from "sonner"

const Comment = ({
  id,
  fechaPublicacion,
  calificacion,
  comentario,
  turista,
  dniTurista,
  removeComment,
}) => {
  const handleDelete = async () => {
    const res = await axios.delete(
      `${BACKEND_SERVER}/feedback/delete?feedbackId=${id}`
    )

    if (res.status === 200) {
      removeComment(id)
      toast.success("Comentario eliminado")
    } else {
      toast.error("Ha ocurrido un error al eliminar el comentario :'c")
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-1 w-full border-gray-300 border-b-2 py-4">
      <div className="flex sm:gap-4 gap-3  items-start">
        <Avatar className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16">
          <AvatarImage src={formatSrcImage(turista.avatar)} />
          <AvatarFallback>{`Avatar de ${turista.nombre}`}</AvatarFallback>
        </Avatar>

        <div>
          <StaticStars value={calificacion} />
          <span className="flex items-center text-sm sm:text-base w-max dark:text-white">
            {turista.nombre}
            <BsCheckAll className="ml-1 text-[#7BBCB0] text-lg sm:text-xl dark:text-white" />
          </span>

          <p className=" font-mulish text-xs sm:text-sm text-[#778088] dark:text-white">
            {new Date(fechaPublicacion)?.toLocaleDateString("es-ES", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="w-full flex gap-2">
        <p className="grow text-[#767681] font-mulish text-xs sm:text-sm md:text-base leading-relaxed sm:leading-normal dark:text-white">
          <br className="hidden md:block" />
          {comentario}
        </p>

        {dniTurista === turista.dni && (
          <button onClick={handleDelete}>
            <IoTrash className="sm:text-2xl text-xl cursor-pointer dark:text-white" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Comment
