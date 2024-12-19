export interface Contacts {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: {
    code: string;
    name: string;
  };
}

export interface CountryOption {
  value: string;
  label: string;
}
