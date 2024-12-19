import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { Table } from "../components/Table/Table";
import { MemoryRouter } from "react-router-dom";
// Mock data for the table
const mockData = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        country: { name: "USA" },
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@example.com",
        country: { name: "Canada" },
    },
];
beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation(() => { });
});
afterAll(() => {
    jest.restoreAllMocks();
});
describe("Table", () => {
    it("renders the table with data", () => {
        render(_jsx(MemoryRouter, { children: _jsx(Table, { data: mockData, onDelete: jest.fn() }) }));
        expect(screen.getByText("First Name")).toBeInTheDocument();
        expect(screen.getByText("Last Name")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByText("Country")).toBeInTheDocument();
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("Jane")).toBeInTheDocument();
    });
});
