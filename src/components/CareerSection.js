import React from "react";
import "./App.css"; // Import the CSS file for styling

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-content">
        <h2>What I'm Looking For in a Career</h2>
        <ul>
          <li>
            Roles that leverage my technical skills while fostering a
            collaborative environment.
          </li>
          <li>Opportunities to lead projects and mentor team members.</li>
          <li>
            Positions where I can work on challenging problems and contribute to
            meaningful projects.
          </li>
          <li>Professional growth and continuous learning opportunities.</li>
        </ul>

        <h2>What I Can Offer</h2>
        <ul>
          <li>
            Expertise in front-end development with a strong background in
            Flutter, JavaScript, and mobile app development.
          </li>
          <li>
            Proven track record of leading engineering teams, mentoring team
            members, and managing project workflows.
          </li>
          <li>
            Experience in hosting engaging hackathons, reviewing code, and
            overseeing deployment processes.
          </li>
          <li>
            Skills in algorithmic support, bug resolution, and deployment of
            high-quality software.
          </li>
        </ul>

        <h2>Bonus Points</h2>
        <ul>
          <li>
            🎉 Passion for making code as clean and elegant as a piece of art.
            (After intense rounds of super messy code of course)
          </li>
          <li>💪 Sheer, raw commitment and ownership of their work</li>
          <li>
            🚀 Enthusiasm for experimenting and talking to users, and then
            experimenting with the users.
          </li>
          <li>🚌 Being in-person dear lord please get me out of this house.</li>
        </ul>
      </div>
    </section>
  );
};

export default CareerSection;
