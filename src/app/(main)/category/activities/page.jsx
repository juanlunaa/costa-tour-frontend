import { textFont, titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { plan } from "@/mocks/plan";
import { CardPlan } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { IoRestaurant } from "react-icons/io5";
import { TbGps } from "react-icons/tb";
import { MdOutlineBeachAccess } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { PiBuildingApartment } from "react-icons/pi";


export default function Category() {
  return (
      <div>
        <Tabs defaultValue="restaurante" className="w-full mt-24">
          <TabsList className="flex flex-wrap justify-around">
            <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="restaurante">
              <IoRestaurant className="w-4 h-4 mr-2"/> Restaurantes
            </TabsTrigger>
            <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="sitio-turistico">
              <TbGps className="w-6 h-6 mr-2"/> Sitios Turísticos
            </TabsTrigger>
            <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="playa">
              <MdOutlineBeachAccess className="w-6 h-6 mr-2"/> Playas
            </TabsTrigger>
            <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="alojamiento">
              <PiBuildingApartment className="w-6 h-6 mr-2"/> Alojamientos
            </TabsTrigger>
            <TabsTrigger className={`${textFont.className} font-bold text-black sm:text-xl`} value="extremo">
              <FaFire className="w-6 h-6 mr-2"/> Extremos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="restaurante">Restaurantes</TabsContent>
          <TabsContent value="sitio-turistico">Sitios turisticos</TabsContent>
          <TabsContent value="playa">Playas</TabsContent>
          <TabsContent value="alojamiento">Alojamientos</TabsContent>
          <TabsContent value="extremo">Extremos</TabsContent>
        </Tabs>
      </div>
  );
}