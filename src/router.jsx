import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/Navbar";
import Home from "./components/pages/home";
import Explore from "./components/pages/explore";
import BottomNavbar from "./components/BottomNavbar";

function Rout() {
  const [MobileHeight, setMobileHeight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  function Mobile() {
    useEffect(() => {
      const media = window.matchMedia("(min-height: 484px)");
      const listener = () => setMobileHeight(media.matches);
      listener();
      window.addEventListener("resize", listener);

      return () => window.removeEventListener("resize", listener);
    }, [MobileHeight]);

    return <div className="App">{MobileHeight ? null : null}</div>;
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
    <div style={{ display: "flex" }}>
      <Mobile />
      <IsMobileQuery />
      <BrowserRouter>
        {MobileHeight ? <SideNavBar /> : null}
        <Routes>
          <Route path="/" element={<Home MobileHeight={MobileHeight} />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        {!isMobile ? <BottomNavbar /> : null}
      </BrowserRouter>
    </div>
  );
}

export default Rout;
