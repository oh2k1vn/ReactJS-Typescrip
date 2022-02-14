import React from 'react'
import logo from '../asset/img/logo_alta.svg';
import banner from '../asset/img/banner/banner_respass.png';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="forgotPassword">
    <div className="forgotPassword_left">
      <form className="forgotPassword_left_form">
        <img src={logo} alt="" />

        <div className="resetPassword">
          <p>Đặt lại mật khẩu</p>
          <label className="resetPassword_label" htmlFor="">
            Mật khẩu
          </label>
          <input type="password" name="" id="" />
          <label className="resetPassword_label" htmlFor="">
            Nhập lại mật khẩu
          </label>
          <input type="password" name="" id="" />
          <Link to="/">
            <button className="resetPassword_btn">Xác nhận</button>
          </Link>
        </div>
      </form>
    </div>
    <div className="forgotPassword_right">
      <img src={banner} alt="" />
    </div>
  </div>
  )
}

export default ResetPassword