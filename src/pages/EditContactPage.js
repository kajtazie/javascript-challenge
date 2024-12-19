import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { EditContact } from "../components/EditContact";
import { useNavigate, useParams } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import { Button } from "../components/Button/Button";
export const EditContactPage = () => {
    const { id } = useParams();
    const { contacts } = useContacts();
    const navigate = useNavigate();
    const contactToEdit = contacts.find((contact) => contact.id === id);
    return (_jsxs("section", { className: "edit-contact-page", children: [_jsx(Button, { variant: "primary", onClick: () => navigate("/"), className: "back-button", children: "Back" }), !contactToEdit ? (_jsx("div", { className: "text-center", children: _jsx("p", { children: "Contact not found." }) })) : (_jsx(_Fragment, { children: _jsxs("div", { className: "edit-container", children: [_jsx("h1", { className: "contact-list__title", children: "Edit Contact" }), _jsx(EditContact, { contact: contactToEdit })] }) }))] }));
};
