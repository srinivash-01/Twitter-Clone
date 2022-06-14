import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Star from "./images/star.png";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SwipeableTemporaryDrawer from "./MobileDrawer";

import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

export default function ButtonAppBar() {
  const [toggleDrawer, settoggleDrawer] = useState(false);
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
  return (
    <Box style={{ position: "absolute", width: "99.8%", zIndex: "1000" }}>
      <AppBar
        position="static"
        style={{ background: "#fff", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent"
              }
            }}
            style={{ marginRight: "8px" }}
          >
            <SwipeableTemporaryDrawer />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#000", fontSize: "20px" }}
          >
            Home
          </Typography>
          <div style={{ padding: "1%" }} className="topTweets">
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
        </Toolbar>
      </AppBar>
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
    </Box>
  );
}
