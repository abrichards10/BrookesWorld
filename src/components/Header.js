// Header.js
import React from "react";
import { FaMoon, FaRegCommentAlt } from "react-icons/fa";
import logo from "./assets/ghibliIcon.png"; // Ensure the correct path
import "./App.css"; // Import the CSS file
import { Link } from "react-router-dom"; // Add this import

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="header-content">
        <h4 className="header-text">Brooke</h4>
        <div className="logo-container">
          <img src={logo} alt="Brooke Logo" className="header-logo" />
          <a
            href="https://www.youtube.com/watch?v=t5khm-VjEu4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bubble-link"
          >
            <div className="text-bubble">
              Psst... Have you seen the new Studio Ghibli movie?
            </div>
          </a>
        </div>
      </div>

      <div className="icon-container">
        <button
          onClick={toggleDarkMode}
          className={darkMode ? "dark-mode" : ""}
        >
          <span className="moon">
            <FaMoon />
          </span>
        </button>
        <Link
          to="/feedback"
          className="feedback-icon"
          title="Find a bug? Leave feedback!"
        >
          <FaRegCommentAlt />
        </Link>
      </div>
    </header>
  );
};

export default Header;
