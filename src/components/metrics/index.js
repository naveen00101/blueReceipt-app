import React from "react";
import "./index.css";

const Metrics = () => {
  return (
    <div className="metrics-container">
      <div className="m-c-1">
        <div className="heading-sec">
          <h4 className="metric-heading">Total Revenue</h4>
          <div className="percent-con plus">
            <p>+12.5%</p>
          </div>
        </div>
        <div className="Amount-container">
          <h1 style={{ margin: "0px" }}>$32,621.72</h1>
        </div>
        <div>
          <p className="order-count">433 orders</p>
        </div>
      </div>

      <div className="m-c-1">
        <div className="heading-sec">
          <h4 className="metric-heading">Subscribers</h4>
          <div className="percent-con plus">
            <p>+32.5%</p>
          </div>
        </div>
        <div className="Amount-container">
          <h1 style={{ margin: "0px" }}>484,205</h1>
        </div>
        <div>
          <p className="order-count">$56 Average Order</p>
        </div>
      </div>

      <div className="m-c-1">
        <div className="heading-sec">
          <h4 className="metric-heading">Conversations</h4>
          <div className="percent-con minus">
            <p>-3.4%</p>
          </div>
        </div>
        <div className="Amount-container">
          <h1 style={{ margin: "0px" }}>552,553</h1>
        </div>
        <div>
          <p className="order-count">5min Average Response Time</p>
        </div>
      </div>

      <div className="m-c-1">
        <div className="heading-sec">
          <h4 className="metric-heading">Total Revenue</h4>
          <div className="percent-con plus">
            <p>+12.5%</p>
          </div>
        </div>
        <div className="Amount-container">
          <h1 style={{ margin: "0px" }}>25%</h1>
        </div>
        <div className="order-container">
          <p className="order-count">5% Sales Coversion Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
