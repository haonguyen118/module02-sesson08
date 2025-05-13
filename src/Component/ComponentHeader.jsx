import React from "react";
import { NavLink } from "react-router-dom";

export default function ComponentHeader() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/detail">Detail</NavLink>
          </li>
        </ul>
      </div>

      <div></div>
    </>
  );
}
