import React from "react";
import './index.scss';

const index = () => {
  return (
    <form className="respass_body">
      <p className="respass_top">Đặt lại mật khẩu</p>
      <p className="respass_bottom">Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
      <input type="text" />
      <div className="respass_body_btn">
        <button className="respass_body_btn_boder">Hủy</button>
        <button>Tiếp tục</button>
      </div>
    </form>
  );
};

export default index;
