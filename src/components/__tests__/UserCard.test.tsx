import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import UserCard from "../UserCard";
import type { User } from "../../types";
import { describe, expect, test } from "vitest";

const mockUser: User = {
  id: 1,
  name: "Jeevan Shrestha",
  username: "jeevan",
  email: "jeevan@example.com",
  phone: "9800000000",
  address: {
    city: "Lalitpur",
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
  website: "",
};

describe("UserCard component", () => {
  test("renders user info correctly", () => {
    render(
      <MemoryRouter>
        <UserCard user={mockUser} />
      </MemoryRouter>
    );

    expect(screen.getByText("Jeevan Shrestha")).toBeInTheDocument();
    expect(screen.getByText("@jeevan")).toBeInTheDocument();
    expect(screen.getByText("jeevan@example.com")).toBeInTheDocument();
    expect(screen.getByText("9800000000")).toBeInTheDocument();
    expect(screen.getByText("Lalitpur")).toBeInTheDocument();
    expect(screen.getByText("AzrachIT")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/user/1");
  });
});
