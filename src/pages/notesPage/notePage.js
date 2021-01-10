import React, { useState } from "react";
import { FeatherInfo, RecentNotes, ExpiredCard } from "../../components/common";
import { CompWrapper, Tabs } from "../../components/hoc";
import { CommunicationLog, Documents, Notes } from "./components";
const NotePage = () => {
  const [selected, setSelected] = useState("Documents");
  const selectTab = (value) => {
    setSelected(value);
  };
  return (
    <CompWrapper>
      <ExpiredCard />
      <div className="notePage-wrapper">
        <div className="leftSection">
          <FeatherInfo />
          <RecentNotes />
        </div>
        <div className="rightSection">
          <Tabs
            content={[
              {
                label: "Documents",
                component: <Documents />,
              },
              {
                label: "Notes",
                component: <Notes />,
              },
              {
                label: "Communication Log",
                component: <CommunicationLog />,
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

export default NotePage;
