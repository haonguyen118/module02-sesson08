import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Ex02() {
  return (
    <>
      <div style={{ paddingLeft: 10 }}>
        <h2>Login account</h2>
        <label>Your email</label>
        <br />
        <Input placeholder="name@company.com" />
        <label>Password</label>
        <Input placeholder="......." />
        <br />
        <Button type="primary">Login an account</Button>
        <p>Already have an account? Regiter here</p>
      </div>
      <Link to={"/"}>Home</Link>
    </>
  );
}
