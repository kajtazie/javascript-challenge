import React from "react";
import "./Button.scss"; 

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "danger" | "submit";
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  onClick,
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) => {
  // Base button class
  const buttonClass = `button ${variant} ${disabled ? "disabled" : ""} ${className}`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
