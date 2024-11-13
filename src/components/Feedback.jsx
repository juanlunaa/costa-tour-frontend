"use client"
import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchFeedbacksByPlanId } from "@/services/plan"
import StarProgressBar from "./plan/feedback/StarProgressBar"
import Comment from "./plan/feedback/Comment"
import StaticStarsPercent from "./plan/feedback/StaticStarsPercent"
import useUserStore from "@/hooks/useUserStore"

export function FeedbackPlan({ idPlan, calificacionPromedio }) {
  const { user } = useUserStore()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchFeedbacksByPlanId(idPlan)
      setComments(res)
    }

    if (idPlan) {
      fetchData()
    }
  }, [idPlan])

  const calculateStarStatistics = ({ starNum, comments }) => {
    const commentsFiltered = comments.filter(
      (comment) => comment.calificacion === starNum
    )

    const numComments = comments.length
    const numCommentsFiltered = commentsFiltered.length

    const avgRating =
      numCommentsFiltered !== 0
        ? commentsFiltered.reduce(
            (sum, comment) => sum + comment.calificacion,
            0
          ) / numCommentsFiltered
        : 0

    return {
      percent: (numCommentsFiltered / numComments) * 100,
      numCommentsWithStar: numCommentsFiltered,
    }
  }

  const starsStatistics = {
    1: { ...calculateStarStatistics({ starNum: 1, comments }) },
    2: { ...calculateStarStatistics({ starNum: 2, comments }) },
    3: { ...calculateStarStatistics({ starNum: 3, comments }) },
    4: { ...calculateStarStatistics({ starNum: 4, comments }) },
    5: { ...calculateStarStatistics({ starNum: 5, comments }) },
  }

  return (
    <div className="mt-10">
      <h1 className="text-lg font-bold py-5 md:text-xl dark:text-white">
        Reseñas
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-2xl md:text-3xl dark:text-white">
              {new Number(calificacionPromedio).toFixed(2)}
            </span>
            <p className="font-light text-xs md:text-base dark:text-white">
              <span>{comments.length}</span> Reseñas
            </p>
          </div>

          <StaticStarsPercent value={calificacionPromedio} />
        </div>

        <div className="w-3/4 ml-auto">
          {Object.keys(starsStatistics).map((key) => (
            <StarProgressBar
              key={key}
              starLabel={key}
              percent={starsStatistics[key]?.percent}
              value={starsStatistics[key]?.numCommentsWithStar}
            />
          ))}
        </div>
      </div>

      <ScrollArea className="h-[650px] sm:h-[800px] md:h-[830px] lg:h-[700px] pr-4 mt-8 mb-12">
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} dniTurista={user?.dni} {...comment} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
