import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
function Drow() {
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
  <Dropdown
    options={options}
    className="chartDropdown"
    onChange={(e) => handleDropdownValue(e)}
    value={defaultOption}
    placeholder="Select an option"
  />;
}

export default Drow;
