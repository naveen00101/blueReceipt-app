import React, { useState } from "react";
import "./index.css";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";

const DataItem = (props) => {
  const { data, s, c } = props;
  const { time, sent, clicks, total, orders, AOV } = data;

  return (
    <button
      className={`item-container ${s ? "selected-c" : ""}`}
      type="button"
      onClick={() => {
        c(data.id);
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="cart-img-container">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSapJBLhplmMaZz17GATM1SD_4wbd4zAJDxnzcZ0JBW2q1VqUe5"
            alt="cart-icon"
            className="cart-image"
          />
        </div>
        <div className="title-container">
          <div className={s ? "selected-d" : ""}>
            <h4 className="item-heading">Abandoned Cart {time} </h4>
            {s && <ArrowRightAltRoundedIcon />}
          </div>

          <p className="item-description">
            {sent} Sent | {clicks} Clicks
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className={s ? "selected-d" : ""}>
          <h4 className="item-heading total">{total}</h4>
        </div>

        <p className="item-description">
          {orders} Sent | {AOV} Clicks
        </p>
      </div>
    </button>
  );
};

const AutomationsData = [
  {
    id: 1,
    time: "7 Days",
    sent: 4024,
    clicks: 124,
    orders: 41,
    AOV: 150,
    total: "$5,231",
  },
  {
    id: 2,
    time: "15 Min",
    sent: 4024,
    clicks: 124,
    orders: 41,
    AOV: 150,
    total: "$24,521",
  },
  {
    id: 3,
    time: "15 Min",
    sent: 4024,
    clicks: 124,
    orders: 41,
    AOV: 150,
    total: "$24,521",
  },
];

const CampaignsData = [
  {
    id: 1,
    time: "2 Days",
    sent: 1054,
    clicks: 452,
    orders: 41,
    AOV: 150,
    total: "$5,231",
  },
  {
    id: 2,
    time: "35 Min",
    sent: 20,
    clicks: 81,
    orders: 20,
    AOV: 150,
    total: "$24,521",
  },
  {
    id: 3,
    time: "25 Min",
    sent: 30,
    clicks: 67,
    orders: 10,
    AOV: 150,
    total: "$24,521",
  },
];

const SegmentsData = [
  {
    id: 1,
    time: "3 Days",
    sent: 4024,
    clicks: 124,
    orders: 41,
    AOV: 150,
    total: "$6,231",
  },
  {
    id: 2,
    time: "55 Min",
    sent: 4024,
    clicks: 124,
    orders: 41,
    AOV: 150,
    total: "$4,521",
  },
  {
    id: 3,
    time: "45 Min",
    sent: 4024,
    clicks: 124,
    orders: 41,
    AOV: 150,
    total: "$2,521",
  },
];

const Data = () => {
  const [selectedOption, setSelectedOption] = useState("Automations");
  const [selectedData, setSelectedData] = useState(1);

  let items = "";

  if (selectedOption === "Automations") {
    items = AutomationsData;
  } else if (selectedOption === "Campaigns") {
    items = CampaignsData;
  } else {
    items = SegmentsData;
  }

  const handleDataClick = (data) => {
    setSelectedData(data);
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="data-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "20px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        <div className="data-opt-menu">
          <button
            type="button"
            className={`btn-3 ${
              selectedOption === "Automations" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Automations")}
          >
            Automations
          </button>
          <button
            type="button"
            className={`btn-3 ${
              selectedOption === "Campaigns" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Campaigns")}
          >
            Campaigns
          </button>
          <button
            type="button"
            className={`btn-3 ${
              selectedOption === "Segments" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Segments")}
          >
            Segments
          </button>
        </div>

        <button className="btn-4">
          {
            <EditCalendarRoundedIcon
              style={{ fontSize: "18px", color: "#2b98ff", marginRight: "4px" }}
            />
          }{" "}
          Month
        </button>
      </div>

      <div className="item-base-container">
        {items.map((each) => (
          <DataItem
            key={each.id}
            data={each}
            s={selectedData === each.id}
            c={handleDataClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Data;
