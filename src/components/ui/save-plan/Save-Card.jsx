import { Card, CardContent } from "@/components/ui/card"
import { BookmarkIcon, StarIcon } from "lucide-react"
import Image from "next/image";
const example = [
    {
        name: "Hotel las Américas",
        miniature: "/img-carousel/cartagena1.png?height=200&width=300",
        rating: 4,
        reviews: 584,
        price: 35.00
    },
]

export function SaveCardPlan() {
    return (
        <>
            {example.map((example, index) => (
                <Card key={index} className=" w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
                    <CardContent className="p-0">
                        <div className="miniatura relative w-full aspect-video">
                            <Image
                                src={example.miniature}
                                alt="Image plan"
                                fill
                                className="object-cover"
                            />
                            <BookmarkIcon className="absolute top-2 right-2 text-white" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg">{example.name}</h3>

                            <div className="grid grid-cols-2 mt-4">
                                <div className="flex flex-col items-start justify-end">
                                    <div>
                                        {Array.from({ length: example.rating }).map((_, i) => (
                                            <StarIcon key={i} className="inline-block w-4 h-4 fill-current text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-600">{example.reviews} reviews</span>
                                </div>

                                <div className="flex flex-col items-end justify-end">
                                    <span className="text-2xl font-volkhov font-bold text-green-600">${example.price}</span>
                                    <span className="text-xs text-gray-600"> por persona</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    )
}