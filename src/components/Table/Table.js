import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./Table.scss";
import { Button } from "../Button/Button";
export const Table = ({ data, onDelete }) => {
    const tableHeaders = [
        { id: "firstName", label: "First Name" },
        { id: "lastName", label: "Last Name" },
        { id: "email", label: "Email" },
        { id: "country", label: "Country" },
        { id: "actions", label: "Actions" },
    ];
    return (_jsx("div", { className: "table-container", children: _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsx("tr", { children: tableHeaders.map((header) => (_jsx("th", { children: header.label }, header.id))) }) }), _jsx("tbody", { children: data.length > 0 ? (data.map((contact) => (_jsxs("tr", { children: [_jsx("td", { "data-label": "First Name", children: contact.firstName }), _jsx("td", { "data-label": "Last Name", children: contact.lastName }), _jsx("td", { "data-label": "Email", children: contact.email }), _jsx("td", { "data-label": "Country", className: "truncate", children: contact.country.name }), _jsx("td", { "data-label": "Actions", children: _jsxs("div", { className: "actions", children: [_jsx(Link, { to: `/edit/${contact.id}`, className: "edit-link", children: "Edit" }), _jsx(Button, { onClick: () => onDelete(contact.id.toString()), variant: "danger", children: "Delete" })] }) })] }, contact.id)))) : (_jsx("tr", { children: _jsx("td", { colSpan: 5, className: "text-center", children: "No contacts found." }) })) })] }) }));
};
