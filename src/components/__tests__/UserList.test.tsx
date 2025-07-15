import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import UserList from "../UserList";
import type { User } from "../../types";
import { describe, expect, test } from "vitest";

const mockUsers: User[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  username: `user${i + 1}`,
  email: `user${i + 1}@example.com`,
  phone: `980000000${i}`,
  website: "example.com",
  address: {
    city: "Kathmandu",
    street: "",
    suite: "",
    zipcode: "",
    geo: { lat: "", lng: "" },
  },
  company: {
    name: "AzrachIT",
    catchPhrase: "",
    bs: "",
  },
}));

describe("UserList component", () => {
  test('renders "No users found." when data is null', () => {
    render(<UserList data={null} />, { wrapper: MemoryRouter });
    expect(screen.getByText("No users found.")).toBeInTheDocument();
  });

  test("renders paginated user cards", () => {
    render(<UserList data={mockUsers} />, { wrapper: MemoryRouter });

    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`User ${i}`)).toBeInTheDocument();
    }
    expect(screen.queryByText("User 7")).not.toBeInTheDocument();
  });

  test("navigates to page 2 on pagination click", () => {
    render(<UserList data={mockUsers} />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByText("2"));

    expect(screen.getByText("User 7")).toBeInTheDocument();
    expect(screen.getByText("User 10")).toBeInTheDocument();

    expect(screen.queryByText("User 1")).not.toBeInTheDocument();
  });
});
