import React from "react";
import { BiCommand } from "react-icons/bi";
export const SideNav = () => {
  return (
    <div className="sideNavigation-container">
      <div className="sideNav-wrapper">
        <div className="sideNav">FeatherUI</div>
        <div className="menu">
          <div className="item-menu">
            <div className="icons">
              <BiCommand size={24} />
            </div>
            <div className="name">
              <a href="#">Dashboard</a>
            </div>
          </div>
          <div className="item-menu">
            <div className="icons">
              <BiCommand size={24} />
            </div>
            <div className="name">
              <a href="#">menu 1</a>
            </div>
          </div>
          <div className="item-menu">
            <div className="icons">
              <BiCommand size={24} />
            </div>
            <div className="name">
              <a href="#">menu 2</a>
            </div>
          </div>
          <div className="item-menu">
            <div className="icons">
              <BiCommand size={24} />
            </div>
            <div className="name">
              <a href="#">menu 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
