import { jsx as _jsx } from "react/jsx-runtime";
import { ContactList } from "../components/ContactList/ContactList";
export const Homepage = () => {
    return (_jsx("section", { className: "min-h-screen flex items-center justify-center", children: _jsx(ContactList, {}) }));
};
