import { FieldErrors } from "react-hook-form";

type FormType = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
};
export const formInputs = (
  errors: FieldErrors<{ firstName: string; lastName: string; email: string }>
): FormType[] => [
  {
    label: "First Name",
    id: "firstName",
    type: "text",
    placeholder: "e.g., John",
    errorMessage: errors.firstName?.message,
  },
  {
    label: "Last Name",
    id: "lastName",
    type: "text",
    placeholder: "e.g., Doe",
    errorMessage: errors.lastName?.message,
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "e.g., john@example.com",
    errorMessage: errors.email?.message,
  },
];
