import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { FormLabel } from "../Label/Label";
import { CountryOption } from "../../interfaces/contacts.types";
import "./Select.scss";

interface SelectProps<TFormValues extends FieldValues> {
  id: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  errors?: FieldErrors<TFormValues>;
  countryOptions: CountryOption[];
  label: string;
  required?: boolean;
}

export const Select = <TFormValues extends FieldValues>({
  id,
  register,
  errors,
  countryOptions,
  label,
  required = false,
}: SelectProps<TFormValues>) => {
  return (
    <div className="select-container">
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <select
        id={id}
        {...register(id, { required: required && `${label} is required` })}
        className="select-element"
      >
        <option value="" className="text-gray-500">
          Select a country
        </option>
        {countryOptions.map((country: CountryOption) => (
          <option
            key={country.value}
            value={country.value}
            className="text-gray-300"
          >
            {country.label}
          </option>
        ))}
      </select>
      {errors?.[id] && (
        <p className="error-message">{errors[id]?.message as string}</p>
      )}
    </div>
  );
};
