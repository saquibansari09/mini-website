import React from "react";
import "./Main.css";
import header from "../images/Frame 6.png"; // Correct path to the image

const About = () => {
  return (
    <div className="container">
      <div className="left-section">
        <img src={header} alt="Header" className="header-image" />
        <div className="overlay">
          <p>The choice is yours. Because they don’t have one.</p>
          <button className="quick-view-button">Quick View</button>
        </div>
      </div>
    </div>
  );
};

export default About;
