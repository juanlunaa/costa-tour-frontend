"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// const availableHours = [
//     { value: "10:00", label: "10:00 AM" },
//     { value: "11:00", label: "11:00 AM" },
//     { value: "12:00", label: "12:00 PM" },
//     { value: "13:00", label: "01:00 PM" },
//     { value: "14:00", label: "02:00 PM" },
// ]

export function ComboboxHour({ hours }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="max-w-[250px] w-full justify-between"
        >
          <span className="truncate">
            {value
              ? hours.find((hour) => hour === value)
              : "Seleccione una hora..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>No hour found.</CommandEmpty>
            <CommandGroup>
              {hours.map((hour) => (
                <CommandItem
                  key={hour}
                  value={hour}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === hour ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {hour}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
