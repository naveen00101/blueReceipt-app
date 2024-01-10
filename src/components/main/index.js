import React from "react";
import Sidebar from "../sidebar";
import NavBar from "../navbar";
import Metrics from "../metrics";
import Graph from "../graph";
import Gauge from "../gauge";
import Data from "../data";

import "./index.css";

const Main = () => {
  return (
    <div className="bg-container">
      <Sidebar className="s" />
      <div className="main-container">
        <div className="nav">
          <NavBar />
        </div>
        <div className="metrics">
          <Metrics />
        </div>

        <div className="graph">
          <Graph />
        </div>
        <div className="sub-sec-container-1">
          <Data />
          <Gauge />
        </div>
      </div>
    </div>
  );
};

export default Main;
