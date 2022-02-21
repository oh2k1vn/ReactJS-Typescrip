import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "../models/SidebarItem";

type SubSilderLink = {
  item: SidebarItem;
};

const SubSilderBar: FC<SubSilderLink> = ({ item }) => {
  return (
    <>
      <Link
        to={item.route}
        className="menuBar_nav_a"
      >
        <div className="menuBar_nav_a_item">
          <div className={`menuBar_nav_a_item-inner`}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SubSilderBar;
