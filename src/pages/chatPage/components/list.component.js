import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ListData = [
  {
    title: "The function of the logo",
    description: `Having a home based business is a wonderful assets to your life.
        The problem still stands when it comes time to advertise your
        business at a cheap cost.`,
    time: "9:07 AM",
    date: "18/06/1990",
  },
  {
    title: "The function of the logo",
    description: `Having a home based business is a wonderful assets to your life.
        The problem still stands when it comes time to advertise your
        business at a cheap cost.`,
    time: "9:07 AM",
    date: "18/06/1990",
  },
  {
    title: "The function of the logo",
    description: `Having a home based business is a wonderful assets to your life.
        The problem still stands when it comes time to advertise your
        business at a cheap cost.`,
    time: "9:07 AM",
    date: "18/06/1990",
  },
];

export const ListComponent = () => {
  return (
    <div className="listComponent-wrapper">
      <div className="listComponent">
        {ListData.map((_, i) => {
          return (
            <div className="list">
              <div className="avatar">
                <div className="avatar-icon"></div>
              </div>

              <div className="content">
                <div className="title">{_.title}</div>
                <div className="description">{_.description} </div>
                <div className="time">
                  <div className="clock">{_.time}</div>
                  <div className="date">{_.date}</div>
                </div>
              </div>
              <div className="deleteIcon">
                <div className="delete">
                  <RiDeleteBin5Fill size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
