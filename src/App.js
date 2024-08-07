import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import CarouselComponent from "./components/Carousel";
import "./components/App.css";
import StarsAnimation from "./components/StarsAnimation";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [backgroundColor, setBgColor] = useState("var(--light-bg)");

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Update the background color immediately based on the new mode
    if (newMode) {
      setBgColor("var(--dark-start-bg)");
    } else {
      setBgColor("var(--light-bg)");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (isDarkMode) {
        setBgColor(
          scrollPosition > 150 ? "var(--dark-bg)" : "var(--dark-start-bg)"
        );
      } else {
        setBgColor(scrollPosition > 150 ? "var(--blue)" : "var(--light-bg)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDarkMode]);

  return (
    <Router>
      <div
        className={isDarkMode ? "dark-mode" : "light-mode"}
        // style={{ height: "2000px" }}
      >
        <div className="full-container" style={{ backgroundColor }}>
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <StarsAnimation />
            <CarouselComponent />
            <Gallery />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
