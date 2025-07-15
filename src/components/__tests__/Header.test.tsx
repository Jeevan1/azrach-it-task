import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { describe, expect, test, vi } from "vitest";
import * as LayoutContext from "../../context/LayoutContext";

describe("Header component", () => {
  test("renders buttons and handles layout change", () => {
    const mockSetLayout = vi.fn();

    vi.spyOn(LayoutContext, "useLayout").mockReturnValue({
      layout: "card",
      handleLayoutChange: mockSetLayout,
    });

    render(<Header />);

    expect(screen.getByText("Cards")).toBeInTheDocument();
    expect(screen.getByText("Table")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Table"));

    expect(mockSetLayout).toHaveBeenCalledWith("table");
  });
});
