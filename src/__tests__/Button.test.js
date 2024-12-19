import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button/Button";
describe("Button component", () => {
    test("renders Button with default text", () => {
        render(_jsx(Button, { children: "Click Me" }));
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Click Me");
    });
    test("calls onClick function when clicked", () => {
        const handleClick = jest.fn();
        render(_jsx(Button, { onClick: handleClick, children: "Click Me" }));
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    test("applies 'primary' variant class by default", () => {
        render(_jsx(Button, { children: "Click Me" }));
        const button = screen.getByRole("button");
        expect(button).toHaveClass("button primary");
    });
    test("applies 'danger' variant class when variant is 'danger'", () => {
        render(_jsx(Button, { variant: "danger", children: "Click Me" }));
        const button = screen.getByRole("button");
        expect(button).toHaveClass("button danger");
    });
    test("applies 'disabled' class when button is disabled", () => {
        render(_jsx(Button, { disabled: true, children: "Click Me" }));
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
        expect(button).toHaveClass("button disabled");
    });
    test("adds custom className", () => {
        render(_jsx(Button, { className: "custom-class", children: "Click Me" }));
        const button = screen.getByRole("button");
        expect(button).toHaveClass("button custom-class");
    });
    test("renders with type 'submit' when specified", () => {
        render(_jsx(Button, { type: "submit", children: "Submit" }));
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("type", "submit");
    });
});
