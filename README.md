# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Client Side Address Book (JavaScript Challenge)

This is a Single Page Application (SPA) for managing an address book, built using **React**, **TypeScript**, **Vite**, and **TailwindCSS**. The app allows users to add, edit, delete, and view contacts, with client-side persistence.

---

## Features

- **Add, Edit, and Delete Contacts**: Manage contact details with validation.
- **Persisted Data**: All data is stored locally using `localStorage`.
- **Form Validation**: Includes real-time validation for:
  - First Name (required)
  - Last Name (required)
  - Email (required, valid format)
  - Country (required, using `country-list` for dropdown options)
- **Dynamic Reusability**: Modular and reusable components for forms, buttons, and inputs.
- **Responsive Design**: Styled using TailwindCSS.
- **Type Safety**: Full TypeScript support for scalability and maintainability.

---

## Folder Structure

```plaintext
src/
├── components/              # Reusable UI components
│   ├── AddContactForm.tsx
│   ├── Button.tsx
│   ├── ContactForm.tsx
│   ├── ContactList.tsx
│   ├── DeleteConfirmationModal.tsx
│   ├── EditContact.tsx
│   ├── Input.tsx
│   ├── Label.tsx
│   ├── Modal.tsx
│   ├── Select.tsx
│   └── Table.tsx
├── data/                    # Mock data and utilities
│   ├── mockContacts.ts
│   └── util.ts
├── hooks/                   # Custom React hooks
│   ├── useContacts.ts
│   └── useCountryOptions.ts
├── interfaces/              # TypeScript interfaces
│   └── contactTypes.ts
├── pages/                   # Application pages
│   ├── EditContactPage.tsx
│   └── HomePage.tsx
├── schemas/                 # Validation schemas
│   └── contactSchema.ts
└── App.tsx                  # Main application entry
