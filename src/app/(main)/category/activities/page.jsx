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

export default function Activity() {
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
        </TabsList>
        <div className="grid-filter-tabContent flex flex-wrap justify-between mt-24">
          <div className="filter shadow-lg bg-[#FFFFFF] rounded-sm max-w-[200px] w-full ml-[3%] h-fit">
            <div className="title border-b border-b-[#F4F4F5] p-4"><h3>Filtrar por</h3></div>
            <CheckboxGroupDemo />
          </div>
          <TabsContent value="restaurante" className="relative w-3/4">
            <div className='grid grid-cols-2 sm:grid-cols-2 gap-8 overflow-y-scroll h-[700px] max-w-full'>
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


          </TabsContent>
          <TabsContent value="sitio-turistico" className="relative w-3/4">Sitios turisticos</TabsContent>
          <TabsContent value="playa" className="relative w-3/4">Playas</TabsContent>
          <TabsContent value="alojamiento" className="relative w-3/4">Alojamientos</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
