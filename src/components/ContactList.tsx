import { JSX, useState } from "react";
import { useContacts } from "../hooks/useContacts";
import { Button } from "./Button";
import { Modal } from "./Modal";

import { DeleteConfirmationModal } from "./DeleteConfirmationModal";
import { Table } from "./Table";
import { AddContactForm } from "./AddContactForm";
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
    <div className="pt-20 min-h-screen text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-100">Contact List</h1>
        <Button onClick={openAddModal} variant="primary">
          Add Contact
        </Button>
      </div>
      {/* Table Component */}
      <Table data={contacts} onDelete={openDeleteModal} />

      {/* Modals */}
      {activeModal.type && modal[activeModal.type]}
    </div>
  );
};
