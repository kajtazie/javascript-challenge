import { render, screen } from "@testing-library/react";
import { FormLabel } from "../components/Label/Label";

describe("FormLabel Component", () => {
  it("renders the label and its associated input field", () => {
    render(
      <>
        <input id="name" />
        <FormLabel htmlFor="name">Name</FormLabel>
      </>
    );

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  it("displays an error message when errorMessage prop is provided", () => {
    render(
      <>
        <input id="name" />
        <FormLabel htmlFor="name" errorMessage="Name is required">
          Name
        </FormLabel>
      </>
    );

    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });
});
