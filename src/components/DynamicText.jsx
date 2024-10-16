"use client"

import { useRef, useState } from "react"
import { Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"

export const DynamicText = ({
  placeholder = "Agregar informacion adicional",
  maxFieldsMessage = "Solo se pueden agregar 10 inputs",
}) => {
  const [values, setValues] = useState([])
  const inputRefs = useRef([])

  const handleInputChange = (index, event) => {
    const newValues = [...values]
    newValues[index] = event.target.value
    setValues(newValues)
  }

  const addValue = () => {
    if (values.length < 10) {
      setValues([...values, ""])
      setTimeout(() => {
        inputRefs.current[values.length].focus() // <- Se enfoca el nuevo input
      }, 0)
    }
  }

  const removeValue = (index) => {
    const newValues = values.filter((_, i) => i !== index)
    setValues(newValues)
  }

  return (
    <div className="flex flex-col gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
      {values.map((value, index) => (
        <div key={index} className="flex items-center gap-2 w-full">
          <Input
            ref={(inputRef) => (inputRefs.current[index] = inputRef)}
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e)}
            placeholder={placeholder}
            className="grow"
          />
          <div className="flex items-center justify-center grow-0 h-10 w-10 bg-red-700/40 border border-red-500 rounded-md ">
            <Trash2
              className="cursor-pointer text-red-700"
              onClick={() => removeValue(index)}
            />
          </div>
        </div>
      ))}
      {values.length >= 10 ? (
        <span className="text-center">{maxFieldsMessage}</span>
      ) : (
        <Input
          type="text"
          onFocus={() => addValue()}
          placeholder={placeholder}
        />
      )}
      <pre>{JSON.stringify(values, null, 2)}</pre> {/* Solo para depuración */}
    </div>
  )
}
