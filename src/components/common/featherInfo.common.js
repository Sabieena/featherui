import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Card } from "../hoc";
import { MainButton, InvertedButton } from "../common";
export const FeatherInfo = () => {
  return (
    <div className="featherinfo-container">
      <Card styles={{}}>
        <div className="featherinfo">
          <div className="menu-section">
            <img src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg" />
            <AiOutlineEllipsis size={34} />
          </div>
          <div className="company-section">
            <div className="title">Featherwebs Inc</div>
            <p>256 Priscilla Dale Suite 602</p>
            <p>christy_cartywright@gmail.com</p>
            <p>140-085-4934</p>
          </div>
          <div className="mainbutton">
            <MainButton title="Main Button" style={{ width: "70%" }} />
          </div>
          <div className="info-section">
            <div className="title">Date of Registration</div>
            <div className="date">18/09/2018</div>
          </div>
          <div className="line" />
          <div className="user-section">
            <div className="avatar">
              <img src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg" />
            </div>
            <div className="info">
              <div className="name">John Maharjan</div>
              <p>ziftufig@ipohimuh.nz</p>
              <p>15085399330</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
