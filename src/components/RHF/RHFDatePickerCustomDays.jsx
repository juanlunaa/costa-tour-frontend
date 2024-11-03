"use client"

import { Controller } from "react-hook-form"
import { DatePickerCustomDays } from "../DatePickerCustomDays"

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const RHFDatePickerCustomDays = ({
  name,
  control,
  options,
  placeholderSelect,
  setValue,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: `${capitalizeFirstLetter(name)} es requerida`,
        },
      }}
      render={({ field: { value, onChange } }) => (
        <DatePickerCustomDays
          value={value}
          onSelect={(newValue) => {
            setValue("hora", "")
            onChange(newValue)
          }}
          options={options}
          placeholderSelect={placeholderSelect}
        />
      )}
    />
  )
}
