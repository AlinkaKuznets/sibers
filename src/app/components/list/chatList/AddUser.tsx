import React, { useState } from "react";
import "./addUser.css";
import { collection, getDoc, query, where } from "firebase/firestore";
import { db } from "@/app/lib/firebase.config";

export default function AddUser() {
  const [user, setUser] = useState(null);
  async function handleSearch(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("userName", "==", userName));
      const querySnapShot = await getDoc(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data())
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add-user">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="UserName" name="userName"></input>
        <button>Search</button>
      </form>
      {user && <div className="user">
        <div className="detail">
          <img src="./avatar.jpg" />
          <span>{user.userName}</span>
          <button>Add User</button>
        </div>
      </div>}
    </div>
  );
}
