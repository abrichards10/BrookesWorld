// src/components/Footer.js

import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <p>Contact Info: angelarichards261@gmail.com</p>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/brooke-richards-swe/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {/* Add other socials */}
      </div>
    </footer>
  );
};

export default Footer;
