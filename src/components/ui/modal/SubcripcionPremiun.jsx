import { BsCheckCircle } from "react-icons/bs";

const tiers = [
    {
        name: 'Mensual ',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$30.000',
        features: [
            'Acceso a experiencias exclusivas: Disfruta de actividades y eventos que no están disponibles para los usuarios regulares.',
            'Descuentos especiales: Obtén tarifas reducidas en hoteles, restaurantes y planes turísticos aliados.',
            'Fiestas privadas: Entrada a fiestas VIP y eventos nocturnos solo para suscriptores premium.',
            'Actividades extremas: Participa en deportes de aventura y experiencias extremas diseñadas para quienes buscan adrenalina.',
            'Reservas prioritarias: Asegura tu lugar en los eventos y actividades más demandados antes que el público general.',
            'Atención personalizada: Servicio de atención exclusivo de 24 horas  para ayudarte a planificar cada detalle de tu viaje.',],
        featured: false,
    },
    {
        name: 'Anual',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$299.000',
        features: [
            'Acceso a experiencias exclusivas: Disfruta de actividades y eventos que no están disponibles para los usuarios regulares.',
            'Descuentos especiales: Obtén tarifas reducidas en hoteles, restaurantes y planes turísticos aliados.',
            'Fiestas privadas: Entrada a fiestas VIP y eventos nocturnos solo para suscriptores premium.',
            'Actividades extremas: Participa en deportes de aventura y experiencias extremas diseñadas para quienes buscan adrenalina.',
            'Reservas prioritarias: Asegura tu lugar en los eventos y actividades más demandados antes que el público general.',
            'Atención personalizada: Servicio de atención exclusivo de 24 horas  para ayudarte a planificar cada detalle de tu viaje.',
        ],
        featured: true,
    },
]

export default function Subcripcion() {
    return (
        <div >
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center justify-items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className="relative w-[95%] bg-transparent shadow-customBoxShadow rounded-3xl p-8 ring-1 ring-gray-900/10 sm:px-10 py-8"
                    >
                        <h3
                            id={tier.id}
                            className="text-black text-base font-semibold leading-3"
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-[#FF8E01] text-5xl font-semibold tracking-tight">
                                {tier.priceMonthly}
                            </span>
                        </p>
                      
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-3 text-gray-300 sm:mt-6">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3 text-sm text-black">
                                    <BsCheckCircle className="text-[#FF8E01] h-6 w-5 flex-none" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className="mt-8 block rounded-md bg-[#FF8E01] text-black shadow-sm hover:bg-orange-400 focus-visible:outline-[#FF8E01] px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10"
                        >
                            Suscribirme
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}