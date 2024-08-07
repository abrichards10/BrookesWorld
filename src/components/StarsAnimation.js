import React, { useEffect, useState } from "react";
import "./App.css"; // Import the CSS file

const StarsAnimation = () => {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show stars when user scrolls close to the bottom of the page
      if (scrollY + windowHeight > documentHeight - 100) {
        // Adjust threshold as needed
        setShowStars(true);
      } else {
        setShowStars(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Generate random stars
    const starsContainer = document.querySelector(".stars-container");
    const numStars = 100; // Adjust the number of stars as needed

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      // Set random size and position
      const size = Math.random() * 3 + 1; // Size between 1 and 4
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className={`stars-container ${showStars ? "show-stars" : ""}`}></div>
  );
};

export default StarsAnimation;
