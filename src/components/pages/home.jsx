import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Star from "../images/star.png";
import Elon from "../images/Elon.jpg";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import AlienWorlds from "../images/AlienWorlds.jpg";
import ProfileTweet from "../images/profileTweet.jpg";
import Retweet from "../images/retweet.png";
import Avatar from "@mui/material/Avatar";
import TweetsTemplate from "./tweets";
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
export default function Home(props) {
  const drawerBleeding = 56;

  var lastTweet = Tweets.length - 1;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [toggleDrawer, settoggleDrawer] = useState(false);
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
  function IsTabQuery() {
    useEffect(() => {
      const media = window.matchMedia("(min-width: 1003px)");
      const listener = () => setIsTab(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }, [isTab]);

    return <div className="App">{isTab ? null : null}</div>;
  }
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
    <div
      style={{ width: "100%", height: "100%", display: "flex" }}
      className="outline-home"
    >
      <MediaQuery />
      <IsTabQuery />
      <IsMobileQuery />

      <div
        style={
          !isTab
            ? {
                width: "-webkit-fill-available",
                borderRight: "0px solid",
                overflowY: "scroll"
              }
            : { width: "60%", overflowY: "scroll" }
        }
        className="left-half"
      >
        {isMobile ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {!isMobile && props.MobileHeight ? (
                <SwipeableTemporaryDrawer />
              ) : null}

              <h3
                style={{
                  width: "fit-content",
                  fontWeight: "bold",
                  fontSize: "20px",
                  paddingLeft: "35%",
                  paddingTop: "16.5%"
                }}
              >
                Home
              </h3>
            </div>
            <div
              style={{ padding: "1%", margin: !isMobile ? "2%" : "1%" }}
              className="topTweets"
            >
              <img
                src={Star}
                style={{
                  height: "32px",
                  width: "30px",
                  borderRadius: "50px",
                  marginTop: "0px"
                }}
                alt="profile"
                className="iconNavbar "
                onClick={() => {
                  settoggleDrawer(true);
                }}
              />
            </div>
          </div>
        ) : (
          <ButtonAppBar />
        )}
        {isMobile && props.MobileHeight ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "0.5%"
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={Profile}
              style={{ marginLeft: "19px" }}
              sx={{ width: 50, height: 50 }}
            />
            <div
              style={{ marginLeft: "10px", marginTop: "20px", width: "100%" }}
            >
              <TextareaAutosize
                style={{ width: "100%", border: "0px", height: "100%" }}
                placeholder="What's happening?"
              />
            </div>
          </div>
        ) : null}
        {isMobile ? (
          <div
            style={{
              marginTop: "4%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <div
              style={{
                marginLeft: "14%"
              }}
            >
              <InsertPhotoOutlinedIcon
                style={{ padding: "1.5%", fontSize: "25px", color: "#0AA1DD" }}
                className="tweetmedias"
              />
              <GifBoxOutlinedIcon
                style={
                  isDesktop
                    ? {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "13px"
                      }
                    : {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "4px"
                      }
                }
                className="tweetmedias"
              />
              <PollOutlinedIcon
                style={
                  isDesktop
                    ? {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "13px"
                      }
                    : {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "4px"
                      }
                }
                className="tweetmedias"
              />
              <SentimentSatisfiedAltOutlinedIcon
                style={
                  isDesktop
                    ? {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "13px"
                      }
                    : {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "4px"
                      }
                }
                className="tweetmedias"
              />
              <CalendarMonthOutlinedIcon
                style={
                  isDesktop
                    ? {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "13px"
                      }
                    : {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "4px"
                      }
                }
                className="tweetmedias"
              />
              <LocationOnOutlinedIcon
                style={
                  isDesktop
                    ? {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "13px"
                      }
                    : {
                        padding: "1.5%",
                        fontSize: "25px",
                        color: "#0AA1DD",
                        marginLeft: "4px"
                      }
                }
                className="tweetmedias"
              />
            </div>
            <div>
              <button
                type="button"
                class="tweetbutton"
                style={{ marginRight: "40px" }}
              >
                Tweet
              </button>
            </div>
          </div>
        ) : null}
        {!isMobile ? (
          <SwipeableDrawer
            anchor="bottom"
            open={toggleDrawer}
            onClose={() => settoggleDrawer(false)}
            onOpen={() => settoggleDrawer(true)}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true
            }}
          >
            <StyledBox
              sx={{
                position: "absolute",
                top: "3px",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0
              }}
            >
              <Puller />
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                51 results
              </Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                paddingTop: "65px",
                height: "301px",
                overflow: "auto"
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </StyledBox>
          </SwipeableDrawer>
        ) : null}
        {isMobile ? <hr style={{ opacity: "0.1" }} /> : null}
        <TweetsTemplate />
      </div>
      {isTab ? (
        <div style={{ width: "40%", overflowY: "scroll" }}>
          <div style={{}}>
            <div class="form" style={{ position: "absolute" }}>
              <input
                placeholder="Search Twitter"
                required=""
                type="text"
                class="input"
              />
              <div class="fancy-bg"></div>
              <div class="search">
                <svg
                  class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{ padding: "5%", paddingLeft: "7%", paddingTop: "100px" }}
          >
            <div style={{ background: "#f6f6f6", borderRadius: "20px" }}>
              <h5
                style={{ fontWeight: "700", marginBottom: "3%", padding: "5%" }}
              >
                What’s happening
              </h5>
              <div>
                <div style={{ padding: "0%" }}>
                  {Trending.map((datatrend) => (
                    <div
                      className={!datatrend.Show ? "Trending" : "showMore"}
                      style={{ padding: "1%", paddingTop: "0px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5%",
                          paddingBottom: "0px",
                          paddingTop: "2%"
                        }}
                      >
                        <div>
                          <p style={{ fontSize: "13px", marginBottom: "2px" }}>
                            {datatrend.subTitle}
                          </p>
                          <h6 style={{ fontSize: "15px", width: "85%" }}>
                            {datatrend.title}
                          </h6>
                          <h6 style={{ color: "#00acee" }}>{datatrend.Show}</h6>
                          {datatrend.tweets ? (
                            <p
                              style={{
                                fontSize: "13px",
                                marginBottom: "2px",
                                marginTop: "-6px"
                              }}
                            >
                              {datatrend.tweets}
                            </p>
                          ) : null}
                        </div>
                        <div>
                          {datatrend.image ? (
                            <img
                              src={datatrend.image}
                              style={{
                                height: "60px",
                                width: "60px",
                                borderRadius: "20%",
                                marginBottom: "2%"
                              }}
                            />
                          ) : !datatrend.Show ? (
                            <MoreHorizOutlinedIcon
                              style={{ marginTop: "-4px", marginRight: "2%" }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "5%", paddingLeft: "7%" }}>
            <div style={{ background: "#f6f6f6", borderRadius: "20px" }}>
              <h5
                style={{ fontWeight: "700", marginBottom: "3%", padding: "5%" }}
              >
                Who to follow
              </h5>
              <div>
                <div style={{ padding: "0%" }}>
                  {Tofollow.map((datatrend) => (
                    <div
                      className={!datatrend.Show ? "Trending" : "showMore"}
                      style={{ padding: "1%", paddingTop: "0px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "5%",
                          paddingBottom: "0px",
                          paddingTop: "2%"
                        }}
                      >
                        {!datatrend.Show ? (
                          <div style={{ display: "flex" }}>
                            <div>
                              <Avatar
                                alt="Remy Sharp"
                                src={datatrend.profile}
                                style={{ marginLeft: "0px" }}
                                sx={{ width: 50, height: 50 }}
                              />
                            </div>
                            <div style={{ paddingLeft: "10%" }}>
                              <p
                                style={{
                                  fontSize: "13px",
                                  marginBottom: "2px"
                                }}
                                className="retweetName"
                              >
                                {datatrend.name}
                              </p>
                              <h6
                                style={{ fontSize: "15px", width: "85%" }}
                                className="retweetName"
                              >
                                {datatrend.username}
                              </h6>
                              <h6 style={{ color: "#00acee" }}>
                                {datatrend.Show}
                              </h6>
                              {datatrend.tweets ? (
                                <p
                                  style={{
                                    fontSize: "13px",
                                    marginBottom: "2px",
                                    marginTop: "-6px"
                                  }}
                                >
                                  {datatrend.tweets}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        ) : (
                          <h6 style={{ color: "#00acee", padding: "3%" }}>
                            {datatrend.Show}
                          </h6>
                        )}
                        {!datatrend.Show ? (
                          <div>
                            <button
                              style={{ borderRadius: "50px" }}
                              type="button"
                              class="btn btn-dark"
                            >
                              Follow
                            </button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
