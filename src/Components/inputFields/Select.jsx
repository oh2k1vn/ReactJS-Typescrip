import React from "react";
import Dropdown from "react-dropdown";

export default function Select(props) {
  const { label, options, value, text } = props;

  return (
    <div className="Select">
      <label>{label}</label>
      <Dropdown
        options={options}
        className="chartDropdown"
        value={value}
        placeholder={text}
      />
    </div>
  );
}
