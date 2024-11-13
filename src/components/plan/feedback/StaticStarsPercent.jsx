import { cn } from "@/lib/utils"
import { IoMdStar } from "react-icons/io"

const StaticStarsPercent = ({ value }) => {
  const percentage = (new Number(value).toFixed(2) / 5) * 100

  return (
    <div className="mt-2 w-fit relative">
      {/* Estrellas grises */}
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <IoMdStar
            key={i}
            className="inline-block md:w-12 md:h-12 sm:w-8 sm:h-8 w-6 h-6 text-gray-300 fill-current"
          />
        ))}
      </div>

      {/* Estrellas puntuadas */}
      <div
        className={cn(
          "absolute top-0 left-0 overflow-hidden whitespace-nowrap",
          `w-[${percentage}%]`
        )}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <IoMdStar
            key={i}
            className="inline-block md:w-12 md:h-12 sm:w-8 sm:h-8 w-6 h-6 text-customOrange fill-current"
          />
        ))}
      </div>
    </div>
  )
}

export default StaticStarsPercent
