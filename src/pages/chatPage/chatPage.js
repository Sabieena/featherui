import React, { useState } from "react";
import { FeatherInfo, RecentNotes, ExpiredCard } from "../../components/common";
import { CompWrapper, Tabs } from "../../components/hoc";
import { ListComponent, DocumentComponent, ChatComponent } from "./components";

const ChatPage = () => {
  const [selected, setSelected] = useState("Sub Menu 01");
  const selectTab = (value) => {
    setSelected(value);
  };
  return (
    <CompWrapper>
      <ExpiredCard />
      <div className="chatPage-wrapper">
        <div className="left-section">
          <FeatherInfo />
          <RecentNotes />
        </div>
        <div className="right-section">
          <Tabs
            content={[
              {
                label: "Sub Menu 01",
                component: <DocumentComponent />,
              },
              {
                label: "Sub Menu 02",
                component: <ListComponent />,
              },
              {
                label: "Sub Menu 03",
                component: <ChatComponent />,
              },
            ]}
            selected={selected}
            select={(label) => selectTab(label)}
          />
        </div>
      </div>
    </CompWrapper>
  );
};

export default ChatPage;
