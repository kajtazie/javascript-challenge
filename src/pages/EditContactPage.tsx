import { EditContact } from "../components/EditContact";
import { useNavigate, useParams } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";

export const EditContactPage = () => {
  const { id } = useParams<{ id: string }>();
  const { contacts } = useContacts();
  const navigate = useNavigate();

  const contactToEdit = contacts.find((contact) => contact.id === id);

  if (!contactToEdit) {
    return (
      <div className="text-center text-red-500">
        <p>Contact not found.</p>
        <button
          onClick={() => navigate("/")}
          className="text-blue-400 hover:text-white border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 transition-all duration-200"
        >
          Back to Contacts
        </button>
      </div>
    );
  }
  return (
    <section className="min-h-screen flex items-center justify-center fixed inset-0  bg-gray-900">
      <EditContact contact={contactToEdit} />
    </section>
  );
};
