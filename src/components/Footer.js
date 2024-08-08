// src/components/Footer.js

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="footer-content">
        {/* Contact Information */}
        <div className="contact-info">
          <p>Contact Me:</p>
          <a href="mailto:angelarichards261@gmail.com">
            angelarichards261@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/brooke-richards-swe/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-github-username" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <a href="/about">About Me</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Copyright Information */}
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Brooke Richards. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
