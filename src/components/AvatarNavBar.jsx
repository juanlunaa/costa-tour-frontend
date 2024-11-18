import { cn, formatSrcImage } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover"
import Link from "next/link"
import { Sun, TreePalm } from "lucide-react"
import { logoutUser } from "@/services/auth"
import useUserStore from "@/hooks/useUserStore"
import { useRouter } from "next/navigation"

export const AvatarNavBar = ({ srcAvatar, name, profileHref, role }) => {
  const linkStyle = cn(
    "border py-1 px-2 rounded-md hover:bg-gray-400 dark:text-black",
    role === "TURISTA"
      ? "bg-yellowProfile hover:bg-[#e48a22]"
      : "bg-blueProfile hover:bg-[#2e98a6]"
  )

  const router = useRouter()

  const { logout } = useUserStore()

  const handleLogout = async () => {
    const { status } = await logoutUser()

    if (status === 200) {
      logout()
      router.push("/")
    }
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="h-10 w-10 md:h-14 md:w-14 cursor-pointer">
            <AvatarImage src={formatSrcImage(srcAvatar)} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="z-[1200] min-w-fit max-w-52 -left-4">
          <div className="flex justify-between gap-2">
            <p className="text-wrap">Hola, {name}</p>
            <span>
              <TreePalm />
            </span>
          </div>
          <br />
          <div className="flex flex-col gap-1">
            <PopoverClose asChild>
              <Link href={profileHref} className={linkStyle}>
                Ir al perfil
              </Link>
            </PopoverClose>
            <PopoverClose asChild>
              <Link href="/" onClick={handleLogout} className={linkStyle}>
                Cerrar Sesión
              </Link>
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
