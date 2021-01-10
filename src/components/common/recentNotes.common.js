import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Card } from "../hoc";

const Notes = [
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
  {
    note: "Business Cards Represent Not only your business",
    time: "9:47 AM",
    date: "18/10/2020",
  },
];

const colors = ["red", "purple", "yellow", "blue"];
export const RecentNotes = () => {
  return (
    <div className="recentNotes-container">
      <Card styles={{}}>
        <div className="recentNotes">
          <div className="title">
            <p>Recent Notes</p>
            <div className="icon">
              <AiOutlinePlusCircle size={34} />
            </div>
          </div>
          <div className="content">
            {Notes.map((i, _) => {
              return (
                <div className="notes-wrapper">
                  <div className="top-section">
                    <div className="avatar">
                      <div
                        className="icon"
                        style={{
                          backgroundColor:
                            colors[Math.floor(Math.random() * colors.length)],
                        }}
                      ></div>
                    </div>
                    <div className="description">{i.note}</div>
                  </div>
                  <div className="bottom-section">
                    <div className="time">{i.time}</div>
                    <div className="date">{i.date}</div>
                  </div>
                  <div class="line" />
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};
