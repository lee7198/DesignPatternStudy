import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Observer from "./pages/observer";
import Main from "./pages/main";

export const prefix =
  process.env.NODE_ENV === "development" ? "/" : "/DesignPatternStudy";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [{ path: "observer", element: <Observer /> }],
    },
  ],
  {
    basename: prefix,
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
