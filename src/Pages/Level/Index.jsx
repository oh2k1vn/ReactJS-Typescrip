import React from "react";
import Header from "../../Components/Header";
import Search from "../../Components/inputFields/Search";
import Select from "../../Components/inputFields/Select";
import { Link } from "react-router-dom";
import Page from "../../Components/Page";

export default function Level() {
  const name = [
    "Tất cả",
    "Khám sản - Phụ khoa",
    "Khám răng hàm mặt",
    "Khám tai mũi họng",
  ];
  const status = ["Tất cả", "Đang chờ", "Đã sử dụng", "Bỏ qua"];
  const source = ["Tất cả", "Kiosk", "Hệ thống"];

  const nameValue = name[0];
  const statusValue = status[0];
  const sourceValue = source[0];

  const data = [
    {
      id: "2010001",
      name: "Lê Huỳnh Ái Vân",
      Service: "Khám tim mạch",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đang chờ",
      source: "Kiosk",
    },
    {
      id: "2010002",
      name: "Huỳnh Ái Vân",
      Service: "Khám sản - Phụ Khoa",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đã sử dụng",
      source: "Kiosk",
    },
    {
      id: "2010003",
      name: "Lê Ái Vân",
      Service: "Khám răng hàm mặt",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đang chờ",
      source: "Hệ thống",
    },
    {
      id: "2010004",
      name: "Nguyễn Ái Vân",
      Service: "Khám tai mũi họng",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đang chờ",
      source: "Hệ thống",
    },
    {
      id: "2010005",
      name: "Trần Thị Ái Vân",
      Service: "Khám hô hấp",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đang chờ",
      source: "Kiosk",
    },
    {
      id: "2010006",
      name: "Lê Huỳnh Nghĩa",
      Service: "Khám tổng quát",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đã sử dụng",
      source: "Hệ thống",
    },
    {
      id: "2010007",
      name: "Lê Huỳnh Đức",
      Service: "Khám mũi họng",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đã sử dụng",
      source: "Kiosk",
    },
    {
      id: "2010008",
      name: "Phạm Văn mạnh",
      Service: "Khám tổng quát",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Bỏ qua",
      source: "Hệ thống",
    },
    {
      id: "2010009",
      name: "Lê Thị Cẩm Tiên",
      Service: "Khám tai mũi họng",
      time: "14:35 - 07/11/2021",
      linmitTime: "14:35 - 12/11/2021",
      Status: "Đã sử dụng",
      source: "Hệ thống",
    },
  ];

  return (
    <>
      <div className="Level">
        <Header title="Cấp độ" />
        <p>Quản lý Cấp số</p>
        <div className="Level_input">
          <div className="Level_input_left">
            <Select label="Tên dịch vụ" options={name} value={nameValue} />
            <Select label="Tình trạng" options={status} value={statusValue} />
            <Select label="Nguồn cấp" options={source} value={sourceValue} />
          </div>

          <div className="Level_input_rigt">
            <Search />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên khách hàng</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Hạn sử dụng</th>
              <th>Trạng thái</th>
              <th>Nguồn cấp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.Service}</td>
                  <td>{item.time}</td>
                  <td>{item.linmitTime}</td>
                  <td>{item.Status}</td>
                  <td>{item.source}</td>
                  <td>
                    <Link to="#">Chi tiết</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Page />
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
          <p>Thêm Cấp số</p>
        </Link>
      </div>
    </>
  );
}
