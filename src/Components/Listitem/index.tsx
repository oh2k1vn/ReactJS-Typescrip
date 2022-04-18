import { useState } from "react";
import { Link } from "react-router-dom";
import alta from "../image/alta.png";
import { ReactComponent as Logo_dashboard } from "../../assets/svg/Dashboard.svg";
import { ReactComponent as Logo_device } from "../../assets/svg/Device.svg";
import { ReactComponent as Logo_level } from "../../assets/svg/Level.svg";
import { ReactComponent as Logo_logout } from "../../assets/svg/fi_log-out.svg";
import { ReactComponent as Logo_service } from "../../assets/svg/Service.svg";
import { ReactComponent as Logo_setting } from "../../assets/svg/Setting.svg";
import { ReactComponent as Log_report } from "../../assets/svg/Report.svg";
import three from "../image/more.svg";
import "./Listitem.css";

function Listitem() {
  const slidebars = document.querySelectorAll(".SliderbarItem");

  slidebars.forEach((slidebar: any) => {
    slidebar.onclick = function () {
      let items = document.querySelector<HTMLElement>(".SliderbarItem.active")!;
      items.classList.remove("active");

      this.classList.add("active");
    };
  });

  const [info, setInfo] = useState(false);

  return (
    <div className="Sliderbar">
      <div className="alta ">
        <img src={alta} alt="alta" className="altaIMG"></img>
      </div>
      <div className="list">
        <div className="SliderbarItem active ">
          <Link to="/dashboard" className="Link">
            <Logo_dashboard />
            <div className="title">Dashboard</div>
          </Link>
        </div>

        <div className="SliderbarItem">
          <Link to="/device" className="Link">
            <Logo_device />
            <div className="title"> Thiết Bị</div>
          </Link>
        </div>

        <div className="SliderbarItem">
          <Link to="/service" className="Link">
            <Logo_service />
            <div className="title"> Dịch vụ</div>
          </Link>
        </div>
        <div className="SliderbarItem">
          <Link to="/level" className="Link">
            <Logo_level />

            <div className="title"> Cấp số</div>
          </Link>
        </div>
        <div className="SliderbarItem">
          <Link to="/report" className="Link">
            <Log_report />
            <div className="title"> Báo cáo</div>
          </Link>
        </div>
        <div
          className="SliderbarItem"
          onMouseEnter={() => setInfo(true)}
          onMouseLeave={() => setInfo(false)}
        >
          <Link to="" className="Link">
            <Logo_setting />
            <div className="title"> Cài đặt hệ thống </div>
            <img src={three} alt="three " className="three" />
          </Link>
          {info && (
            <div className="subnav">
              <div className="list_subnav list_subnav1">
                <Link to="/dashboard/RoleManagement" className="Linksubnav">
                  <div className="item">Quản lý vai trò</div>
                </Link>
              </div>
              <div className="list_subnav">
                <Link to="/dashboard/AccountManagement" className="Linksubnav">
                  <div className="item">Quản lý tài khoản</div>
                </Link>
              </div>
              <div className="list_subnav list_subnav2">
                <Link to="/dashboard/Diarywork" className="Linksubnav">
                  <div className="item">Nhật ký người dùng</div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Link to="/" className="Linkout">
        <Logo_logout />
        <div className="out">Đăng xuất </div>
      </Link>
    </div>
  );
}

export default Listitem;
