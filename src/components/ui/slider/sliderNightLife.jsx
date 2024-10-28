"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const defaultImages = [
    "/img-carousel/carousel-nightlife/party1.jpg",
    "/img-carousel/carousel-nightlife/party2.jpg",
    "/img-carousel/carousel-nightlife/party3.jpg",
    "/img-carousel/carousel-nightlife/party4.jpg",
    "/img-carousel/carousel-nightlife/party5.jpg",
    "/img-carousel/carousel-nightlife/party6.jpg",
]

export default function CurvedSlider({ images = defaultImages }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    if (!images || images.length === 0) {
        return <div>No images to display</div>
    }

    return (
        <div className="relative w-full h-[300px] overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-center bg-[linear-gradient(to_right,hsl(0,0%,100%,14%),hsl(197,71%,90%,61%)_25%,hsl(0,0%,100%,14%),hsl(32,71%,90%,61%),hsl(0,0%,100%,14%))]">
                {images.map((image, index) => {
                    const offset = ((index - currentIndex + images.length) % images.length) - Math.floor(images.length / 2)


                    let scale = 1;
                    let opacity = 1;

                    if (offset === 0) {
                        scale = 0.80; // Imagen central más grande
                        opacity = 1;
                    } else if (Math.abs(offset) === 1) {
                        scale = 0.86; // Imágenes derecha e izquierda del medio
                        opacity = 1;
                    } else if (Math.abs(offset) === 2) {
                        scale = 1.1; // Imágenes primera y ultima
                        opacity = 1;
                    } else {
                        scale = 0; // Ocultar la transicion
                        opacity = 0;
                    }
                    return (
                        <div
                            key={index}
                            className="absolute w-[250px] h-[200px] transition-all duration-500 ease-in-out after:contents-['']"
                            style={{
                                transform: `translateX(${offset * 220}px) scale(${scale}) perspective(500px) rotateY(${offset * -18}deg)`,
                                zIndex: images.length - Math.abs(offset),
                                opacity: opacity,

                            }}
                        >
                            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    )
                })}
            </div>
            <Button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                onClick={nextSlide}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
                onClick={prevSlide}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
    )
}