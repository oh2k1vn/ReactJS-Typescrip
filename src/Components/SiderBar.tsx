 import React from "react";
import { Link } from "react-router-dom";
import Logout from "../assets/images/icon_menuBar/Logout";
import logo from "../assets/images/logo/logo_alta.svg";
import { Menus } from "../assets/JsonData/SiderBar";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="menuBar_nav_a_item">
      <div className={`menuBar_nav_a_item-inner ${active}`}>
        {props.icon}
        <span>{props.title}</span>
      </div>
    </div>
  );
};

const SiderBar = (props) => {
  const activeItem = Menus.findIndex((item) => item.route === "");

  return (
    <div className="container">
      <div className="menuBar">
        <Link to="/info">
          <img src={logo} alt="" />
        </Link>
        <nav className="menuBar_nav">
          {Menus.map((item, index) => {
            return (
              <Link to={item.route} key={index} className="menuBar_nav_a">
                <SidebarItem
                  title={item.name}
                  icon={item.icon}
                  active={index === activeItem}
                />
              </Link>
            );
          })}
        </nav>
        <button className="menuBar_btn">
          <Logout />
          <p>Đăng xuất</p>
        </button>
      </div>
    </div>
  );
};

export default SiderBar;
