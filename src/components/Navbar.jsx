import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import Home from "../images/home.png";
import Tweet from "../images/tweet.png";
import Profile from "./images/profile.jpg";
import More from "../images/more.png";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import Hashtag from "../images/hashtag.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import "../styles/Navbar.css";
function SideNavBar() {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(false);
  const [mediamWidth, setMedium] = useState(false);
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

  function MediaQuery() {
    useEffect(() => {
      const media = window.matchMedia("(min-width: 1279px)");
      const listener = () => setIsDesktop(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }, [isDesktop]);

    return <div className="App">{isDesktop ? null : null}</div>;
  }
  function Mediam() {
    useEffect(() => {
      const media = window.matchMedia("(min-height: 596px)");
      const listener = () => setMedium(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }, [mediamWidth]);

    return <div className="App">{mediamWidth ? null : null}</div>;
  }

  return (
    <ProSidebar
      breakPoint="xs"
      collapsed={isDesktop ? false : true}
      collapsedWidth="57px"
      style={isDesktop ? null : { marginLeft: "3%" }}
    >
      <MediaQuery />
      <Mediam />

      <Menu style={{ marginLeft: "11%", paddingTop: "13px" }}>
        <MenuItem
          id="twitterlogo"
          icon={
            <TwitterIcon
              style={{
                color: "#0097d8",
                fontSize: "33px"
              }}
            />
          }
          style={{ marginTop: "-8px", paddingRight: "0px" }}
        ></MenuItem>
      </Menu>
      <Menu style={{ marginLeft: "11%", marginTop: "-15px" }}>
        <MenuItem
          onClick={NavigateHome}
          icon={
            <img
              src={Home}
              style={
                isDesktop
                  ? { height: "35px", width: "40px", marginTop: "5px" }
                  : { height: "35px", width: "40px" }
              }
              className="iconNavbar "
            />
          }
          className="icons"
          style={{ fontSize: "20px" }}
        >
          <span style={{ paddingLeft: "2%" }}>Home</span>
        </MenuItem>
        <MenuItem
          onClick={NavigateExplor}
          icon={
            <img
              src={Hashtag}
              style={
                isDesktop
                  ? { height: "30px", width: "29px", marginTop: "5px" }
                  : { height: "30px", width: "29px" }
              }
              className="iconNavbar "
            />
          }
          className="icons"
          style={{ fontSize: "20px" }}
        >
          <span style={{ paddingLeft: "2%" }}>Explore</span>
        </MenuItem>
        <MenuItem
          onClick={NavigateNotifications}
          icon={
            <NotificationsNoneIcon
              style={
                isDesktop
                  ? { height: "28px", width: "40px", marginTop: "5px" }
                  : { height: "28px", width: "40px" }
              }
              className="iconNavbar "
            />
          }
          className="icons"
          style={{ fontSize: "20px" }}
        >
          <span style={{ paddingLeft: "2%" }}>Notifications</span>
        </MenuItem>
        <MenuItem
          onClick={NavigateMessages}
          icon={
            <MailOutlineIcon
              style={
                isDesktop
                  ? { height: "27px", width: "30x" }
                  : { height: "27px", width: "30px" }
              }
              className="iconNavbar "
            />
          }
          className="icons"
          style={{ fontSize: "20px" }}
        >
          <span style={{ paddingLeft: "2%" }}>Messages</span>
        </MenuItem>
        {mediamWidth ? (
          <MenuItem
            icon={
              <BookmarkBorderRoundedIcon
                style={
                  isDesktop
                    ? { height: "30px", width: "35px" }
                    : { height: "30px", width: "35px" }
                }
                className="iconNavbar "
              />
            }
            className="icons"
            style={{ fontSize: "20px" }}
          >
            <span style={{ paddingLeft: "2%" }}>Bookmarks</span>
          </MenuItem>
        ) : null}
        {mediamWidth ? (
          <MenuItem
            icon={
              <ListAltRoundedIcon
                style={
                  isDesktop
                    ? { height: "25px", width: "40px" }
                    : { height: "25px", width: "40px" }
                }
                className="iconNavbar "
              />
            }
            className="icons"
            style={{ fontSize: "20px" }}
          >
            <span style={{ paddingLeft: "2%" }}>Lists</span>
          </MenuItem>
        ) : null}

        <MenuItem
          icon={
            <PermIdentityIcon
              style={
                isDesktop
                  ? { height: "28px", width: "40px" }
                  : { height: "28px", width: "40px" }
              }
              className="iconNavbar "
            />
          }
          className="icons"
          style={{ fontSize: "20px" }}
        >
          <span style={{ paddingLeft: "2%" }}>Profile</span>
        </MenuItem>
        <MenuItem
          icon={
            <img
              src={More}
              style={
                isDesktop
                  ? { height: "23px", width: "23px", marginTop: "2.5px" }
                  : { height: "23px", width: "23px" }
              }
              alt=""
              className="iconNavbar "
            />
          }
          className="icons"
          style={{ fontSize: "20px" }}
        >
          <span style={{ paddingLeft: "2%" }}>More</span>
        </MenuItem>
        {isDesktop ? (
          <button type="button" class="navButton">
            Tweet
          </button>
        ) : (
          <MenuItem
            icon={
              <img
                src={Tweet}
                style={{ height: "70px", width: "100px" }}
                className="iconNavbar "
                alt=""
              />
            }
            className="icons"
            style={{ fontSize: "19px" }}
          ></MenuItem>
        )}
      </Menu>
      <SidebarFooter>
        <Menu style={{ marginLeft: "11%", marginTop: "10%" }}>
          <MenuItem
            icon={
              <Avatar
                alt="Remy Sharp"
                src={Profile}
                style={
                  isDesktop
                    ? {
                        marginLeft: "14px",
                        marginTop: "50%",
                        marginBottom: "15px"
                      }
                    : { paddingRight: "10px" }
                }
                sx={{ width: 50, height: 50 }}
              />
            }
            style={
              isDesktop
                ? { bottom: "30px", position: "absolute", width: "250px" }
                : { position: "absolute", bottom: "25px" }
            }
            id="userDetails"
          >
            <div
              style={{
                marginTop: "-12%",
                marginLeft: "10px"
              }}
            >
              <p style={{ fontWeight: "600" }}>Srinivash</p>
              <p style={{ marginTop: "-15px" }}>@srini224</p>
            </div>
            <MoreHorizIcon
              className="userNavbar"
              style={isDesktop ? null : { position: "relative" }}
            />
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default SideNavBar;
