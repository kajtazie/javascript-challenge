import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleX } from "lucide-react";
import "./Modal.scss";
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "modal-overlay", children: _jsxs("div", { className: "modal-content", children: [_jsxs("div", { className: "modal-header", children: [_jsx("div", {}), _jsx("button", { onClick: onClose, className: "modal-close-btn", children: _jsx(CircleX, { color: "gray" }) })] }), _jsx("div", { className: "modal-body", children: children })] }) }));
};
