import type { User } from "../types";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DomainIcon from "@mui/icons-material/Domain";
import { Link } from "react-router";

const UserCard = ({ user }: { user: User }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="flex flex-col space-y-4 p-4 bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold bg-pink-100 h-16 w-16 rounded-full flex items-center justify-center">
            {user.name.charAt(0).toUpperCase()}
          </span>
          <div>
            <h2 className="text-lg font-semibold text-primary">{user.name}</h2>
            <p className="text-sm text-gray-600">@{user.username}</p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap gap-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <EmailIcon
                sx={{ width: 18, height: 18 }}
                className="text-primary"
              />
              {user.email}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <LocalPhoneIcon
                sx={{ width: 18, height: 18 }}
                className="text-primary"
              />
              {user.phone}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-600 flex items-center gap-1">
              <HomeIcon
                sx={{ width: 18, height: 18 }}
                className="text-primary"
              />
              <span className="text-sm">{user.address.city}</span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <DomainIcon
                sx={{ width: 18, height: 18 }}
                className="text-primary"
              />
              {user.company.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
