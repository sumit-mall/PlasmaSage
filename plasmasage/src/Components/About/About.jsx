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
              <ul>
                <li>
                  Approximately 12 million units of blood are needed annually in
                  India.
                </li>
                <li>
                  Only about 1% of the eligible Indian population donates blood.
                </li>
                <li>Every two seconds, someone in India needs blood.</li>
              </ul>
              <h2>Our Vision</h2>
              <p>
                Our vision is to create a society where no one dies due to the
                unavailability of blood. By raising awareness, organizing blood
                donation drives, and leveraging technology, we aim to ensure
                that every patient in need receives timely and adequate blood
                transfusions.
              </p>
              <div className="social-links">
                <a href="https://facebook.com">
                  <img src="facebook_icon.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com">
                  <img src="twitter_icon.png" alt="Twitter" />
                </a>
                <a href="https://instagram.com">
                  <img src="https://icons8.com/icon/uLWV5A9vXIPu/facebook" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
