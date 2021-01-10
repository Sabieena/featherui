import React, { useState } from "react";

const Chat = [
  {
    id: 1,
    avatar:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    name: "Bryan Harris",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    id: 2,
    avatar:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    name: "Bryan Harris",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    id: 1,
    avatar:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    name: "Bryan Harris",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    id: 2,
    avatar:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    name: "Bryan Harris",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    time: "9:47 AM",
    date: "18/10/2020",
  },
];

export const ChatComponent = () => {
  const [myId, setMyId] = useState(1);
  return (
    <div className="chatPage-wrapper">
      <div className="chat">
        {Chat.map((_, i) => {
          let message = _.id === myId ? "myMessage" : "";
          return (
            <div className={`chatContent ${message}`}>
              <div className="avatar">
                <img src={_.avatar} />
              </div>
              <div className="content">
                <div className={`name ${message}`}>{_.name}</div>
                <div className={`message ${message}`}>{_.message}</div>
                <div className={`dateTime ${message}`}>
                  <div className="time">{_.time}</div>
                  <div className="date">{_.date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <input type="text" placeholder="Type your message" />
    </div>
  );
};
