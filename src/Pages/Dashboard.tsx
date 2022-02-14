import React from 'react';
import { DashboardData } from '../components/DashboardData';
import MenuBar from '../components/MenuBar';
import Recharts from '../components/Recharts';
import SubDashboard from '../components/SubDashboard';

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