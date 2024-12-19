import { contactSchema } from "../schemas/contactSchema";
import { z } from "zod";
import { useContacts } from "../hooks/useContacts";
import useCountryOptions from "../hooks/useCountryOptions";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

type FormData = z.infer<typeof contactSchema>;

export const AddContactForm = ({
  closeModal,
  addContact,
}: {
  closeModal: () => void;
  addContact: (contact: any) => void;
}) => {
  const { contacts } = useContacts();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const countryOptions = useCountryOptions();
  const onSubmit = (data: FormData) => {
    const selectedCountry = countryOptions.find(
      (country) => country.value === data.country
    );

    if (!selectedCountry) {
      setErrorMessage("Please select a valid country.");
      setTimeout(() => setErrorMessage(null), 5000);
      return;
    }

    const emailExists = contacts.some(
      (contact) => contact.email === data.email
    );

    if (emailExists) {
      setErrorMessage("A contact with this email address already exists.");
      setTimeout(() => setErrorMessage(null), 5000);
      return;
    }

    const newContact = {
      ...data,
      country: {
        code: selectedCountry.value,
        name: selectedCountry.label,
      },
    };

    addContact(newContact);
    setSuccessMessage("Contact added successfully!");
    setTimeout(() => {
      setSuccessMessage(null);
      closeModal();
    }, 3000);
  };

  return (
    <ContactForm
      onSubmit={onSubmit}
      submitButtonLabel="Submit"
      successMessage={successMessage}
      setSuccessMessage={setSuccessMessage}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />
  );
};
