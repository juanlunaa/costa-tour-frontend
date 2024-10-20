"use client"

import { Controller } from "react-hook-form"
import { DynamicText } from "@/components"

export const RHFDynamicText = ({
  name,
  control,
  rules,
  placeholder,
  maxFields,
  maxFieldsMessage,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <DynamicText
          placeholder={placeholder}
          maxFields={maxFields}
          maxFieldsMessage={maxFieldsMessage}
          values={value}
          addNewValue={() => onChange([...value, ""])}
          removeValue={(index) => onChange(value.filter((_, i) => i !== index))}
          handleInputChange={(index, event) => {
            const newValues = [...value]
            newValues[index] = event.target.value
            onChange(newValues)
          }}
        />
      )}
    />
  )
}
