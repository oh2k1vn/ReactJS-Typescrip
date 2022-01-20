import React from "react";

const MenuBarItem = ({ img, number, title, icon }) => {
  return (
    <div className="MenuBar_container_item_list">
      <div className="MenuBar_container_item_list_img">{img}</div>

      <div className="MenuBar_container_item_list_center">
        <p>{number}</p>
        <div className="MenuBar_container_item_list_center_bottom">
          {icon}
          <p>{title}</p>
        </div>
      </div>
      <div className="MenuBar_container_item_list_right">
        <ul className="MenuBar_container_item_list_right_top">
          <li>Đang hoạt động</li>
          <li>Ngừng hoạt động</li>
        </ul>
        <ul className="MenuBar_container_item_list_right_bottom">
          <li>3.799</li>
          <li>239</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBarItem;
