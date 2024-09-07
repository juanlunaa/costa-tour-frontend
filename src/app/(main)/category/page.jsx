import { textFont, titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { plan } from "@/mocks/plan";
import { CardPlan } from "@/components";

export default function Category() {
  return (
    <div className='relative'>
      <div className='relative w-full h-[20vh] sm:h-[70vh]'>
        <Image
          src='/categoria-banner.webp'
          alt='Banner Categorias'
          className='object-cover'
          fill
          sizes='100vw'
        />
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 -mt-12
        bg-white rounded-full shadow-customBlueShadow
        w-[90%] p-4 flex flex-col gap-4 items-center sm:w-[60%] sm:flex-row sm:justify-center sm:p-8 sm:gap-8'>
        <Link
          href='#'
          className={`${titleFont.className} sm:text-2xl`}
        >
          Actividades
        </Link>
        <Link
          href='#'
          className={`${titleFont.className} sm:text-2xl`}
        >
          Recomendaciones
        </Link>
      </div>

      <div className="mt-24 flex justify-around flex-wrap">
        <Link
          href='#'
          className={`${textFont.className} font-bold sm:text-xl`}
        >
          Restaurantes
        </Link>

        <Link
          href='#'
          className={`${textFont.className} font-bold sm:text-xl`}
        >
          Sitios Turísticos
        </Link>

        <Link
          href='#'
          className={`${textFont.className} font-bold sm:text-xl`}
        >
          Playas
        </Link>

        <Link
          href='#'
          className={`${textFont.className} font-bold sm:text-xl`}
        >
          Alojamientos
        </Link>
      </div>

      <div className='grid grid-cols-auto-fit gap-8 mt-12'>
        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />

        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />

        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />

        <CardPlan
          nombre={plan.nombre}
          miniatura={plan.miniatura}
          descripcion={plan.descripcion}
        />
      </div>

    </div>
  );
}