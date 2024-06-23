import React from "react";
import image from "../images/Frame.png";

const About = () => {
  return (
    <div className="container">
      <img src={image} alt="frame.png" />
      <h1>About</h1>
      <img src={image} alt="frame.png" />

      <p>
        Our products are crafted exclusively from the dreams and screams of
        young kids who wanted to show their mastery in their chosen fields, but
        were directed towards a factory for daily wages. Each cracker bursts
        brighter than their lost smiles, and can be heard louder than their
        cries for miles. Buy them, burst them, brag about them. The choice is
        yours. Because they don’t have one.
      </p>
    </div>
  );
};

export default About;
