import { FeedbackPlan } from "@/components/Feedback"
import ImageGallery from "@/components/ui/gallery-img/Gallery"
import MapComponent from "@/components/ui/mapview/Map"

export default function InfoPLan() {
  const images = [
    "/img-carousel/cartagena1.png",
    "/img-carousel/cartagena2.jpg",
    "/img-carousel/cartagena3.jpg",
    "/img-carousel/cartagena-sunset.jpg",
  ]
  return (
    <div className="flex justify-center pt-16 dark:bg-gray-900">
      <div className="container relative mt-20 w-[80%] mx-auto dark:bg-gray-900">
        <div>
          <h1 className="font-volkhov font-bold text-2xl sm:text-4xl dark:text-white">
            Centro Histórico de <br />
            Cartagena{" "}
          </h1>
        </div>

        <div>
          <ImageGallery images={images} />
        </div>

        <div>
          <h1 className="font-volkhov font-bold sm:text-xl text-lg pb-3 dark:text-white">
            Descripción
          </h1>
          <p className="sm:text-sm md:text-base text-xs dark:text-white">
            El centro histórico de Cartagena es un tesoro cultural que
            transporta a los visitantes a través de los siglos de historia y
            encanto caribeño. Rodeado por imponentes murallas coloniales que
            protegían la ciudad de los piratas, este distrito es un laberinto de
            calles empedradas, coloridas casas coloniales y plazas llenas de
            vida. Cada rincón de este casco antiguo respira la esencia de la
            época colonial española, desde la majestuosa Catedral hasta las
            fortalezas que atestiguan la tumultuosa historia marítima de la
            región.
            <br />
            <br />
            Explorar el centro histórico de Cartagena es sumergirse en un mundo
            de contrastes, donde lo antiguo y lo moderno se entrelazan en
            armonía. En sus calles estrechas, los turistas descubrirán boutiques
            de moda, galerías de arte contemporáneo y una vibrante escena
            gastronómica que fusiona sabores locales con influencias
            internacionales. Además, las plazas históricas como la Plaza de
            Bolívar y la Plaza Santo Domingo son puntos de encuentro donde la
            cultura y la vida cotidiana se entrelazan, ofreciendo a los
            visitantes una experiencia auténtica y cautivadora.
            <br />
            <br />
            Por encima de todo, el centro histórico de Cartagena es un
            testimonio viviente de la rica herencia cultural y arquitectónica de
            Colombia. Con su ambiente animado, su arquitectura colonial bien
            conservada y su cálido clima caribeño, esta joya del Caribe es un
            destino imprescindible para aquellos que buscan sumergirse en la
            historia y la belleza de América Latina.
            <br />
          </p>
        </div>

        <div>
          <h1 className="font-volkhov font-bold sm:text-xl text-lg py-5 dark:text-white">
            Ubicación
          </h1>
          <div className="h-[340px] rounded-lg">
            <MapComponent />
          </div>
        </div>

        <div>
          <FeedbackPlan />
        </div>
      </div>
    </div>
  )
}
