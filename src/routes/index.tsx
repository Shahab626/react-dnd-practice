import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <>Not Found</>,
    },
  ]);

  return <RouterProvider router={router} />;
};
