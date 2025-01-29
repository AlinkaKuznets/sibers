"use client";
import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";

export default function Chat() {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  function handleEmoji(e) {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  }

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.jpg" alt="" />
          <div className="user-information">
            <span>Kek Lol</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              pariatur assumenda magni nulla quae amet voluptatum corporis odit
              eaque ad commodi, labore temporibus modi nam aut consequatur
              voluptatem tempore dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              pariatur assumenda magni nulla quae amet voluptatum corporis odit
              eaque ad commodi, labore temporibus modi nam aut consequatur
              voluptatem tempore dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.jpg" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              pariatur assumenda magni nulla quae amet voluptatum corporis odit
              eaque ad commodi, labore temporibus modi nam aut consequatur
              voluptatem tempore dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <MdEmojiEmotions
            className="w-7 h-7"
            onClick={() => setOpenEmoji((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}
