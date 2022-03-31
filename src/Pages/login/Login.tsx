import React from "react";
import { Link } from "react-router-dom";
import Banner_logo from "../../asset/img/banner/banner_login.png";
import Logo from "../../asset/img/logo_alta.svg";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (e: any) => {
    e.target.value;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <div className="form_login">
        <div className="form_login_block body_login">
          <img src={Logo} alt="" />

          <form onSubmit={handleSubmit}>
            <label>Tên đăng nhập *</label>
            <input
              type="text"
              placeholder="lequynhaivan01"
              onChange={(e) => {
                e.target.value;
              }}
            />
            <label>Mật khẩu *</label>
            <input
              type="password"
              placeholder="lequynhaivan01"
              onChange={(e) => {
                e.target.value;
              }}
            />
            <Link to="/forgotPassword">Quên mật khẩu?</Link>

            <Link to="/admin" className="link">
              Đăng nhập
            </Link>
          </form>
        </div>
        <div className="form_login_banner">
          <img src={Banner_logo} alt="" />
          <div className="form_login_banner_title">
            <p>Hệ thống</p>
            <span>Quản lý xếp hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
