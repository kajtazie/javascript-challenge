import { useState, useEffect } from "react";
import { ContactsData } from "../data/mockContacts";
import { v4 as uuidv4 } from "uuid";
const CONTACTS_KEY = "contacts";
export const useContacts = () => {
    const [contacts, setContacts] = useState([]);
    // Load contacts from localStorage
    useEffect(() => {
        const savedContacts = localStorage.getItem(CONTACTS_KEY);
        if (savedContacts) {
            setContacts(JSON.parse(savedContacts));
        }
        else {
            setContacts(ContactsData);
            localStorage.setItem(CONTACTS_KEY, JSON.stringify(ContactsData));
        }
    }, []);
    // Save contacts to localStorage
    const saveContacts = (updatedContacts) => {
        setContacts(updatedContacts);
        localStorage.setItem(CONTACTS_KEY, JSON.stringify(updatedContacts));
    };
    // Add new contact to localStorage
    const addContact = (contact) => {
        const newContact = { id: uuidv4(), ...contact };
        setContacts((prevContacts) => {
            const updatedContacts = [...prevContacts, newContact];
            saveContacts(updatedContacts);
            return updatedContacts;
        });
    };
    // Delete contact from localStorage
    const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        saveContacts(updatedContacts);
    };
    // Edit contact in localStorage
    const editContact = (id, updatedContact) => {
        const updatedContacts = contacts.map((contact) => contact.id === id ? { id, ...updatedContact } : contact);
        saveContacts(updatedContacts);
    };
    return { contacts, addContact, deleteContact, editContact };
};
