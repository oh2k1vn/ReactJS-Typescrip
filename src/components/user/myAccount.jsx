import React from "react";
import HeaderBar from "../headerBar";
import MenuBar from "../menuBar";

const myAccount = () => {
  return (
    <div className="myAccount">
      <MenuBar />
      <div className="myAccount_container">
        <HeaderBar />
        <div className="myAccount_container_body">
          <div className="myAccount_container_body_img">
            <img src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" alt="" />
            <p>
            Lê Quỳnh Ái Vân
            </p>
          </div>
          <div className="myAccount_container_body_input">
            <label className="label">Tên Người dùng</label>
            <input type="text" name="" id="" placeholder="Lê Quỳnh Ái Vân" />
            <label className="label">Số điện thoại</label>
            <input type="text" name="" id="" placeholder="0767375921" />

            <label className="label">Email:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="adminSSO1@domain.com"
            />
          </div>
          <div className="myAccount_container_body_input">
            <label className="label">Tên đăng nhập</label>
            <input type="text" name="" id="" placeholder="lequynhaivan01" />

            <label className="label">Mật khẩu</label>
            <input type="text" name="" id="" placeholder="311940211" />

            <label className="label">Vai trò</label>
            <input type="text" name="" id="" placeholder="Kế toán" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default myAccount;
