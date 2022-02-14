import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../asset/img/logo_alta.svg';
import banner from '../asset/img/banner/banner_respass.png';

const ForgotPassword = () => {
  return (
    <div className="forgotPassword">
      <div className="forgotPassword_left">
        <form className="forgotPassword_left_form">
          <img src={Logo} alt="" />
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
        </form>
      </div>
      <div className="forgotPassword_right">
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default ForgotPassword