import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormLabel } from "../Label/Label";
import "./Select.scss";
export const Select = ({ id, register, errors, countryOptions, label, required = false, }) => {
    return (_jsxs("div", { className: "select-container", children: [_jsx(FormLabel, { htmlFor: id, children: label }), _jsxs("select", { id: id, ...register(id, { required: required && `${label} is required` }), className: "select-element", children: [_jsx("option", { value: "", className: "text-gray-500", children: "Select a country" }), countryOptions.map((country, index) => (_jsx("option", { value: country.value, className: "text-gray-300", children: country.label }, index)))] }), errors?.[id] && (_jsx("p", { className: "error-message", children: errors[id]?.message }))] }));
};
