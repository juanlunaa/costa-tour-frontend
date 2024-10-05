import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { IoIosClose } from "react-icons/io";
import './Multi.css';

const interests = [
  { value: 1, label: "Comida de Mar" },
  { value: 2, label: "Mariscos" },
  { value: 3, label: "Comida Típica" },
  { value: 4, label: "Ambiente Caribeño" },
  { value: 5, label: "Rooftop" },
  { value: 6, label: "Atención al Cliente" },
  { value: 7, label: "Cultura Local" },
  { value: 8, label: "Naturaleza" },
  { value: 9, label: "Turismo Aventura" },
  { value: 10, label: "Eventos Culturales" },
  { value: 11, label: "Deportes" },
  { value: 12, label: "Vida Nocturna" },
  { value: 13, label: "Gastronomía Internacional" },
  { value: 14, label: "Historia" },
  { value: 15, label: "Música en Vivo" },
  { value: 16, label: "Arte y Artesanía" },
  { value: 17, label: "Fotografía" },
  { value: 18, label: "Caminatas" },
  { value: 19, label: "Viajes Culturales" },
  { value: 20, label: "Spa y Bienestar" },
  { value: 21, label: "Familiar" },
  { value: 22, label: "Escapadas de Fin de Semana" },
  { value: 23, label: "Deportes Acuáticos" },
  { value: 24, label: "Excursiones" },
  { value: 25, label: "Talleres Creativos" },
  { value: 26, label: "Cocina en Vivo" },
  { value: 27, label: "Turismo Responsable" },
  { value: 28, label: "Actividades en Grupo" },
  { value: 29, label: "Rutas Gastronómicas" },
  { value: 30, label: "Turismo de Naturaleza" },
  { value: 31, label: "Ciclismo" },
  { value: 32, label: "Paseos en Barco" },
  { value: 33, label: "Trekking" },
  { value: 34, label: "Escultura" },
  { value: 35, label: "Observación de Aves" },
  { value: 36, label: "Cerveza Artesanal" },
  { value: 37, label: "Catas de Vino" },
  { value: 38, label: "Turismo de Salud" },
  { value: 39, label: "Cultura Popular" },
  { value: 40, label: "Bailes Típicos" },
  { value: 41, label: "Jardinería" },
  { value: 42, label: "Mascotas" },
  { value: 43, label: "Cine y Series" },
  { value: 44, label: "Literatura" },
  { value: 45, label: "Cocina Internacional" },
  { value: 46, label: "Voluntariado" },
  { value: 47, label: "Estilo de Vida Saludable" },
  { value: 48, label: "Fotografía de Naturaleza" },
  { value: 49, label: "Viajes de Aventura" },
  { value: 50, label: "Cultura de Cafés" }
]

const MultiCaracterist = () => {
    const [selected, setSelected] = useState([]);

    const handleRemove = (value) => {
        setSelected((prevSelected) =>
            prevSelected.filter((item) => item.value !== value)
        );
    };

    const ValueRenderer = (selected) => {
        return selected.length
            ? selected.map((item) => (
                <div 
                    key={item.value}
                    className="rounded-full flex justify-between items-center gap-1 border border-customBlue px-3 py-1"
                >
                    <p className="text-sm">{item.label}</p>
                    <button
                        className="bg-customBlue rounded-md w-4 h-4 flex items-center justify-center hover:bg-cyan-100"
                        onClick={() => handleRemove(item.value)}
                    >
                        <IoIosClose />
                    </button>
                </div>
            ))
            : "Seleccionar caracteristicas...";
    };

    return (
        <MultiSelect
            options={interests}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            valueRenderer={ValueRenderer}
        />
    );
};
export default MultiCaracterist;







