"use client"

import { ScheduleSelector } from "@/components"
import { daysOfWeek } from "@/logic/const"
import { Controller } from "react-hook-form"

export const RHFScheduleSelector = ({ name, control, rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <ScheduleSelector
          days={daysOfWeek}
          value={value}
          toggleHour={(day, hour) => {
            const updatedDayHours = value[day] ? [...value[day]] : []
            const hourIndex = updatedDayHours.indexOf(hour)

            if (hourIndex !== -1) {
              updatedDayHours.splice(hourIndex, 1)
            } else {
              updatedDayHours.push(hour)
            }
            const newState = {
              ...value,
              [day]: updatedDayHours,
            }
            onChange(newState)
          }}
        />
      )}
    />
  )
}
