import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Star from "../images/star.png";
import Elon from "../images/Elon.jpg";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import AlienWorlds from "../images/AlienWorlds.jpg";
import ProfileTweet from "../images/profileTweet.jpg";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Retweet from "../images/retweet.png";
import LabTabs from "./tabs";
import Avatar from "@mui/material/Avatar";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SwipeableTemporaryDrawer from "../MobileDrawer";
import VerifiedIcon from "@mui/icons-material/Verified";
import "../styles/Home.css";
import Tweets from "../Datas/data";
import Profile from "../images/profile.jpg";
import Trending from "../Datas/Trending";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Tofollow from "../Datas/Tofollwo";
import ButtonAppBar from "../Appbar";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "grey[800]"
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? "grey[300]" : "grey[900]",
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)"
}));

export default function TweetsTemplate() {
  var lastTweet = Tweets.length - 1;
  const [isMobile, setIsMobile] = useState(false);
  function IsMobileQuery() {
    useEffect(() => {
      const media = window.matchMedia("(min-width: 500px)");
      const listener = () => setIsMobile(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }, [isMobile]);

    return <div className="App">{isMobile ? null : null}</div>;
  }
  return (
    <div>
      <IsMobileQuery />
      {Tweets.map((tweet, index) => (
        <div
          style={
            isMobile
              ? { paddingTop: "2%", marginTop: "-17px" }
              : {
                  paddingTop: index !== 0 ? "5px" : "2%",
                  marginTop: index === 0 ? "65px" : "-17px"
                }
          }
          className="tweet"
        >
          <div
            style={{
              display: "flex",
              justifyContent: tweet.retweetName ? "space-between" : "flex-end"
            }}
          >
            {tweet.retweetName ? (
              <div
                id="retweetName"
                style={{
                  marginLeft: "55px",
                  marginTop: "0px",
                  display: "flex",
                  height: "24px"
                }}
              >
                <img
                  src={Retweet}
                  style={{
                    height: "15px",
                    width: "15px"
                  }}
                  alt="profile"
                  className="iconNavbar "
                />
                <p
                  style={{
                    marginLeft: "10px",
                    fontSize: "11.5px",
                    marginTop: "-2px"
                  }}
                  className="retweetName"
                >
                  {tweet.retweetName}
                </p>
              </div>
            ) : null}
            <MoreHorizOutlinedIcon
              style={{ marginTop: "0px", marginRight: "2%" }}
            />
          </div>
          <div
            style={{
              marginLeft: "18px",
              marginTop: "-1px",
              display: "flex",
              marginBottom: index === lastTweet ? "20px" : "0px"
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={tweet.profilePic}
              sx={{ width: 50, height: 50 }}
              style={{ marginTop: tweet.retweetName ? "0px" : "-18px" }}
            />
            <div
              style={{
                padding: "5px",
                marginLeft: "10px",
                width: "100%",
                marginTop: tweet.retweetName ? "-4px" : "-20px",
                marginBottom: !isMobile && tweet.disImage ? "-10%" : "0px"
              }}
            >
              <div style={{ display: "flex", width: "100%", height: "23px" }}>
                <h5
                  style={{ fontSize: "15px", fontWeight: "600px" }}
                  className="retweetName"
                >
                  {tweet.name}
                </h5>
                {tweet.verified ? (
                  <VerifiedIcon
                    style={{ fontSize: "17px", color: "#00acee" }}
                  />
                ) : null}
                {isMobile ? (
                  <p
                    style={{
                      fontSize: "15px",
                      marginLeft: "1%",
                      marginTop: "-3px",
                      opacity: "0.7"
                    }}
                  >
                    {tweet.username}
                  </p>
                ) : null}
                {isMobile ? (
                  <p
                    style={{
                      fontSize: "15px",
                      marginLeft: "1%",
                      marginTop: "-3px",
                      opacity: "0.7"
                    }}
                    className="retweetName"
                  >
                    {tweet.date}
                  </p>
                ) : null}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "0px",
                  width: "90%"
                }}
              >
                {tweet.discription}
              </p>
              {tweet.disImage ? (
                <img
                  src={tweet.disImage}
                  style={{
                    height: !isMobile ? "44%" : "66%",
                    width: "90%",

                    marginBottom: "4%",
                    marginTop: "-5px",
                    borderRadius: "30px"
                  }}
                ></img>
              ) : null}
              <div
                style={{
                  marginTop: "-5px",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginRight: "-70%",

                  paddingBottom: tweet.disImage ? "19px" : "0px"
                }}
              >
                <div style={{ display: "flex" }}>
                  <ModeCommentOutlinedIcon
                    style={{
                      fontSize: "20px",
                      opacity: "0.8"
                    }}
                  />
                  <p
                    style={{
                      marginTop: "0px",
                      marginLeft: "20%",
                      fontSize: "14px",
                      fontWeight: "500px",
                      opacity: "0.8"
                    }}
                  >
                    {tweet.comments}
                  </p>
                </div>
                <div style={{ display: "flex", marginLeft: "8%" }}>
                  <img
                    src={Retweet}
                    style={{
                      height: "20px",
                      width: "20px",
                      opacity: "0.8"
                    }}
                    alt="profile"
                    className="iconNavbar "
                  />
                  <p
                    style={{
                      marginTop: "0px",
                      marginLeft: "20%",
                      fontSize: "14px",
                      fontWeight: "500px",
                      opacity: "0.8"
                    }}
                  >
                    {tweet.retweets}
                  </p>
                </div>
                <div
                  style={
                    !isMobile
                      ? {
                          display: "flex",
                          marginLeft: "8%",
                          marginRight: "8%"
                        }
                      : {
                          display: "flex",
                          marginLeft: "8%"
                        }
                  }
                >
                  <FavoriteBorderOutlinedIcon
                    style={{
                      fontSize: "20px",
                      opacity: "0.8"
                    }}
                  />
                  <p
                    style={{
                      marginTop: "0px",
                      marginLeft: "20%",

                      fontSize: "14px",
                      fontWeight: "500px",
                      opacity: "0.8"
                    }}
                  >
                    {tweet.likes}
                  </p>
                </div>
                {isMobile ? (
                  <div style={{ display: "flex", marginLeft: "8%" }}>
                    <FileUploadOutlinedIcon
                      style={{
                        fontSize: "20px",
                        opacity: "0.8"
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "-5px", opacity: "0.1" }} />
        </div>
      ))}
    </div>
  );
}
