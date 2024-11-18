"use client"
import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchFeedbacksByPlanId } from "@/services/plan"
import StarProgressBar from "./plan/feedback/StarProgressBar"
import Comment from "./plan/feedback/Comment"
import StaticStarsPercent from "./plan/feedback/StaticStarsPercent"
import useUserStore from "@/hooks/useUserStore"
import ModalComment from "./plan/ModalComment"

export function FeedbackPlan({
  idPlan,
  namePlan,
  thumbnailPlan,
  calificacionPromedio,
}) {
  const { user } = useUserStore()
  const [comments, setComments] = useState([])

  const addComment = (newComment) => {
    setComments((prev) => [...prev, newComment])
  }

  const removeComment = (id) => {
    setComments((prev) => prev.filter((item) => item.id !== id))
  }

  const calculateStarStatistics = ({ starNum, comments }) => {
    const commentsFiltered = comments.filter(
      (comment) => comment.calificacion === starNum
    )

    const numComments = comments.length
    const numCommentsFiltered = commentsFiltered.length

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchFeedbacksByPlanId(idPlan)
      setComments(res)
    }

    if (idPlan) {
      fetchData()
    }
  }, [idPlan])

  return (
    <>
      <div>
        <h1 className="font-bold sm:text-xl text-lg mb-2 dark:text-white">
          ¿Qué opinas de este lugar?
        </h1>
        <p className="dark:text-white">
          ¡Tu opinión cuenta! Si disfrutaste de una experiencia inolvidable en
          el lugar que visitaste, nos encantaría saberlo. Deja un comentario y
          cuéntanos qué fue lo que más te gustó. ¡Ayuda a otros viajeros a
          descubrir los mejores rincones y a vivir momentos únicos como los
          tuyos!
        </p>
        <ModalComment
          idPlan={idPlan}
          thumbnailPlan={thumbnailPlan}
          namePlan={namePlan}
          addComment={addComment}
        />
      </div>

      <div className="mt-10">
        <h1 className="text-lg font-bold mb-2 md:text-xl dark:text-white">
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

            <StaticStarsPercent value={calificacionPromedio} className="mt-2" />
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

        {comments.length !== 0 ? (
          <ScrollArea className="h-[650px] sm:h-[800px] md:h-[830px] lg:h-[700px] pr-4 mt-8 mb-12">
            <div>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  removeComment={removeComment}
                  dniTurista={user?.dni}
                  {...comment}
                />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="w-full text-center my-10">
            <h1 className="text-xl md:text-4xl">
              No hay comentarios disponibles
            </h1>
          </div>
        )}
      </div>
    </>
  )
}
