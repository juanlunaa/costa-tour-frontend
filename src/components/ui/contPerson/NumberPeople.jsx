"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BsPerson } from "react-icons/bs"
import React, { useState, useEffect } from "react"
import { CiCirclePlus } from "react-icons/ci"
import { IoIosRemoveCircleOutline } from "react-icons/io"

export function ContPerson() {
  const [adultCount, setAdultCount] = useState(1)
  const [teenCount, setTeenCount] = useState(1)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const totalCount = adultCount + teenCount

  //----------------------------------

  const handleAdultIncrement = () => {
    if (adultCount < 10 && totalCount < 10) {
      setAdultCount(adultCount + 1)
    }
  }

  const handleAdultDecrement = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1)
    }
  }

  //----------------------------------

  const handleTeenIncrement = () => {
    if (teenCount < 10 && totalCount < 10) {
      setTeenCount(teenCount + 1)
    }
  }

  const handleTeenDecrement = () => {
    if (teenCount > 0) {
      setTeenCount(teenCount - 1)
    }
  }

  const handleApply = () => {
    setIsPopoverOpen(false)
  }

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true)
  }

  // Reiniciar el total al recargar la pagina
  useEffect(() => {
    setAdultCount(1)
    setTeenCount(0)
  }, [])

  return (
    <Popover open={isPopoverOpen}>
      <PopoverTrigger>
        <button
          onClick={handlePopoverOpen}
          className="flex items-center border border-[#e5e5e5] hover:bg-[#f5f5f5] text-[#737373] hover:text-[#171717] p-2 rounded-md"
        >
          <BsPerson className="mr-2" />
          {totalCount > 0 ? `${totalCount}` : "Seleccionar personas"}
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
                adultCount === 10 || totalCount === 10
                  ? "bg-gray-400 text-gray-200"
                  : "hover:bg-[#2ea7c5] hover:text-white"
              }`}
              onClick={handleAdultIncrement}
              disabled={adultCount === 10 || totalCount === 10}
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
                teenCount === 10 || totalCount === 10
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

        <button
          className="bg-[#37B1E2] hover:bg-[#2ea7c5] text-white w-full h-12 rounded-lg mt-6"
          onClick={handleApply}
        >
          Aplicar
        </button>
      </PopoverContent>
    </Popover>
  )
}
