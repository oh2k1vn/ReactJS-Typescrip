import React from "react";
import Logo from "../../assets/images/logo/logo_alta.svg";
import Banner_login from '../../assets/images/banner/banner_login.png';
const login = () => {
  return (
    <div className="login">
      <div className="login_left">
        <form>
          <img src={Logo} alt="" />

          <label className="label">Tên đăng nhập *</label>
          <input type="text" className="input" />
          <label className="label">Mật khẩu *</label>
          <input type="password" name="" id="" />
          <p>Quên mật khẩu?</p>
          <button className="btn">Đăng nhập</button>
        </form>
      </div>
      <div className="login_right">
      <img src={Banner_login} alt=""/>
        <div className="login_right_title">
          <p className="login_right_title_top">Hệ thống</p>
          <p className="login_right_title_bottom">QUẢN LÝ XẾP HÀNG</p>
        </div>
      </div>
    </div>
  );
};

export default login;
