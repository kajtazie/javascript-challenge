import { JSX, useState } from "react";

import "./ContactList.scss";
import { Modal } from "../Modal/Modal";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { AddContactForm } from "../AddContactForm";
import { Button } from "../Button/Button";
import { useContacts } from "../../hooks/useContacts";
import { Table } from "../Table/Table";



export const ContactList = () => {
  const { contacts, deleteContact, addContact } = useContacts();
  const [activeModal, setActiveModal] = useState<{
    type: "add" | "delete" | null;
    contactId?: string;
  }>({ type: null });

  const openAddModal = () => setActiveModal({ type: "add" });
  const closeModal = () => setActiveModal({ type: null });

  const openDeleteModal = (contactId: string) =>
    setActiveModal({ type: "delete", contactId });

  const handleDelete = (id: string) => {
    deleteContact(id);
    closeModal();
  };

  const modal: Record<"delete" | "add", JSX.Element> = {
    delete: (
      <Modal isOpen={true} onClose={closeModal}>
        <DeleteConfirmationModal
          contactId={activeModal.contactId!}
          onDelete={handleDelete}
          onClose={closeModal}
        />
      </Modal>
    ),
    add: (
      <Modal isOpen={true} onClose={closeModal}>
        <AddContactForm closeModal={closeModal} addContact={addContact} />
      </Modal>
    ),
  };
  return (
    <div className="contact-list">
      <div className="contact-list__header">
        <h1 className="contact-list__title">Contact List</h1>
        <Button
          onClick={openAddModal}
          variant="primary"
        >
          Add Contact
        </Button>
      </div>

      {/* Table Component */}
      <div className="contact-list__table">
        <Table data={contacts} onDelete={openDeleteModal} />
      </div>

      {/* Modals */}
      {activeModal.type && modal[activeModal.type]}
    </div>
  );
};
