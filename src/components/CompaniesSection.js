import React from "react";
import "./App.css";
import dishlogo from "./assets/DishcoveryLogo.png";
import missionlogo from "./assets/MissionBitLogo.png";
import seologo from "./assets/seo-logo.png";

const companies = [
  {
    name: "Dishcovery",
    logo: dishlogo,
    website: "https://www.dishcovery.io",
    testimonial:
      "As a lead front-end engineer at Dishcovery, I mentored the team and drove product development. My contributions were highly valued, particularly in leading hackathons and optimizing code deployment.",
  },
  {
    name: "Mission Bit",
    logo: missionlogo,
    website: "https://www.missionbit.org",
    testimonial:
      "At Mission Bit, I led HTML/CSS/UI/UX classes for high school students, inspiring them with engaging projects and guiding them through their coding journey.",
  },
  {
    name: "SEO (Sponsors for Educational Opportunity)",
    logo: seologo,
    website: "https://www.seo-usa.org",
    testimonial:
      "At SEO, I served as a Software Engineering Teaching Assistant and Career Mentor, providing guidance on Python, SQL, and career development. I facilitated workshops and office hours, supporting students in their journey to become successful developers.",
  },
];

const CompaniesSection = () => {
  return (
    <section className="companies-section">
      <h2>Companies I've Committed To</h2>
      <div className="companies-list">
        {companies.map((company, index) => (
          <div key={index} className="company">
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            </a>
            <p className="testimonial">{company.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompaniesSection;
