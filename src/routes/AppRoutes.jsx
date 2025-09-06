import React from "react";
import Home from "../pages/main/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRoutes = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default AppRoutes;
