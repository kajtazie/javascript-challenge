import React from "react";
import './FormLabel.scss';

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  errorMessage?: string;
}

export const FormLabel = ({ htmlFor, children, errorMessage }: FormLabelProps) => {
  return (
    <div className="form-label-container">
      <label
        htmlFor={htmlFor}
        className="form-label"
      >
        {children}
      </label>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
