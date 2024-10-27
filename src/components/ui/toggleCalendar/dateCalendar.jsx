// "use client"

// import * as React from "react";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// export const DatePickerDemo = () => {
//   const [date, setDate] = React.useState(null);

//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           className={cn(
//             "w-[280px] justify-start text-left font-normal",
//             !date && "text-muted-foreground"
//           )}
//         >
//           <CalendarIcon className="mr-2 h-4 w-4" />
//           {date ? format(date, "PPP") : <span>Pick a date</span>}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0">
//         <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
//       </PopoverContent>
//     </Popover>
//   );
// };

"use client"

import React, { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { es } from "date-fns/locale"

export const DatePickerDemo = ({ availableDays = [] }) => {
  const [date, setDate] = useState(null)

  //deshabilita los días no disponibles
  const isDateDisabled = (date) => {
    console.log(date)
    const dayName = format(date, "EEEE")
    return !availableDays.includes(dayName)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "max-w-[200px] lg:max-w-[240px] w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            <span className="truncate">{format(date, "PPP")}</span>
          ) : (
            <span className="text-ellipsis overflow-hidden">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 max-w-sm sm:max-w-xs">
        <Calendar
          locale={es}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={isDateDisabled}
          className="w-full"
        />
      </PopoverContent>
    </Popover>
  )
}
