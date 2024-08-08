import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import CarouselComponent from "./components/Carousel";
import "./components/App.css";
import StarsAnimation from "./components/StarsAnimation";
import CloudsAnimation from "./components/CloudsAnimation";
import CareerSection from "./components/CareerSection";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBgColor] = useState("var(--light-bg)");
  const [showClouds, setShowClouds] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setShowClouds(false); // Reset clouds on dark mode change
    if (newMode) {
      setBgColor("var(--dark-start-bg)");
    } else {
      setBgColor("var(--light-bg)");
    }
  };

  useEffect(() => {
    const interpolateColor = (color1, color2, percent) => {
      const rgb1 = hexToRgb(color1);
      const rgb2 = hexToRgb(color2);
      const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * percent);
      const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * percent);
      const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * percent);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const hexToRgb = (hex) => {
      let r = 0,
        g = 0,
        b = 0;
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return { r, g, b };
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollMax =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollPosition / scrollMax, 1); // Get percentage scrolled

      if (isDarkMode) {
        // Interpolate between dark-start-bg and dark-bg
        const darkStartColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--dark-start-bg");
        const darkEndColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--dark-bg");
        const interpolatedColor = interpolateColor(
          darkStartColor,
          darkEndColor,
          scrollPercent
        );
        setBgColor(interpolatedColor);
      } else {
        // Interpolate between light-bg and blue
        const lightStartColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--light-bg");
        const lightEndColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--blue");
        const interpolatedColor = interpolateColor(
          lightStartColor,
          lightEndColor,
          scrollPercent
        );
        setBgColor(interpolatedColor);
        setShowClouds(scrollPercent > 0.5); // Show clouds on scroll down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  return (
    <div
      className={isDarkMode ? "dark-mode" : "light-mode"}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {showClouds && !isDarkMode && <CloudsAnimation />}
      {isDarkMode && <StarsAnimation />}
      <div className="full-container" style={{ backgroundColor }}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="container">
          <Home />
          <CareerSection />
          <CarouselComponent />
          <Gallery />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
