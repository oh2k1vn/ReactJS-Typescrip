import React from "react";

const Page = () => {
  return (
    <div className="Page">
      <div className="Page_body">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 7L9 12L15 17" fill="#A9A9B0" />
          <path
            d="M15 7L9 12L15 17L15 7Z"
            stroke="#A9A9B0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="Page_body_items Page_body_active">1</div>
        <div className="Page_body_items">2</div>
        <div className="Page_body_items">3</div>
        <div className="Page_body_items">4</div>
        <div className="Page_body_items">5</div>
        <div className="Page_body_items">6</div>
        <div className="Page_body_items">7</div>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 17L15 12L9 7" fill="#7E7D88" />
          <path
            d="M9 17L15 12L9 7L9 17Z"
            stroke="#7E7D88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page;