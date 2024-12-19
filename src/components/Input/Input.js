import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './FormInput.scss';
export const FormInput = ({ id, type, register, errorMessage, placeholder, }) => {
    return (_jsxs("div", { className: "form-input-container", children: [_jsx("input", { id: id, type: type, ...register(id), placeholder: placeholder, className: "form-input" }), errorMessage && _jsx("p", { className: "error-message", children: errorMessage })] }));
};
