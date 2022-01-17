import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo_alta.svg";

//icon menu
import Thietbi from "../assets/images/icon_menuBar/Thietbi";
import Dashboard from "../assets/images/icon_menuBar/Dasboard";
import Vertical from "../assets/images/icon_menuBar/Vertical";
import Baocao from "../assets/images/icon_menuBar/Baocao";
import Capso from "../assets/images/icon_menuBar/Capso";
import Logout from "../assets/images/icon_menuBar/Logout";
import Warning from "../assets/images/icon_menuBar/Warning";
import Setting from "../assets/images/icon_menuBar/Setting";
import Dichvu from "../assets/images/icon_menuBar/Dichvu";

const MenuBar = () => {
  const menus = [
    {
      title: "Dashboard",
      icon: <Dashboard />,
      // link: `/setting/${TYPES.DASHBOARD}`,
      // type: 'type !== TYPES.NOTIFY && type !== TYPES.ACCOUNT ? 'active' : ''',
    },
    {
      title: "Thiết bị",
      icon: <Thietbi />,
      // link: `/setting/${TYPES.THIETBI}`,
      // type: 'type === TYPES.THIETBI ? 'active' : ''',
    },
    {
      title: "Dịch vụ",
      icon: <Dichvu />,
      // link: `/setting/${TYPES.DICHVU}`,
      // type: 'type === TYPES.DICHVU ? 'active' : ''',
    },
    {
      title: "Cấp số",
      icon: <Capso />,
      // link: `/setting/${TYPES.CAPSO}`,
      // type: 'type === TYPES.CAPSO ? 'active' : ''',
    },
    {
      title: "Báo cáo",
      icon: <Baocao />,
      // link: `/setting/${TYPES.BAOCAO}`,
      // type: 'type === TYPES.BAOCAO ? 'active' : ''',
    },
    {
      title: "Cài đặt hệ thống",
      icon: <Setting />,
      // link: `/setting/${TYPES.SETTING}`,
      // type: 'type === TYPES.SETTING ? 'active' : ''',
    },
  ];
  return (
    <div className="menuBar">
      <img src={logo} alt="" />
      <nav className="menuBar_nav">
        {menus.map((item, index) => {
          return (
            <li key={index} className="menuBar_nav_li">
              <Link to="#" className="menuBar_nav_li_a">
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </nav>
      <button className="btn">
        <Logout />
        <span>Đăng xuất</span>
      </button>
    </div>
  );
};

export default MenuBar;
