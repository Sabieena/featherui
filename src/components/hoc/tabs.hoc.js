import React from "react";
import { Card } from "./card.hoc";
export const Tabs = ({ content, selected, select, cardStyle }) => {
  console.log(select);
  return (
    <div className="tabs-container">
      <Card styles={({ borderRadius: 5 }, cardStyle)}>
        <ul className="tabs">
          {content.map((tab) => {
            const active = tab.label === selected ? "active" : "";

            return (
              <li
                className={`tabs-header ${active}`}
                onClick={() => {
                  select(tab.label);
                }}
              >
                {tab.icon} {tab.label}
              </li>
            );
          })}
        </ul>
        <div className="tabs-content">
          {content.map((tab) => {
            if (tab.label === selected) {
              return (
                <div className={`tabs-content-children `}>{tab.component}</div>
              );
            }
          })}
        </div>
      </Card>
    </div>
  );
};
