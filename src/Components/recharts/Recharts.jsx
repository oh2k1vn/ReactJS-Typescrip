import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Area,
  AreaChart, Tooltip,
  XAxis,
  YAxis
} from "recharts";
const Recharts = () => {
  const data = [
    {
      name: "Ngày 1",
      value: 2700,
    },
    {
      name: "Ngày 2",
      value: 3500,
    },
    {
      name: "7",
      value: 5800,
    },
    {
      name: "19",
      value: 4221,
    },
    {
      name: "31",
      value: 3980,
    },
  ];

  const dataweek = [
    {
      name: "1",
      value: 5500,
    },
    {
      name: "2",
      value: 1000,
    },
    {
      name: "3",
      value: 4000,
    },
    {
      name: "4",
      value: 6000,
    },
  ];

  const datamonth = [
    {
      name: "1",
      value: 2700,
    },
    {
      name: "2",
      value: 4000,
    },
    {
      name: "3",
      value: 4700,
    },
    {
      name: "4",
      value: 4100,
    },
    {
      name: "5",
      value: 3400,
    },
    {
      name: "6",
      value: 5000,
    },
    {
      name: "7",
      value: 3500,
    },
    {
      name: "8",
      value: 4070,
    },
    {
      name: "9",
      value: 3900,
    },
    {
      name: "10",
      value: 4000,
    },
    {
      name: "11",
      value: 4221,
    },
    {
      name: "12",
      value: 3800,
    },
  ];

  const [dataChart, setDataChart] = useState(data);

  const options = ["Ngày", "Tuần", "Tháng"];

  const handleDropdownValue = (e) => {
    if (e.value === "Ngày") {
      setDataChart(data);
    } else if (e.value === "Tuần") {
      setDataChart(dataweek);
    } else if (e.value === "Tháng") {
      setDataChart(datamonth);
    }
  };
  const defaultOption = options[0];

  return (
    <div className="Recharts">
      <div className="Recharts_block">
        <div className="Recharts_block_top">
          <span className="Recharts_block_top_text">
            Bảng thống kê theo ngày
          </span>
          <span className="Recharts_block_top_p">Tháng 11/2021</span>
        </div>

        <div className="Recharts_block_Dropdown">
          <span className="Recharts_block_Dropdown_title">Xem theo</span>
          <Dropdown
            options={options}
            className="chartDropdown"
            onChange={(e) => handleDropdownValue(e)}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>

      <div className="Recharts_block">
        <AreaChart
          width={754}
          height={373}
          data={dataChart}
          margin={{
            top: 0,
            right: 24,
            left: 0,
            bottom: 33,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CEDDFF" stopOpacity={1} />
              <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Recharts;
