import React from "react";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";
import "./index.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="profile-container">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704758400&semt=ais"
          alt="profile"
          className="profile-pic"
        />
        <div className="greeting-container">
          <h1 className="greeting-text">Good Morning Naveen</h1>
          <p className="greeting-sub">
            Here are your stats for Today, 24 Aug 2020
          </p>
        </div>
      </div>
      <div className="date-container">
        <button className="btn-2">
          {
            <EditCalendarRoundedIcon
              style={{ fontSize: "18px", color: "#2b98ff", marginRight: "4px" }}
            />
          }{" "}
          Today
        </button>
        <p style={{ color: "#acb2c4", fontSize: "15px" }}>compared to </p>
        <button className="btn-2">
          {
            <EditCalendarRoundedIcon
              style={{ fontSize: "18px", color: "#2b98ff", marginRight: "4px" }}
            />
          }{" "}
          Previous Period
        </button>
      </div>
    </div>
  );
};

export default NavBar;
