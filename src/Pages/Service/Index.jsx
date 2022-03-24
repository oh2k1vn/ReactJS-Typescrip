import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Search from "../../Components/inputFields/Search";
import Select from "../../Components/inputFields/Select";
import Page from "../../Components/Page";

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

  const defaultOption = options[0];

  // const [startDate, setStartDate] = useState(new Date());

  const ServiceActivePoint = () => {
    return (
      <>
        <span className="ActivePo int"></span>
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
    <>
      <div className="Service">
        <Header title="Dịch vụ" />
        <p>Quản lý dịch vụ</p>
        <div className="Service_input">
          <div className="Service_input_left">
            <div className="Service_input_left_item">
              <Select
                label="Trạng thái hoạt động"
                options={options}
                value={defaultOption}
              />
            </div>
          </div>

          <div className="Service_input_rigt">
            <Search />
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
                      {item.stateFilter === "Hoạt động" ? (
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
          <p>Thêm dịch vụ</p>
        </Link>
      </div>
    </>
  );
}
