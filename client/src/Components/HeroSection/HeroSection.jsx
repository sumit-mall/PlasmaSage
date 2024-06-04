import React from "react";
import "./HeroSection.css";
import hero from "../../assets/hero-light.png";

const HeroSection = () => {
  return (
    <>
      <section class="hero">
        <div class="hero-container">
          <h1>Donate Blood, Save Lives 🩸</h1>
          <p>
            Every <span className = "red">two</span> seconds, someone in India needs blood. You can make a
            difference.
          </p>
          <p>
            Join us in our mission to provide <span className = "red">life-saving</span> blood to those in
            need.
          </p>
          <p>Find out how you can help today!</p>
        </div>
        <div class="hero-image">
          <img src={hero} alt="Blood Donation" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
