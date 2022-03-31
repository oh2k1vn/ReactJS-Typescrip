import React from "react";
import Header from "../../Components/Header";
import Checkbox from "../../Components/inputFields/Checkbox";
import Input from "../../Components/inputFields/Input";

export default function AddSettingRole() {
  return (
    <div className="AddSettingRole">
      <Header title="Cài đặt hệ thống" />
      <p>Danh sách vai trò</p>
      <div className="AddSettingRole_content">
        <p>Thông tin vai trò</p>
        <div className="row">
          <div className="col">
            <Input label="Tên vai trò" text="Nhập tên vai trò" />
          </div>
          <div className="col">
            <p>Phân quyền chắc năng</p>
            <div className="col_box">
              <p>Nhóm chức năng A</p>
              <Checkbox label="Tất cả" />
              <Checkbox label="Chức năng x" />
              <Checkbox label="Chức năng y" />
              <Checkbox label="Chức năng z" />
              <p>Nhóm chức năng B</p>
              <Checkbox label="Tất cả" />
              <Checkbox label="Chức năng x" />
              <Checkbox label="Chức năng y" />
              <Checkbox label="Chức năng z" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
