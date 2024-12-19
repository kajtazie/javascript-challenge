import { v4 as uuidv4 } from 'uuid';
import { Contacts } from "../interfaces/contacts.types";
import CountryList from "country-list";

const countryList = CountryList.getData();

const getCountryNameByCode = (code: string): string => {
  const country = countryList.find((country) => country.code === code);
  return country ? country.name : "Unknown";
};

export const ContactsData: Contacts[] = [
  {
    id: uuidv4(),
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    country: { code: "AR", name: getCountryNameByCode("AR") },
  },
  {
    id: uuidv4(),
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    country: { code: "US", name: getCountryNameByCode("US") },
  },
  {
    id: uuidv4(),
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    country: { code: "GB", name: getCountryNameByCode("GB") },
  },
  {
    id: uuidv4(),
    firstName: "Emma",
    lastName: "Watson",
    email: "emma.watson@example.com",
    country: { code: "AU", name: getCountryNameByCode("AU") },
  },
  {
    id: uuidv4(),
    firstName: "Chris",
    lastName: "Evans",
    email: "chris.evans@example.com",
    country: { code: "US", name: getCountryNameByCode("US") },
  },
  {
    id: uuidv4(),
    firstName: "Natalie",
    lastName: "Portman",
    email: "natalie.portman@example.com",
    country: { code: "CA", name: getCountryNameByCode("CA") },
  },
  {
    id: uuidv4(),
    firstName: "Robert",
    lastName: "Downey",
    email: "robert.downey@example.com",
    country: { code: "UK", name: getCountryNameByCode("UK") },
  },
  {
    id: uuidv4(),
    firstName: "Scarlett",
    lastName: "Johansson",
    email: "scarlett.johansson@example.com",
    country: { code: "US", name: getCountryNameByCode("US") },
  },
  {
    id: uuidv4(),
    firstName: "Tom",
    lastName: "Holland",
    email: "tom.holland@example.com",
    country: { code: "AU", name: getCountryNameByCode("AU") },
  },
  {
    id: uuidv4(),
    firstName: "Zendaya",
    lastName: "Coleman",
    email: "zendaya.coleman@example.com",
    country: { code: "US", name: getCountryNameByCode("US") },
  },
];
