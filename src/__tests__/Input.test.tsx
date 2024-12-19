import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormInput } from "../components/Input/Input";

const mockRegister = jest.fn();

describe("FormInput Component", () => {
  it("renders input and calls register with correct id", () => {
    render(
      <FormInput id="name" type="text" register={mockRegister} placeholder="Enter name" />
    );

    const inputElement = screen.getByPlaceholderText("Enter name");
    expect(inputElement).toBeInTheDocument();
    userEvent.type(inputElement, "John Doe");
    expect(mockRegister).toHaveBeenCalledWith("name");
  });

  it("displays an error message when errorMessage prop is provided", () => {
    render(
      <FormInput id="name" type="text" register={mockRegister} errorMessage="Name is required" />
    );

    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });
});
