export const formInputs = (errors) => [
    {
        label: "First Name",
        id: "firstName",
        type: "text",
        placeholder: "e.g., John",
        errorMessage: errors.firstName?.message,
    },
    {
        label: "Last Name",
        id: "lastName",
        type: "text",
        placeholder: "e.g., Doe",
        errorMessage: errors.lastName?.message,
    },
    {
        label: "Email",
        id: "email",
        type: "email",
        placeholder: "e.g., john@example.com",
        errorMessage: errors.email?.message,
    },
];
