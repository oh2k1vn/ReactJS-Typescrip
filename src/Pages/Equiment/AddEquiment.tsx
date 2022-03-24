import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const AddEquiment = () => {
  const options = ["Kiosk", "Display counter"];

  return (
    <div className="AddEquiment">
      <Header title="Thiết bị" />

      <div className="AddEquiment_body">
        <p>Quản lý thiết bị</p>
        <div className="AddEquiment_body_content">
          <p>Thông tin thiết bị</p>
          <div className="AddEquiment_body_content_layout">
            <div className="AddEquiment_body_content_layout_items">
              <label>Mã thiết bị: *</label>
              <input type="text" name="" id="" placeholder="Nhập mã thiết bị" />
              <label>Tên thiết bị: *</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Nhập tên thiết bị"
              />
              <label>Địa chỉ IP: *</label>
              <input type="text" name="" id="" placeholder="Nhập địa chỉ IP" />
            </div>
            <div className="AddEquiment_body_content_layout_items">
              <label>Loại Thiết bị: *</label>
              <Dropdown
                options={options}
                className="chartDropdown"
                //   value={defaultOption}
                placeholder="Chọn loại thiết bị"
              />
              <label>Tên đăng nhập: *</label>
              <input type="text" name="" id="" placeholder="Nhập tài khoản" />
              <label>Mật khẩu: *</label>
              <input type="text" name="" id="" placeholder="Nhập mật khẩu" />
            </div>
          </div>
          <label>Dịch vụ sử dụng: *</label>
          <input type="text" name="" id="" placeholder="Nhập dịch vụ sử dụng" />
          <span>* Là trường thông tin bắt buộc</span>
        </div>
      </div>
      <div className="AddEquiment_btn">
        <Link to="/admin/Equiment">
          <button className="AddEquiment_btn_active">Hủy bỏ</button>
        </Link>
        <Link to="/admin/Equiment/DetailEquiment">
          <button>Thêm thiết bị</button>
        </Link>
      </div>
    </div>
  );
};

export default AddEquiment;
