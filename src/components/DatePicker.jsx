"use client"

import React, { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn, getDayWeek } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { es } from "date-fns/locale"

export const DatePicker = ({ value, onSelect, options, placeholderSelect }) => {
  const isDateDisabled = (date) => {
    const dayWeek = getDayWeek(date)
    return !options.includes(dayWeek) || date < new Date()
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal grow",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            <span className="truncate">{format(value, "PPP")}</span>
          ) : (
            <span className="text-ellipsis overflow-hidden">
              {placeholderSelect}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 max-w-sm sm:max-w-xs">
        <Calendar
          locale={es}
          mode="single"
          selected={value}
          onSelect={onSelect}
          initialFocus
          disabled={isDateDisabled}
          className="w-full"
        />
      </PopoverContent>
    </Popover>
  )
}
