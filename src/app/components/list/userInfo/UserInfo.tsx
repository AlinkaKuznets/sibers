import React from "react";
import Avatar from "../../../../../public/avatar.jpg";
import { IoIosMore } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import "./userInfo.css";
import { useUserStore } from "@/app/lib/usereStore";

export default function UserInfo() {
  const { currentUser } = useUserStore();
  return (
    <div className="userInfo">
      <div className="user-name">
        <img src={Avatar.src} alt="" />
        <h2>{currentUser.userName}</h2>
      </div>
      <div className="user-icons">
        <IoIosMore />
        <FaPencilAlt />
      </div>
    </div>
  );
}
