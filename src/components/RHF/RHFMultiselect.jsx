import { Multiselect } from "@/components"
import { Controller } from "react-hook-form"

export const RHFMultiselect = ({
  name,
  control,
  rules,
  options,
  placeholderSelect,
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
          removeOption={(id) => value.filter((item) => item !== id)}
          getOptionLabel={(id) =>
            options.find((option) => option.id === id)?.label
          }
          getOptionById={(id) => options.find((option) => option.id === id)}
          placeholderSelect={placeholderSelect}
          notFoundMessage={notFoundMessage}
        />
      )}
    />
  )
}
