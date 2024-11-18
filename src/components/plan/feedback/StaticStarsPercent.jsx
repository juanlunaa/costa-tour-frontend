import { cn } from "@/lib/utils"
import { IoMdStar } from "react-icons/io"

const StaticStarsPercent = ({ value, className }) => {
  const percentage = ((new Number(value).toFixed(2) / 5) * 100).toFixed(0)

  const divOrangeStars = cn(
    `absolute top-0 left-0 overflow-hidden whitespace-nowrap w-[${20}%]`
  )

  console.log(divOrangeStars)

  return (
    <div className="w-fit relative">
      {/* Estrellas grises */}
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <IoMdStar
            key={i}
            className={cn(
              "inline-block md:w-12 md:h-12 sm:w-8 sm:h-8 w-6 h-6 text-gray-300 fill-current",
              className
            )}
          />
        ))}
      </div>

      {/* Estrellas puntuadas */}
      <div
        className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
        style={{ width: `${percentage}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <IoMdStar
            key={i}
            className={cn(
              "inline-block md:w-12 md:h-12 sm:w-8 sm:h-8 w-6 h-6 text-customOrange fill-current",
              className
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default StaticStarsPercent
