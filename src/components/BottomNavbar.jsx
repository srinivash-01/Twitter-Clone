import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "./styles/bottomNavbar.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { RiUser5Fill, RiSearchEyeFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiUser5Line } from "react-icons/ri";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MailIcon from "@mui/icons-material/Mail";

const BottomNavBar = (props) => {
  const navigate = useNavigate();
  function NavigateExplor() {
    navigate("/explore");
  }
  function NavigateHome() {
    navigate("/");
  }
  function NavigateNotifications() {
    navigate("/notifications");
  }
  function NavigateMessages() {
    navigate("/messages");
  }

  return (
    <div className="bottom-nav">
      <div className="bn-tab">
        {/* <HomeIcon
            style={{ fontSize: "33px" }}
            color="#000"
            onClick={() => setActiveTabs("home")}
          /> */}

        <HomeOutlinedIcon
          style={{ fontSize: "33px" }}
          color="#000"
          onClick={NavigateHome}
        />
      </div>
      <div className="bn-tab">
        {/* <RiSearchEyeFill size="30" color="#000" onClick={NavigateExplor} /> */}

        <BiSearchAlt size="30" color="#000" onClick={NavigateExplor} />
      </div>
      <div className="bn-tab">
        {/* <NotificationsIcon
            style={{ fontSize: "32px" }}
            color="#000"
            onClick={() => setActiveTabs("favourites")} */}
        {/* /> */}

        <NotificationsNoneOutlinedIcon
          style={{ fontSize: "32px" }}
          color="#000"
          onClick={NavigateNotifications}
        />
      </div>
      <div className="bn-tab">
        {/* <MailIcon
            style={{ fontSize: "30px" }}
            color="#000"
            onClick={() => setActiveTabs("account")} */}
        {/* /> */}

        <MailOutlineIcon
          style={{ fontSize: "30px" }}
          color="#000"
          onClick={NavigateMessages}
        />
        {/* )} */}
      </div>
    </div>
  );
};

export default BottomNavBar;
