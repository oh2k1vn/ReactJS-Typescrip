import React from "react";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Search from "../../Components/inputFields/Search";
import Select from "../../Components/inputFields/Select";
import Page from "../../Components/Page";

const Index = () => {
  const optionsWork = ["Tất cả", "Hoạt động", "Ngừng hoạt động"];
  const listOptions = ["Tất cả", "kết nối", "Mất kết nối"];

  const defaultOption = optionsWork[0];

  const demotOption = listOptions[0];

  const EquimentTable = [
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Ngừng hoạt động",
      Table_connection: "Mất kết Nối",
      Table_status: "status_off",
      Table_turn: "status_off",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Hoạt động",
      Table_connection: "Kết Nối",
      Table_status: "status_on",
      Table_turn: "status_on",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Hoạt động",
      Table_connection: "Mất kết Nối",
      Table_status: "status_on",
      Table_turn: "status_off",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Ngừng hoạt động",
      Table_connection: "Kết Nối",
      Table_status: "status_off",
      Table_turn: "status_on",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Hoạt động",
      Table_connection: "Mất kết Nối",
      Table_status: "status_on",
      Table_turn: "status_off",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Hoạt động",
      Table_connection: "Kết Nối",
      Table_status: "status_on",
      Table_turn: "status_on",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Ngừng hoạt động",
      Table_connection: "Kết Nối",
      Table_status: "status_off",
      Table_turn: "status_on",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Hoạt động",
      Table_connection: "Kết Nối",
      Table_status: "status_on",
      Table_turn: "status_on",
      Table_detail: "/",
      Table_edit: "/",
    },
    {
      Table_name: "KIO_01",
      Table_equiment: "Kiosk",
      Table_IP: "192.168.1.10",
      Table_work: "Hoạt động",
      Table_connection: "Mất kết Nối",
      Table_status: "status_on",
      Table_turn: "status_off",
      Table_detail: "/",
      Table_edit: "/",
    },
  ];

  return (
    <>
      <div className="Equiment">
        <Header />
        <div className="Equiment_body">
          <p>Danh sách thiết bị</p>
          <div className="Equiment_body_input">
            <div className="Equiment_body_input_left">
              <div className="Equiment_body_input_left_item">
                <Select
                  label="Trạng Thái hoạt động"
                  options={optionsWork}
                  value={defaultOption}
                  text="Select an option"
                />
              </div>
              <div className="Equiment_body_input_left_item">
                <Select
                  label="Trạng thái kết nối"
                  options={listOptions}
                  value={demotOption}
                  text="Select an option"
                />
              </div>
            </div>
            <Search />
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Mã thiết bị</th>
                <th>Tên thiết bị</th>
                <th>Địa chỉ IP</th>
                <th>Trạng thái hoạt động</th>
                <th>Trạng thái kết nối</th>
                <th>Dịch vụ sử dụng</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {EquimentTable.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.Table_name}</td>
                    <td>{item.Table_equiment}</td>
                    <td>{item.Table_IP}</td>
                    <td>
                      <span className={item.Table_status}></span>
                      {item.Table_work}
                    </td>
                    <td>
                      <span className={item.Table_turn}></span>
                      {item.Table_connection}
                    </td>
                    <td>Khám tĩnh mạch, Khám mắt...</td>
                    <td>
                      <Link to={item.Table_work}>Chi tiết</Link>
                    </td>
                    <td>
                      <Link to={item.Table_edit}>Cập nhật</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Page />
        </div>
      </div>
      <div className="Equiment_icon">
        <Link to="AddEquiment">
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
          <p>Thêm thiết bị</p>
        </Link>
      </div>
    </>
  );
};

export default Index;
