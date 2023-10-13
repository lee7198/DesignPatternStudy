import React from "react";
import { Outlet } from "react-router";
import { prefix } from "../../Router";

export default function Main() {
  return (
    <>
      <h1>Design Pattern</h1>
      <ul>
        <li>
          <a href={`${prefix}/observer`}>observer</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
