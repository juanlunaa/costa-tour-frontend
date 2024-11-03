"use client"

import { Controller } from "react-hook-form"
import { ContPeople } from "../ContPeople"

export const RHFContPeople = ({ name, control, placeholderSelect }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: "El numero de personas es requerido",
        },
      }}
      render={({ field: { value, onChange } }) => (
        <ContPeople
          value={value}
          onChange={(newValue) => {
            onChange(value + newValue)
          }}
          placeholderSelect={placeholderSelect}
        />
      )}
    />
  )
}
