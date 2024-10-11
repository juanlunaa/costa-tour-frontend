// "use client"
// import { Checkbox } from "@/components/ui/checkbox"
// import { useState } from "react"

// const items = [
//   { id: "manga", label: "Manga" },
//   { id: "centro-historico", label: "Centro histórico" },
//   { id: "bocagrande", label: "Bocagrande" },
//   { id: "crespo", label: "Crespo" },
//   { id: "el-laguito", label: "El laguito" },
//   { id: "la-castellana", label: "La castellana" },
//   { id: "la-plazuela", label: "La plazuela" },
// ]

// export function CheckboxGroupDemo() {
//   const [selectedItems, setSelectedItems] = useState([])

//   const handleCheckboxChange = (itemId) => {
//     setSelectedItems((prev) =>
//       prev.includes(itemId)
//         ? prev.filter((id) => id !== itemId)
//         : [...prev, itemId]
//     )
//   }

//   return (
//     <div className="space-y-4 p-4 grid sm:grid-cols-1 items-end grid-cols-2">
//       {items.map((item) => (
//         <div key={item.id} className="flex items-center space-x-2 ">
//           <Checkbox
//             id={item.id}
//             checked={selectedItems.includes(item.id)}
//             onCheckedChange={() => handleCheckboxChange(item.id)}
//           />
//           <label
//             htmlFor={item.id}
//             className="text-xs sm:text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00A0B1]"
//           >
//             {item.label}
//           </label>
//         </div>
//       ))}
//     </div>
//   )
// }
"use client"

import React, { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  { id: "manga", label: "Manga" },
  { id: "centro-historico", label: "Centro histórico" },
  { id: "bocagrande", label: "Bocagrande" },
  { id: "crespo", label: "Crespo" },
  { id: "el-laguito", label: "El laguito" },
  { id: "la-castellana", label: "La castellana" },
  { id: "la-plazuela", label: "La plazuela" },
]

export default function ResponsiveAccordionCheckboxDemo() {
  const [selectedItems, setSelectedItems] = useState([])
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  const CheckboxGroup = () => (
    <div className="space-y-4 p-4 grid sm:grid-cols-1 items-end grid-cols-2 border-t border-t-[#F4F4F5]">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox
            id={item.id}
            checked={selectedItems.includes(item.id)}
            onCheckedChange={() => handleCheckboxChange(item.id)}
          />
          <label
            htmlFor={item.id}
            className="text-xs sm:text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00A0B1]"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  )

  return (
    <div className="w-full">
      {isSmallScreen ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="pl-3 font-medium">
              Filtrar por
            </AccordionTrigger>
            <AccordionContent>
              <CheckboxGroup />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div>
          <h3 className="md:text-base sm:text-sm pl-4 font-medium my-4 ">
            Filtrar por
          </h3>
          <CheckboxGroup />
        </div>
      )}
    </div>
  )
}
