"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

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
  PopoverAnchor,
} from "@/components/ui/popover"
import { ScrollArea } from "./ui/scroll-area"

export const WordCarousel = ({ words, interval = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [isFading, setIsFading] = React.useState(true)

  React.useEffect(() => {
    const wordInterval = setInterval(() => {
      setIsFading(false)
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsFading(true)
      }, 500)
    }, interval)

    return () => clearInterval(wordInterval)
  }, [words.length, interval])

  return (
    <span
      className={`transition-opacity duration-500 ${
        isFading ? "opacity-100" : "opacity-0"
      }`}
    >
      {words[currentWordIndex]}
    </span>
  )
}

export const ItemSelect = ({ id, label, removeItem }) => {
  return (
    <div className="rounded-full flex justify-between items-center gap-1 border border-customBlue px-3 py-1">
      <p className="text-sm">{label}</p>
      <span
        className="bg-customBlue rounded-md w-4 h-4 flex items-center justify-center hover:bg-cyan-100 cursor-pointer"
        onClick={() => removeItem(id)}
      >
        <X />
      </span>
    </div>
  )
}

export function Multiselect({
  value,
  onChange,
  options,
  getOptionLabel,
  getOptionById,
  removeOption,
  notFoundMessage,
}) {
  const [open, setOpen] = React.useState(false)
  const scrollRef = React.useRef(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <div className="flex items-center justify-between w-full min-h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700">
          {value.length > 0 ? (
            <ScrollArea
              ref={scrollRef}
              className="flex flex-col overflow-y-auto max-h-[106px]"
            >
              <div className="flex flex-wrap gap-1 py-1 w-full">
                {value.map((item) => (
                  <ItemSelect
                    key={item}
                    id={item}
                    label={getOptionLabel(item)}
                    removeItem={removeOption}
                  />
                ))}
              </div>
            </ScrollArea>
          ) : (
            <PopoverTrigger className="w-full text-left">
              <p className="text-gray-400">
                <WordCarousel words={options.map((item) => item.label)} />
              </p>
            </PopoverTrigger>
          )}
          <PopoverTrigger>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </PopoverTrigger>
        </div>
      </PopoverAnchor>
      <PopoverContent className="z-[1200] h-64 p-0" side="bottom">
        <Command
          filter={(value, search) => {
            const option = getOptionById(value)
            // Esta es la validacion que realmente se tiene que hacer cuando se busque la opcion
            // if (option.label.toLowerCase().includes(search.toLowerCase()))
            //   return 1
            // return 0
            if (option.id === search) return 1
            return 0
          }}
        >
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>{notFoundMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.id}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    if (scrollRef.current) {
                      requestAnimationFrame(() => {
                        scrollRef.current.scrollTop =
                          scrollRef.current.scrollHeight
                      })
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.includes(option.id) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
