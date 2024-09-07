import { textFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";

export const CardPlan = ({ nombre, miniatura, descripcion }) => {
  const urlImage = `http://localhost:4000${miniatura}`

  const longitudMaxima = 100;

  const descripcionRecortada = descripcion.length < longitudMaxima ? descripcion : `${descripcion.substring(0, longitudMaxima)}...`

  return (
    <div className='w-80 flex flex-col items-center mx-auto'>
      <div className='relative w-80 h-72'>
        <Image
          src={urlImage}
          fill
          className='object-cover rounded-xl'
          alt={nombre}
        />
        <h2 className='absolute bottom-2 left-2 text-white'>{nombre}</h2>
        <span className='absolute top-2 left-2 py-1 px-3 text-white text-xs bg-[#2D3134] rounded-full'>
          4.0
        </span>
        <span className='absolute top-2 right-2 p-1 bg-white text-2xl rounded-lg'>
          <CiBookmark />
        </span>
      </div>

      <p className={`${textFont.className} p-3 text-sm text-center`}>{descripcionRecortada}</p>

      <Link
        href='#'
        className='py-1 px-4 bg-customBlue text-white rounded-full'
      >
        Leer más
      </Link>
    </div>
  );
}