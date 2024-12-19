import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLabel } from "./Label";
import { FormInput } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { contactSchema } from "../schemas/contactSchema";
import useCountryOptions from "../hooks/useCountryOptions";
import { formInputs } from "../data/util";
import { z } from "zod";

interface CommonFormProps {
  initialValues?: Partial<FormData>;
  onSubmit: (data: FormData) => void;
  submitButtonLabel: string;
  successMessage?: string | null;
  setSuccessMessage?: React.Dispatch<React.SetStateAction<string | null>>;
  errorMessage?: string | null;
  setErrorMessage?: React.Dispatch<React.SetStateAction<string | null>>;
}

type FormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC<CommonFormProps> = ({
  initialValues,
  onSubmit,
  submitButtonLabel,
  successMessage,
  errorMessage,
}) => {
  const countryOptions = useCountryOptions();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <div className="p-4 text-gray-300 bg-gray-800 rounded-xl">
      {/* Error Message */}
      {errorMessage && (
        <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded">
          {errorMessage}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-2 text-sm text-green-600 bg-green-100 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs(errors).map((formInput) => (
          <React.Fragment key={formInput.id}>
            <FormLabel htmlFor={formInput.id}>{formInput.label}</FormLabel>
            <FormInput register={register} {...formInput} />
          </React.Fragment>
        ))}

        {/* Country */}
        <div className="mb-4">
          <Select
            id="country"
            register={register}
            countryOptions={countryOptions}
            label="Country"
            required={true}
            errors={errors}
          />
        </div>

        <Button type="submit" variant="submit" disabled={!isDirty || !isValid}>
          {submitButtonLabel}
        </Button>
      </form>
    </div>
  );
};
