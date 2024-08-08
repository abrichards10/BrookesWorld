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
    const starsContainer = document.querySelector(".stars-container");
    starsContainer.innerHTML = ""; // Clear existing stars
    const numStars = 100; // Adjust the number of stars as needed
    const twinkleChance = 0.3; // Chance that a star will twinkle
    const numShootingStars = 5; // Number of shooting stars

    // Function to generate random stars
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

      // Randomly decide if this star should twinkle
      if (Math.random() < twinkleChance) {
        star.classList.add("twinkle");
      }

      starsContainer.appendChild(star);
    }

    // Function to generate shooting stars
    for (let i = 0; i < numShootingStars; i++) {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      // Set random size and position
      const size = Math.random() * 2 + 1; // Size between 1 and 3
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 7 + 2; // Duration between 2 and 5 seconds
      const direction = Math.random() > 0.5 ? "left" : "right"; // Random direction

      shootingStar.style.width = `${size}px`;
      shootingStar.style.height = `${size}px`;
      shootingStar.style.top = `${top}%`;
      shootingStar.style.left = `${left}%`;
      shootingStar.style.animation = `shoot ${duration}s linear infinite`;

      if (direction === "left") {
        shootingStar.style.animationDirection = "reverse";
      }

      starsContainer.appendChild(shootingStar);
    }
  }, [showStars]);

  return (
    <div className={`stars-container ${showStars ? "show-stars" : ""}`}></div>
  );
};

export default StarsAnimation;
