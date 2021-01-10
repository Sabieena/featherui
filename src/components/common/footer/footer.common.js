import React from "react";
import { CompWrapper } from "../../hoc";
export const Footer = () => {
  return (
    <CompWrapper>
      <div className="footer-container">
        <div className="footer">
          <div className="name">FeatherUI</div>
          <div className="about">
            About the company | Privacy Policy | terms and conditions | Contact{" "}
          </div>
        </div>
      </div>
    </CompWrapper>
  );
};
