import React from "react";
import { Outlet } from "react-router-dom";
import CloudsAnimation from "./CloudsAnimation";
import StarsAnimation from "./StarsAnimation";

const Layout = ({ isDarkMode, backgroundColor, showClouds }) => {
  return (
    <div
      className={isDarkMode ? "dark-mode" : "light-mode"}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {showClouds && !isDarkMode && <CloudsAnimation />}
      {isDarkMode && <StarsAnimation />}
      <div className="full-container" style={{ backgroundColor }}>
        <div className="container">
          <Outlet /> {/* Render the current route's component here */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
