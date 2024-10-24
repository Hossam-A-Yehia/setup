import { render, fireEvent } from "@testing-library/react";
import { expect } from "vitest";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component", () => {
  it("renders with children", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );

    fireEvent.click(getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    const { getByText } = render(<Button disabled>Click Me</Button>);
    const button = getByText("Click Me");

    expect(button).toBeDisabled();
  });

  it("is not clickable when disabled", () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );

    fireEvent.click(getByText("Click Me"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
