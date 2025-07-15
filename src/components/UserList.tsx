import { Pagination } from "@mui/material";
import type { User } from "../types";
import UserCard from "./UserCard";
import { useState } from "react";

const UserList = ({
  data,
  loading,
}: {
  data: User[] | null;
  loading?: boolean;
}) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  if (!data || data.length === 0) return <p>No users found.</p>;

  const pageCount = Math.ceil(data.length / rowsPerPage);

  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <Pagination
          count={pageCount}
          onChange={(_, value: number) => setPage(value)}
          page={page}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
};

export default UserList;
