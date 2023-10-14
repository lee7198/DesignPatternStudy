import React from "react";
import { Outlet } from "react-router";
import { prefix } from "../../Router";

export default function Main() {
  return (
    <>
      <h1>Design Pattern</h1>
      {process.env.NODE_ENV}
      <ul>
        <li>
          <a href={`${prefix}observer`}>observer</a>
        </li>
        <li>
          <a href={`${prefix}decoration`}>decoration</a>
        </li>
        <li>
          <a href={`${prefix}strategy`}>strategy</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
