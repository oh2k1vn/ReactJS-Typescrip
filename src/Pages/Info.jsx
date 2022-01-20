import React from "react";
import SiderBar from "../Components/SiderBar";
import Notification from "../assets/images/icon_menuBar/Notification";

const Info = () => {
  return (
    <div style={{ display: "flex" }}>
      <SiderBar />
      <div className="Info">
        <div className="Info_top">
          <p className="Info_top_p">Thông tin cá nhân</p>
          <div className="Info_top_right">
            <div className="Info_top_right_icon">
              <Notification />
            </div>
            <img
              src=" https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
              alt=""
            />
            <div className="Info_top_right_title">
              <span>Xin chào</span>
              <p>Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
        <div className="Info_header">
          <div className="Info_header_img">
            <img
              src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
              alt=""
            />
            <p>Lê Quỳnh Ái Vân</p>
          </div>
          <div className="Info_header_input">
            <label className="Info_header_input_label">Tên Người dùng</label>
            <input type="text" name="" id="" placeholder="Lê Quỳnh Ái Vân" />
            <label className="Info_header_input_label">Số điện thoại</label>
            <input type="text" name="" id="" placeholder="0767375921" />

            <label className="Info_header_input_label">Email:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="adminSSO1@domain.com"
            />
          </div>
          <div className="Info_header_input">
            <label className="Info_header_input_label">Tên đăng nhập</label>
            <input type="text" name="" id="" placeholder="lequynhaivan01" />

            <label className="Info_header_input_label">Mật khẩu</label>
            <input type="text" name="" id="" placeholder="311940211" />

            <label className="Info_header_input_label">Vai trò</label>
            <input type="text" name="" id="" placeholder="Kế toán" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
