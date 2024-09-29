import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { titleFont } from "@/config/fonts"
export default function CustomerProfile() {

    return (
        <div className="relative flex justify-center">
            <div className="container bg-white shadow-customBoxShadow">
                <div className="max-w-2xl mx-auto w-[85%] mt-[5%]">
                    <h1 className={`${titleFont.className} text-lg`}>Información Personal</h1>
                </div>
                <form >
                    <div className="space-y-4 mx-auto w-[85%] mt-[2%]">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 ">
                            <div className="space-y-2">
                                <Label htmlFor="nombre">Nombre</Label>
                                <Input
                                    id="nombre"
                                    name="nombre"
                                    className="block w-full bg-[#F4F4F5]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="apellido">Apellido</Label>
                                <Input
                                    type='text'
                                    id="apellido"
                                    name="apellido"
                                    className="block w-full bg-[#F4F4F5]"
                                />
                            </div>


                            <div className="space-y-2">
                                <label htmlFor="tipo_documento">Tipo de documento</label>
                                <Input
                                    type='text'
                                    id="tipo_documento"
                                    name="tipo_documento"
                                    className="block w-full bg-[#F4F4F5]"
                                />

                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="num_documento">N° de documento</Label>
                                <Input
                                    id="num_documento"
                                    name="num_documento"
                                    className="block w-full bg-[#F4F4F5]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="edad">Edad</Label>
                                <Input
                                    id="edad"
                                    name="edad"
                                    className="block w-full bg-[#F4F4F5]"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="ciudad">Ciudad</Label>
                                <Input
                                    type='text'
                                    id="ciudad"
                                    name="ciudad"
                                    className="block w-full bg-[#F4F4F5]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="estado">Estado</Label>
                                <Input
                                    type='text'
                                    id="estado"
                                    name="estado"
                                    className="block w-full bg-[#F4F4F5]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="pais">Pais</Label>
                                <Input
                                    type='text'
                                    id="pais"
                                    name="pais" className="block w-full bg-[#F4F4F5]"
                                />
                            </div>

                            <Button variant="outline" className="bg-[#F0C240] w-[40%] mt-5">Guardar</Button>
                        </div>
                    </div>
                </form>
                <hr className='dividier mt-10'></hr>
                <div className='segurity'>

                    <div className='max-w-2xl mx-auto w-[85%] mt-[5%]'>
                        <h1 className={`${titleFont.className} text-lg`}>Seguridad </h1>
                    </div>
                    <form>
                        <div className="space-y-4 mx-auto w-[85%] mt-[2%]">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1 mb-10">

                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo electronico</Label>
                                    <Input

                                        type="email"
                                        id="email"
                                        name="email"
                                        className="block w-full bg-[#F4F4F5]"
                                    />

                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="block w-full bg-[#F4F4F5]"
                                    />
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="confirm_password">Confirmar Contraseña </label>
                                    <Input
                                        type='password'
                                        id="confirm_password"
                                        name="confirm_password"
                                        className="block w-full bg-[#F4F4F5]"
                                    />
                                </div>

                                <Button variant="outline" className="bg-[#F0C240] w-[40%] mt-5">Guardar</Button>

                            </div>
                        </div>

                    </form>

                </div>


            </div>

        </div>
    )

}