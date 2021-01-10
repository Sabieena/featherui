import React from "react";
import { IconInvertedButton } from "../../../components/common";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiCloudUpload } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import { BsCheckBox } from "react-icons/bs";
import { GrCheckbox } from "react-icons/gr";

const Works = [
  {
    title: "Document Cover",
    description: "Opened 13 weeks ago",
    disabled: false,
  },
  {
    title: "Document First Page",
    description: "Opened 13 weeks ago",
    disabled: false,
  },
  {
    title: "Document Third Page",
    description: "Opened 13 weeks ago",
    disabled: true,
  },
  {
    title: "Document Second Page",
    description: "Opened 13 weeks ago",
    disabled: true,
  },
];

export const DocumentTab = () => {
  return (
    <div className="documentTab-wrapper">
      {Works.map((_, i) => {
        return (
          <div className="documentTab">
            <div className="left">
              <div className="checkbox">
                {_.disabled ? (
                  <GrCheckbox color={"blue"} size={24} />
                ) : (
                  <BsCheckBox color={"blue"} size={24} />
                )}
              </div>
              <div className="center">
                <div className="icon">
                  <HiOutlineDocument size={40} />
                </div>
                <div className="content">
                  <div className="title">{_.title}</div>
                  <div className="description">{_.description}</div>
                </div>
              </div>
            </div>
            <div className="right">
              <IconInvertedButton
                title="Upload"
                style={{ width: 160, marginRight: 10 }}
                Icon={<BiCloudUpload />}
              />
              <IconInvertedButton
                title="Download"
                disabled={_.disabled}
                style={{ color: "green" }}
                Icon={<FaCloudDownloadAlt />}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
