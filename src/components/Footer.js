import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./App.css"; // Ensure this CSS file is linked

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/brooke-richards-swe/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/abrichards10" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <br />
        <div className="contact-info">
          <p>
            <a href="mailto:angelarichards261@gmail.com">
              angelarichards261@gmail.com
            </a>
          </p>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Brooke Richards. All rights
            reserved. And I mean all of them &gt;&#58;&#41;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
