
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Chip, Button } from "@material-tailwind/react";
import './Multi.css';

const options = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry" },
    { label: "rata", value: "rata" },
    { label: "bra", value: "bra" },
    { label: "cole", value: "cole" },
    { label: "pera", value: "pera" },
    { label: "cuchillo", value: "cuchillo" },
    { label: "sal", value: "sal" },
    { label: "ola", value: "ola" },
    { label: "si", value: "si" },
];

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
                <Chip
                    key={item.value}
                    value={item.label}
                    onClose={() => handleRemove(item.value)}
                    className="bg-[#6ec8f8] color rounded-full text-white border border-[#7d9ba6] inline-block mr-2 mb-2"              
                />
            ))
            : "Seleccionar caracteristicas...";
    };

    return (
        <div>
            <pre className="hidden">{JSON.stringify(selected)}</pre>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                placeholder="Seleccione Caracteistica"

                valueRenderer={ValueRenderer}
                className="rmsc"
            />
        </div>
    );
};
export default MultiCaracterist;







