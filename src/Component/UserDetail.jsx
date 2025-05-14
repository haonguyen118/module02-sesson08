import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { arr } from "./DataUser";

export default function UserDetail() {
  const userDetail = JSON.parse(localStorage.getItem("userDetail"));

  return (
    <div>
      {userDetail && (
        <div
          key={userDetail.id}
          style={{ border: "1px solid black ", display: "inline-block" }}
        >
          <img width={200} height={200} src={userDetail.image} alt="image" />
          <p>Id:{userDetail.id}</p>
          <p>Age:{userDetail.age}</p>
          <p>Gender:{userDetail.gender}</p>
          <p>UserName:{userDetail.UserName}</p>
          <p>Email:{userDetail.Email}</p>
          <p>Address:{userDetail.Address}</p>
          <Button type="primary">
            <Link to={"/listUser"}>Quay lai</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
