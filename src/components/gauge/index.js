import React from "react";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

import "./index.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Gauge = () => {
  const data = {
    labels: [],
    datasets: [
      {
        Legend: false,
        label: "Revenue",
        data: [70, 30],
        backgroundColor: ["#0083ff", "#e2e7f5"],
        borderColor: ["#0083ff", "#e2e7f5"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    legend: false,
    cutout: 50,
    aspectRatio: 2.4,
  };

  return (
    <div className="gauge-container">
      <div className="gauge-heading">
        <h4 className="level-heading">Level 5</h4>
        <ArrowRightAltRoundedIcon style={{ fontSize: "2rem" }} />
      </div>
      <p className="gauge-description">+$32,050 in the last month</p>
      <Doughnut data={data} options={options} className="gauge" />
      <div className="label">
        <p>50k</p>
        <p>100k</p>
      </div>
      <h2 className="money">$14,823</h2>
    </div>
  );
};

export default Gauge;
