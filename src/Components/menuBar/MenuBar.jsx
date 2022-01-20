import React, { useState } from "react";
import DatePicker from "sassy-datepicker";
import Notification from "../../assets/images/icon_menuBar/Notification";
import { LISTS } from "../../assets/JsonData/MenuBar";
import MenuBarItem from "./menuBarItem";


const MenuBar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  window.process = {
    env: {
      NODE_ENV: "development",
    },
  };

  return (
    <div className="MenuBar">
      <div className="MenuBar_top">
        <div className="MenuBar_top_icon">
          <Notification />
        </div>
        <img
          src=" https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
          alt=""
        />
        <div className="MenuBar_top_title">
          <span>Xin chào</span>
          <p>Lê Quỳnh Ái Vân</p>
        </div>
      </div>
      <div className="MenuBar_container">
        <p>Tổng quan</p>
        <div className="MenuBar_container_item">
          {LISTS.map((list, index) => {
            return (
              <MenuBarItem
                img={list.img}
                title={list.title}
                number={list.number}
                key={index}
                icon={list.icon}
              />
            );
          })}
        </div>
      </div>
      <DatePicker className="Datapicker" onChange={onChange} selected={date} />
    </div>
  );
};

export default MenuBar;
