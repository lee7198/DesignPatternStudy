import React from "react";
import { Outlet } from "react-router";
import { useLocation } from "react-router-dom";
import { prefix } from "../../Router";
import "./index.css";

const menu = [
  "observer",
  "decoration",
  "strategy",
  "command",
  "iterator",
  "component",
  "proxy",
  "ChainOfResponsibility",
];

export default function Main() {
  const location = useLocation();

  return (
    <>
      <h1>Design Pattern</h1>
      <ul className="nav">
        {menu.map((item) => (
          <li
            key={item}
            className={location.pathname.includes(item) ? "active" : ""}
          >
            <a href={`${prefix}${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
