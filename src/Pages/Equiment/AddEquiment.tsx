import React from "react";

import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Input from "../../Components/inputFields/Input";
import Select from "../../Components/inputFields/Select";

const AddEquiment = () => {
  const options = ["Kiosk", "Display counter"];

  const defaultOption = options[0];

  return (
    <div className="AddEquiment">
      <Header title="Thiết bị" />

      <div className="AddEquiment_body">
        <p>Quản lý thiết bị</p>
        <div className="AddEquiment_body_content">
          <p>Thông tin thiết bị</p>
          <div className="AddEquiment_body_content_layout">
            <div className="AddEquiment_body_content_layout_items">
              <Input label="Mã thiết bị: *" text="Nhập mã thiết bị" />
              <Input label="Tên thiết bị: *" text="Nhập tên thiết bị" />
              <Input label="Địa chỉ IP: *" text="Nhập địa chỉ IP" />
            </div>
            <div className="AddEquiment_body_content_layout_items">
              <Select
                label="Loại Thiết bị: *"
                options={options}
                value={defaultOption}
                text="Chọn loại thiết bị"
              />
              <Input label="Tên đăng nhập: *" text="Nhập Tài khoản" />
              <Input label="Mật khẩu: *" text="Nhập mật khẩu" />
            </div>
          </div>
          <Input label="Dịch vụ sử dụng: *" text="Nhập dịch vụ sử dụng" />
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
