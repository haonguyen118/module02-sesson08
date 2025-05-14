import React from "react";
import { Link } from "react-router-dom";

export default function Ex06() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Link to={"/listUser"}>ListUser</Link>
      <Link to={"/userDetail"}>UserDetail</Link>
    </div>
  );
}
