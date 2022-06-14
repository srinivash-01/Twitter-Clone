import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Profile from "./images/profile.jpg";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Switch from "@mui/material/Switch";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import InstallDesktopOutlinedIcon from "@mui/icons-material/InstallDesktopOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./styles/drawer.css";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          paddingLeft: "5%",
          paddingTop: "5%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h6 style={{ margin: "2%", fontSize: "17px" }}>Account Info</h6>
        <CloseIcon style={{ marginRight: "3%" }} />
      </div>
      <div
        style={{
          marginTop: "-46px",
          marginLeft: "-79px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Avatar
          onClick={toggleDrawer(anchor, true)}
          alt="Remy Sharp"
          src={Profile}
          style={{ marginLeft: "30%", marginTop: "20%" }}
          sx={{ width: 45, height: 45 }}
        />
        <div
          style={{
            marginTop: "73px",
            marginRight: "19px",
            padding: "1%",
            borderRadius: "50px",
            height: "fit-content",
            border: "1px solid rgb(215 215 215)"
          }}
        >
          <AddIcon />
        </div>
      </div>
      <div style={{ marginTop: "5%", marginLeft: "20px" }}>
        <p style={{ fontWeight: "600", fontSize: "15px" }}>Srinivash</p>
        <p style={{ fontWeight: "300", fontSize: "15px", marginTop: "-17px" }}>
          @srini224
        </p>
      </div>
      <div style={{ display: "flex", marginTop: "-10px" }}>
        <div style={{ marginTop: "5%", marginLeft: "20px", display: "flex" }}>
          <p style={{ fontWeight: "600", fontSize: "12px" }}>627</p>
          <p
            style={{
              fontWeight: "300",
              fontSize: "12px",
              marginTop: "0px",
              marginLeft: "3%"
            }}
          >
            Following
          </p>
        </div>
        <div style={{ marginTop: "5%", marginLeft: "20px", display: "flex" }}>
          <p style={{ fontWeight: "600", fontSize: "12px" }}>14</p>
          <p
            style={{
              fontWeight: "300",
              fontSize: "12px",
              marginTop: "0px",
              marginLeft: "3%"
            }}
          >
            Followers
          </p>
        </div>
      </div>
      <List>
        {[
          "Profile",
          "Lists",
          "Topics",
          "Bookmarks",
          "Movements",
          "NewsLetters"
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === "Profile" ? <PermIdentityOutlinedIcon /> : null}
              {text === "Lists" ? <ListAltOutlinedIcon /> : null}
              {text === "Topics" ? <ChatBubbleOutlineOutlinedIcon /> : null}
              {text === "Bookmarks" ? <BookmarkBorderOutlinedIcon /> : null}
              {text === "Movements" ? <BoltOutlinedIcon /> : null}
              {text === "NewsLetters" ? <StickyNote2OutlinedIcon /> : null}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Twitter for Professionals", "Twitter Ads", "Analytics"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {text === "Twitter for Professionals" ? (
                  <RocketLaunchOutlinedIcon />
                ) : null}
                {text === "Twitter Ads" ? <PresentToAllIcon /> : null}
                {text === "Analytics" ? <EqualizerOutlinedIcon /> : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Settings and Privacy", "Help Center"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === "Settings and Privacy" ? (
                <SettingsOutlinedIcon />
              ) : null}
              {text === "Help Center" ? <HelpOutlineOutlinedIcon /> : null}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <div style={{ display: "flex" }}>
          <ListItem button>
            <ListItemIcon>
              <InstallDesktopOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Data Saver"} />
          </ListItem>
          <Switch {...label} />
        </div>
        <ListItem button key={"Display"}>
          <ListItemIcon>
            <InstallDesktopOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Display"} />
        </ListItem>
        <ListItem button key={"Display"}>
          <ListItemIcon>
            <AccessibilityNewOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={"Keyboard Shortcuts"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={"Display"}>
          <ListItemText
            primaryTypographyProps={{ fontSize: "16px", fontWeight: "600" }}
            primary={"Logout"}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            alt="Remy Sharp"
            src={Profile}
            style={{ marginLeft: "0%", marginTop: "0%" }}
            sx={{ width: 45, height: 45 }}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
