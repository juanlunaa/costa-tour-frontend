"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Image as ImageIcon } from 'lucide-react'
import MultiCaracterist from '@/components/ui/multi-select/MultiSelect'
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";


export function ModifyPLan() {

    const [images, setImages] = useState([])

    const handleImageUpload = (event) => {
        const files = event.target.files
        if (files) {
            const newImages = Array.from(files).map(file => URL.createObjectURL(file))
            setImages(prevImages => [...prevImages, ...newImages].slice(0, 4))
        }
    }

    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index))
        if (previewIndex >= images.length - 1) {
            setPreviewIndex(Math.max(0, images.length - 2))
        }
    }
    return (
        <div >
            <form >
                <div className='container'>
                    <div className="flex gap-6 pt-5 pb-5">
                        <div className="w-1/2 ">
                            <div className="mb-4 flex justify-center">
                                <div className="mt-2 aspect-video bg-muted flex items-center justify-center overflow-hidden ">
                                    {images.length > 0 ? (
                                        <img src={images[previewIndex]} alt={`Preview ${previewIndex + 1}`} className="max-h-full max-w-full object-contain  " />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-muted-foreground ">
                                            <ImageIcon className="sm:w-16 sm:h-16 mb-2 w-8 h-8 " />
                                            <span className='sm:text-base text-xs'>No hay imágenes cargadas</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='content flex justify-center'>
                                <div className="grid grid-cols-4 gap-2 mb-4 md:w-[75%]">
                                    {images.map((img, index) => (
                                        <div key={index} className="relative aspect-square">
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${index + 1}`}
                                                className={`w-full h-full object-cover cursor-pointer ${index === previewIndex ? 'ring-2 ring-primary' : ''}`}
                                                onClick={() => setPreviewIndex(index)}
                                            />
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="absolute top-1 right-1 h-6 w-6"
                                                onClick={() => removeImage(index)}
                                            >
                                                <X className="h-4 w-4" />
                                                <span className="sr-only">Eliminar imagen {index + 1}</span>
                                            </Button>
                                        </div>
                                    ))}
                                    {Array.from({ length: Math.max(0, 4 - images.length) }).map((_, index) => (
                                        <div key={`empty-${index}`} className="aspect-square bg-muted flex items-center justify-center">
                                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <Input
                                    id="images"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageUpload}
                                    className="mb-4 w-[75%]"
                                />

                            </div>

                            <div className="aspect-video bg-muted flex items-center justify-center mb-4">
                                <span className="text-muted-foreground">Mapa</span>
                            </div>
                        </div>
                        <div className="w-1/2">

                            <div className="space-y-4">
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full max-w-[500px]">
                                            <SelectValue placeholder="¿Qué planes nuevos deseas agregar?" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Restaurantes">Restaurantes</SelectItem>
                                            <SelectItem value="Sitios Turisticos">Sitios Turisticos</SelectItem>
                                            <SelectItem value="Playas">Playas</SelectItem>
                                            <SelectItem value="Alojamientos">Alojamientos</SelectItem>
                                            <SelectItem value="Extremos">Extremos</SelectItem>

                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="name">Nombre del plan</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                    />
                                </div>


                                <div>
                                    <Label htmlFor="description">Descripción</Label>
                                    <Textarea
                                        id="description"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="price">Rango de precio</Label>
                                    <Input
                                        typer="number"
                                        min="1"
                                        id="price"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="Caracteristicas">Caracteristicas</Label>
                                    <MultiCaracterist />
                                </div>

                                <div>
                                    <Label htmlFor="ubicacion">Ubicacion</Label>
                                    <Input id="ubicacion" />
                                </div>

                                <div>
                                    <h1 className="text-center mt-12">
                                        ¿Desea guardar los cambios?
                                    </h1>
                                    <div className="btns flex justify-between mt-10">
                                        <Button type="submit" className="sm:w-[40%] sm:text-base w-[45%] text-xs bg-[#37B1E2] hover:bg-[#34c6ffd0] rounded-full">
                                            <MdOutlineCancel className='mr-2' />Cacelar</Button>
                                        <Button type="submit" className=" sm:w-[40%] sm:text-base w-[45%] text-xs bg-[#37B1E2] hover:bg-[#34c6ffd0] rounded-full">
                                            <FiEdit className='mr-2'/>Modificar Plan</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>


    );
} 