"use client"
import { StarIcon } from "lucide-react";
import { useState } from 'react';
import { BsCheckAll } from "react-icons/bs";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { BiEdit } from "react-icons/bi";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
export function FeedbackPlan() {
    const [rating, setRating] = useState(0);
    const StyleNumSpan = "sm:text-xs sm:font-normal md:text-sm md:font-medium text-xs font-light"; 
    const stylePromSpan ="sm:text-sm sm:font-medium text-xs font-light";
    return (

        <div>
            <div className="customer-review mt-12">
                <h1 className="text-lg sm:text-lg lg:text-xl">Reseña del cliente</h1>
            </div>

            <div className="rating grid  grid-cols-2 sm:grid-cols-2 gap-4 mt-5 ">
                <div>
                    <div className="flex items-end gap-1">
                        <span className="font-mulish ml-2 font-black text-2xl sm:text-3xl">4,30</span>
                        <p className="font-mulish font-light text-xs sm:text-base">850 Reseñas</p>
                    </div>
                    <div className="mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon
                                key={i}
                                onClick={() => setRating(i + 1)}
                                className={`inline-block md:w-11 md:h-11 sm:w-8 sm:h-8 w-6 h-6 fill-current 
                                ${i < rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex gap-2 ml-auto w-[70%]">
                    <div className="flex flex-col justify-around text-end">
                        <span className={StyleNumSpan}>5</span>
                        <span className={StyleNumSpan}>3</span>
                        <span className={StyleNumSpan}>2</span>
                        <span className={StyleNumSpan}>1</span>
                        <span className={StyleNumSpan}>4</span>
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center w-full">
                        <div className="flex items-center gap-x-2">
                            <Progress value={90} className="md:h-4 sm:h-2 h-2" />
                            <span className={stylePromSpan}>4.8</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Progress value={60} className="md:h-4 sm:h-2 h-2"/>
                            <span className={stylePromSpan}>3.0</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Progress value={85} className="md:h-4 sm:h-2 h-2"/>
                            <span className={stylePromSpan}>4.5</span>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Progress value={70} className="md:h-4 sm:h-2 h-2"/>
                            <span className={stylePromSpan}>4.0</span>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollArea className="h-[650px] sm:h-[800px] md:h-[830px] lg:h-[700px] pr-4 mt-8 mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[0.7fr_2.5fr] sm:gap-4 gap-1 w-full border-[#E8EAEB] border-b-2 py-4 my-8">
                    <div className="flex sm:gap-4 gap-3  items-start">
                        <div>
                            <Avatar className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16">
                                <AvatarImage src="../categoria-banner.webp" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div>
                            <div>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        onClick={() => setRating(i + 1)}
                                        className={`inline-block sm:w-3 sm:h-3 w-4 h-4  fill-current 
                                ${i < rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                                    />
                                ))}
                            </div>
                            <div>
                                <span className="flex items-center text-sm sm:text-base w-max">Arlene McCoy
                                    <BsCheckAll className="ml-1 text-[#7BBCB0] text-lg sm:text-xl" /></span>
                                <p className=" font-mulish text-xs sm:text-sm text-[#778088]">6 octubre 2024</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className="font-mulish font-bold sm:text-base text-sm">Buen recorrido, muy bien organizado.</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-4">
                                <p className="text-[#767681] font-mulish text-xs sm:text-sm md:text-base leading-relaxed sm:leading-normal">
                                    Visitar el centro histórico de Cartagena fue como adentrarme en un cuento de hadas
                                    caribeño. Cada esquina era una obra de arte, con sus coloridas casas coloniales y sus
                                    balcones adornados de flores. Me encantó perderme por sus callejuelas empedradas y
                                    descubrir los secretos que guarda esta ciudad llena de historia y encanto.
                                </p>
                            </div>

                            <div className="text-center flex justify-center px-2">
                                <div className="flex justify-center flex-col items-center">
                                    <span className="sm:text-sm md:text-base text-xs ">Editar</span>
                                    <BiEdit className="sm:text-2xl text-xl cursor-pointer " />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* agregado de ejemplo */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[0.7fr_2.5fr] sm:gap-4 gap-1 w-full border-[#E8EAEB] border-b-2 py-4 my-8">
                    <div className="flex sm:gap-4 gap-3  items-start">
                        <div>
                            <Avatar className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16">
                                <AvatarImage src="../categoria-banner.webp" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div>
                            <div>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        onClick={() => setRating(i + 1)}
                                        className={`inline-block sm:w-3 sm:h-3 w-4 h-4  fill-current 
                                ${i < rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                                    />
                                ))}
                            </div>
                            <div>
                                <span className="flex items-center text-sm sm:text-sm w-max">Arlene McCoy
                                    <BsCheckAll className="ml-1 text-[#7BBCB0] text-lg sm:text-xl" /></span>
                                <p className=" font-mulish text-xs sm:text-sm text-[#778088]">6 octubre 2024</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className="font-mulish font-bold sm:text-base text-sm">Buen recorrido, muy bien organizado.</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-4">
                                <p className="text-[#767681] font-mulish text-xs sm:text-xs md:text-sm leading-relaxed sm:leading-normal">
                                    Visitar el centro histórico de Cartagena fue como adentrarme en un cuento de hadas
                                    caribeño. Cada esquina era una obra de arte, con sus coloridas casas coloniales y sus
                                    balcones adornados de flores. Me encantó perderme por sus callejuelas empedradas y
                                    descubrir los secretos que guarda esta ciudad llena de historia y encanto.
                                </p>
                            </div>

                            <div className="text-center flex justify-center px-2">
                                <div className="flex justify-center flex-col items-center">
                                    <span className="sm:text-sm md:text-base text-xs ">Editar</span>
                                    <BiEdit className="sm:text-2xl text-xl cursor-pointer " />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[0.7fr_2.5fr] sm:gap-4 gap-1 w-full border-[#E8EAEB] border-b-2 py-4 my-8">
                    <div className="flex sm:gap-4 gap-3  items-start">
                        <div>
                            <Avatar className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16">
                                <AvatarImage src="../categoria-banner.webp" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div>
                            <div>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        onClick={() => setRating(i + 1)}
                                        className={`inline-block sm:w-3 sm:h-3 w-4 h-4  fill-current 
                                ${i < rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                                    />
                                ))}
                            </div>
                            <div>
                                <span className="flex items-center text-sm sm:text-sm w-max">Arlene McCoy
                                    <BsCheckAll className="ml-1 text-[#7BBCB0] text-lg sm:text-xl" /></span>
                                <p className=" font-mulish text-xs sm:text-sm text-[#778088]">6 octubre 2024</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className="font-mulish font-bold sm:text-base text-sm">Buen recorrido, muy bien organizado.</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-4">
                                <p className="text-[#767681] font-mulish text-xs sm:text-xs md:text-sm leading-relaxed sm:leading-normal">
                                    Visitar el centro histórico de Cartagena fue como adentrarme en un cuento de hadas
                                    caribeño. Cada esquina era una obra de arte, con sus coloridas casas coloniales y sus
                                    balcones adornados de flores. Me encantó perderme por sus callejuelas empedradas y
                                    descubrir los secretos que guarda esta ciudad llena de historia y encanto.
                                </p>
                            </div>

                            <div className="text-center flex justify-center px-2">
                                <div className="flex justify-center flex-col items-center">
                                    <span className="sm:text-sm md:text-base text-xs ">Editar</span>
                                    <BiEdit className="sm:text-2xl text-xl cursor-pointer " />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[0.7fr_2.5fr] sm:gap-4 gap-1 w-full border-[#E8EAEB] border-b-2 py-4 my-8">
                    <div className="flex sm:gap-4 gap-3  items-start">
                        <div>
                            <Avatar className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16">
                                <AvatarImage src="../categoria-banner.webp" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div>
                            <div>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        onClick={() => setRating(i + 1)}
                                        className={`inline-block sm:w-3 sm:h-3 w-4 h-4  fill-current 
                                ${i < rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                                    />
                                ))}
                            </div>
                            <div>
                                <span className="flex items-center text-sm sm:text-sm w-max">Arlene McCoy
                                    <BsCheckAll className="ml-1 text-[#7BBCB0] text-lg sm:text-xl" /></span>
                                <p className=" font-mulish text-xs sm:text-sm text-[#778088]">6 octubre 2024</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className="font-mulish font-bold sm:text-base text-sm">Buen recorrido, muy bien organizado.</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-4">
                                <p className="text-[#767681] font-mulish text-xs sm:text-xs md:text-sm leading-relaxed sm:leading-normal">
                                    Visitar el centro histórico de Cartagena fue como adentrarme en un cuento de hadas
                                    caribeño. Cada esquina era una obra de arte, con sus coloridas casas coloniales y sus
                                    balcones adornados de flores. Me encantó perderme por sus callejuelas empedradas y
                                    descubrir los secretos que guarda esta ciudad llena de historia y encanto.
                                </p>
                            </div>

                            <div className="text-center flex justify-center px-2">
                                <div className="flex justify-center flex-col items-center">
                                    <span className="sm:text-sm md:text-base text-xs ">Editar</span>
                                    <BiEdit className="sm:text-2xl text-xl cursor-pointer " />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[0.7fr_2.5fr] sm:gap-4 gap-1 w-full border-[#E8EAEB] border-b-2 py-4 my-8">
                    <div className="flex sm:gap-4 gap-3  items-start">
                        <div>
                            <Avatar className="h-8 w-8 sm:w-12 sm:h-12 md:h-16 md:w-16">
                                <AvatarImage src="../categoria-banner.webp" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>

                        <div>
                            <div>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        onClick={() => setRating(i + 1)}
                                        className={`inline-block sm:w-3 sm:h-3 w-4 h-4  fill-current 
                                ${i < rating ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                                    />
                                ))}
                            </div>
                            <div>
                                <span className="flex items-center text-sm sm:text-sm w-max">Arlene McCoy
                                    <BsCheckAll className="ml-1 text-[#7BBCB0] text-lg sm:text-xl" /></span>
                                <p className=" font-mulish text-xs sm:text-sm text-[#778088]">6 octubre 2024</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className="font-mulish font-bold sm:text-base text-sm">Buen recorrido, muy bien organizado.</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-4">
                                <p className="text-[#767681] font-mulish text-xs sm:text-xs md:text-sm leading-relaxed sm:leading-normal">
                                    Visitar el centro histórico de Cartagena fue como adentrarme en un cuento de hadas
                                    caribeño. Cada esquina era una obra de arte, con sus coloridas casas coloniales y sus
                                    balcones adornados de flores. Me encantó perderme por sus callejuelas empedradas y
                                    descubrir los secretos que guarda esta ciudad llena de historia y encanto.
                                </p>
                            </div>

                            <div className="text-center flex justify-center px-2">
                                <div className="flex justify-center flex-col items-center">
                                    <span className="sm:text-sm md:text-base text-xs ">Editar</span>
                                    <BiEdit className="sm:text-2xl text-xl cursor-pointer " />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </ScrollArea>
        </div>

    );

}