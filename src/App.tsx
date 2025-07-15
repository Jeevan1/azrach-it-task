import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/user/:id",
          element: <UserDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
