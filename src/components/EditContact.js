import { jsx as _jsx } from "react/jsx-runtime";
import { useContacts } from "../hooks/useContacts";
import { useState } from "react";
import useCountryOptions from "../hooks/useCountryOptions";
import { ContactForm } from "./ContactForm/ContactForm";
export const EditContact = ({ contact }) => {
    const { editContact } = useContacts();
    const [successMessage, setSuccessMessage] = useState(null);
    const countryOptions = useCountryOptions();
    const onSubmit = (data) => {
        const selectedCountry = countryOptions.find((country) => country.value === data.country);
        if (selectedCountry) {
            editContact(contact.id, {
                ...data,
                country: { code: selectedCountry.value, name: selectedCountry.label },
            });
            setSuccessMessage("Contact updated successfully!");
        }
    };
    return (_jsx(ContactForm, { initialValues: {
            firstName: contact.firstName,
            lastName: contact.lastName,
            email: contact.email,
            country: contact.country.code,
        }, onSubmit: onSubmit, submitButtonLabel: "Save Changes", successMessage: successMessage, setSuccessMessage: setSuccessMessage }));
};
