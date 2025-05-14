import React from "react";
import { Link } from "react-router-dom";

export default function Ex04() {
  return (
    <div>
      <Link to={"/Contact"}>Contact</Link>
      <Link to={"/"}>Home</Link>
    </div>
  );
}
