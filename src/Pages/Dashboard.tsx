import React from 'react';
import SubDashboard from '../Components/SubDashboard';
import Recharts from '../Components/Recharts';
import MenuBar from '../Components/MenuBar';
import {DashboardData} from "../Components/DashboardData";

const Dashboard = () => {
  return (
    <div style={{display:'flex'}}>

      <div className="Dashboard">
        <p className="Dashboard_p">Dashboard</p>
        <div className="Dashboard_item">
          {DashboardData.map((item, index) => {
            return (
              <SubDashboard item={item} key={index}/>
            );
          })}
        </div>
        <Recharts />
      </div>
      <MenuBar/>
    </div>

  )
}

export default Dashboard