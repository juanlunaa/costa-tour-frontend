"use client"

import { useRef } from "react"
import { Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "./ui/scroll-area"

export const DynamicText = ({
  values,
  addNewValue,
  removeValue,
  handleInputChange,
  placeholder,
  maxFields,
  maxFieldsMessage,
}) => {
  const inputRefs = useRef([])
  const scrollRef = useRef(null)

  const addValue = () => {
    if (values.length < maxFields) {
      addNewValue()

      if (scrollRef.current) {
        requestAnimationFrame(() => {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        })
      }

      setTimeout(() => {
        inputRefs.current[values.length].focus() // <- Se enfoca el nuevo input
      }, 0)
    }
  }

  return (
    <ScrollArea
      ref={scrollRef}
      className="flex flex-col overflow-y-auto max-h-[154px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background dark:bg-gray-700"
    >
      <div className="flex flex-col gap-2">
        {values.map((value, index) => (
          <div key={index} className="flex items-center gap-2 w-full">
            <Input
              ref={(inputRef) => (inputRefs.current[index] = inputRef)}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              placeholder={placeholder}
              className="grow text-gray-600 block w-full bg-[#F4F4F5] dark:bg-gray-700 dark:text-white"
            />
            <div className="flex items-center justify-center grow-0 h-10 w-10 bg-red-700/40 border border-red-500 rounded-md ">
              <Trash2
                className="cursor-pointer text-red-700"
                onClick={() => removeValue(index)}
              />
            </div>
          </div>
        ))}
        {values.length >= maxFields ? (
          <span className="text-center">{maxFieldsMessage}</span>
        ) : (
          <Input
            type="text"
            onFocus={() => addValue()}
            placeholder={placeholder}
          />
        )}
      </div>
    </ScrollArea>
  )
}
