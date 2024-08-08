import React from "react";
import { FaMoon } from "react-icons/fa";
import logo from "./assets/ghibliIcon.png"; // Ensure the correct path
import "./App.css"; // Import the CSS file

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="header-content">
        <h4 className="header-text">Brooke</h4>
        <div className="logo-container">
          <img src={logo} alt="Brooke Logo" className="header-logo" />
          {/* <div className="tooltip">
            Psst... have you seen the{" "}
            <a
              href="https://www.youtube.com/watch?v=Y5e9tT4Tq4k"
              target="_blank"
              rel="noopener noreferrer"
            >
              new Studio Ghibli movie?
            </a>
          </div> */}
        </div>
      </div>

      <button onClick={toggleDarkMode} className={darkMode ? "dark-mode" : ""}>
        <span className="icon moon">
          <FaMoon />
        </span>
      </button>
    </header>
  );
};

export default Header;
