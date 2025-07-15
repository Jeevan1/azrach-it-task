import { render, screen } from "@testing-library/react";
import UserTable from "../UserTable";
import type { User } from "../../types";
import { describe, expect, test, vi } from "vitest";

vi.mock("react-router", () => ({
  useNavigate: () => vi.fn(),
}));

const mockUsers: User[] = [
  {
    id: 1,
    name: "Jeevan Shrestha",
    username: "jeevan",
    email: "jeevan@example.com",
    phone: "9800000000",
    website: "sthajeevan.com.np",
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
  },
];

describe("UserTable component", () => {
  test('renders "No users found." when data is null', () => {
    render(<UserTable data={null} />);
    expect(screen.getByText("No users found.")).toBeInTheDocument();
  });

  test("renders table headers and user row when data is provided", () => {
    render(<UserTable data={mockUsers} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("City")).toBeInTheDocument();

    expect(screen.getByText("Jeevan Shrestha")).toBeInTheDocument();
    expect(screen.getByText("jeevan@example.com")).toBeInTheDocument();
    expect(screen.getByText("Lalitpur")).toBeInTheDocument();
  });
});
