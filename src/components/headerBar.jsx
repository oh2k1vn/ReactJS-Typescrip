import React from "react";
import Notification from "../assets/images/icon_menuBar/Notification";

const HeaderBar = () => {
  return (
    <div className="HeaderBar">
      <div className="HeaderBar_p">Thông tin cá nhân</div>

      <div className="HeaderBar_right">
        <div className="HeaderBar_right_icon">
          <Notification />
        </div>
        <img
          src=" https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
          alt=""
        />
        <div className="HeaderBar_right_title">
          <span>Xin chào</span>
          <p>Lê Quỳnh Ái Vân</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
