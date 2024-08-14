import React from "react";
import "./App.css"; // Import the CSS for styling

// Import your asset images
import projectImage1 from "./assets/SideProject1.jpg";
import projectImage2 from "./assets/SideProject2.jpg";
import projectImage3 from "./assets/SideProject3.png";
import projectImage4 from "./assets/SideProject4.jpg";
import projectImage5 from "./assets/SideProject5.png";
import projectImage6 from "./assets/SideProject6.jpg";

const projects = [
  {
    image: projectImage5,
    caption: "Project 5",
    summary:
      "Meeting with a group of talented women to break them back into the tech field after a gap year – creating and teaching a rigorous curriculum to teach full stack Python web development",
  },
  {
    image: projectImage1,
    caption: "Project 1",
    summary:
      "Renovating my childhood home to create a space for an AirBnB (featuring my dad ❤️) I drive 3 hours every 3 weeks to work on another part of the project.",
  },
  {
    image: projectImage2,
    caption: "Project 2",
    summary:
      "Since December 2022, I have been consistently climbing 2-3x per week with my partner to help relieve the pain caused by my severe scoliosis.",
  },
  {
    image: projectImage3,
    caption: "Project 3",
    summary: "My quest to learn Spanish, Italian and Latin 🇪🇸 🇮🇹 ",
  },
  {
    image: projectImage4,
    caption: "Project 4",
    summary:
      "Currently a part of the BEST Trial for Chronic Back Pain - currently working on the second round of treatment! ",
  },
  {
    image: projectImage6,
    caption: "Project 4",
    summary: (
      <>
        I like to write things, this one is my longest:{" "}
        <a
          className="inner-link"
          href="https://medium.com/@angelarichards261/pain-b9052e391458"
          target="_blank"
          rel="noopener noreferrer"
        >
          "Pain" (But it's hopeful I promise)
        </a>
      </>
    ),
  },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h3 className="titles">Side Projects</h3>
      <h6 className="sub-side-title">
        Ooh boy well… I tend to be one of those people who gets really bored
        with no work to do.{" "}
      </h6>
      <div className="gallery">
        {projects.map((project, index) => (
          <div key={index} className="gallery-item">
            <img
              src={project.image}
              alt={project.caption}
              className="gallery-image"
            />
            <div className="gallery-summary">
              <p>{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
