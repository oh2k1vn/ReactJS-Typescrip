import React, { useState } from "react";
import Logo from "../assets/images/logo/logo_alta.svg";
import Banner_login from "../assets/images/banner/banner_login.png";
import Error from "../assets/images/icon_menuBar/Warning";
import { Link } from "react-router-dom";
const Login = () => {
  const [hasacc, sethasacc] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    sethasacc(false);
  };

  return (
    <div className="login">
      <div className="login_left">
        <form className="login_left_form">
          <Link to="/info">
            <img src={Logo} alt="" />
          </Link>

          <label className="label">Tên đăng nhập *</label>
          <input type="text" className="input" />
          <label className="label">Mật khẩu *</label>
          <div className="login_left_form_input">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              className={hasacc ? "input_error" : ""}
            />
            <span
              className="login_left_form_input_icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={showPassword ? "" : "hide_one"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={showPassword ? "hide_one" : ""}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>

          {hasacc ? (
            <>
              <Link to="/ForgotPassword">Quên mật khẩu?</Link>
              <button
                className="login_left_form_btn"
                onClick={(e) => handleLogin(e)}
              >
                Đăng nhập
              </button>
            </>
          ) : (
            <>
              <p className="login_left_form_p">
                <Error />
                <span>Sai mật khẩu hoặc tên đăng nhập</span>
              </p>
              <button className="login_left_form_btn">Đăng nhập</button>
              <Link to="/ForgotPassword" className="login_left_form_footer">
                Quên mật khẩu?
              </Link>
            </>
          )}

          
        </form>
      </div>
      <div className="login_right">
        <img src={Banner_login} alt="" />
        <div className="login_right_title">
          <p className="login_right_title_top">Hệ thống</p>
          <p className="login_right_title_bottom">QUẢN LÝ XẾP HÀNG</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
