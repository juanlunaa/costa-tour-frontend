"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Subcripcion from './SubcripcionPremiun';

export default function CenteredFixedPaymentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    setIsOpen(false);
    window.location.href = '/';
  };

  if (!isOpen) return null;
  

  return (
    <div className="relative">
      {/* Fondo oscuro que cubre la pantalla completa */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-md z-[1116]" />

      {/* Caja simulada de modal */}
      <div className="fixed -inset-3 flex items-center justify-center z-[1116] py-20 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-xl max-w-[85%] mx-auto my-auto  p-6">
          <h2 className="text-5xl font-bold text-center mt-3">Obtén la versión premium <br /> para seguir viendo</h2>
          <p className="text-base mt-8 text-center">
            ¡Eleva tu experiencia con nuestro acceso premium! Descubre <br />
            planes exclusivos, actividadesextremas y eventos privados que no encontrarás en ningún otro lugar.<br />
            Accede a las mejores ofertas y vive Cartagena al máximo. ¡Hazte premium ahora y disfruta de lo mejor!
          </p>

          <Subcripcion />

          <div className="mt-6 flex justify-center">
            <Button className="w-[75%] mt-5 block rounded-md bg-[#FF8E01] text-black shadow-sm hover:bg-orange-400 focus-visible:outline-[#FF8E01] text-center text-sm font-semibold sm:mt-2"
              onClick={handleCancel}>
              Cancelar
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}