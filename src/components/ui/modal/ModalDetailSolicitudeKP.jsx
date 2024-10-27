import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../button";

export default function ModalDetailSolicitudeKP({ title, review, read }) {

    const [isOpen, setIsOpen] = useState(false);

    const titleColor =
        title === "Aprobado" ? "text-green-600" :
            title === "Rechazado" ? "text-red-600" :
                "text-yellow-600";
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger onClick={read} className="bg-[#F4B46A] w-[22%] rounded-full h-8 shadow-customBoxShadow hover:bg-orange-700">Ver Detalle</DialogTrigger>
            <DialogContent className="bg-white h-[300px]">
                <DialogHeader className="flex justify-center items-center ">
                    <DialogTitle className="font-volkhov font-bold text-4xl mb-5">
                        Estados <span className={`font-volkhov ${titleColor}`}>{title}</span>
                    </DialogTitle>
                    <DialogDescription className="font-medium text-xl max-w-80">
                        {review}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex sm:justify-center items-center">
                    <Button className="bg-[#F4B46A] w-1/2 rounded-full text-black text-xl hover:bg-orange-700 shadow-customBoxShadow "
                        onClick={() => { setIsOpen(false) }}>Volver Atrás</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>


    );
}