import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { FormLabel } from "./Label";
import { CountryOption } from "../interfaces/contacts.types";

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
    <div className="mb-4">
      <FormLabel htmlFor="country">Country</FormLabel>
      <select
        id={id}
        {...register(id, { required: required && `${label} is required` })}
        className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        <p className="text-red-400 text-xs mt-1">
          {errors[id]?.message as string}
        </p>
      )}
    </div>
  );
};
