import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { describe, expect, test, vi } from "vitest";

describe("SearchBar component", () => {
  test("renders input with placeholder and calls onChange", () => {
    const mockOnChange = vi.fn();

    render(
      <SearchBar
        name="search"
        placeholder="Search users..."
        value=""
        onChange={mockOnChange}
      />
    );

    // Check input exists and placeholder text is correct
    const input = screen.getByPlaceholderText("Search users...");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "jeevan" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
