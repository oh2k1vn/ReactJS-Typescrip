import React from "react";
import "./User.scss";


import logo from "../../assets/images/logo/Logo_alta.png";
import { Link } from "react-router-dom";

const User = () => {
  const Menus = [
    {
      icon: "{thietbi}",
      title: "Dashboard",
    },
    {
      icon: "",
      title: "Thiết bị",
    },
    {
      icon: "",
      title: "Dịch vụ",
    },
    {
      icon: "",
      title: "Cấp số",
    },
    {
      icon: "",
      title: "Báo cáo",
    },
    {
      icon: "",
      title: "Cài đặt hệ thống",
    },
  ];
  return (
    <div className="myaccount">
      <div className="myaccount_left">
        <img src={logo} alt="" />

        <ul>
          {Menus.map((menu, index) => {
            return (
              <li key={index}>
                <Link to={menu.link}>
                  <img src={menu.icon} alt=""></img>
                  <p>{menu.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="myaccount_right">
        <div className="myaccount_right_header">
          <h3>Thông tin cá nhân</h3>

          <div className="myaccount_right_header_user">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1168 12.0743L15.2834 10.691C15.1084 10.3827 14.9501 9.79935 14.9501 9.45768V7.34935C14.9501 5.39102 13.8001 3.69935 12.1418 2.90768C11.7084 2.14102 10.9084 1.66602 9.99178 1.66602C9.08345 1.66602 8.26678 2.15768 7.83345 2.93268C6.20845 3.74102 5.08345 5.41602 5.08345 7.34935V9.45768C5.08345 9.79935 4.92511 10.3827 4.75012 10.6827L3.90845 12.0743C3.57512 12.6327 3.50012 13.2493 3.70845 13.816C3.90845 14.3743 4.38345 14.8077 5.00012 15.016C6.61678 15.566 8.31678 15.8327 10.0168 15.8327C11.7168 15.8327 13.4168 15.566 15.0334 15.0244C15.6168 14.8327 16.0668 14.391 16.2834 13.816C16.5001 13.241 16.4418 12.6077 16.1168 12.0743Z"
                fill="#FFAC6A"
              />
              <path
                d="M12.3582 16.6743C12.0082 17.641 11.0832 18.3327 9.9999 18.3327C9.34157 18.3327 8.69157 18.066 8.23324 17.591C7.96657 17.341 7.76657 17.0077 7.6499 16.666C7.75824 16.6827 7.86657 16.691 7.98324 16.7077C8.1749 16.7327 8.3749 16.7577 8.5749 16.7743C9.0499 16.816 9.53324 16.841 10.0166 16.841C10.4916 16.841 10.9666 16.816 11.4332 16.7743C11.6082 16.7577 11.7832 16.7493 11.9499 16.7243C12.0832 16.7077 12.2166 16.691 12.3582 16.6743Z"
                fill="#FFAC6A"
              />
            </svg>
            <img src="https://anhdep123.com/wp-content/uploads/2021/02/hinh-nen-gai-xinh-full-hd-cho-dien-thoai.jpg" alt=""/>
            <div className="myaccount_right_header_user_title">
                <span>Xin chào</span>
                <p>Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
        <div className="myaccount_right_container">
            
        </div>
      </div>
    </div>
  );
};

export default User;
