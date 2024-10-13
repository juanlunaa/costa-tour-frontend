"use client"

import { Controller, useFormContext } from "react-hook-form"
import { Combobox } from "@/components"

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const RHFComboboxLocation = ({
  name,
  options,
  placeholderSelect,
  notFoundMessage,
  classname,
}) => {
  const { control, setValue } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: `${capitalizeFirstLetter(name)} es requerido`,
        },
      }}
      render={({ field: { value, onChange } }) => (
        <Combobox
          value={value}
          onSelect={(newValue) => {
            if (name === "pais") {
              setValue("estado", "")
              setValue("ciudad", "")
            }
            if (name === "estado") {
              setValue("ciudad", "")
            }

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
