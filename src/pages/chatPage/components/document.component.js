import React, { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { BsFolderSymlinkFill } from "react-icons/bs";
import { Card } from "./topCard.component";
import { Tabs } from "../../../components/hoc";
import { DocumentTab } from "./documentTab.component";
import { SharedDocument } from "./sharedDocument.component";
export const DocumentComponent = () => {
  const [selected, setSelected] = useState("My Documents");
  const selectTab = (value) => {
    setSelected(value);
  };
  return (
    <div>
      <Card />
      <div className="documentPage-documentTab">
        <Tabs
          content={[
            {
              icon: <AiFillFolder size={26} color={"orange"} />,
              label: "My Documents",
              component: <DocumentTab />,
            },
            {
              icon: <BsFolderSymlinkFill size={26} color={"orange"} />,
              label: "Document Shared",
              component: <DocumentTab />,
            },
          ]}
          selected={selected}
          select={(label) => selectTab(label)}
          cardStyle={{ boxShadow: "0px 0px" }}
        />
      </div>
    </div>
  );
};
