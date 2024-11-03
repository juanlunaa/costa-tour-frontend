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

export function Combobox({
  value,
  onSelect,
  options,
  getOptionLabel,
  placeholderSelect,
  notFoundMessage,
  classname,
  optionById,
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover className="w-full" open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between overflow-hidden", classname)}
        >
          {!getOptionLabel() ? placeholderSelect : getOptionLabel()}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 sm:h-44" side="bottom">
        <Command
          filter={(value, search) => {
            const option = optionById(value)
            if (option.label.toLowerCase().includes(search.toLowerCase()))
              return 1
            return 0
          }}
        >
          <CommandInput placeholder="Buscar..." />
          <CommandList>
            <CommandEmpty>{notFoundMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                return (
                  <CommandItem
                    key={option.id}
                    value={option.id}
                    onSelect={(currentId) => {
                      onSelect(currentId)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
