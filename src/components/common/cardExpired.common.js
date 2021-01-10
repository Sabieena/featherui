import React from "react";
import { CompWrapper } from "../hoc";
import { InvertedButton } from "./button/button.common";
export const ExpiredCard = () => {
  return (
    <div className="cardExpired-wrapper">
      <div className="expired">
        <p>
          {" "}
          Your card has been expired. Please view the application section for
          details
        </p>
        <div className="expiredbutton">
          <InvertedButton title="View Now" />
        </div>
      </div>
    </div>
  );
};
