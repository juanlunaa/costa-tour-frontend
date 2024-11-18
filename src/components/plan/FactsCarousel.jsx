"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Volume2, VolumeX } from "lucide-react"
import { useEffect, useState } from "react"

const FactsCarousel = ({ facts }) => {
  const [isSpeaking, setIsSpeaking] = useState(false)

  const handleSpeak = ({ text }) => {
    if (!("speechSynthesis" in window)) {
      alert("Speech Synthesis not supported in this browser")
      return
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      return
    }

    console.log(text)

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "es-ES"

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)

    if (!window.speechSynthesis.speaking) {
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div>
      <h1 className="font-bold sm:text-xl text-lg mb-2 dark:text-white">
        Conoce hechos historicos de este sitio turistico
      </h1>
      <Carousel className="w-full">
        <div className="space-x-2">
          <CarouselPrevious className="static" />
          <CarouselNext className="static" />
        </div>
        <CarouselContent>
          {facts.map((fact) => (
            <CarouselItem key={fact.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex gap-2 p-2">
                    <button
                      onClick={() => handleSpeak({ text: fact.descripcion })}
                      className="self-start"
                    >
                      {isSpeaking ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>

                    <p className="grow">{fact.descripcion}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default FactsCarousel
