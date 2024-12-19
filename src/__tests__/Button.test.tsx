import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button/Button";

describe("Button component", () => {
  test("renders Button with default text", () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  test("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies 'primary' variant class by default", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button primary");
  });

  test("applies 'danger' variant class when variant is 'danger'", () => {
    render(<Button variant="danger">Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button danger");
  });

  test("applies 'disabled' class when button is disabled", () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("button disabled");
  });

  test("adds custom className", () => {
    render(<Button className="custom-class">Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button custom-class");
  });

  test("renders with type 'submit' when specified", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
