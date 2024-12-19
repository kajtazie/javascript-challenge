import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteConfirmationModal } from "../components/DeleteConfirmationModal/DeleteConfirmationModal";

describe("DeleteConfirmationModal", () => {
  it("renders the modal with the correct message", () => {
    render(
      <DeleteConfirmationModal
        contactId="123"
        onDelete={jest.fn()}
        onClose={jest.fn()}
      />
    );

    expect(
      screen.getByText("Are you sure you want to delete this contact?")
    ).toBeInTheDocument();
  });

  it("calls onDelete with the correct contactId when 'Delete' is clicked", () => {
    const mockOnDelete = jest.fn();
    render(
      <DeleteConfirmationModal
        contactId="123"
        onDelete={mockOnDelete}
        onClose={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(mockOnDelete).toHaveBeenCalledWith("123");
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when 'Cancel' is clicked", () => {
    const mockOnClose = jest.fn();
    render(
      <DeleteConfirmationModal
        contactId="123"
        onDelete={jest.fn()}
        onClose={mockOnClose}
      />
    );

    fireEvent.click(screen.getByText("Cancel"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
