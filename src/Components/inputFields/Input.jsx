import React from "react";

export default function Input(props) {
  const { label, text } = props;

  return (
    <div>
      <label>{label}</label>
      <input type="text" name="" id="" placeholder={text} />
    </div>
  );
}
