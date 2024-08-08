import React from "react";
import { FaMoon } from "react-icons/fa";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h4 class="BrookeHeader">Brooke 🪴</h4>

      <button onClick={toggleDarkMode} className={darkMode ? "dark-mode" : ""}>
        <span className="icon moon">
          <FaMoon />
        </span>
      </button>
    </header>
  );
};

export default Header;
