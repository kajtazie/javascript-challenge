
## How to Run the Project

#Clone the Repository
``` git clone <repository-url> ```
Navigate to the Project Directory
bash
Copy code
cd javascript-challenge
Install Dependencies
bash
Copy code
npm install


Start the Development Server
bash
Copy code
npm run dev
The application will run on http://localhost:3000.

Run Tests
bash
Copy code
npm run test
Build for Production
bash
Copy code
npm run build


## Node.js Version Requirement

> **Important:** This project requires the **latest version of Node.js**.  
> Older Node.js versions, such as Node.js 12 or 14, will cause compatibility issues with tests and builds.

To ensure compatibility, use **Node.js version 20 or higher**.

To check your current Node.js version, run:

```
node -v
```

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

## Project Dependencies

This project uses the following libraries and tools:

### Core Libraries
- **React** (`react`, `react-dom`) - For building the user interface.
- **React Router DOM** (`react-router-dom`) - For managing application routing.
- **React Hook Form** (`react-hook-form`, `@hookform/resolvers`) - For managing form state and validation.
- **Zod** (`zod`) - For schema validation and error handling.
- **UUID** (`uuid`) - For generating unique IDs.
- **Country List** (`country-list`) - For retrieving a list of countries.

### Development and Testing
- **TypeScript** (`typescript`, `@types/...`) - For type safety in JavaScript code.
- **Vite** (`vite`, `vite-tsconfig-paths`) - Development server and build tool.
- **Jest** (`jest`, `jest-environment-jsdom`, `ts-jest`) - Unit testing framework.
- **Testing Library** (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`) - Utilities for testing React components.
- **ESLint** (`eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) - For linting and enforcing coding standards.
- **Sass** (`sass`) - For styling with CSS preprocessing.
- **Vitest** (`vitest`) - Alternative testing library for specific use cases.

---

