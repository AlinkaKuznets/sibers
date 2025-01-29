import React, { useEffect, useState } from "react";
import "./chatList.css";
import { FaSearch } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { useUserStore } from "@/app/lib/usereStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/app/lib/firebase.config";
import AddUser from "./AddUser";

export default function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promisses = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promisses);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );
    return () => {
      unSub();
    };
  }, []);

  console.log(chats);
  return (
    <div className="chat-list">
      <div className="search">
        <div className="search-bar">
          <FaSearch className="w-8 h-6" />
          <input type="text" placeholder="Search" />
        </div>
        <IoAddCircleOutline
          className="w-8 h-8 cursor-pointer"
          onClick={() => {
            setAddMode((prev) => !prev);
          }}
        />
      </div>
      {chats.map((chat) => (
        <div className="items" key={chat.chatId}>
          <img src="./avatar.jpg" />
          <div className="text">
            <span>Kek Lol</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
}
