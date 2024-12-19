import { jsx as _jsx } from "react/jsx-runtime";
import "./Button.scss";
export const Button = ({ onClick, children, type = "button", variant = "primary", className = "", disabled = false, }) => {
    // Base button class
    const buttonClass = `button ${variant} ${disabled ? "disabled" : ""} ${className}`;
    return (_jsx("button", { onClick: onClick, type: type, className: buttonClass, disabled: disabled, children: children }));
};
