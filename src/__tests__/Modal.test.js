import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../components/Modal/Modal";
describe("Modal", () => {
    it("renders children when isOpen is true", () => {
        render(_jsx(Modal, { isOpen: true, onClose: jest.fn(), children: _jsx("div", { children: "Modal Content" }) }));
        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });
    it("does not render when isOpen is false", () => {
        render(_jsx(Modal, { isOpen: false, onClose: jest.fn(), children: _jsx("div", { children: "Modal Content" }) }));
        expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    });
    it("calls onClose when close button is clicked", () => {
        const mockOnClose = jest.fn();
        render(_jsx(Modal, { isOpen: true, onClose: mockOnClose, children: _jsx("div", { children: "Modal Content" }) }));
        fireEvent.click(screen.getByRole("button"));
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
