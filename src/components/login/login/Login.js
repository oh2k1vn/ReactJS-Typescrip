import React, { useState } from "react";
import "./Login.scss";

const Login = ({ Login, Error }) => {
  const [details, setDetails] = useState({ name: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  const handleInputName = (e) => {
    setDetails({ ...details, name: e.target.value });
  };
  const handleInputPassword = (e) => {
    setDetails({ ...details, password: e.target.value });
  };



  
  return (
    <form className="login_body" onSubmit={submitHandler}>
      <label>Tên đăng nhập *</label>
      <input
        type="text"
        placeholder="lequynhaivan01"
        onChange={handleInputName}
        value={details.name}
      />
      <label>Mật khẩu *</label>
      <input
        type="password"
        onChange={handleInputPassword}
        value={details.password}
      />
      <p>Quên mật khẩu?</p>
      <button>Đăng nhập</button>
    </form>
  );
};

export default Login;
