import React from "react";
import { ITEMS } from "../assets/JsonData/Dashboarditem";
import DashboardItem from "../Components/DashboardItem";
import MenuBar from "../Components/menuBar/MenuBar";
import Recharts from "../Components/Recharts";
import SiderBar from "../Components/SiderBar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: '100vh', overflow: 'hidden' }}>
      <SiderBar/>
      <div className="Dashboard">
        <p className="Dashboard_p">Dashboard</p>
        <div className="Dashboard_item">
          {ITEMS.map((item, index) => {
            return (
              <DashboardItem
                icon={item.icon}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            );
          })}
        </div>
        <Recharts />
      </div>
      <MenuBar />
    </div>
  );
};

export default Dashboard;
