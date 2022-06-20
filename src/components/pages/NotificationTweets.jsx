import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import noti0 from "../images/noti1.jpg";
import noti1 from "../images/noti2.jpg";
import noti2 from "../images/noti3.jpg";
import noti3 from "../images/noti4.jpg";
import noti4 from "../images/noti5.jpg";
import Star from "../images/star.png";
import Elon from "../images/Elon.jpg";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import AlienWorlds from "../images/AlienWorlds.jpg";
import ProfileTweet from "../images/profileTweet.jpg";
import NotificationStar from "../images/start.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Retweet from "../images/retweet.png";
import LabTabs from "./tabs";
import Avatar from "@mui/material/Avatar";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
import Foryou from "../images/foryou.jpeg";
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

export default function TweetsForyouTemplate(props) {
  var datas = props.datas.tweets;
  const Banner = props.datas.headlines.img.Foryou;
  const subTitle = props.datas.headlines.subTitle;
  const Title = props.datas.headlines.Title;
  var lastTweet = Tweets.length - 1;
  var ls = datas.length - 1;
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
      {datas.map((tweet, index) => (
        <div
          style={
            isMobile
              ? {
                  paddingTop: index === 0 ? "6%" : "2%",
                  marginTop: index === 0 ? "-16px" : "-17px"
                }
              : {
                  paddingTop: index !== 0 ? "5px" : Banner ? "2%" : "7%",
                  marginTop: index === 0 ? "-10px" : "-17px"
                }
          }
          className="tweet"
        >
          <div
            style={{
              marginLeft: "18px",
              marginTop: index === 0 ?"-16px":"-1px",
              display: "flex",
              marginBottom: index === lastTweet && !isMobile ? "20px" : "-20px"
            }}
          >
            <div
              style={index === ls ?{
                padding: "5px",
                marginLeft: "10px",
                width: "100%",
                marginTop: "-6px",
                marginBottom: !isMobile && tweet.disImage ? "-10%" : "30px"
              }: {
                padding: "5px",
                marginLeft: "10px",
                width: "100%",
                marginTop: "-6px",
                marginBottom: !isMobile && tweet.disImage ? "-10%" : "11px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "23px",
                  justifyContent: "space-between"
                }}
              >
              <div style={{display: "flex"}}>
              <Avatar
              alt="Remy Sharp"
              src={NotificationStar}
              style={{ marginLeft: "-25px", color: "violet" }}
              sx={{ width: 35, height: 35 }}
            />
           
            
                <Avatar
              alt="Remy Sharp"
              src={index === 0 ? tweet.image.noti0 : index === 1 ? tweet.image.noti1: index === 2 ? tweet.image.noti2 : index === 3 ? tweet.image.noti3: tweet.image.noti4}
              style={{ marginLeft: "19px" }}
              sx={{ width: 35, height: 35 }}
            />
            </div>
                <MoreHorizOutlinedIcon style={{ marginTop: "3px", marginRight: "5px" }} />
                
              </div>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "20px",
                  marginLeft: "30px", 
                  width: isMobile && tweet.img?  "90%": "60%",
                  fontWeight: "600",
                  paddingBottom: !tweet.nooftweets && !tweet.img ? "20px": "0px"
                }}
              >
                {tweet.title}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  marginLeft: "30px",
                  marginTop: "-15px",
                  opacity: "0.7",
                 
                }}
              >
                {tweet.nooftweets}
              </p>
            </div>
          </div>

          <hr style={tweet.nooftweets?{ marginTop: tweet.img? "10px" : "0px", opacity:  Banner ? "0": "0" }:{ marginTop: tweet.title.length < 10 ? tweet.img? "25px" : "0px" : tweet.img? "50px" : "0px" , opacity: "0" }} />
        </div>
      ))}
    </div>
  );
}
