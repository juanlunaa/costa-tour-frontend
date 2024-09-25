import { textFont, titleFont } from "@/config/fonts"
import { plan } from "@/mocks/plan"
import Image from "next/image"
import Link from "next/link"
import { FaFire } from "react-icons/fa"
import { IoRestaurant } from "react-icons/io5"
import { MdOutlineBeachAccess } from "react-icons/md"
import { PiBuildingApartment } from "react-icons/pi"
import { TbGps } from "react-icons/tb"

import { CardPlan } from "@/components"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckboxGroupDemo } from "@/components/ui/checkbox-group/Checkbox"

export default function Category() {
  return (
    <div className="container-slider">
      <Tabs defaultValue="restaurante" className="w-full mt-24">
        <TabsList className="flex flex-wrap justify-around">
          <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="restaurante">
            <IoRestaurant className="w-4 h-4 mr-2" /> Restaurantes
          </TabsTrigger>
          <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="sitio-turistico">
            <TbGps className="w-6 h-6 mr-2" /> Sitios Turísticos
          </TabsTrigger>
          <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="playa">
            <MdOutlineBeachAccess className="w-6 h-6 mr-2" /> Playas
          </TabsTrigger>
          <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="alojamiento">
            <PiBuildingApartment className="w-6 h-6 mr-2" /> Alojamientos
          </TabsTrigger>
          <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="extremo">
            <FaFire className="w-6 h-6 mr-2" /> Extremos
          </TabsTrigger>
        </TabsList>
        <div className="grid-filter-tabContent flex flex-wrap justify-between mt-24">
          <div className="filter shadow-lg bg-[#FFFFFF] rounded-sm max-w-[200px] w-full ml-[3%]">
            <div className="title border-b border-b-[#F4F4F5] p-4"><h3>Filtrar por</h3></div>
            <CheckboxGroupDemo />
          </div>
          <TabsContent value="restaurante" className="relative w-3/4">Restaurantes
          <Image src="/img-carousel/cartagena1.png" objectFit="cover" layout="fill" alt="Selfie" className="rounded-lg" />
          

          </TabsContent>
          <TabsContent value="sitio-turistico" className="relative w-3/4">Sitios turisticos</TabsContent>
          <TabsContent value="playa" className="relative w-3/4">Playas</TabsContent>
          <TabsContent value="alojamiento" className="relative w-3/4">Alojamientos</TabsContent>
          <TabsContent value="extremo" className="relative w-3/4">Extremos</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
