import { CardPlan } from "@/components"
import { plan } from "@/mocks/plan"
import { textFont, titleFont } from "@/config/fonts"
import { CardRecommendation } from "@/components/ui/recommendation-card/Card-Recommendation"

export default function Category() {
  return (
    <div className="flex justify-center">
      <div className="carousel-recomendation container mt-24 font-bold">
        <h1 className={`${titleFont.className} text-2xl`}>Recomendaciones Personalizadas </h1>

        <hr className="mt-8 w-full"></hr>

        <div className="restaurant mt-8 ">
          <div className="title-sllider-recomendation rounded-full w-40 h-10 flex flex-wrap justify-center 
                        content-around bg-[#37B1E2] text-white">Restaurantes</div>
          <CardRecommendation />
        </div>

        <div className="tourist-site mt-8 ">
          <div className="title-sllider-recomendation rounded-full w-40 h-10 flex flex-wrap justify-center 
                        content-around bg-[#37B1E2] text-white">Sitios Turisticos</div>
          <CardRecommendation />
        </div>

        <div className="beach mt-8 ">
          <div className="title-sllider-recomendation rounded-full w-40 h-10 flex flex-wrap justify-center 
                        content-around bg-[#37B1E2] text-white">Playas</div>
          <CardRecommendation />
        </div>

        <div className="hotel mt-8 ">
          <div className="title-sllider-recomendation rounded-full w-40 h-10 flex flex-wrap justify-center 
                        content-around bg-[#37B1E2] text-white">Hotel</div>
          <CardRecommendation />
        </div>

        <div className="extreme mt-8 ">
          <div className="title-sllider-recomendation rounded-full w-40 h-10 flex flex-wrap justify-center 
                        content-around bg-[#37B1E2] text-white">Extremos</div>
          <CardRecommendation />
        </div>
      </div>
    </div>
  )
}
