"use client"

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUserStore } from '@/context/user';
import clsx from 'clsx';

export default function AdminProfile() {

    const { user } = useUserStore((state) => state)

    const styleLabels = clsx("text-sm font-bold md:text-base sm:text-sm ")
    const styleInputs = clsx("text-gray-600 font-bold block w-full bg-[#F4F4F5]")

    return (
        <div className="relative flex justify-center">
            <div className="container bg-white shadow-customBoxShadow">
                <div className='mx-auto w-[85%] mt-[2%]'>
                    <h1 className="font-bold  mt-12 text-sm sm:text-base md:text-xl lg:text-2xl">Información Personal</h1>
                </div>
                <form >
                    <div className="space-y-4 mx-auto w-[85%] mt-[2%]">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 ">
                            <div className="space-y-2">
                                <Label htmlFor="nombre" className={styleLabels}>Nombre</Label>
                                <Input
                                    id="nombre"
                                    name="nombre"
                                    className={styleInputs}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="apellido" className={styleLabels}>Apellido</Label>
                                <Input
                                    type='text'
                                    id="apellido"
                                    name="apellido"
                                    className={styleInputs}
                                />
                            </div>                           
                            <button className={`${styleLabels} bg-yellowProfile w-[50%] sm:w-[40%] mt-5 py-4`}>Guardar</button>
                        </div>
                    </div>
                </form>
                <hr className='dividier mt-10'></hr>
                <div className='segurity'>

                    <div className='mx-auto w-[85%] mt-[2%]'>
                        <h1 className="font-bold text-2xl">Seguridad </h1>
                    </div>
                    <form>
                        <div className="space-y-4 mx-auto w-[85%] mt-[2%]">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 mb-10">

                                <div className="space-y-2">
                                    <Label htmlFor="email" className={styleLabels}>Correo electronico</Label>
                                    <Input

                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styleInputs}
                                    />

                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className={styleLabels}>Contraseña</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className={styleInputs}
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="confirm_password" className={styleLabels}>Confirmar Contraseña </label>
                                    <Input
                                        type='password'
                                        id="confirm_password"
                                        name="confirm_password"
                                        className={styleInputs}
                                    />
                                </div>

                                <button className={`${styleLabels} bg-yellowProfile w-[50%] sm:w-[40%] mt-5 py-4`}>Guardar</button>
                            </div>
                        </div>

                    </form>

                </div>


            </div>

        </div>
    )

}