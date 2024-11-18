import Image from "next/image"
export default function TermsLegals() {

    return (

        <div className="pt-20 bg-white">
            <div className="relative flex flex-col bg-[linear-gradient(to_right,hsl(32,71%,90%,100%),hsl(0,0%,100%,14%),hsl(0,0%,100%,14%),hsl(32,71%,90%,100%))]">
                <div className="relative flex justify-center mb-20 mt-8 z-10">
                    <Image
                        src="/Terms.png"
                        width={600}
                        height={600}
                        className=" w-[60%] h-[50%] object-cover aspect-video"
                    />
                </div>


                <div className="section-1-exclusive h-96 max-w-xl w-full absolute right-40 top-40 -z-0"></div>
                <div className="absolute flex w-full bottom-0">
                    <Image
                        src="/Vector.png"
                        width={10 * 100}
                        height={40}
                        className=" w-full h-5 sm:h-10 object-cover aspect-video"
                    />

                </div>
            </div>

            <div className="relative container px-10 sm:px-28 mx-auto z-10 bg-white mb-16">
                <h1 className="pt-16 mb-8 font-bold font-volkhov text-4xl text-center">
                    Términos y Condiciones
                </h1>
                <p>
                    Bienvenido a <span className="text-[#F5A200]"> Costa Tour</span>. Al usar nuestra plataforma, aceptas cumplir con
                    los términos y condiciones que se detallan a continuación. Estos términos rigen el uso de
                    nuestro sitio web. Te recomendamos leerlos atentamente antes de utilizar nuestros servicios
                </p>
                <h1 className="my-3 font-bold font-volkhov text-xl ">
                    1. Uso de la Plataforma
                </h1>

                <ul className="list-disc pl-5" >
                    <li className="my-2">
                        Registro de usuario: Para acceder a algunos servicios de Costa Tour, es necesario
                        registrarse proporcionando información veraz y actualizada. Es responsabilidad del
                        usuario mantener la confidencialidad de su cuenta.
                    </li>

                    <li className="my-2">
                        Requisitos de edad: Debes tener al menos 18 años para usar nuestra plataforma.
                        Al utilizar Costa Tour, declaras que cumples con este requisito.
                    </li>
                </ul>

                <h1 className="my-3 font-bold font-volkhov text-xl">
                    2. Servicios de Costa Tour
                </h1>

                <p>
                    Costa Tour facilita la creación de experiencias únicas y personalizadas, y pone en contacto
                    a turistas con aliados turísticos verificados en Cartagena. Nuestros servicios incluyen:
                </p>
                <ul className="list-disc pl-5">
                    <li className="my-2">
                        Recomendaciones Personalizadas: Según tus preferencias y selecciones, Costa Tour
                        te sugiere experiencias y actividades que podrían interesarte. Estas recomendaciones
                        están sujetas a disponibilidad y pueden variar.
                    </li>
                    <li className="my-2">
                        Aliados Certificados: Trabajamos solo con empresas turísticas verificadas para asegurar
                        la calidad de los servicios. Sin embargo, Costa Tour no se hace responsable de las
                        experiencias directamente brindadas por estos aliados.
                    </li>
                </ul>

                <h1 className="my-3 font-bold font-volkhov text-xl">
                    3. Planes Premium y Ofertas Exclusivas
                </h1>

                <p>
                    Costa Tour ofrece tanto acceso gratuito como planes premium, los cuales brindan acceso
                    a contenido y beneficios adicionales, tales como promociones y descuentos exclusivos.
                    Todas las ofertas están sujetas a disponibilidad y tienen términos específicos que se
                    indican claramente en cada promoción.
                </p>
                <h1 className="my-3 font-bold font-volkhov text-xl">
                    4. Derechos y Responsabilidades del Usuario
                </h1>

                <p>Al utilizar Costa Tour, aceptas que:</p>
                <ul className="list-disc pl-5  ">
                    <li className="my-2">
                        Harás uso adecuado de la plataforma, sin fines ilegales ni fraudulentos.
                    </li>
                    <li className="my-2">
                        Cumplirás con nuestras Pautas de Comunidad al dejar comentarios, recomendaciones
                        o cualquier tipo de contenido.
                    </li>
                    <li className="my-2">
                        Costa Tour se reserva el derecho de eliminar contenido que considere inapropiado
                        o en incumplimiento de nuestras políticas.
                    </li>
                </ul>

                <h1 className="my-3 font-bold font-volkhov text-xl">
                    5. Resolución de Conflictos y Soporte
                </h1>

                <p>
                    Si experimentas algún problema con nuestros servicios o las experiencias ofrecidas
                    por nuestros aliados, puedes contactar a nuestro equipo de soporte. Intentaremos
                    resolver tu situación en el menor tiempo posible y de la mejor manera.
                </p>
                <ul className="list-disc pl-5">
                    <li className="my-2">
                        Reclamaciones: Si tienes una queja sobre un servicio ofrecido por un aliado turístico,
                        te ayudaremos a gestionar la comunicación con el proveedor. Sin embargo, la
                        responsabilidad final recae en el proveedor del servicio.
                    </li>
                </ul>

                <h1 className="my-3 font-bold font-volkhov text-xl">
                    6. Modificación de los Términos
                </h1>

                <p>
                    Costa Tour se reserva el derecho de modificar estos términos y condiciones.
                    Cualquier cambio será notificado a los usuarios registrados a través de correo electrónico
                    o mediante un aviso en nuestra plataforma.
                    Al continuar utilizando Costa Tour después de cualquier modificación, aceptas los términos
                    actualizados.
                </p>
            </div>

        </div>
    );
}