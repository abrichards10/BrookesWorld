// components/ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure you have the CSS file

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 300); // Show button after 300px scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={handleClick}>
        <span className="scroll-to-top-icon">↑</span>
      </button>
    )
  );
};

export default ScrollToTopButton;
