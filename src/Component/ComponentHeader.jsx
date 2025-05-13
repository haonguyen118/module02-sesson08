import React from "react";

export default function ComponentHeader() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <ul>
          <li>
            <NavLink to="/" className="text-blue-600 underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/contact" className="text-blue-600 underline">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/detail" className="text-blue-600 underline">
              Detail
            </NavLink>
          </li>
        </ul>
      </div>

      <div></div>
    </>
  );
}
