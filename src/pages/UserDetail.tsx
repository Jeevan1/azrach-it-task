import { useNavigate, useParams } from "react-router";
import type { User } from "../types";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DomainIcon from "@mui/icons-material/Domain";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useFetch<User>(id ? `/users/${id}` : "");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm cursor-pointer text-primary font-medium hover:underline"
        >
          <ArrowBackIcon className="text-primary" fontSize="small" />
          Go Back
        </button>
        {!data && !loading && <p className="text-gray-600">User not found.</p>}
        {loading && <Loader loading={loading} />}

        {data && (
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-pink-100 text-primary font-bold text-2xl flex items-center justify-center">
                {data.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {data.name}
                </h1>
                <p className="text-sm text-gray-500">@{data.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <EmailIcon fontSize="small" className="text-primary" />
                  {data.email}
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <LocalPhoneIcon fontSize="small" className="text-primary" />
                  {data.phone}
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <HomeIcon fontSize="small" className="text-primary" />
                  {data.address.city}, {data.address.street}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <DomainIcon fontSize="small" className="text-primary" />
                  {data.company.name}
                </div>
                <div className="text-gray-600 text-sm italic">
                  "{data.company.catchPhrase}"
                </div>
                <div className="text-xs text-gray-400">
                  BS: {data.company.bs}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-gray-300">
              <p className="text-sm text-gray-500">
                Visit website:{" "}
                <a
                  href={`http://${data.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {data.website}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
