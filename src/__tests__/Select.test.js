import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { Select } from "../components/Select/Select";
const countryOptions = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
];
const TestForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = jest.fn();
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(Select, { id: "country", register: register, errors: errors, countryOptions: countryOptions, label: "Country", required: true }), _jsx("button", { type: "submit", children: "Submit" })] }));
};
describe("Select Component", () => {
    it("displays an error message when the field is required but not selected", async () => {
        render(_jsx(TestForm, {}));
        await act(async () => {
            userEvent.click(screen.getByText(/submit/i));
        });
        const errorMessage = await screen.findByText(/country is required/i);
        expect(errorMessage).toBeInTheDocument();
    });
    it("calls onSubmit with selected country", async () => {
        render(_jsx(TestForm, {}));
        userEvent.selectOptions(screen.getByLabelText(/country/i), "US");
        await act(async () => {
            userEvent.click(screen.getByText(/submit/i));
        });
        expect(screen.getByText(/submit/i)).toBeInTheDocument();
    });
});
