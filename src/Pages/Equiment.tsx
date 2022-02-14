import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Page from "../components/Page";

const Equiment = () => {
  const optionsWork = ["Tất cả", "Hoạt động", "Ngừng hoạt động"];
  const options = ["Tất cả", "kết nối", "Mất kết nối"];

  const defaultOption = options[0];

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
        <div className="Equiment_header">
          <div className="Equiment_header_left">
            <p>Thiết bị</p>
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

            <p style={{ color: "#FF7506" }}>Danh sách thiết bị</p>
          </div>
          <div className="Equiment_header_right">
            <div className="Equiment_header_right_icon">
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
            </div>
            <img
              src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
              alt=""
            />
            <div className="Equiment_header_right_title">
              <span>Xin chào</span>
              <p>Lê Quỳnh Ái Vân</p>
            </div>
          </div>
        </div>
        <div className="Equiment_body">
          <p>Danh sách thiết bị</p>
          <div className="Equiment_body_input">
            <div className="Equiment_body_input_left">
              <div className="Equiment_body_input_left_item">
                <span className="span">Trạng Thái hoạt động</span>
                <Dropdown
                  options={optionsWork}
                  className="chartDropdown"
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
              <div className="Equiment_body_input_left_item">
                <span className="span">Trạng thái kết nối</span>
                <Dropdown
                  options={options}
                  className="chartDropdown"
                  // onChange={(e) => handleDropdownValue(e)}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
            </div>
            <div className="Equiment_body_input_right">
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
          <table className="Equiment_body_table">
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
          </table>
          <Page />
        </div>
      </div>
      <div className="Equiment_icon">
        <Link to="/AddEquiment">
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

export default Equiment;