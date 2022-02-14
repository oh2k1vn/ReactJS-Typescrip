import React, { FC } from 'react'
import { MenuBarItem } from '../models/MenuBarItem'


    type SubMenuBarLink = {
        item: MenuBarItem;
    }
const SubMenuBar:FC<SubMenuBarLink> = ({item}) => {
  return (
    <div className="MenuBar_container_item_list">
        <div className="MenuBar_container_item_list_img">{item.img}</div>
  
        <div className="MenuBar_container_item_list_center">
          <p>{item.number}</p>
          <div className="MenuBar_container_item_list_center_bottom">
            {item.icon}
            <p>{item.title}</p>
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
  )
}

export default SubMenuBar