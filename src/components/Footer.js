import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaCalendarAlt } from "react-icons/fa";
import "./App.css"; // Ensure this CSS file is linked

const Footer = ({ darkMode }) => {
  const [setTooltipVisible] = useState(false);

  return (
    <footer className={`footer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="footer-content">
        <div className="footer-main-content">
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
            <div
              className="dateCreated"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
            >
              <FaCalendarAlt size={20} style={{ marginRight: "8px" }} />
              <b>Date created: 08/07/24</b>
              {/* {isTooltipVisible && <CalendarTooltip date={highlightDate} />} */}
            </div>
          </div>
          <div className="contact-info">
            <p>
              <a className="links" href="mailto:angelarichards261@gmail.com">
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
        <div className="footer-websites">
          <b>Cool Websites:</b>
          <ul>
            <li>
              <a
                href="http://typelit.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links">
                  <u>Typelit</u> —&gt; Practice typing out whole books
                </div>
              </a>
            </li>
            <li>
              <a href="websim.ai" target="_blank" rel="noopener noreferrer">
                <div className="links">
                  <u>Websim.ai</u> —&gt; Can create cool website templates from
                  an AI generated prompt 👀
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://excalidraw.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="links">
                  <u>Excalidraw</u> —&gt; Draw stuff
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
