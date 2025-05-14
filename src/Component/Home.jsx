import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Link to={"/Ex01"} style={{ textDecoration: "none" }}>
          Exercise01
        </Link>
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          Exercise02
        </Link>
        <Link to={"/notfound"} style={{ textDecoration: "none" }}>
          Exercise03
        </Link>
        <Link to={"/Ex04"} style={{ textDecoration: "none" }}>
          Exercise04
        </Link>
        <Link to={"/Ex05"} style={{ textDecoration: "none" }}>
          Exercise05
        </Link>
        <Link to={"/Ex06"} style={{ textDecoration: "none" }}>
          Exercise06
        </Link>
      </div>
      <h1>Home</h1>
    </>
  );
}
