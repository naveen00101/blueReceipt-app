import React, { useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import ThreePRoundedIcon from "@mui/icons-material/ThreePRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import ToggleOffRoundedIcon from "@mui/icons-material/ToggleOffRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import BlueLogo from "../../images/BlueLogo.png";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="sidebar-activator-container">
        <MenuRoundedIcon
          style={{ height: "40px", margin: "0px" }}
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        />

        <div className="logo-container-r">
          <img src={BlueLogo} alt="logo" className="logo-r" />
          <p className="logo-text-r">BlueReceipt</p>
        </div>
      </div>
      <hr className="line" />
      <div
        className={
          showSidebar ? "sidebar-container active" : "sidebar-container"
        }
      >
        <div>
          <div className="logo-container">
            <img src={BlueLogo} alt="logo" className="logo" />
            <p className="logo-text">BlueReceipt</p>
          </div>
          <div
            className="back-btn"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <button
              className="arrow-container back-btn"
              type="button"
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            >
              <ArrowBackIosRoundedIcon style={{ fontSize: "20px" }} />
            </button>
          </div>
          <div className="search-container">
            <SearchIcon />
            <input
              type="search"
              className="search-box"
              placeholder="Search..."
            />
          </div>
          <button className="btn-A">
            {
              <HomeRoundedIcon
                style={{ marginRight: "10px", color: "#279eff" }}
              />
            }
            Dashboard
          </button>
          <hr />
          <div className="menu">
            <button className="btn-1">
              {<ModeCommentRoundedIcon style={{ marginRight: "10px" }} />}
              Conversations
            </button>
            <button className="btn-1">
              {<TuneRoundedIcon style={{ marginRight: "10px" }} />}
              Automation
            </button>
            <button className="btn-1">
              {<AssessmentRoundedIcon style={{ marginRight: "10px" }} />}
              Campaigns
            </button>
            <button className="btn-1">
              {<LaunchRoundedIcon style={{ marginRight: "10px" }} />}
              Popup
            </button>
            <button className="btn-1">
              {<ThreePRoundedIcon style={{ marginRight: "10px" }} />}
              LiveChat
            </button>
            <button className="btn-1">
              {<DonutLargeRoundedIcon style={{ marginRight: "10px" }} />}
              Segments
            </button>
            <button className="btn-1">
              {<ToggleOffRoundedIcon style={{ marginRight: "10px" }} />}
              integrations
            </button>
          </div>
        </div>
        <div className="profile-btm-container">
          <div className="profile-img-btm-container">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704758400&semt=ais"
              alt="profile"
              className="profile-pic-btm"
            />
          </div>
          <div className="profile-btm-name-container">
            <h3 className="profile-btm-name">Naveen Raja</h3>
            <p className="store-btm-name">Store Name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
