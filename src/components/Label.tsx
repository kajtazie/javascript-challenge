import React from "react";

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  errorMessage?: string;
}

export const FormLabel = ({ htmlFor, children }: FormLabelProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-300"
      >
        {children}
      </label>
    </div>
  );
};
