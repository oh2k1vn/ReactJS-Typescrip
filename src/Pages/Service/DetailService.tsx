import React from "react";
import Notification from "../../assets/images/icon_menuBar/Notification";
import SiderBar from "../../Components/SiderBar";

const DetailService = () => {
  const lists = [
    {
      MTB: "KIO_01",
      Name: "Kiosk",
      IP: "128.172.308",
      Type: "Kiosk",
      login: "Linhkyo011",
      pass: "CMS",
      title:
        "Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.",
    },
  ];
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <SiderBar />
      <div className="DetailService">
        <div className="Service_header">
          <div className="Service_header_left">
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
            <p style={{ color: "#FF7506" }}>Chi tiết thiết bị</p>
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
        <div className="DetailService_body">
          <p>Quản lý thiết bị</p>
          <div className="DetailService_body_content">
            <p>Thông tin thiết bị</p>
            {lists.map((item, index) => {
              return (
                <div className="DetailService_body_content_flex" key={index}>
                  <div className="DetailService_body_content_flex_item">
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
