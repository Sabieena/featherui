import React from "react";
import { CompWrapper } from "../../hoc";
import { MainButton, InvertedButton } from "../button/button.common";
import { RiNotification2Line, FaRegComment } from "react-icons/all";
export const Header = () => {
  return (
    <CompWrapper>
      <div className="header-container">
        <div className="header">
          <div className="action-button">
            <MainButton title="Call to Action" />
          </div>
          <div className="support">
            <InvertedButton title="Support" />
          </div>
          <div className="notification">
            <RiNotification2Line size={24} />
          </div>
          <div className="comment">
            <FaRegComment size={24} />
          </div>
          <div className="avatar">
            <img src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg" />
          </div>
        </div>
      </div>
    </CompWrapper>
  );
};
