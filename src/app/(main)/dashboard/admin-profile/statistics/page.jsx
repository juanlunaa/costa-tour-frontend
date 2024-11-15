import CarouselStatisticAdmin from "@/components/CarouselStatistic";



export default function StatisticAdmin() {
  return (

    <div className="container h-full  bg-[#F4F4F4] md:w-[780px] shadow-customBoxShadow dark:shadow-customBoxShadowDark dark:bg-gray-800">
      
      <CarouselStatisticAdmin/>

      <div className="w-[95%] bg-white text-left rounded-md shadow-customBoxShadow mb-10 p-4 mx-4">
        <h1 className="">Estadisticas</h1>
      </div>
    </div>
  );
}