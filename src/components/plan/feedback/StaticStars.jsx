import { cn } from "@/lib/utils"
import { IoMdStar } from "react-icons/io"

const StaticStars = ({ value }) => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <IoMdStar
          key={i}
          className={cn(
            "inline-block w-4 h-4  fill-current",
            i < value ? "text-customOrange" : "text-gray-300"
          )}
        />
      ))}
    </div>
  )
}

export default StaticStars
