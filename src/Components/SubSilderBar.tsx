import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarItem } from "../models/SidebarItem";

type SubSilderLink = {
  item: SidebarItem;
};

const SubSilderBar: FC<SubSilderLink> = ({ item }) => {
  return (
      <NavLink
        to={item.route}
        className="menuBar_nav_a"
        style={({ isActive }) => ({ background: isActive ? "#FF7506" : "#fff" })}
      >
        <div className="menuBar_nav_a_item">
            {item.icon}
            <span>{item.name}</span>
        </div>
      </NavLink>
  );
};

export default SubSilderBar;
