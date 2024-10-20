import { IoRestaurant } from "react-icons/io5"
import { MdOutlineBeachAccess } from "react-icons/md"
import { PiBuildingApartment } from "react-icons/pi"
import { TbGps } from "react-icons/tb"
import { CardPlan } from "@/components"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CheckboxGroupDemo from "@/components/ui/checkbox-group/Checkbox"
import { fetchAllPlans } from "@/services/plan"
import { ScrollArea } from "@/components/ui/scroll-area"

async function getPlans() {
  const plans = await fetchAllPlans()
  const validPlans = Array.isArray(plans) ? plans : []
  return { plans: validPlans }
}

export default async function Activity() {
  const { plans } = await getPlans()
  const restaurants = plans?.filter((p) => p.categoria === "RESTAURANTE")
  const touristSites = plans?.filter((p) => p.categoria === "SITIO_TURISTICO")
  const beaches = plans?.filter((p) => p.categoria === "PLAYA")
  const accommodations = plans?.filter((p) => p.categoria === "ALOJAMIENTO")

  return (
    <div className="container-slider">
      <Tabs defaultValue="restaurante" className="w-full mt-2">
        <TabsList className="grid grid-cols-2 sm:flex sm:justify-around justify-items-center content-center items-center">
          <TabsTrigger
            className="font-bold text-black dark:text-gray-400"
            value="restaurante"
          >
            <IoRestaurant className="w-5 h-5" /> Restaurantes
          </TabsTrigger>
          <TabsTrigger
            className="font-bold text-black  dark:text-gray-400"
            value="sitio-turistico"
          >
            <TbGps className="w-6 h-6" /> Sitios Turísticos
          </TabsTrigger>
          <TabsTrigger
            className="font-bold text-black  dark:text-gray-400"
            value="playa"
          >
            <MdOutlineBeachAccess className="w-6 h-6" /> Playas
          </TabsTrigger>
          <TabsTrigger
            className="font-bold text-black dark:text-gray-400"
            value="alojamiento"
          >
            <PiBuildingApartment className="w-6 h-6" /> Alojamientos
          </TabsTrigger>
        </TabsList>
        <div className="grid-filter-tabContent flex flex-col items-center sm:items-start sm:flex-row sm:justify-between sm:mt-24 mt-8 sm:gap-1 gap-5">
          <div
            className="filter shadow-customBoxShadow rounded-sm sm:max-w-[150px] md:max-w-[200px] max-w-[600px] 
                          w-[90%] sm:ml-[3%] h-fit sm:flex-row dark:bg-gray-800"
          >
            <CheckboxGroupDemo />
          </div>
          {/* <ScrollArea className="relative h-[700px] sm:mr-1  md:mr-5 overflow-auto"> */}
          <div className="flex justify-end">
            <TabsContent value="restaurante" className="relative w-full">
              <div className=" grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-y-5 gap-y-4">
                {restaurants.map((p) => (
                  <CardPlan
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    miniatura={p.miniatura}
                    descripcion={p.descripcion}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sitio-turistico" className="relative w-full">
              <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-3 gap-4">
                {touristSites.map((p) => (
                  <CardPlan
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    miniatura={p.miniatura}
                    descripcion={p.descripcion}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="playa" className="relative w-full">
              <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-3 gap-4">
                {beaches.map((p) => (
                  <CardPlan
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    miniatura={p.miniatura}
                    descripcion={p.descripcion}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="alojamiento" className="relative w-full">
              <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 md:gap-4 sm:gap-3 gap-4">
                {accommodations.map((p) => (
                  <CardPlan
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    miniatura={p.miniatura}
                    descripcion={p.descripcion}
                  />
                ))}
              </div>
            </TabsContent>
          </div>
          {/* </ScrollArea> */}
        </div>
      </Tabs>
    </div>
  )
}
