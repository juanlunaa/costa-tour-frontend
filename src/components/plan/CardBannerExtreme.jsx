import Image from "next/image"
export function CardExtreme({ image, title, className }) {
    return (
        <div className={`bg-[#e8e5d5] shadow-customBoxShadow w-[18%] sm:w-[15%] ${className}`}>
            <div className="relative w-full h-[90px] sm:h-28 md:h-36 lg:h-52">
                <Image
                    src={image}
                    alt="Banner Categorias"
                    className="object-cover flex justify-center  p-1 sm:p-2 aspect-video h-48"
                    fill
                    sizes="100vw"
                />
            </div>
            <div className="pb-5 pt-1 lg:py-2 flex justify-center">
                <h1 className="font-anton italic uppercase text-[#1e2311] font-bold text-xs lg:text-base">
                    {title}</h1>
            </div>
        </div>
    );
}