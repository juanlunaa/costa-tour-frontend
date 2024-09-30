import { CardRecommendation } from "@/components/ui/recommendation-card/Card-Recommendation"

export default function Recomendation() {
  return (
    <div className="flex justify-center">
      <div className="carousel-recomendation container mt-24 font-bold">
        <h1 className="text-2xl">Recomendaciones Personalizadas </h1>

        <hr className="mt-8 w-full"></hr>

        <CardRecommendation title="Restaurantes"/>

        <CardRecommendation title="Sitios Turisticos"/>

        <CardRecommendation title="Playas"/>

        <CardRecommendation title="Hotel"/>

        <CardRecommendation title="Extremos"/>

      </div>
    </div>
  )
}
