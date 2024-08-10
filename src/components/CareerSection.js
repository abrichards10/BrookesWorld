import React from "react";
import "./App.css"; // Import the CSS file for styling

const CareerSection = () => {
  return (
    <section className="career-section">
      <div className="career-content">
        <h2>What I'm Looking For in a Career</h2>
        <ul>
          <li>
            Roles that surround me with driven, committed, sorta crazy
            individuals so I can leverage my technical skills to take over the
            world while making friends at the same time.
          </li>
          <li>
            Opportunities to lead and own projects, mentor team members, and
            learn from people smarter than me.
          </li>
          <li>
            Positions where I can work on challenging problems and contribute to
            products that will help people and companies succeed.
          </li>
          <li>
            Room for professional growth, personal growth, and access to coffee.
          </li>
        </ul>
        <br />
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
        <br />

        <h2>Bonus Points</h2>
        <ul>
          <li>
            🎉 Passion for making code as clean and elegant as a Pollock
            Painting (aka intense rounds of super messy code that eventually
            comes together)
          </li>
          <li>💪 Sheer, raw commitment and ownership of their work</li>
          <li>
            🚀 Enthusiasm for experimenting and talking to users, and then
            experimenting with the user data.
          </li>
          <li>🚌 Being in-person dear lord please get me out of this house.</li>
        </ul>
      </div>
    </section>
  );
};

export default CareerSection;
