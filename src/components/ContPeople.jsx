"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover"
import { BsPerson } from "react-icons/bs"
import React, { useState } from "react"
import { CiCirclePlus } from "react-icons/ci"
import { IoIosRemoveCircleOutline } from "react-icons/io"

export function ContPeople({ value, onChange, placeholderSelect }) {
  const [adultCount, setAdultCount] = useState(1)
  const [teenCount, setTeenCount] = useState(0)
  const [open, setOpen] = useState(false)

  const handleAdultIncrement = () => {
    if (adultCount < 10 && value < 10) {
      setAdultCount(adultCount + 1)
      onChange(1)
    }
  }

  const handleAdultDecrement = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1)
      onChange(-1)
    }
  }

  const handleTeenIncrement = () => {
    if (teenCount < 10 && value < 10) {
      setTeenCount(teenCount + 1)
      onChange(1)
    }
  }

  const handleTeenDecrement = () => {
    if (teenCount > 0) {
      setTeenCount(teenCount - 1)
      onChange(-1)
    }
  }

  // const handleApply = () => {
  //   setIsPopoverOpen(false)
  // }

  // const handlePopoverOpen = () => {
  //   setIsPopoverOpen(true)
  // }

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center border border-[#e5e5e5] hover:bg-[#f5f5f5] text-[#737373] hover:text-[#171717] p-2 rounded-md"
        >
          <BsPerson className="mr-2" />
          {value > 0 ? `${value}` : placeholderSelect}
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <h1 className="text-xs">
          Puede seleccionar hasta 10 viajeros en total.
        </h1>
        <div className="flex justify-between items-center">
          <div>
            <h1>Adulto (18-100)</h1>
            <p className="text-gray-700">Minimo: 1, Maximo: 10</p>
          </div>

          <div className="flex items-center gap-1">
            <button
              className={`text-black text-2xl rounded-full ${
                adultCount === 1
                  ? "bg-gray-400 text-gray-200"
                  : "hover:bg-[#2ea7c5] hover:text-white"
              }`}
              onClick={handleAdultDecrement}
              disabled={adultCount === 1}
            >
              <IoIosRemoveCircleOutline />
            </button>

            <span>{adultCount}</span>

            <button
              className={`text-black text-2xl rounded-full ${
                adultCount === 10 || value === 10
                  ? "bg-gray-400 text-gray-200"
                  : "hover:bg-[#2ea7c5] hover:text-white"
              }`}
              onClick={handleAdultIncrement}
              disabled={adultCount === 10 || value === 10}
            >
              <CiCirclePlus />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <h1>Adolescente (16-17)</h1>
            <p className="text-gray-700">Minimo: 0, Maximo: 10</p>
          </div>

          <div className="flex items-center gap-1">
            <button
              className={`text-black text-2xl rounded-full ${
                teenCount === 0
                  ? "bg-gray-400 text-gray-200"
                  : "hover:bg-[#2ea7c5] hover:text-white"
              }`}
              onClick={handleTeenDecrement}
              disabled={teenCount === 0}
            >
              <IoIosRemoveCircleOutline />
            </button>

            <span>{teenCount}</span>

            <button
              className={`text-black text-2xl rounded-full ${
                teenCount === 10 || value === 10
                  ? "bg-gray-400 text-gray-200"
                  : "hover:bg-[#2ea7c5] hover:text-white"
              }`}
              onClick={handleTeenIncrement}
              disabled={teenCount === 10}
            >
              <CiCirclePlus />
            </button>
          </div>
        </div>

        <PopoverClose asChild>
          <button
            onClick={() => setOpen(false)}
            className="bg-[#37B1E2] hover:bg-[#2ea7c5] text-white w-full h-12 rounded-lg mt-6"
          >
            Aplicar
          </button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
