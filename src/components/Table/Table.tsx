import { Link } from "react-router-dom";

import "./Table.scss";
import { Button } from "../Button/Button";

interface TableProps {
  data: Array<{
    id: string | number;
    firstName: string;
    lastName: string;
    email: string;
    country: { name: string };
  }>;
  onDelete: (id: string) => void;
}

export const Table: React.FC<TableProps> = ({ data, onDelete }) => {
  const tableHeaders = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "email", label: "Email" },
    { id: "country", label: "Country" },
    { id: "actions", label: "Actions" },
  ];

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.id}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((contact) => (
              <tr key={contact.id}>
                <td data-label="First Name">{contact.firstName}</td>
                <td data-label="Last Name">{contact.lastName}</td>
                <td data-label="Email">{contact.email}</td>
                <td data-label="Country" className="truncate">
                  {contact.country.name}
                </td>
                <td data-label="Actions">
                  <div className="actions">
                    <Link to={`/edit/${contact.id}`} className="edit-link">
                      Edit
                    </Link>
                    <Button
                      onClick={() => onDelete(contact.id.toString())}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
