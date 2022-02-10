import React from "react";
import { Link } from "react-router-dom";
import banner_respass from "../assets/images/banner/banner_respass.png";
import logo from "../assets/images/logo/logo_alta.svg";

const ForgotPassword = () => {
  return (
    <div className="forgotPassword">
      <div className="forgotPassword_left">
        <form className="forgotPassword_left_form">
          <img src={logo} alt="" />
          <p className="forgotPassword_left_form_top">Đặt lại mật khẩu</p>
          <p className="forgotPassword_left_form_bottom">
            Vui lòng nhập Email để đặt lại mật khẩu của bạn*
          </p>
          <input type="text" name="" id="" />
          <div className="forgotPassword_left_form_btn">
            <Link to="/">
              <button className="btn active">Hủy</button>
            </Link>
            <Link to="/ResetPassword">
              <button className="btn">Tiếp tục</button>
            </Link>
          </div>
          {/* <div className="resetPassword">
            <p>Đặt lại mật khẩu</p>
            <label className="resetPassword_label" htmlFor="">Mật khẩu</label>
            <input type="password" name="" id="" />
            <label className="resetPassword_label" htmlFor="">Nhập lại mật khẩu</label>
            <input type="password" name="" id="" />
            <button className="resetPassword_btn">Xác nhận</button>
          </div> */}
        </form>
      </div>
      <div className="forgotPassword_right">
        <img src={banner_respass} alt="" />
      </div>
    </div>
  );
};

export default ForgotPassword;
