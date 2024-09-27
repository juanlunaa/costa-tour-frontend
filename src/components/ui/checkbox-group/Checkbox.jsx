"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"


const items = [
    { id: "manga", label: "Manga" },
    { id: "centro-historico", label: "Centro histórico" },
    { id: "bocagrande", label: "Bocagrande" },
    { id: "crespo", label: "Crespo" },
    { id: "el-laguito", label: "El laguito" },
    { id: "la-castellana", label: "La castellana" },
    { id: "la-plazuela", label: "La plazuela" },
];

export function CheckboxGroupDemo() {
  const [selectedItems, setSelectedItems] = useState([])

  const handleCheckboxChange = (itemId) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <div className="space-y-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox
            id={item.id}
            checked={selectedItems.includes(item.id)}
            onCheckedChange={() => handleCheckboxChange(item.id)}
            
          />
          <label
            htmlFor={item.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00A0B1]"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  )
}