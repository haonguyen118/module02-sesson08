import React from "react";
import { useNavigate } from "react-router-dom";
import { arr } from "./DataUser";
import { Button } from "antd";

export default function ListUser() {
  const navigate = useNavigate();
  const handleUserDetail = (user) => {
    localStorage.setItem("userDetail", JSON.stringify(user));
    navigate("/userDetail");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <div style={{ display: "flex", gap: 20 }}>
        {arr.map((user) => (
          <div
            key={user.id}
            style={{ border: "2px solid black", width: "fit" }}
          >
            <p>Id:{user.id}</p>
            <p>UserName:{user.UserName}</p>
            <p>Email: {user.Email}</p>
            <p>Address:{user.Address}</p>
            <Button
              type="primary"
              style={{ width: 200 }}
              onClick={() => handleUserDetail(user)}
            >
              Xem chi tiet
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
