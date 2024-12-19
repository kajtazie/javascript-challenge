import React from "react";

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
  const baseStyles =
    "px-4 py-2 rounded font-medium transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger:
      "border border-red-900 text-red-900 bg-transparent hover:bg-red-500 hover:text-white",
    submit: "bg-green-500 text-white hover:bg-green-600",
  };

  const disabledStyles =
    "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400";

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className} ${
    disabled ? disabledStyles : ""
  }`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
