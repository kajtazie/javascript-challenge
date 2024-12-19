import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import './ContactForm.scss'; 
import { contactSchema } from "../../schemas/contactSchema";
import useCountryOptions from "../../hooks/useCountryOptions";
import { formInputs } from "../../data/util";
import { FormLabel } from "../Label/Label";
import { FormInput } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";

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
    <div className="contact-form">
      {/* Error Message */}
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
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
        <div className="form-select">
          <Select
            id="country"
            register={register}
            countryOptions={countryOptions}
            label="Country"
            required={true}
            errors={errors}
          />
        </div>

        <Button type="submit" variant="submit" disabled={!isDirty || !isValid} className="form-button">
          {submitButtonLabel}
        </Button>
      </form>
    </div>
  );
};
