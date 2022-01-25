import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Page from "../../Components/Page";
import Notification from "../../assets/images/icon_menuBar/Notification";
import SiderBar from "../../Components/SiderBar";

const data = [
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_off",
    data_status: "Ngừng hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_off",
    data_status: "Ngừng hoạt động",
    data_view: "/",
    data_edit: "/",
  },
  {
    data_id: "KIO_01",
    data_name: "Kiosk",
    data_title: "Mô tả dịch vụ 1",
    data_turn: "status_on",
    data_status: "Hoạt động",
    data_view: "/",
    data_edit: "/",
  },
];

const Service = () => {
  const optionsWork = ["Tất cả", "Hoạt động", "Ngừng hoạt động"];

  const defaultOption = optionsWork[0];
  return (
    <div style={{ display: "flex", minHeight: '100vh', overflow: 'hidden' }}>
      <SiderBar />
      <div className="Service">
        <div className="Service_header">
          <div className="Service_header_left">
            <p>Dịch vụ</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3583 9.40874L8.825 5.8754C8.74753 5.7973 8.65536 5.7353 8.55381 5.693C8.45226 5.65069 8.34334 5.62891 8.23333 5.62891C8.12332 5.62891 8.0144 5.65069 7.91285 5.693C7.8113 5.7353 7.71913 5.7973 7.64166 5.8754C7.48646 6.03154 7.39934 6.24275 7.39934 6.4629C7.39934 6.68306 7.48646 6.89427 7.64166 7.0504L10.5917 10.0004L7.64166 12.9504C7.48646 13.1065 7.39934 13.3177 7.39934 13.5379C7.39934 13.7581 7.48646 13.9693 7.64166 14.1254C7.71953 14.2026 7.81188 14.2637 7.91341 14.3052C8.01494 14.3467 8.12366 14.3677 8.23333 14.3671C8.343 14.3677 8.45172 14.3467 8.55325 14.3052C8.65478 14.2637 8.74713 14.2026 8.825 14.1254L12.3583 10.5921C12.4364 10.5146 12.4984 10.4224 12.5407 10.3209C12.583 10.2193 12.6048 10.1104 12.6048 10.0004C12.6048 9.89039 12.583 9.78147 12.5407 9.67992C12.4984 9.57837 12.4364 9.48621 12.3583 9.40874Z"
                fill="#FF7506"
              />
            </svg>

            <p style={{ color: "#FF7506" }}>Danh sách dịch vụ</p>
          </div>
          <div className="Service_header_right">
            <div className="Service_header_right_icon">
              <Notification />
            </div>
            <img
              src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
              alt=""
            />
            <div className="Service_header_right_title">
              <span>Xin chào</span>
              <p>Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
        <div className="Service_body">
          <p>Dịch vụ</p>
          <div className="Service_body_input">
            <div className="Service_body_input_left">
              <div className="Service_body_input_left_item">
                <span className="span">Trạng Thái hoạt động</span>
                <Dropdown
                  options={optionsWork}
                  className="chartDropdown"
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <div className="Service_body_input_left_item"></div>
            </div>
            <div className="Service_body_input_right">
              <span className="span">Từ khóa</span>
              <input
                type="search"
                name=""
                id=""
                placeholder="Nhập từ khóa ..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <table className="Service_body_table">
            <tr>
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ</th>
              <th>Mô tả</th>
              <th>Trạng thái hoạt động</th>
              <th></th>
              <th></th>
            </tr>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{paddingLeft: '16px'}}>{item.data_id}</td>
                  <td>{item.data_name}</td>
                  <td>{item.data_title}</td>
                  <td>
                   <span className={item.data_turn}></span>
                    {item.data_status}
                  </td>
                  <td>
                    <Link to={item.data_view}>Chi tiết</Link>
                  </td>
                  <td>
                    <Link to={item.data_edit}>Cập nhật</Link>
                  </td>
                </tr>
              );
            })}
          </table>
          <Page />
        </div>
        <div className="Service_icon">
          <Link to="/AddService">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8884 2.33301H9.11171C4.86504 2.33301 2.33337 4.86467 2.33337 9.11134V18.8763C2.33337 23.1347 4.86504 25.6663 9.11171 25.6663H18.8767C23.1234 25.6663 25.655 23.1347 25.655 18.888V9.11134C25.6667 4.86467 23.135 2.33301 18.8884 2.33301ZM18.6667 14.8747H14.875V18.6663C14.875 19.1447 14.4784 19.5413 14 19.5413C13.5217 19.5413 13.125 19.1447 13.125 18.6663V14.8747H9.33337C8.85504 14.8747 8.45837 14.478 8.45837 13.9997C8.45837 13.5213 8.85504 13.1247 9.33337 13.1247H13.125V9.33301C13.125 8.85467 13.5217 8.45801 14 8.45801C14.4784 8.45801 14.875 8.85467 14.875 9.33301V13.1247H18.6667C19.145 13.1247 19.5417 13.5213 19.5417 13.9997C19.5417 14.478 19.145 14.8747 18.6667 14.8747Z"
                fill="#FF9138"
              />
            </svg>
            <p>Thêm dịch vụ</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
