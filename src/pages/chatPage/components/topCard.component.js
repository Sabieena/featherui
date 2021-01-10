import React from "react";
import { InvertedButton } from "../../../components/common";
export const Card = () => {
  return (
    <div className="topCard-wrapper">
      <div className="topCard">
        <div className="content">
          <div className="title">Documents</div>
          <div className="description">Please upload your document</div>
        </div>
        <div className="topcard-button">
          <InvertedButton title="Upload Document" />
        </div>
      </div>
    </div>
  );
};
