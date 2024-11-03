"use client"

import { Controller, useFormContext } from "react-hook-form"
import { Combobox } from "@/components"

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const RHFCombobox = ({
  name,
  control,
  options,
  placeholderSelect,
  notFoundMessage,
  classname,
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
        <Combobox
          value={value}
          onSelect={(newValue) => {
            onChange(newValue === value ? "" : newValue)
          }}
          options={options}
          getOptionLabel={() => {
            return value
              ? options.find((item) => item.id === value)?.label
              : placeholderSelect
          }}
          placeholderSelect={placeholderSelect}
          notFoundMessage={notFoundMessage}
          classname={classname}
          optionById={(optionId) =>
            options.find((item) => item.id === optionId)
          }
        />
      )}
    />
  )
}
