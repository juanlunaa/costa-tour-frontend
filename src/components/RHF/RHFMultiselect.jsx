"use client"

import { Multiselect } from "@/components"
import { Controller } from "react-hook-form"

export const RHFMultiselect = ({
  name,
  control,
  rules,
  options,
  notFoundMessage,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <Multiselect
          value={value}
          options={options}
          onChange={(newValue) => {
            value.includes(newValue)
              ? onChange(value.filter((item) => item !== newValue))
              : onChange([...value, newValue])
          }}
          removeOption={(id) => {
            onChange(value.filter((item) => item !== id))
          }}
          getOptionLabel={(id) =>
            options.find((option) => option.id === id)?.label
          }
          getOptionById={(id) => options.find((option) => option.id === id)}
          notFoundMessage={notFoundMessage}
        />
      )}
    />
  )
}
