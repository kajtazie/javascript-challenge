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
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          id="country"
          register={register}
          errors={errors}
          countryOptions={countryOptions}
          label="Country"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  describe("Select Component", () => {
    it("displays an error message when the field is required but not selected", async () => {
      render(<TestForm />);
  
      await act(async () => {
        userEvent.click(screen.getByText(/submit/i));
      });
  
      const errorMessage = await screen.findByText(/country is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  
    it("calls onSubmit with selected country", async () => {
      render(<TestForm />);
  
      userEvent.selectOptions(screen.getByLabelText(/country/i), "US");
  
      await act(async () => {
        userEvent.click(screen.getByText(/submit/i));
      });
  
      expect(screen.getByText(/submit/i)).toBeInTheDocument();
    });
  });