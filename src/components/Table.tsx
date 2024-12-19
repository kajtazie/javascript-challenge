import { Link } from "react-router-dom";
import { Button } from "./Button";

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
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-800 text-gray-200 border-b border-gray-700">
            {tableHeaders.map((header) => (
              <th key={header.id} className="px-4 py-2 text-left">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((contact) => (
              <tr
                key={contact.id}
                className="border-t border-b border-gray-700 hover:bg-gray-700 transition duration-200"
              >
                <td className="px-4 py-2 text-gray-300 capitalize">
                  {contact.firstName}
                </td>
                <td className="px-4 py-2 text-gray-300 capitalize">
                  {contact.lastName}
                </td>
                <td className="px-4 py-2 text-gray-300">{contact.email}</td>
                <td className="px-4 py-2 text-gray-300 capitalize truncate max-w-xs">
                  {contact.country.name}
                </td>
                <td className="px-4 py-2">
                  <div className="flex space-x-4 justify-center items-center">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="text-blue-400 hover:text-white border border-blue-400 px-4 py-2 rounded hover:border-blue-400 hover:bg-blue-400 transition-all duration-200"
                    >
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
            <tr className="border-t border-b border-gray-700">
              <td colSpan={5} className="text-center px-4 py-2 text-gray-400">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
