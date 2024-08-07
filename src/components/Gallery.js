import React from "react";
import "./App.css"; // Import the CSS for styling

const projects = [
  { image: "https://via.placeholder.com/300x200", caption: "Project 1" },
  { image: "https://via.placeholder.com/300x200", caption: "Project 2" },
  { image: "https://via.placeholder.com/300x200", caption: "Project 3" },
  { image: "https://via.placeholder.com/300x200", caption: "Project 4" },
  // Add more projects as needed
];

const Gallery = () => {
  return (
    <div className="gallery">
      {projects.map((project, index) => (
        <div key={index} className="gallery-item">
          <img
            src={project.image}
            alt={project.caption}
            className="gallery-image"
          />
          <p className="gallery-caption">{project.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
