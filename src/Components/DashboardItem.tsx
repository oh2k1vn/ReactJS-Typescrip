import React from 'react';

const DashboardItem = ({icon,title,text,img}) => {
  return <div className='Dashboard_item_list'>
      <div className="Dashboard_item_list_top">
          <div className="Dashboard_item_list_top_icon">
              {icon}
          </div>
          <p>{title}</p>
      </div>
      <div className="Dashboard_item_list_bottom">
          <p>{text}</p>
          {img}
      </div>
  </div>;
};

export default DashboardItem;
