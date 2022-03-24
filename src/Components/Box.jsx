import React from "react";
import { Link } from "react-router-dom";

export default function Box(props) {
  const { link, icon, name } = props;
  return (
    <div className="box">
      <Link to={link}>
        {icon}
        <p>{name}</p>
      </Link>
    </div>
  );
}
