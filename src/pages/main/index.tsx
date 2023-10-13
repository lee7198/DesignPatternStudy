import React from "react";
import { Outlet } from "react-router";

export default function Main() {
  return (
    <>
      <h1>Design Pattern</h1>
      <ul>
        <li>
          <a href="/observer">observer</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
