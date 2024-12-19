import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import './ContactForm.scss';
import { contactSchema } from "../../schemas/contactSchema";
import useCountryOptions from "../../hooks/useCountryOptions";
import { formInputs } from "../../data/util";
import { FormLabel } from "../Label/Label";
import { FormInput } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
export const ContactForm = ({ initialValues, onSubmit, submitButtonLabel, successMessage, errorMessage, }) => {
    const countryOptions = useCountryOptions();
    const { register, handleSubmit, reset, formState: { errors, isDirty, isValid }, } = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
        defaultValues: initialValues,
    });
    useEffect(() => {
        if (initialValues) {
            reset(initialValues);
        }
    }, [initialValues, reset]);
    return (_jsxs("div", { className: "contact-form", children: [errorMessage && (_jsx("div", { className: "error-message", children: errorMessage })), successMessage && (_jsx("div", { className: "success-message", children: successMessage })), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [formInputs(errors).map((formInput) => (_jsxs(React.Fragment, { children: [_jsx(FormLabel, { htmlFor: formInput.id, children: formInput.label }), _jsx(FormInput, { register: register, ...formInput })] }, formInput.id))), _jsx("div", { className: "form-select", children: _jsx(Select, { id: "country", register: register, countryOptions: countryOptions, label: "Country", required: true, errors: errors }) }), _jsx(Button, { type: "submit", variant: "submit", disabled: !isDirty || !isValid, className: "form-button", children: submitButtonLabel })] })] }));
};
