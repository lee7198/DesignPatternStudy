import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Observer from "./pages/patterns/observer";
import Decoration from "./pages/patterns/decoration";
import Strategy from "./pages/patterns/Strategy";
import Command from "./pages/patterns/command";
import Iterator from "./pages/patterns/iterator";

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
        { path: "strategy", element: <Strategy /> },
        { path: "command", element: <Command /> },
        { path: "iterator", element: <Iterator /> },
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
