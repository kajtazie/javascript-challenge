import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./ContactList.scss";
import { Modal } from "../Modal/Modal";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { AddContactForm } from "../AddContactForm";
import { Button } from "../Button/Button";
import { useContacts } from "../../hooks/useContacts";
import { Table } from "../Table/Table";
export const ContactList = () => {
    const { contacts, deleteContact, addContact } = useContacts();
    const [activeModal, setActiveModal] = useState({ type: null });
    const openAddModal = () => setActiveModal({ type: "add" });
    const closeModal = () => setActiveModal({ type: null });
    const openDeleteModal = (contactId) => setActiveModal({ type: "delete", contactId });
    const handleDelete = (id) => {
        deleteContact(id);
        closeModal();
    };
    const modal = {
        delete: (_jsx(Modal, { isOpen: true, onClose: closeModal, children: _jsx(DeleteConfirmationModal, { contactId: activeModal.contactId, onDelete: handleDelete, onClose: closeModal }) })),
        add: (_jsx(Modal, { isOpen: true, onClose: closeModal, children: _jsx(AddContactForm, { closeModal: closeModal, addContact: addContact }) })),
    };
    return (_jsxs("div", { className: "contact-list", children: [_jsxs("div", { className: "contact-list__header", children: [_jsx("h1", { className: "contact-list__title", children: "Contact List" }), _jsx(Button, { onClick: openAddModal, variant: "primary", children: "Add Contact" })] }), _jsx("div", { className: "contact-list__table", children: _jsx(Table, { data: contacts, onDelete: openDeleteModal }) }), activeModal.type && modal[activeModal.type]] }));
};
