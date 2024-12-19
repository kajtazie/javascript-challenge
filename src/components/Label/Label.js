import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './FormLabel.scss';
export const FormLabel = ({ htmlFor, children, errorMessage }) => {
    return (_jsxs("div", { className: "form-label-container", children: [_jsx("label", { htmlFor: htmlFor, className: "form-label", children: children }), errorMessage && _jsx("p", { className: "error-message", children: errorMessage })] }));
};
