import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";

const AddEquiment = () => {
  const options = ["Kiosk", "Display counter"];

  return (
    <div className="AddEquiment">

      <div className="Equiment_header">
        <div className="Equiment_header_left">
          <p style={{ color: "#7E7D88" }}>Thiết bị</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3583 9.40874L8.825 5.8754C8.74753 5.7973 8.65536 5.7353 8.55381 5.693C8.45226 5.65069 8.34334 5.62891 8.23333 5.62891C8.12332 5.62891 8.0144 5.65069 7.91285 5.693C7.8113 5.7353 7.71913 5.7973 7.64166 5.8754C7.48646 6.03154 7.39934 6.24275 7.39934 6.4629C7.39934 6.68306 7.48646 6.89427 7.64166 7.0504L10.5917 10.0004L7.64166 12.9504C7.48646 13.1065 7.39934 13.3177 7.39934 13.5379C7.39934 13.7581 7.48646 13.9693 7.64166 14.1254C7.71953 14.2026 7.81188 14.2637 7.91341 14.3052C8.01494 14.3467 8.12366 14.3677 8.23333 14.3671C8.343 14.3677 8.45172 14.3467 8.55325 14.3052C8.65478 14.2637 8.74713 14.2026 8.825 14.1254L12.3583 10.5921C12.4364 10.5146 12.4984 10.4224 12.5407 10.3209C12.583 10.2193 12.6048 10.1104 12.6048 10.0004C12.6048 9.89039 12.583 9.78147 12.5407 9.67992C12.4984 9.57837 12.4364 9.48621 12.3583 9.40874Z"
              fill="#7E7D88"
            />
          </svg>
          <p style={{ color: "#7E7D88" }}>Danh sách thiết bị</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3583 9.40874L8.825 5.8754C8.74753 5.7973 8.65536 5.7353 8.55381 5.693C8.45226 5.65069 8.34334 5.62891 8.23333 5.62891C8.12332 5.62891 8.0144 5.65069 7.91285 5.693C7.8113 5.7353 7.71913 5.7973 7.64166 5.8754C7.48646 6.03154 7.39934 6.24275 7.39934 6.4629C7.39934 6.68306 7.48646 6.89427 7.64166 7.0504L10.5917 10.0004L7.64166 12.9504C7.48646 13.1065 7.39934 13.3177 7.39934 13.5379C7.39934 13.7581 7.48646 13.9693 7.64166 14.1254C7.71953 14.2026 7.81188 14.2637 7.91341 14.3052C8.01494 14.3467 8.12366 14.3677 8.23333 14.3671C8.343 14.3677 8.45172 14.3467 8.55325 14.3052C8.65478 14.2637 8.74713 14.2026 8.825 14.1254L12.3583 10.5921C12.4364 10.5146 12.4984 10.4224 12.5407 10.3209C12.583 10.2193 12.6048 10.1104 12.6048 10.0004C12.6048 9.89039 12.583 9.78147 12.5407 9.67992C12.4984 9.57837 12.4364 9.48621 12.3583 9.40874Z"
              fill="#7E7D88"
            />
          </svg>
          <p style={{ color: "#FF7506" }}>Thêm thiết bị</p>
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
