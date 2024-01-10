import React, { useEffect, useState } from "react";

import "./index.css";

import "chartjs-adapter-luxon";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip
);

const Graph = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let dynamicHeight = viewportWidth <= 412 ? "310px" : "60px";

  if (viewportWidth <= 412) {
    dynamicHeight = "310px";
  } else if (viewportWidth <= 600) {
    dynamicHeight = "250px";
  } else if (viewportWidth <= 800) {
    dynamicHeight = "200px";
  } else if (viewportWidth <= 1000) {
    dynamicHeight = "200px";
  } else {
    dynamicHeight = "40px";
  }

  const data = {
    labels: [
      "12:00 AM",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",

      "",
      "",
      "",
      "12:00PM",
    ],
    datasets: [
      {
        labels: "Sales of the week",
        data: [6, 3.5, 69, 56, 13, 9, 6, 3, 9, 6, 43, 19],
        backgroundColor: "#0083ff",
        borderColor: "#0083ff",
        pointBorderColor: "transparent",
        tension: 0.4,
        fill: true,
      },
      {
        labels: "Sales of the week",
        data: [
          10, 5, 6, 7, 8, 26, 15, 18, 10, 36, 40, 50, 55, 44, 15, 70, 80, 62,
          30, 25, 15, 16, 20, 30, 32, 30, 40, 39, 35, 42, 16, 20, 25, 35, 45,
          80, 60, 55, 80, 55, 45, 35, 88, 70, 20, 90,
        ],
        backgroundColor: "#e2e2e2",
        borderColor: "#e1e1e1",
        pointBorderColor: "#fff",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        min: 0, // Set the minimum value for the y-axis
        max: 90, // Set the maximum value for the y-axis
        // Set the interval between ticks on the y-axis
        ticks: {
          stepSize: 30,
          callback: function (val, index) {
            // Hide every 2nd tick label
            return val !== 0 ? this.getLabelForValue(val) + "K" : "0";
          },
        },
        grid: {
          borderDash: [5, 5], // Make the y-axis grid lines dashed
        },
      },
      x: {
        max: 60,

        grid: {
          color: "#e1e1e1", // Disable x-axis grid lines
        },
        border: {
          dash: [2, 4],
        },
        ticks: {
          stepSize: 10,
          callback: function (val, index) {
            // Hide every 2nd tick label
            return val !== "" ? this.getLabelForValue(val) : "";
          },
        },
      },
    },
  };

  return (
    <div
      className="graph-container"
      style={{ paddingLeft: "25px", marginTop: "20px", width: "96%" }}
    >
      <Line
        data={data}
        options={options}
        height={dynamicHeight}
        responsive
        className="graph-line-m"
      ></Line>
    </div>
  );
};

export default Graph;
