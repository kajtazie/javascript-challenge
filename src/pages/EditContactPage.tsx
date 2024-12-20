import { EditContact } from "../components/EditContact";
import { useNavigate, useParams } from "react-router-dom";
import { useContacts } from "../hooks/useContacts";
import { Button } from "../components/Button/Button";

export const EditContactPage = () => {
  const { id } = useParams<{ id: string }>();
  const { contacts } = useContacts();
  const navigate = useNavigate();

  const contactToEdit = contacts.find((contact) => contact.id === id);

  return (
    <section className="edit-contact-page">
      <Button
        variant="primary"
        onClick={() => navigate("/")}
        className="back-button"
      >
        Back
      </Button>

      {!contactToEdit ? (
        <div className="text-center">
          <p>Contact not found.</p>
        </div>
      ) : (
        <>
          <div className="edit-container">
            <h1 className="contact-list__title">Edit Contact</h1>
            <EditContact contact={contactToEdit} />
          </div>
        </>
      )}
      
    </section>
  );
};
