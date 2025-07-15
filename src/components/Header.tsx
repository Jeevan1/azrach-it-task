import GroupIcon from "@mui/icons-material/Group";
import GridOnIcon from "@mui/icons-material/GridOn";
import { Button } from "@mui/material";
import TableViewIcon from "@mui/icons-material/TableView";
import { useLayout } from "../context/LayoutContext";

const Header = () => {
  const { layout, handleLayoutChange: setLayout } = useLayout();

  return (
    <div className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <GroupIcon className="text-white" />
            </div>
            <div>
              <h1 className="text-md font-bold text-gray-900 md:text-2xl">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500 hidden sm:block">
                Manage and view user information
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-wra justify-end">
            <Button
              variant={layout === "card" ? "contained" : "outlined"}
              size="medium"
              className="flex items-center gap-2 text-xs md:text-sm"
              onClick={() => setLayout("card")}
            >
              <GridOnIcon style={{ width: 18, height: 18 }} />
              <span className="hidden md:block">Cards</span>
            </Button>
            <Button
              variant={layout === "table" ? "contained" : "outlined"}
              size="medium"
              className="flex items-center gap-2 text-xs md:text-sm"
              onClick={() => setLayout("table")}
            >
              <TableViewIcon style={{ width: 18, height: 18 }} />
              <span className="hidden md:block">Table</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
