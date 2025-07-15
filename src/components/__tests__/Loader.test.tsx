import { render, screen } from "@testing-library/react";
import Loader from "../Loader";
import { describe, expect, test } from "vitest";

describe("Loader component", () => {
  test("renders loader when loading is true", () => {
    render(<Loader loading={true} />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("does not render loader when loading is false", () => {
    const { container } = render(<Loader loading={false} />);
    expect(container).toBeEmptyDOMElement();
  });
});
