import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { FormLabel } from "../components/Label/Label";
describe("FormLabel Component", () => {
    it("renders the label and its associated input field", () => {
        render(_jsxs(_Fragment, { children: [_jsx("input", { id: "name" }), _jsx(FormLabel, { htmlFor: "name", children: "Name" })] }));
        expect(screen.getByLabelText("Name")).toBeInTheDocument();
    });
    it("displays an error message when errorMessage prop is provided", () => {
        render(_jsxs(_Fragment, { children: [_jsx("input", { id: "name" }), _jsx(FormLabel, { htmlFor: "name", errorMessage: "Name is required", children: "Name" })] }));
        expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
});
