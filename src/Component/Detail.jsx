import React from "react";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/detail" style={{ textDecoration: "none" }}>
          Detail
        </Link>
      </div>
      <p>Detail</p>
    </>
  );
}
