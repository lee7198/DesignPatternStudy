import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Observer from "./pages/observer";
import Main from "./pages/main";
import Decoration from "./pages/decoration";

export const prefix =
  process.env.NODE_ENV === "development" ? "/" : "/DesignPatternStudy/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "observer", element: <Observer /> },
        { path: "decoration", element: <Decoration /> },
        { path: "strategy", element: <Observer /> },
      ],
    },
  ],
  {
    basename: prefix,
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
