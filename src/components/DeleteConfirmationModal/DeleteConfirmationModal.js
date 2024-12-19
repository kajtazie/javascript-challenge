import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../Button/Button";
import "./DeleteConfirmationModal.scss";
export const DeleteConfirmationModal = ({ contactId, onDelete, onClose, }) => {
    return (_jsxs("div", { className: "p-8", children: [_jsx("h2", { className: "pb-6 text-center", children: "Are you sure you want to delete this contact?" }), _jsxs("div", { className: "flex space-x-4 justify-center", children: [_jsx(Button, { onClick: () => onDelete(contactId), variant: "danger", children: "Delete" }), _jsx(Button, { onClick: onClose, variant: "primary", children: "Cancel" })] })] }));
};
