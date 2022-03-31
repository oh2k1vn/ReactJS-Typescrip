import React from "react";

export default function Checkbox(props) {
  const { label } = props;

  return (
    <div>
      <input type="checkbox" />
      <label>{label}</label>
    </div>
  );
}
