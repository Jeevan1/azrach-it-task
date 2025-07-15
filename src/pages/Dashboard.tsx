import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import UserTable from "../components/UserTable";
import { useLayout } from "../context/LayoutContext";
import useFetch from "../hooks/useFetch";
import DashboardLayout from "../layout/DashboardLayout";
import type { User } from "../types";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userloading, setUserLoading] = useState<boolean>(false);
  const { layout } = useLayout();
  const { data, loading, error } = useFetch<User[]>("/users");

  const searchTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (value: string) => {
    setUserLoading(true);
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (!value) {
      setUserLoading(false);
      setUsers(data || []);
      return;
    }

    searchTimeout.current = setTimeout(() => {
      const filteredUsers = (data || []).filter(
        (user) =>
          user.name.toLowerCase().includes(value.toLowerCase()) ||
          user.email.toLowerCase().includes(value.toLowerCase())
      );
      setUsers(filteredUsers);
      setUserLoading(false);
    }, 500);
  };

  useEffect(() => {
    setUserLoading(true);
    if (data) {
      setUsers(data);
      setUserLoading(false);
    }
  }, [data]);

  if (error)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">
          Error fetching users
        </h1>
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <DashboardLayout>
      <SearchBar
        name="search"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search users..."
      />
      <section className="mt-4">
        <h2 className="text-2xl font-bold text-gray-700">Users</h2>
        <div className="mt-4">
          {loading || userloading ? (
            <Loader loading={loading || userloading} />
          ) : layout === "table" ? (
            <UserTable data={users} />
          ) : (
            <UserList data={users} />
          )}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
