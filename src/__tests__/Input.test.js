import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormInput } from "../components/Input/Input";
const mockRegister = jest.fn();
describe("FormInput Component", () => {
    it("renders input and calls register with correct id", () => {
        render(_jsx(FormInput, { id: "name", type: "text", register: mockRegister, placeholder: "Enter name" }));
        const inputElement = screen.getByPlaceholderText("Enter name");
        expect(inputElement).toBeInTheDocument();
        userEvent.type(inputElement, "John Doe");
        expect(mockRegister).toHaveBeenCalledWith("name");
    });
    it("displays an error message when errorMessage prop is provided", () => {
        render(_jsx(FormInput, { id: "name", type: "text", register: mockRegister, errorMessage: "Name is required" }));
        expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
});
