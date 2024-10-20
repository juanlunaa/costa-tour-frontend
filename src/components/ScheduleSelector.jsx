"use client"

import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { Trash2, AlarmClockPlus } from "lucide-react"
import { Label } from "./ui/label"

const hoursDefault = [
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
]

const HoursColumn = ({ hours, day, value, toggleHour }) => {
  return (
    <div className="flex flex-col gap-2">
      {hours.map((hour, hourIndex) => (
        <div key={hourIndex}>
          <input
            type="checkbox"
            id={`check-${day}-${hour}`}
            className="hidden peer"
            onChange={() => {
              toggleHour(day, hour)
            }}
            checked={value[day]?.includes(hour)}
          />
          <label
            htmlFor={`check-${day}-${hour}`}
            className="block w-full h-6 cursor-pointer p-1 rounded-md transition-colors duration-300 bg-gray-400 
        peer-checked:bg-customBlue/50"
          />
        </div>
      ))}
    </div>
  )
}

export const ScheduleSelector = ({ days, value, toggleHour }) => {
  return (
    <div className="grid grid-cols-8 gap-1 mt-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
      <div className="text-center">
        <p className="font-bold dark:text-white mb-2">Horas</p>
        <div className="flex flex-col gap-2">
          {hoursDefault.map((hour, index) => (
            <p key={index} className="w-full h-6 font-bold dark:text-white">
              {hour}
            </p>
          ))}
        </div>
      </div>

      {days.map((day, index) => (
        <div key={day} className="text-center">
          <p className="font-bold dark:text-white mb-2">{day}</p>
          <HoursColumn
            hours={hoursDefault}
            day={day}
            value={value}
            toggleHour={toggleHour}
            indexDay={index}
          />
        </div>
      ))}
    </div>
  )
}
