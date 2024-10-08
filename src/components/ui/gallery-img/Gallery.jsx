"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 relative sm:h-[40vh] md:h-[50vh] lg:h-[65vh] h-[22vh]">
        <Image
          src={mainImage}
          fill
          className="object-cover rounded-lg aspect-video"
        />
      </div>
      <div className="relative grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer relative aspect-4/3 sm:pb-[60%] pb-[70%] "
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover rounded-md hover:opacity-75 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
