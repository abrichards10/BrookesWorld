import React, { useEffect, useState } from "react";
import "./GrassAnimation.css"; // Import the CSS file

const GrassAnimation = ({ isDarkMode }) => {
  const [showGrass, setShowGrass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show grass when user scrolls close to the bottom of the page
      if (scrollY + windowHeight > documentHeight - 100) {
        // Adjust threshold as needed
        setShowGrass(true);
      } else {
        setShowGrass(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`grass-container ${
        showGrass && !isDarkMode ? "show-grass" : ""
      }`}
    >
      {/* Create multiple grass blades */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className="grass"></div>
      ))}
    </div>
  );
};

export default GrassAnimation;
