"use client"

import { BACKEND_SERVER } from "@/env"
import { formatSrcImage } from "@/lib/utils"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import StaticStars from "./plan/feedback/StaticStars"

const FeedbackTop = () => {
  const [topFeedbacks, setTopFeedbacks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_SERVER}/feedback/top`)
        setTopFeedbacks(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-20 w-full">
      {topFeedbacks.map((feedback) => (
        <div key={feedback.id} className="relative w-full gap-2 text-center">
          <div className="relative mb-2 h-64 sm:h-80 md:h-96 w-full lg:w-[90%] ">
            <Image
              src={formatSrcImage(feedback.turista.avatar)}
              fill
              alt="Comer"
              className="rounded-lg relative object-cover aspect-video shadow-customBoxShadow dark:shadow-customBoxShadowDark"
            />
          </div>
          <StaticStars
            value={feedback.calificacion}
            className="md:h-10 md:w-10"
          />

          <p className="font-bold mt-2 text-lg sm:text-2xl">
            {`${feedback.turista.nombre} ${feedback.turista.apellido}`}
          </p>
          <p className="text-base sm:text-lg text-orange-600">
            {feedback.turista.pais}
          </p>
          <p className="text-sm sm:text-base">{feedback.comentario}</p>
        </div>
      ))}
    </div>
  )
}

export default FeedbackTop
