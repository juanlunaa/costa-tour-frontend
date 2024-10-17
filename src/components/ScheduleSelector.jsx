"use client"

import React, { useState } from "react"
import { Input } from "./ui/input"
import { Trash2, AlarmClockPlus } from "lucide-react"

const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
]

const HourSelectorByDay = ({
  day,
  schedule,
  handleHourChange,
  removeHour,
  addHour,
}) => {
  const dayHours = Object.keys(schedule).find((key) => key === day)

  return dayHours ? (
    <div className="flex flex-col items-center gap-1 mt-2 w-[184px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
      {schedule[day].map((hour, hourIndex) => (
        <div key={hourIndex} className="flex gap-1">
          <Input
            type="time"
            className="w-fit h-8"
            value={hour}
            onChange={(e) => handleHourChange(day, hourIndex, e)}
          />
          <div className="flex items-center justify-center grow-0 h-8 w-8 bg-red-700/40 border border-red-500 rounded-md ">
            <Trash2
              className="cursor-pointer text-red-700 h-5 w-5"
              onClick={() => removeHour(day, hourIndex)}
            />
          </div>
        </div>
      ))}

      <span
        className="cursor-pointer rounded-md p-1 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        onClick={() => addHour(day)}
      >
        <AlarmClockPlus />
      </span>
    </div>
  ) : null
}

export const ScheduleSelector = () => {
  const [schedule, setSchedule] = useState({}) // Objeto para almacenar días y sus horas

  // Función para agregar una hora a un día específico
  const addHour = (day) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: [...(prevSchedule[day] || []), ""], // Añadir un campo vacío para la nueva hora
    }))
  }

  // Función para manejar cambios en una hora específica de un día
  const handleHourChange = (day, hourIndex, event) => {
    const newHours = [...schedule[day]]
    newHours[hourIndex] = event.target.value // Actualizar la hora
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: newHours,
    }))
  }

  // Función para eliminar una hora específica de un día
  const removeHour = (day, hourIndex) => {
    const newHours = schedule[day].filter((_, index) => index !== hourIndex)

    const newSchedule = { ...schedule }
    if (newSchedule[day].length === 1) {
      delete newSchedule[day] // Si solo queda una hora a eliminar tambien se elimina el día
      setSchedule(newSchedule)
    } else {
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [day]: newHours,
      }))
    }
  }

  // Función para agregar un día a la programación
  const toggleDay = (day) => {
    setSchedule((prevSchedule) => {
      if (prevSchedule[day]) {
        const newSchedule = { ...prevSchedule }
        delete newSchedule[day] // Si el día ya estaba seleccionado, lo eliminamos
        return newSchedule
      } else {
        return { ...prevSchedule, [day]: [""] } // Si no, lo añadimos con un array vacío de horas
      }
    })
  }

  return (
    <div>
      <h2>Seleccionar días de la semana</h2>
      {/* Checkboxes para seleccionar los días de la semana */}
      <div className="flex flex-col gap-2">
        {daysOfWeek.map((day) => (
          <div key={day}>
            <input
              type="checkbox"
              id={`check-${day}`}
              className="hidden peer"
              onChange={() => toggleDay(day)}
              checked={!!schedule[day]}
            />
            <label
              htmlFor={`check-${day}`}
              className="cursor-pointer p-1 rounded-md transition-colors duration-300 bg-gray-200 
                peer-checked:bg-customBlue/50"
            >
              {day}
            </label>
            <HourSelectorByDay
              day={day}
              schedule={schedule}
              handleHourChange={handleHourChange}
              removeHour={removeHour}
              addHour={addHour}
            />
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(schedule, null, 2)}</pre> {/* Para depuración */}
    </div>
  )
}
