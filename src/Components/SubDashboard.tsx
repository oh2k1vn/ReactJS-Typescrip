import React, { FC } from "react";
import { DashboardItem } from "../models/DashboardItem";

type SubDashboardLink = {
  item: DashboardItem;
};

const SubDashboard: FC<SubDashboardLink> = ({ item }) => {
  return (
    <div className="Dashboard_item_list">
      <div className="Dashboard_item_list_top">
        <div className="Dashboard_item_list_top_icon">{item.icon}</div>
        <p>{item.title}</p>
      </div>
      <div className="Dashboard_item_list_bottom">
        <p>{item.text}</p>
        {item.img}
      </div>
    </div>
  );
};

export default SubDashboard;
