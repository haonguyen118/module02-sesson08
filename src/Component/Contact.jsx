import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          Contact
        </Link>
      </div>
      <p>Contact</p>
    </>
  );
}
