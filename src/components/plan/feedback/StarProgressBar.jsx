import { Progress } from "@/components/ui/progress"

const StarProgressBar = ({ starLabel, percent, value }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="sm:text-xs sm:font-normal md:text-sm md:font-medium text-xs font-light">
        {starLabel}
      </span>
      <Progress value={percent} className="h-2 md:h-4" />
      <span className="sm:text-xs sm:font-normal md:text-sm md:font-medium text-xs font-light">
        {value}
      </span>
    </div>
  )
}

export default StarProgressBar
