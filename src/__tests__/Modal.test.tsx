import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../components/Modal/Modal";

describe("Modal", () => {
  it("renders children when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
