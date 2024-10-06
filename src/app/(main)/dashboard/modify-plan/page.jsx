import { ModifyPLan } from "@/components/ui/forms/Modify-plan";
export default function AdminModifyPlan() {
    return (
        <div className="relative flex justify-center mr-auto top-24">
            <div className=" w-[80%]">
                <div>
                    <h1 className="text-2xl font-bold">Mi Perfil</h1>
                    <p>Bienvenido Julia</p>
                </div>

                <div className="container relative bg-white shadow-customBoxShadow mt-10 mb-12">
                    <div className='mx-auto w-[85%]'>
                        <ModifyPLan />
                    </div>
                </div>
            </div>
        </div>

    );
}
