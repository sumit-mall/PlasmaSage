import React from "react";
import banner from "../../assets/banner.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div class="image-container">
        <img className="banner" src={banner} alt="banner" />
        <div class="text-overlay">
          <div className="about-container">
            <div className="about-content">
              <h1>About Us</h1>
              <p>
                India faces a significant shortage of blood donations. Every
                year, thousands of lives are lost due to the unavailability of
                blood. Our mission is to bridge this gap by encouraging more
                people to donate blood and save lives.
              </p>
              <h2>Medical Blood Donation Statistics (India)</h2>
              <p>
                Approximately 12 million units of blood are needed annually in
                India.
              </p>
              <p>
                Only about 1% of the eligible Indian population donates blood.
              </p>
              <p>Every two seconds, someone in India needs blood.</p>
              <h2>Our Vision</h2>
              <p>
                Our vision is to create a society where no one dies due to the
                unavailability of blood. By raising awareness, organizing blood
                donation drives, and leveraging technology, we aim to ensure
                that every patient in need receives timely and adequate blood
                transfusions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
