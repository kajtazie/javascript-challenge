import { contactSchema } from "../schemas/contactSchema";
import { z } from "zod";
import { useContacts } from "../hooks/useContacts";
import { useState } from "react";
import useCountryOptions from "../hooks/useCountryOptions";
import { ContactForm } from "./ContactForm/ContactForm";
import { Contact } from "../interfaces/contacts.types";

type FormData = z.infer<typeof contactSchema>;


export const EditContact = ({ contact }: Contact) => {
  const { editContact } = useContacts();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const countryOptions = useCountryOptions();
  const onSubmit = (data: FormData) => {
    const selectedCountry = countryOptions.find(
      (country) => country.value === data.country
    );

    if (selectedCountry) {
      editContact(contact.id, {
        ...data,
        country: { code: selectedCountry.value, name: selectedCountry.label },
      });

      setSuccessMessage("Contact updated successfully!");
    }
  };

  return (
    <ContactForm
      initialValues={{
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        country: contact.country.code,
      }}
      onSubmit={onSubmit}
      submitButtonLabel="Save Changes"
      successMessage={successMessage}
      setSuccessMessage={setSuccessMessage}
    />
  );
};
