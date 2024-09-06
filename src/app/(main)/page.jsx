import { textFont, titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home () {
  return (
    <div>

      <div className='my-12'>
        <h1 className={`${titleFont.className} text-2xl text-center mb-12`}>Aventuras que te esperan</h1>

        <div className='grid gap-4 grid-cols-3 px-20 h-80'>
          <div className='grid row-span-2 relative'>
            <Image
              src='/slide-image-1.webp'
              objectFit='cover'
              layout='fill'
              alt='Selfie'
              className='rounded-lg'
            />

            <p className={`${textFont.className} absolute bottom-2 left-2 text-white font-semibold`}>Selfie</p>
          </div>

          <div className='grid row-span-2 relative'>
            <Image
              src='/slide-image-1.webp'
              objectFit='cover'
              layout='fill'
              alt='Pasear'
              className='rounded-lg'
            />

            <p className={`${textFont.className} absolute bottom-2 left-2 text-white font-semibold`}>Pasear</p>
          </div>

          <div className='grid relative row-span-1'>
            <Image
              src='/slide-image-1.webp'
              objectFit='cover'
              layout='fill'
              alt='Recreacion'
              className='rounded-lg'
            />

            <p className={`${textFont.className} absolute bottom-2 left-2 text-white font-semibold`}>Recreación</p>
          </div>

          <div className='grid relative row-span-1'>
            <Image
              src='/slide-image-1.webp'
              objectFit='cover'
              layout='fill'
              alt='Comer'
              className='rounded-lg'
            />

            <p className={`${textFont.className} absolute bottom-2 left-2 text-white font-semibold`}>Comer</p>
          </div>

        </div>
      </div>
    </div>
  )
}