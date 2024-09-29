"use client"

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { textFont, titleFont } from "@/config/fonts"
import { useUserData } from '@/hooks/useUserData';

export default function CustomerProfile() {
  
  const { user } = useUserData()

  const styleLabels = `${textFont.className} text-md font-bold`
  const styleInputs = `${textFont.className} text-gray-600 font-bold block w-full bg-[#F4F4F5]`

    return (
        <div className="relative flex justify-center">
            <div className="container bg-white shadow-customBoxShadow">
              <div className='mx-auto w-[85%] mt-[2%]'>
                    <h1 className={`${textFont.className} font-bold text-2xl`}>Información Personal</h1>
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
                                    value={user.nombre}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="apellido" className={styleLabels}>Apellido</Label>
                                <Input
                                    type='text'
                                    id="apellido"
                                    name="apellido"
                                    className={styleInputs}
                                    value={user.apellido}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="num_documento" className={styleLabels}>N° de documento</Label>
                                <Input
                                    id="num_documento"
                                    name="num_documento"
                                    className={styleInputs}
                                    value={user.dni}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="edad" className={styleLabels}>Edad</Label>
                                <Input
                                    id="edad"
                                    name="edad"
                                    className={styleInputs}
                                    value={user.edad}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ciudad" className={styleLabels}>Ciudad</Label>
                                <Input
                                    type='text'
                                    id="ciudad"
                                    name="ciudad"
                                    className={styleInputs}
                                    value={user.ciudad.name}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="estado" className={styleLabels}>Estado</Label>
                                <Input
                                    type='text'
                                    id="estado"
                                    name="estado"
                                    className={styleInputs}
                                    value={user.estado.name}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pais" className={styleLabels}>Pais</Label>
                                <Input
                                    type='text'
                                    id="pais"
                                    name="pais"
                                    className={styleInputs}
                                    value={user.pais.name}
                                />
                            </div>

                            <button className={`${styleLabels} bg-blueProfile w-[40%] mt-5 py-4`}>Guardar</button>
                        </div>
                    </div>
                </form>
                <hr className='dividier mt-10'></hr>
                <div className='segurity'>

                    <div className='mx-auto w-[85%] mt-[2%]'>
                        <h1 className={`${textFont.className} font-bold text-2xl`}>Seguridad </h1>
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
                                        value={user.email}
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

                                <button className={`${styleLabels} bg-blueProfile w-[40%] mt-5 py-4`}>Guardar</button>
                            </div>
                        </div>

                    </form>

                </div>


            </div>

        </div>
    )

}