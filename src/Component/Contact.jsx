import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <p>Contact</p>
    </div>
  );
}
