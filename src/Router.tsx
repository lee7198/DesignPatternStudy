import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Observer from "./pages/observer";
import Main from "./pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "observer", element: <Observer /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
