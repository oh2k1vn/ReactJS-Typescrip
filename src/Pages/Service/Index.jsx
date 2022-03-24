import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Dropdown from "react-dropdown";
import Page from "../../Components/Page";
import DatePicker from "sassy-datepicker";

export default function Service() {
  const ServiceTable = [
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Mô tả dịch vụ 1",
      status: "Hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Ngừng hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Ngừng hoạt động",
    },
    {
      id: "KIO_01",
      name: "Kiosk",
      note: "Hoạt động",
      status: "Hoạt động",
    },
  ];

  const options = ["Tất cả", "Hoạt động", "Ngừng hoạt động"];

  const DemoOptions = ["Tất cả", "Kết nối", "Mất kết nối"];

  const defaultOption = options[0];

  const [startDate, setStartDate] = useState(new Date());

  const ServiceActivePoint = () => {
    return (
      <>
        <span className="ActivePoint"></span>
        <span>Hoạt động</span>
      </>
    );
  };

  const ServiceUnactivePoint = () => {
    return (
      <>
        <span className="UnActivePoint"></span>
        <span>Ngưng hoạt động</span>
      </>
    );
  };

  return (
    <div className="Service">
      <Header title="Dịch vụ" />
      <p>Quản lý dịch vụ</p>
      <div className="Service_input">
        <div className="Service_input_item">
          <label>Trạng thái hoạt động</label>
          <Dropdown
            options={options}
            className="chartDropdown"
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="Service_input_item">
          <label>Chọn thời giạn</label>
          <Dropdown
            options={DemoOptions}
            className="chartDropdown"
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>

        <div className="Service_input_item">
          <label>Từ khóa</label>
          <div className="Service_input_item_search">
            <input type="search" placeholder="Nhập từ khóa" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã dịch vụ</th>
            <th>Tên dịch vụ</th>
            <th>Mô tả</th>
            <th>Trạng thái hoạt động</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ServiceTable.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.note}</td>
                <td>
                  <span>
                    {item.stateFilter == "Hoạt động" ? (
                      <ServiceActivePoint />
                    ) : (
                      <ServiceUnactivePoint />
                    )}
                  </span>
                </td>
                <td>
                  <Link to="#">Chi tiết</Link>
                </td>
                <td>
                  <Link to="#">Cập nhật</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Page />
    </div>
  );
}
